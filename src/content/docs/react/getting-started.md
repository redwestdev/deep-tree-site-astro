---
title: Installation
description: Install Deep Tree in a React project.
---

```bash
npm install @redwestdev/react-deep-tree
# or
pnpm add @redwestdev/react-deep-tree
```

After installation, two things happen automatically:

1. `ARCHITECTURE.md` is copied to your project root — a self-contained reference of this architecture for AI assistants (Cursor, Copilot, Claude Code, etc.)
2. A `deep-tree:init` script is added to your `package.json`

## If ARCHITECTURE.md was not created

Some package managers disable postinstall scripts by default. Run the init script manually:

```bash
npm run deep-tree:init
# or, if the script was not added to package.json:
npx deep-tree-react
```

## `deep-tree:init` script

Copies `ARCHITECTURE.md` to your project root. Safe to re-run — skips if the file already exists. Run it again after updating the package to refresh the architecture reference.
