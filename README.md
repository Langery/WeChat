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
3. [小程序开发须知-不看别后悔，踩坑踩到爆](https://www.jianshu.com/p/3f9c98d8e793)

## Route

> app.json

## WePY 项目

> 官网: [WePY](https://wepyjs.github.io/wepy-docs/)

## Demo 项目

&emsp;初入小程序，将一些做过的或者没有做过的都记录下来，后续会持续更新和整理...

> had & will do

- [x] 下拉刷新
- [x] 路由跳转
- [x] 轮播图
- [x] 获取登录用户信息
- [ ] 版本发布和部署
- [ ] 图片上传，待优化
- [ ] 地图，待优化
- [ ] 视频/音频
  - [ ] 音乐
  - [ ] 视频
- [ ] 与后台做数据对接
- [ ] 支付
- [x] 待续...

> need to deal

- [ ] 左侧栏点击一次后仍可以点击第二次，再向右移动

### Note

1. 启动项目时需要更改 package.json，否则会出现启动错误
``` json
  "devDependencies":{
    "@wepy/cli": "^2.0.0-alpha.18",
    "@wepy/compiler-less": "^2.0.3"
  }
```
2. 每个 wpy 文件都必须有 `template` 、`script` 和 `style`，否则会出现 null 的情况
3. App() 必须在 app.js 中注册，有且只有一个，可以通过一下方式在页面获取 app.js 数据：
``` javascript
  const app = getApp()

  this.setData({界面获取名: 数据来源名})
```
4. template 使用

&emsp;创建：
``` html
  <template name="demo">
    ...
  </template>
```
&emsp;wxml 引入：
``` html
  <!-- 引入地址 -->
  <import src="template.wxml" />
  <!-- 使用组件 -->
  <template is="demo"></template>
```
&emsp;css 引入：
``` css
  @import 'demo.wxss'
```

5. 数据缓存

``` javascript
  // save
  wx.setStorage({
    key: key,
    data: data
  })
  // get
  wx.getStorageSync(key)
```

