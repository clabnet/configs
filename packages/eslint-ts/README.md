# Shared eslint configuration

![](https://img.shields.io/npm/v/@clabnet/configs-eslint-ts.svg?color=brightgreen) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

The purpose of the `eslint` is linting `javascript` and `typescript` languages (`js`, `ts`, `tsx`).

> This configuration targets **monorepo** packages.

---

## Contents

- [Setup](#setup)
- [Automation](#automation)
- [Usage](#usage)

## Setup

- Add workspace reference to `@clabnet/configs-eslint-ts` and its peer dependencies:

  ```sh
  pnpm add -w @clabnet/configs-eslint-ts eslint
  ```

- Add eslint configuration file:

  ```js
  // .eslintrc.js

  module.exports = require('@clabnet/configs-eslint-ts')
  ```

- Add eslint ignore patterns file:

  ```sh
  # .eslintignore

  !.*
  node_modules/

  # Next ignore patterns
  .next/
  .build/
  .coverage/

  # Custom ignore patterns
  ...
  ```

- Add eslint scripts:

  ```jsonc
  // package.json

  "scripts": {
    ...
    "lint": "eslint --ext js,cjs,mjs,ts,tsx",
    "lint:fix": "pnpm lint --fix"
    ...
  }
  ```

## Automation

- Setup [➡ eslint vscode plugin](../../docs/plugins/vscode-eslint.md) to integrate `eslint` with vscode environment.

## Usage

- **Automatic** validation file with `eslint` on save.
- **Automatic** validation of staged files with `eslint` on commit.
- Manual usage from command line:

  ```sh
  pnpm lint .
  pnpm lint:fix .
  ```

---

[⬅ Back](../../README.md)

---
