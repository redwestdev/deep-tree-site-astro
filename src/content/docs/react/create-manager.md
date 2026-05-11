---
title: createManager
description: A utility that creates a manager provider and access hook — all boilerplate disappears.
---

Creates a manager provider and an access hook for it — all manager template code disappears.

Accepts an optional `renderOwn` — for cases when the provider must render its own UI (modals, toasts, overlays).

```tsx
// utils/createManager.tsx
import { ReactNode } from 'react';
import { createSafeContext } from './createSafeContext';

export function createManager<T>(
  useController: () => T,
  renderOwn?: (value: T) => ReactNode,
  displayName?: string
) {
  const [Context, useCtx] = createSafeContext<T>(displayName ?? 'Manager');

  function Provider({ children }: { children: ReactNode }) {
    const value = useController();
    return (
      <Context.Provider value={value}>
        {children}
        {renderOwn?.(value)}
      </Context.Provider>
    );
  }

  return [Provider, useCtx] as const;
}
```

Without the utility:

```tsx
// ReportMng/ReportMng.tsx
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

With the utility — simple manager:

```tsx
// ReportMng/ReportMng.tsx
export const [ReportMng, useReportMng] = createManager(
  useController,
  undefined,
  'ReportMng'
);
```

With the utility — manager with its own UI:

```tsx
// ReportMng/ReportMng.tsx
export const [ReportMng, useReportMng] = createManager(
  useController,
  (ctrl) => ctrl.isOpen && <ReportModal />,
  'ReportMng'
);
```
