---
title: Nesting Depth
description: Nesting depth — how deep the tree can go and when to move entities up.
---

The depth of **nesting is not limited** if it is local, large functionality (for example, a heavy modal window).
Guideline: go as deep as needed for readability inside this context;
moving entities higher makes sense only when there is real sharing outside the current branch.

## Why Is Nesting Depth Needed?

Depth solves the problem of focus. The deeper you work, the less surrounding code you touch, and the more precise and local the change is. You went down to the right place, fixed only what needed to be fixed, and moved on. Move entities higher only when they are really needed in several places, not "just in case".
