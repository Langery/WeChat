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
  bindViewTap: function() {
    
  },
  onLoad: function () {
    // console.log('onLoad test');
  },
  getUserInfo: function(e) {
    
  }
})
