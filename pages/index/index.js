//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // 轮播图
    imgUrls:[
      {
        // link:''
        url:"../images/1.jpeg"
      }, {
        url: "../images/2.jpg"
      }, {
        url: "../images/3.jpg"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
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
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    // console.log('onLoad test');
  },
  getUserInfo: function(e) {
    
  }
})
