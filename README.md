[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">eslint-config-oceanprotocol</h1>

> 💅 Sharable ESLint config for keeping JavaScript consistent across all of Ocean Protocol's projects, built upon [JavaScript Standard Style](https://github.com/standard/standard).

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

- indentation: *4*
- no space before function parenthesis

## Development & Releases

## License
