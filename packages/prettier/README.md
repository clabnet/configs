# Shared prettier configuration

![](https://img.shields.io/npm/v/@clabnet/configs-prettier.svg?color=brightgreen) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

The purpose of the `prettier` is formatting many language formats (`js`, `ts`, `tsx`, `md`, `json`, `yaml`).

---

## Contents

- [Setup](#setup)
- [Automation](#automation)
- [Usage](#usage)

## Setup

- Add workspace reference to `@clabnet/configs-prettier` and its peer dependencies:

  ```sh
  pnpm add -w @clabnet/configs-prettier prettier
  ```

- Add prettier configuration file:

  ```js
  // .prettierrc.js

  module.exports = require('@clabnet/configs-prettier')
  ```

- Add prettier ignore patterns file:

  ```sh
  # .prettierignore

  node_modules/
  pnpm-lock.yaml

  # Next ignore patterns
  .next/
  .build/
  .coverage/

  # Custom ignore patterns
  ...
  ```

- Add prettier scripts:

  ```jsonc
  // package.json

  "scripts": {
    ...
    "format": "prettier",
    "format:check": "pnpm format --check --debug-check",
    "format:fix": "pnpm format --write"
    ...
  }
  ```

## Automation

- Setup [➡ prettier vscode plugin](../../docs/plugins/vscode-prettier.md) to integrate `prettier` with vscode environment.

## Usage

- **Automatic** format file with `prettier` on save.
- **Automatic** format of staged files with `prettier` on commit.
- Manual usage from command line:

  ```sh
  pnpm format:check .
  pnpm format:fix .
  ```

[⬅ Back](../../README.md)

---
