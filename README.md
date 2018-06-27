[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">eslint-config-oceanprotocol</h1>

> 💅 Sharable ESLint config for keeping JavaScript consistent across all of Ocean Protocol's projects, built upon [JavaScript Standard Style](https://github.com/standard/standard).

[![npm](https://img.shields.io/npm/v/eslint-config-oceanprotocol.svg)](https://www.npmjs.com/package/eslint-config-oceanprotocol)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-141414.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![Build Status](https://travis-ci.com/oceanprotocol/eslint-config-oceanprotocol.svg?branch=master)](https://travis-ci.com/oceanprotocol/eslint-config-oceanprotocol)

This cat clearly forgot to lint her JavaScript before deployment:

![cat not linting correctly](https://raw.githubusercontent.com/bigchaindb/stylelint-config-bigchaindb/master/media/cat-linter-fail.gif)<br /><sub>Exhibit A: cat not linting correctly</sub>

Don't be like that cat.

## Usage

```bash
npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

```json
{
  "extends": "oceanprotocol"
}
```

### React

When using within a React project use these commands to get set up:

```bash
npm install --save-dev eslint-config-standard eslint-config-standard-react eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

```json
{
  "extends": ["oceanprotocol", "oceanprotocol/react"]
}
```

## Rules

We keep it simple and follow almost everything defined in the [JavaScript Standard Style](https://github.com/standard/standard). Only deviations are:

- indentation: **4**
- **no** space before function parenthesis

## Development

Again, keeping it simple with 2 files for now:

- `index.js`: holds all the custom JavaScript linting rules
- `react.js`: holds all the custom React linting rules

For local development, clone this repo and install all dependencies:

```bash
git clone git@github.com:oceanprotocol/eslint-config-oceanprotocol.git
cd eslint-config-oceanprotocol/

npm i
```

Linting is setup against the actual rules within this repo so for testing new rules against every js file in this repo, you can run:

```bash
npm test
```

## npm releases

For a new **patch release**, execute on the machine where you're logged into your npm account:

```bash
npm run release
```

Command is powered by [`release-it`](https://github.com/webpro/release-it) package, defined in the `package.json`.

That's what the command does without any user interaction:

- create release commit by updating version in `package.json`
- create tag for that release commit
- push commit & tag
- create a new release on GitHub, with change log auto-generated from commit messages
- publish to npm as a new release

If you want to create a **minor** or **major release**, use these commands:

```bash
npm run release-minor
```

```bash
npm run release-major
```

## License
