---
title: createSafeContext
description: A utility that creates a context and a safe access hook in one line.
---

Creates a context and a safe access hook for it in one line.

```ts
// utils/createSafeContext.ts
import { createContext, useContext } from 'react';

export function createSafeContext<T>(displayName: string) {
  const Context = createContext<T | null>(null);
  Context.displayName = displayName;

  function useCtx(): T {
    const value = useContext(Context);
    if (!value) throw new Error(`${displayName}: no provider`);
    return value;
  }

  return [Context, useCtx] as const;
}
```

Without the utility:

```ts
// HomePage/context.ts
export const HomeContext = createContext<THomeContext | null>(null);

export function useHomeContext() {
  const ctx = useContext(HomeContext);
  if (!ctx) throw new Error('useHomeContext: no provider');
  return ctx;
}
```

With the utility:

```ts
// HomePage/context.ts
export const [HomeContext, useHomeContext] = createSafeContext<THomeContext>('HomeContext');
```
