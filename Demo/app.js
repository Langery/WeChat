//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    
    // 登录
    wx.login({
      success: res => {
        if (res.code) {
          console.log(res)
        } else {
          console.log('获取用户信息失败')
        }
      }
    })
    // 打开调试
    wx.setEnableDebug({
      enableDebug: true
    })
  },
  globalData: {
    userInfo: null
  }
})