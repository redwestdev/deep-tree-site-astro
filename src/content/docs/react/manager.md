---
title: Manager
description: A composite independent entity — an extracted provider with context and logic.
---

A manager is a composite independent entity: an extracted provider with context and logic,
focused on one specific task.

In essence, it is a lighter alternative to a global state manager: it does not require dependencies,
does not store everything in one place, and is syntactically free.

## Manager Rules

- Always a composite entity with a PascalCase name and the `{NAME}Mng` suffix (example: ReportMng).
- A root `index.ts` is required; export outward only through it.
- A controller file `useController.ts` is required — passed logic is stored in it.
- A view file `${DIR_NAME}.tsx` is required (DIR_NAME = the manager folder name).
- Lives only in the `managers` layer.
- Often uses no props except `children`.

## Manager File Structure

```
src/
  managers/
    ReportMng/
      index.ts          # single export point
      ReportMng.tsx     # wrapper component / provider
      useController.ts  # hook with business logic and state inside
```

`useController.ts` — all business logic and manager state:

```ts
// ReportMng/useController.ts
import { useState } from 'react';

export function useController() {
  const [items, setItems] = useState<TReportItem[]>([]);

  function addItem(item: TReportItem) {
    setItems(prev => [...prev, item]);
  }

  return { items, addItem };
}
```

`ReportMng.tsx` — provider, passes the controller result into context:

```tsx
// ReportMng/ReportMng.tsx
import { createContext, useContext, ReactNode } from 'react';
import { useController } from './useController';

type TReportMng = ReturnType<typeof useController>;

const ReportContext = createContext<TReportMng | null>(null);

export function useReportMng() {
  const ctx = useContext(ReportContext);
  if (!ctx) throw new Error('useReportMng: no provider');
  return ctx;
}

export function ReportMng({ children }: { children: ReactNode }) {
  const controller = useController();
  return (
    <ReportContext.Provider value={controller}>
      {children}
    </ReportContext.Provider>
  );
}
```

## When to Use a Manager

A manager is always a composite entity. If the logic is too simple, it is a hook or `context.ts`, not a manager.

| Situation | Solution |
|-----------|----------|
| State is needed only in one component | Local `useState` / `useReducer` |
| Need to pass data without drilling, logic is simple | `context.ts` + hook at the parent |
| There is business logic, several call sources | Manager |
| UI is needed above the tree (toasts, modals, overlays) | Manager with `renderOwn` |
| Need time-travel, advanced devtools | Redux / Zustand |

Regular `context` solves only the props-drilling problem — it has no structure, rules, or dedicated place in the project. A manager is a composite entity with its own layers and conventions.

A global state manager (Redux/Zustand) makes data available everywhere by default. A manager is physically unavailable where its provider does not exist — this is not an agreement, it is a limitation of React itself.

`AuthPage` cannot accidentally take `useCartMng` — the provider simply is not there.

**Example:** `useTheme` with a simple toggle + persistence is enough as a hook or `context.ts` in `App`.
If synchronization with the system theme, transition animations, and several themes appear, `ThemeMng` is justified.

> One manager variant is always a composite entity. There is no need to think "which type to choose".

## Recommended Stack

A manager works well together with **react-query**:

- **react-query** — server state: loading, cache, synchronization, optimistic updates.
- **Manager** — local UI state: theme, player, modals, cart.

In most cases, this combination is enough. Redux/Zustand remains relevant where advanced devtools and time-travel debugging are needed — but this is a rare scenario, not the default one.

## Components Inside a Manager

A manager, by its nature, is a center of gravity for logic. Over time, hooks, utilities, API clients, and even components may appear inside it. This is not an architecture violation, but it requires a deliberate approach.

**Key question: who calls and who renders.**

If a component is rendered **by the provider itself**, it belongs to the manager:

```tsx
export function ReportMng({ children }: { children: ReactNode }) {
  const controller = useController();
  return (
    <ReportContext.Provider value={controller}>
      {children}
      {controller.isOpen && <ReportModal />}  {/* the manager owns its UI */}
    </ReportContext.Provider>
  );
}
```

This is a standard pattern for toast managers, overlays, and global modals — the UI must be above the consumer tree.

If, however, a component is used **by consumers** of the manager, this is a signal to move it to `components`.

---

**How to make the decision:**

| Situation | Solution |
|-----------|----------|
| UI is rendered by the provider, one call site | Local context or state — manager is excessive |
| UI is rendered by the provider, several call sites | Component inside the manager — the provider renders it itself |
| Component is needed by external consumers | Move it to the `components` layer |

> **Practical example:** a button in the header calls a manager method → a modal appears. If this is the only call site, local context is simpler and cleaner. If there are two or more such places, a manager with `<ReportModal />` inside the provider becomes the correct choice.
