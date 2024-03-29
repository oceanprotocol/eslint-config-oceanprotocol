[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">eslint-config-oceanprotocol</h1>

> 💅 🦋 Shareable ESLint config for keeping JavaScript consistent across all of Ocean Protocol's projects, built upon [JavaScript Standard Style](https://github.com/standard/standard).

[![npm](https://img.shields.io/npm/v/eslint-config-oceanprotocol.svg)](https://www.npmjs.com/package/eslint-config-oceanprotocol)
[![Build Status](https://github.com/oceanprotocol/eslint-config-oceanprotocol/workflows/CI/badge.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol/actions)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-7b1173.svg?style=flat-square)](https://github.com/prettier/prettier)

This cat clearly forgot to lint her JavaScript before deployment:

![cat not linting correctly](https://raw.githubusercontent.com/bigchaindb/stylelint-config-bigchaindb/master/media/cat-linter-fail.gif)<br /><sub>Exhibit A: cat not linting correctly</sub>

Don't be like that cat.

**Table of Contents**

- [Usage](#usage)
  - [React](#react)
  - [Prettier](#prettier)
  - [Editor Plugins](#editor-plugins)
- [Rules](#rules)
- [Development](#development)
- [⬆️ Releases](#️-releases)
  - [Production](#production)
  - [Pre-Releases](#pre-releases)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [🏛 License](#-license)

---

## Usage

For every project containing JavaScript, ESLint should be set up with this base setup.

```bash
npm install --save-dev eslint eslint-config-oceanprotocol
```

Then, create a new file `.eslintrc` in the root of your project and fill with:

```json
{
  "extends": "oceanprotocol"
}
```

### React

When using within a React project use this to get set up:

```bash
npm i -D eslint eslint-config-oceanprotocol
```

And in your `.eslintrc`:

```json
{
  "extends": ["oceanprotocol", "oceanprotocol/react"]
}
```

### Prettier

Additionally, you should add [Prettier](https://prettier.io) to your project and work with it through ESLint:

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Then add a `.prettierrc` file to the root of your project with this content:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}
```

Finally, modify your `.eslintrc`:

```json
{
  "extends": [
    "oceanprotocol",
    "prettier/standard",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"]
}
```

### Editor Plugins

For maximum fun during coding, install an ESLint plugin in your favorite editor to get suggestions and autofixes as you type.

- VS Code: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Atom: [linter-eslint](https://atom.io/packages/linter-eslint)
- PyCharm: [Installing, enabling, and configuring ESLint in PyCharm](https://www.jetbrains.com/help/pycharm/eslint.html)
- Sublime Text: [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint)
- IntelliJ IDEA, RubyMine, WebStorm, PhpStorm, PyCharm, AppCode, Android Studio: [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint)
- Vim, NeoVim: [ALE](https://github.com/w0rp/ale)

## Rules

We keep it simple and follow almost everything defined in the [JavaScript Standard Style](https://github.com/standard/standard). Only deviations are:

- indentation: **2**
- **no** space before function parenthesis
- **double quotes** for jsx attributes
- prefer destructuring from objects & arrays
- enforce spacing inside curly braces

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

## ⬆️ Releases

Releases are managed semi-automatically. They are always manually triggered from a developer's machine with release scripts.

### Production

From a clean `main` branch you can run the release task bumping the version accordingly based on semantic versioning:

```bash
npm run release
```

The task does the following:

- bumps the project version in `package.json`, `package-lock.json`
- auto-generates and updates the CHANGELOG.md file from commit messages
- creates a Git tag
- commits and pushes everything
- creates a GitHub release with commit messages as description
- Git tag push will trigger a GitHub Action workflow to do a npm release

For the GitHub releases steps a GitHub personal access token, exported as `GITHUB_TOKEN` is required. [Setup](https://github.com/release-it/release-it#github-releases)

### Pre-Releases

For pre-releases, this is required for the first one like `v0.18.0-next.0`:

```bash
./node_modules/.bin/release-it major|minor|patch --preRelease=next
```

Further releases afterwards can be done with `npm run release` again and selecting the appropriate next version, in this case `v0.18.0-next.1` and so on.

## Changelog

See the [CHANGELOG.md](./CHANGELOG.md) file. This file is auto-generated during the above mentioned release process.

## Contributing

See the page titled "[Ways to Contribute](https://docs.oceanprotocol.com/concepts/contributing/)" in the Ocean Protocol documentation.

## 🏛 License

```
Copyright ((C)) 2022 Ocean Protocol Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
