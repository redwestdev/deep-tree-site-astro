---
title: Expanded Project Structure Example
description: Full folder layout for a Deep Tree React project.
---

Below is an example structure for one page with sections and reusable components. Use it as a reference when creating new entities.

```
src/                      # root
  pages/                  # pages layer
    HomePage/             # page entity
      index.ts            # root of the page entity
      HomePage.tsx        # implementation of the page entity
      sections/           # sections layer
        HeroSct/          # section entity
          index.ts
          HeroSct.tsx
          components/     # layer
            Highlight/
              index.ts
              Highlight.tsx
        FeaturesSct/      # section entity
          index.ts
          FeaturesSct.tsx
          components/     # layer
            FeatureCard/  # component entity
              index.ts
              FeatureCard.tsx
      components/         # components layer
        CallToAction/
          index.ts
          CallToAction.tsx
  components/             # components layer
    Button/               # component entity
      index.ts
      Button.tsx
      styles.module.scss  # styles file layer
    Avatar/               # component entity
      index.ts
      Avatar.tsx
      types.ts            # types file layer
  hooks/                  # layer
    useViewport.ts        # hook entity
  utils/                  # layer
    formatPrice.ts        # utility entity / function entity
  styles/                 # styles layer
    globals.scss          # style entity
```
