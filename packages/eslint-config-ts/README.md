## 使用

```js
yarn add @ryan-liu/eslint-config-ts -D
```

`.eslintrc.js`

```js
module.exports = {
    ...
    extends: ['@ryan-liu/ts'],
    ...
}

```

## 插件简称

extends 属性值可以省略包名的前缀 `eslint-config-`。

## 使用到的包

`eslint-plugin-prettier` 如果同时使用了 eslint 和 prettier 发生冲突了，会关闭掉与 prettier 有冲突的规则，也就是使用 prettier 认为对的规则 

