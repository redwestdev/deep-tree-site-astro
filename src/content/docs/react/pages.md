---
title: Pages
description: Pages — large logically independent React components.
---

Pages are large React components, composite entities. These are logically independent parts of an application; each performs its own business role and is not repeated.

## Why Are Pages Needed?

Pages divide an application into large independent pieces. Each page is a separate context with a clear business role. This prevents the application from turning into a monolith where everything is mixed together.

## Page Rules

- Always a composite entity with a PascalCase name and the `{NAME}Page` suffix (example: HomePage).
- A root `index.ts` is required; export outward only through it.
- A view file `${DIR_NAME}.tsx` is required (DIR_NAME = the page folder name).
- Usually without props.
- Stored only in the `pages` layer.

## Exceptions to Page Rules

- A top-level data scope may come into a page (for example, locale, translation dictionary,
feature-flag config, integration keys), if it concerns the entire screen.

## Page Examples

- HomePage — initial page, root page,
- AboutPage — tells about a company or product, introduces the team, events, and so on
- CatalogPage — product views, filtering, search, sorting
- ContactUsPage — contact methods

Minimal page structure:

```
src/
  pages/
    HomePage/
      index.ts            # single export point
      HomePage.tsx        # page view
      sections/
        HeroSct/
          index.ts
          HeroSct.tsx
        BenefitsSct/
          index.ts
          BenefitsSct.tsx
      components/
        CallToAction/
          index.ts
          CallToAction.tsx
```
