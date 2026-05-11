---
title: File Layers
description: File layers — single files temporarily acting as a layer.
---

File layers temporarily perform the role of a layer when there is little code and no nested entities or groups.
Over time, it should be expanded into a full folder layer as functionality grows.

## When It Is Allowed

- All layer logic fits in one file and remains readable.
- There are no nested entities/groups; this is a temporary form of a layer.

## When to Expand Into a Regular Layer

- A second entity of the same type appears or the file becomes inconvenient for navigation/tests.
- A need for a nested structure appears (groups). Usually because of the number of entities inside the file layer.

## Examples of Inline Layer Names

- `types.ts`
- `hooks.ts`
- `utils.ts`
- `helpers.ts`
- `constants.ts`
- `styles.module.scss`

## Inline Layer Rules

- The file name matches the layer type; prefixes are not needed.
- Do not mix different entity types in one inline layer (hooks and utils in one file are not allowed).
- When expanding, keep the layer name and split the contents into separate entities.
