---
title: Components
description: Components — reusable React entities used across sections and pages.
---

Components are reusable React components (composite entities) that can be used in different sections and pages.

## Why Are Components Needed?

Components are what repeats. A button, card, avatar — the same thing in different places. Unlike a section, a component is not tied to a specific parent: its task is precisely repetition and reuse.

> Components are stored in the **components** layer.
> To split the logic of a **component**, sections may be used.

## Component Rules

- Always a composite entity with a PascalCase name.
- A root `index.ts` is required; export outward only through it.
- A view file `${DIR_NAME}.tsx` is required (DIR_NAME = the component folder name).
- Stored only in the `components` layer.
- May contain layers except `pages`.

Minimal component structure:

```
src/
  components/
    Avatar/
      index.ts          # component export
      Avatar.tsx        # view
      types.ts          # file layer with types, if needed
      styles.module.scss
```

Recommended naming scheme (soft rule): the main file matches the entity name (SomeComponent.tsx),
auxiliary files without a prefix are placed next to it
(types.ts, styles.module.scss, index.ts),
and tests/stories repeat the entity name (SomeComponent.test.ts,
SomeComponent.stories.ts).
Keep this scheme consistent inside a layer, so search and navigation remain predictable.
