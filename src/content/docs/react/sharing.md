---
title: Sharing
description: Entity sharing — how child entities access parent layers.
---

A child entity may use the layers and file layers of all its ancestors up to the `src` root.
The deeper an entity is, the more available dependencies it has from above.
An entity exists only in the tree branch where it is actually used and does not spread to neighboring branches of the parent.

## Why Is Sharing Needed?

Sharing is a constant living process in a project, not a one-time decision. It solves the problem of code weight: the higher an entity is in the tree, the more dependencies and responsibility it has; the lower it is, the more local it is. A task appeared, you saw that a component started repeating in different places — you moved it higher to the nearest common ancestor. This is sharing.

## Access Rule

You may import only **up along your own branch** — from parent layers, file layers, and single entities.
Importing from a **neighboring branch** is not allowed.

Ancestor **view** files (`.tsx`) are not an import source for children.
If you need to pass something down the tree, move it into a separate single entity or file layer next to the view:

| What we share | How to define it |
|---------------|------------------|
| Context | `context.ts` — a single entity next to `.tsx` |
| Common styles | `styles.module.scss` — a file layer next to `.tsx` |

```
HomePage/
  index.ts
  HomePage.tsx              # view — children do not import it directly
  HomePage.module.scss      # styles of HomePage itself
  context.ts                # single entity — available to all children
  styles.module.scss        # file layer — common styles for children
  sections/
    HeroSct/
      HeroSct.tsx           # ← may import context.ts and styles.module.scss
```

`context.ts` defines context and an access hook for it:

```ts
// HomePage/context.ts
import { createContext, useContext } from 'react';

type THomeContext = {
  title: string;
  features: TFeature[];
};

export const HomeContext = createContext<THomeContext | null>(null);

export function useHomeContext() {
  const ctx = useContext(HomeContext);
  if (!ctx) throw new Error('useHomeContext: no provider');
  return ctx;
}
```

## Example

```
src/
  components/              ← available to everyone
    Button/
  pages/
    HomePage/
      components/          ← available to HomePage and all its children
        CallToAction/
      sections/
        HeroSct/           ← sees: src/components, HomePage/components
          components/      ← available only inside HeroSct
            Highlight/     ← sees: src/components, HomePage/components, HeroSct/components
        FeaturesSct/       ← sees: src/components, HomePage/components
                           ← DOES NOT see: HeroSct/components (neighboring branch)
```

## When to Move an Entity Higher

If an entity is needed in two or more branches, move it to the nearest common ancestor layer.

Example: `HeroSct` and `FeaturesSct` both use `FeatureCard` → move it to `HomePage/components`.
