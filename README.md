# `@putdotio/eslint-config`

[![Build Status](https://travis-ci.org/putdotio/eslint-config-putio.svg?branch=master)](https://travis-ci.org/putdotio/eslint-config-putio)
![npm (scoped)](https://img.shields.io/npm/v/@putdotio/eslint-config)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@putdotio/eslint-config)

[Shared ESLint config](https://eslint.org/docs/developer-guide/shareable-configs) for put.io

## Installation

```bash
yarn global add install-peerdeps ## sorry :'D
install-peerdeps @putdotio/eslint-config --yarn -D
```

```bash
npx install-peerdeps --dev @putdotio/eslint-config
```

## Usage

Create `.eslintrc.json` file with the following contents:

```json
{
  "extends": ["@putdotio"]
}
```

Create ESLint scripts in your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint src",
    "lint:fix": "npm run lint -- --fix"
  }
}
```
