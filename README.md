# `@putdotio/eslint-config`

[Shared ESLint config](https://eslint.org/docs/developer-guide/shareable-configs) for put.io

## Installation

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
