//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    // console.log('onLoad test');
  },
  getUserInfo: function(e) {
    
  }
})
