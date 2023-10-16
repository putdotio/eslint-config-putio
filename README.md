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
yarn add eslint@">8.0" prettier@">2.0 <3.0" @putdotio/eslint-config @putdotio/prettier-config --dev
```

```bash
npm install eslint@">8.0" prettier@">2.0 <3.0" @putdotio/eslint-config @putdotio/prettier-config --save-dev
```

## Usage

Make sure you are using [`@putdotio/prettier-config`](https://github.com/putdotio/prettier-config)

```json
{
  "prettier": "@putdotio/prettier-config"
}
```

To inherit every rule and plugin, add the following to your `.eslintrc` file:

```json
{
  "extends": "@putdotio"
}
```

To only inherit code formatting, add the following to your `.eslintrc` file:

```json
{
  "extends": "@putdotio/formatting"
}
```
