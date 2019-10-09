## WeChat text
The folder is about the WeChat's cord.
- click event
- elastic box
- style
- camera
- assembly
- get user information

## 关于小程序发布相关内容

1. 关于小程序的[网络](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)配置信息
2. [后端 API](https://developers.weixin.qq.com/miniprogram/dev/framework/server-ability/backend-api.html)

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
3. 可以通过一下方式在页面获取 app.js 数据：
``` javascript
  const app = getApp()

  this.setData({界面获取名: 数据来源名})
```
4. template 使用
&emsp;创建：
``` html
  <template name="demo">
  </template>
```
&emsp;wxml 引入：
``` html
  <import src="template.wxml" />
  <template is="demo"></template>
```
&emsp;css 引入：
``` css
  @import 'demo.wxss'
```