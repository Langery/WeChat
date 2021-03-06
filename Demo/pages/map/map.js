// pages/help/help.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      id: 0,
      width: 50,
      height: 50
    }],
    controls: [{
      id: 1,
      position: {
        left: 0, 
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    polyline: [{
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  regionchange: function (e) {
    console.log(e.type)
  },
  controltap: function (e) {
    console.log(e.controlId)
  },
  markertap: function (e) {
    console.log(e.markerId)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})