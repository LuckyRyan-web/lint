
## 使用到的包

stylelint-config-standard-scss 基于 stylelint-config-standard（官方的代码风格） 开发

stylelint-config-standard 已经把 stylelint-config-recommended 包含进去了

stylelint-order（可以编写属性顺序）

stylelint-config-rational-order(推荐的 css 顺序规则)


## 文档

具体的 stylelint 配置可以查看 `https://stylelint.bootcss.com/`

中文配置: `https://segmentfault.com/a/1190000041521952?sort=votes`

## 使用 

```js
module.exports = {
    extends: '@ryan-liu/stylelint-config',
}
```