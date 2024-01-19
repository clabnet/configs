# **Creation of Typedoc documentation**

![](https://img.shields.io/npm/v/@clabnet/configs-ts.svg?color=brightgreen) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

## Setup

- Add workspace reference to `@clabnet/config-typedoc` and its peers dependencies:

  ```sh
  pnpm add -w @clabnet/config-typedoc
  ```

---

## Contents

**Add workspace to install these packages on the `package.json`:**

*   typedoc
````
pnpm add --save-dev typedoc
````

*   typedoc-plugin-merge-modules
````
pnpm add --save-dev typedoc-plugin-merge-modules
````

*   typedoc-material-theme
````
pnpm add --save-dev typedoc-material-theme
````

*   typedoc-plugin-extras
````
pnpm add --save-dev typedoc-plugin-extras
````


**Continuing you need to create a `typedoc.json` file in workspace example:**


```json
{
  "$schema": "https://typedoc.org/schema.json",
  "extends": ["@clabnet/config-typedoc"],
  "tsconfig": "tsconfig.typedoc.json",
  "entryPoints": ["./app/src/*", "./packages/shared/src/*", "./packages/sharedui/src/*"],
  "out": "./docs",
  "customTitle": "<div style='display:flex; align-items:center; gap:10px'><img style='width: 150px' src='https://horizon-dev.germanywestcentral.cloudapp.azure.com/images/Pomini_Lyra.png'> <div>Lyra Code Documentation</div></div>",
  "favicon": "./app/public/favicon.ico"
}

```

---

[⬅ Back](../../README.md)

---



