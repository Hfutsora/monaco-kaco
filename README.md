# Monaco Kaco

<div align=center><img width="128" height="128" src="./kaco.png"/></div>

Kaco language plugin for Monoco Editor. Provides the following features:

- [x] Syntax highlighting
- [x] Code completion
- [x] Validation: Syntax errors and linting
- [x] Hovers
- [ ] Format

## Try it out

Try the editor out [on website](https://hfutsora.github.io/monaco-kaco/).

## Usage

### Sample project

```shell
$ yarn install
$ yarn run serve
```

## NPM

### Install

```shell
$ yarn add monaco-kaco
```

### Quick Start

```ts
import Vue from 'vue';
import MonacoKaco from 'monaco-kaco';
import 'monaco-kaco/lib/index.css';

Vue.use(MonacoKaco);
```

## Attributes

| Attribute | Description                                               | Type   | Default   |
| --------- | --------------------------------------------------------- | ------ | --------- |
| theme     | Monaco editor initial theme                               | string | 'vs-dark' |
| value     | The initial value of the auto created model in the editor | string |     一    |

## Methods

| Method   | Description            | Type                    |
| -------- | ---------------------- | ----------------------- |
| setValue | Set editor model value | (value: string) => void |
| getValue | Get editor model value | () => string            |
