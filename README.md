[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">eslint-config-oceanprotocol</h1>

> 💅 🦋 Shareable ESLint config for keeping JavaScript consistent across all of Ocean Protocol's projects, built upon [JavaScript Standard Style](https://github.com/standard/standard).

[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![npm](https://img.shields.io/npm/v/eslint-config-oceanprotocol.svg)](https://www.npmjs.com/package/eslint-config-oceanprotocol)
[![Build Status](https://travis-ci.com/oceanprotocol/eslint-config-oceanprotocol.svg?branch=master)](https://travis-ci.com/oceanprotocol/eslint-config-oceanprotocol)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ef6a974bc0344ba39b378bf33a8dc689)](https://app.codacy.com/app/ocean-protocol/eslint-config-oceanprotocol?utm_source=github.com&utm_medium=referral&utm_content=oceanprotocol/eslint-config-oceanprotocol&utm_campaign=badger)
[![Greenkeeper badge](https://badges.greenkeeper.io/oceanprotocol/eslint-config-oceanprotocol.svg)](https://greenkeeper.io/)

This cat clearly forgot to lint her JavaScript before deployment:

![cat not linting correctly](https://raw.githubusercontent.com/bigchaindb/stylelint-config-bigchaindb/master/media/cat-linter-fail.gif)<br /><sub>Exhibit A: cat not linting correctly</sub>

Don't be like that cat.

## Table of Contents

  - [Usage](#usage)
     - [React](#react)
     - [Editor Plugins](#editor-plugins)
  - [Rules](#rules)
  - [Development](#development)
  - [npm releases](#npm-releases)
  - [License](#license)

---

## Usage

For every project containing JavaScript, ESLint should be set up with this config. For this you need to install all required `peerDependencies` on your own. In one handy command:

```bash
npm install --save-dev eslint eslint-config-oceanprotocol eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-security
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
npm install --save-dev eslint eslint-config-oceanprotocol eslint-config-standard eslint-config-standard-react eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-security eslint-plugin-react
```

And in your `.eslintrc`:

```json
{
  "extends": ["oceanprotocol", "oceanprotocol/react"]
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

- indentation: **4**
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

## npm releases

For a new **patch release**, execute on the machine where you're logged into your npm account:

```bash
npm run release
```

In case you have 2FA setup on npm.js, pass a code as One Time Password:

```bash
npm run release --otp <yourcode>
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

```
Copyright 2018 Ocean Protocol Ltd.

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
