---
title: Introduction to Entities
description: What is an entity and its types in Deep Tree.
---

An entity is a logical software unit.

## Why Are Entities Needed?

An entity is the building block of the architecture. Without atomic units, there is nothing to build from. Every file or folder has a clear meaning, and nothing extra is stored in one unit.

For example, there may be the following kinds of entities:
component, style, image, hook, function, page, section, route,
helper, config, type, api-client, translation, and so on.

An entity is always responsible for one thing. (the SOLID single responsibility principle).

> Some entities may be unique and exist in a single instance. For example: config or mui-theme.

In the deep tree architecture, the system arranges **entities** as a tree,
where each entity has access to its parents and manages its child entities.

Any entity can be either a _single file_ or a _group of files united by a folder_.

---

## Composite Entity

A composite entity is a group of files united by a common folder. Inside it there may be layers (see layers), file layers (see file layers), and any auxiliary files/folders required for operation.

### Why Is a Composite Entity Needed?

A composite entity and its `index.ts` solve the problem of encapsulation. A single file can be turned into a folder with several files at any moment — and the external import path will not change. From the outside, nobody knows about the internal structure: this is protection from accidental interference with implementation details.

### Composite Entity Rules

- The folder name is PascalCase.
- A root `index.ts` is required; export outward only through it.
- Do not nest other composite entities of the same level (only layers/file layers and single entities).
- The structure inside the folder is self-contained.

`index.ts` is only a re-export, no logic:

```ts
// HomePage/index.ts
export { HomePage } from './HomePage';
```

---

## Single Entity

A single (atomic) entity is a file
that self-sufficiently stores one semantic object:
code (class, function/hook, configuration), data, text description, image, font, video, and so on.

### Single Entity Rules

- Inside there is only one independent semantic object (class, function, configuration, one data set, one image, and so on).
