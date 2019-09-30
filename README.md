## WeChat text
The folder is about the WeChat's cord.
- click event
- elastic box
- style
- camera
- assembly

## Route

> app.json

## WePY

> 官网: [WePY](https://wepyjs.github.io/wepy-docs/)

### Note

1. 启动项目时需要更改 package.json，否则会出现启动错误
``` json
  "devDependencies":{
    "@wepy/cli": "^2.0.0-alpha.18",
    "@wepy/compiler-less": "^2.0.3"
  }
```
2. 每个 wpy 文件都必须有 `template` 、`script` 和 `style`，否则会出现 null 的情况