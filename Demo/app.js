/**
 * app.js
 * app.js 中的所有数据是全部页面共享的
 * 
 * 获取方法：
 * const appInstance = getApp()
 * console.log(appInstance.globalData)
 */
App({
  onLaunch (options) {
    // 展示本地存储能力
    // 登录
    wx.login({
      success: res => {
        if (res.code) {
          console.log(res)
          // console.log('the user has login')
          // 查看是否授权
          wx.getSetting({
            success: res => {
              console.log(res)
              if (res.authSetting['scope.userInfo']) {
                // 获取登录用户信息
                wx.getUserInfo({
                  success: res => {
                    var userInfo = res.userInfo
                    console.log(userInfo)
                    this.globalData.userInfo = userInfo
                    console.log(this.globalData)
                  }
                })
              }
            }
          })
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
  // onShow (options) {
  // },
  onHide () {

  },
  onError (msg) {
    console.log(msg)
  },
  globalData: {
    userInfo: null
  }
})