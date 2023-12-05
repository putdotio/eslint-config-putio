<div align="center">
  <p>
    <img src="https://static.put.io/images/putio-boncuk.png" width="72">
  </p>

  <h1>eslint-config-putio</h1>

  <p>Shared eslint config for put.io's JavaScript projects.</p>

  <p>
    <img src="https://img.shields.io/npm/v/@putdotio/eslint-config" alt="npm (scoped)">
    <img src="https://img.shields.io/github/license/putdotio/eslint-config-putio" alt="GitHub">
  </p>
</div>

## Installation

```bash
pnpm add eslint@">8.0" @putdotio/eslint-config  -D
```

## Usage

For the [base config](./index.js), add the following to your `.eslintrc` file:

```json
{
  "extends": "@putdotio"
}
```

For [`react` projects](./react.js), add the following to your `.eslintrc` file:

```json
{
  "extends": "@putdotio/react"
}
```
