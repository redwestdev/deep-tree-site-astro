---
title: Sections
description: Sections — dependent parts of a parent component that split its logic into blocks.
---

Sections are dependent parts of a parent **React component**, composite entities; they split its logic into understandable blocks.

## Why Are Sections Needed?

Sections save you from bloated components. Without them, all the logic of a page or large component settles in one file. A section takes part of this logic into its own folder — the parent component remains readable, and each block is handled separately.

> Any other component can always be divided into sections. Page, section, component may have sections!

## Section Rules

- Always a composite entity with a PascalCase name and the `{NAME}Sct` suffix (example: HeroSct).
- A root `index.ts` is required; export outward only through it.
- A view file `${DIR_NAME}.tsx` is required (DIR_NAME = the section folder name).
- Props are not passed.
- Lives only in the `sections` layer; may contain layers except `pages`.
- Recommendation: Do not create a `sections` layer for one section — leave the logic in the parent or move repeated parts into `components` until at least two sections appear.

## Exception to Section Rules

- In rare cases, a prop may get into a section, but if you want to reuse the section as a whole, it is a signal to move repeated parts into components.

## Section Examples

For example, HomePage is too large if you try to create the whole page at once — the code will be too large.
Naturally, large code means low flexibility, difficult implementation, and poor readability.

As we remember, any page is divided into logical sections, so it is logical to divide it into sections.
Conditional examples:

- HeroSct
- BenefitsSct
- FeaturesSct
- ContactUsSct

Each section is an integral part of the HomePage logic, and each section is independent from another section.
In this example, each section has the suffix Section at the end, or the shortened Sct.

Minimal section structure:

```
src/
  pages/
    HomePage/
      sections/
        FeaturesSct/
          index.ts          # section export
          FeaturesSct.tsx   # section view
          components/
            FeatureCard/
              index.ts
              FeatureCard.tsx
          hooks.ts          # file layer for local section logic
```

A section does not accept props — it gets data from context or a local hook:

```tsx
// FeaturesSct/FeaturesSct.tsx
import { useHomeContext } from '../../context';
import { FeatureCard } from './components/FeatureCard';

export function FeaturesSct() {
  const { features } = useHomeContext();

  return (
    <section>
      {features.map(f => <FeatureCard key={f.id} {...f} />)}
    </section>
  );
}
```
