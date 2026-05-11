---
title: Groups
description: Groups — entities united by common meaning inside a layer.
---

Groups are entities united by a common meaning inside one layer or another group.
A group may be split into subgroups, and those into other groups, and so on infinitely as needed.
The task of a group is to unload layers (see layers).

## Why Are Groups Needed?

As a project scales, layers grow and turn into a dump. Groups bring order inside a layer — without changing the structure of the tree itself. This is protection from chaos at the level of one layer when there is a large number of entities.

## Group Rules

- The group name is camelCase.
- Layers inside a group are not allowed; groups may be nested in groups.
- Inside there are only entities of the parent layer type (in `components` — only components).
- A group does not serve as a container for one single entity.
- The group name does not match layer names.
- `index.ts` may be present, but is not required.

## Group Usage Examples

- components(layer)->buttons(group)->Button(entity) = ok
- components(layer)->buttons(group)->outlined(group)->Button(component) = ok
- others(group) -> components(layer) -> Button(entity) = NOT ok
- components(layer)->buttons(group)->useSomeHook(entity) = NOT ok
- components(layer)->buttons(group)->Button(entity)->hooks->someHooks(group)->useSomeHook(entity) = ok

## Group Examples

- **others** (ex: hooks(layer)->**others**(group))
- **header** (ex: components(layer)->**header**(group))
- **report** -> (ex: components(layer)->**report**(group))
