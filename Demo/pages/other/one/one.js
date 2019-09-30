// one.js
// 获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['获取图片', '提示框','输入框'],
    currentTab: 0,
    tempFilePaths: '',
    hiddenmodalput: true, // 可以通过hidden是否演示弹出框的属性，来指定那个弹出框 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 导航条
  navbarTap:function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  chooseimage: function(){
    var _this = this;
    wx.chooseImage({
      count: 7,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success: function(res){
        _this.setData({
          tempFilePath:res.tempFilePaths
        })
      }
    })
  },
  showok:function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  modalcnt:function(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success:function(res){
        if(res.confirm){
          console.log('用户点击确定')
        }else if(res.cancel){
          console.log('用户点击取消')
        }
      }
    })
  },
  actioncnt:function(){
    wx.showActionSheet({
      itemList: ['好的','拒绝','稍后回复'],
      success:function(res){
        console.log(res.tapIndex)
      },
      fail:function(res){
        console.log(res.errMsg)
      }
    })
  },
  // 点击按钮弹出指定的hiddenmodalput弹出框
  modalinput:function(){
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  // 取消
  cancel:function(){
    this.setData({
      hiddenmodalput: true
    });
  },
  // 确认
  confirm: function(){
    this.setData({
      hiddenmodalput: true
    })
  }
  
})