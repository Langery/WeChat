//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    /**
     * 页面初始化数据
     */
    // 图片列表，用于循环
    imgList: [
      {
        url: '../images/4.jpg'
      },
      {
        url: '../images/4.jpg'
      }
    ],
    // 轮播图
    // 图片地址
    imgUrls:[
      {
        // link:''
        url:"../images/Jay01.jpg"
      }, {
        url: "../images/Jay02.jpg"
      }, {
        url: "../images/Jay03.jpg"
      }
    ],
    // 是否显示画板指示点
    indicatorDots: true,
    // 是否自动轮播
    autoplay: true,
    // 自动切换的间隔
    interval: 5000,
    // 滑动动画时长 毫秒
    duration: 1000,
    userInfo: {}
  },
  // 点击跳转界面事件处理函数
  toast:function(){
    wx.navigateTo({
      url: '../other/one/one',
    })
  },
  othertwo:function(){
    wx.navigateTo({
      url: '../other/two/two',
    })
  },
  thethree:function(){
    wx.navigateTo({
      url: '../other/three/three',
    })
  },
  //事件处理函数
  bindViewTap: function(event) {
    console.log(event)
  },
  // lunch by create the page
  onLoad: function (options) {
    console.log('onLoad test')
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
            }
          })
        }
      }
    })
  },
  // 页面出现在前台时执行
  // onShow: function () {},
  // 页面首次渲染完毕时执行
  onReady: function () {},
  // 页面从前台变为后台时执行
  onHide: function () {},
  // 页面销毁时执行
  onUnload: function () {},
  // 触发下拉刷新时执行
  onPullDownRefresh: function () {},
  // 页面触底时执行
  onReachBottom: function () {},
  // 页面被用户分享时执行
  onShareAppMessage: function () {},
  // 页面滚动时执行
  onPageScroll: function () {},
  // 页面尺寸变化时执行
  onResize: function () {},
  // 事件响应函数
  viewTap: function () {},
  getUserInfo: function(e) {
  }
})
