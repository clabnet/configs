# Shared typescript configuration

The purpose of the [typescript](https://www.typescriptlang.org/) is to add strong typing to `javascript`.

> This configuration targets **lib typescript** packages.

---

## Contents

- [Setup](#setup)

## Setup

- Add workspace reference to `@clabnet/configs-ts` and its peers dependencies:

  ```sh
  pnpm add -w @clabnet/configs-ts typescript @types/node
  ```

- Add typescript configuration file

  ```jsonc
  // packages/foo/tsconfig.json
  
  {
    "extends": "@clabnet/configs-ts",
    "compilerOptions": {
      "baseUrl": "src",
      "rootDir": "src"
    },
    "include": ["src"]
  }
  ```

---

[⬅ Back](../../README.md)

---
