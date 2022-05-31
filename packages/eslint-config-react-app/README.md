## 使用

```js
yarn add @ryan-liu/eslint-config-react-app -D
```

`.eslintrc.js`

```js
module.exports = {
    ...
    extends: ['@ryan-liu/react-app'],
    ...
}

```

## 插件简称

extends 属性值可以省略包名的前缀 `eslint-config-`。

## 使用包说明

`eslint-config-react-app`: 包含了主流的 `eslint-plugin-jsx-a11y`、`eslint-plugin-react-hooks`、`eslint-plugin-react` 等配置，所以单独引入这个就可以了