# vue3-admin-antdv-template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 问题

## 1 初始化项目启动报错

### 现象

```code
Error: Cannot find module @rollup/rollup-win32-x64-msvc. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Ple package-lock.json and node_modules directory.
    at requireWithFriendlyError (F:\vue3\vue3-admin-antdv-template\node_modules\rollup\dist\native.js:59:9)
    at Object.<anonymous> (F:\vue3\vue3-admin-antdv-template\node_modules\rollup\dist\native.js:68:76)
    ... 2 lines matching cause stack trace ...
    at Module.load (node:internal/modules/cjs/loader:1203:32)
    at Module._load (node:internal/modules/cjs/loader:1019:12)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/translators:203:29)
    at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:337:24) {
  [cause]: Error: The specified procedure could not be found.
  \\?\F:\vue3\vue3-admin-antdv-template\node_modules\@rollup\rollup-win32-x64-msvc\rollup.win32-x64-msvc.node
      at Module._extensions..node (node:internal/modules/cjs/loader:1460:18)
      at Module.load (node:internal/modules/cjs/loader:1203:32)
      at Module._load (node:internal/modules/cjs/loader:1019:12)
      at Module.require (node:internal/modules/cjs/loader:1231:19)
      at require (node:internal/modules/helpers:177:18)
      at requireWithFriendlyError (F:\vue3\vue3-admin-antdv-template\node_modules\rollup\dist\native.js:41:10)
      at Object.<anonymous> (F:\vue3\vue3-admin-antdv-template\node_modules\rollup\dist\native.js:68:76)
      at Module._compile (node:internal/modules/cjs/loader:1364:14)
      at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
      at Module.load (node:internal/modules/cjs/loader:1203:32) {
    code: 'ERR_DLOPEN_FAILED'
  }
}

```

### 解决方法

在package.json文件中配置

```code
"overrides": {
    "vite": {
      "rollup": "npm:@rollup/wasm-node"
    }
  }
```

然后删除 node_modules文件以及package-lock.json后重新安装依赖

```
npm install
```
