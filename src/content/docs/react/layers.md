---
title: Layers
description: Layers — folder namespaces for grouping entities by type.
---

A layer is a separate folder namespace in which entities are logically grouped.
The folder name is the layer name: for example components, hooks, sections, pages, and so on.
If a new entity type appears, you must create its own layer folder for it.

## Why Are Layers Needed?

Layers create boundaries and a development context. You enter `hooks` — there are hooks and rules for working with them. You enter `managers` — there are managers with their own logic. A layer signals what can be expected here and prevents different entity types from mixing in one place.

## Layer Rules

- The layer name is camelCase.
- A layer is not nested directly inside a layer: a new layer appears only after an entity (a component may have its own `sections`, a section may have its own `components`, and so on).
- A layer may contain groups.
- Inside there are only entities of its own type (hooks in `hooks`, components in `components`, styles in `styles`).
- `index.ts` may be present, but is not required.

## Layer Usage Examples

- components(layer)->Button(entity). - ok
- components(layer)->useGenPass(entity). - not ok
- hooks(layer)->other(group)->useSomeHook(entity). - ok
- components(layer)->Button(entity)->hooks(layer)->useOnMouseMoveHandler(entity) - ok

## Layer Name Examples

- pages
- sections
- components
- ui
- hooks
- utils
- types
- api
- styles
