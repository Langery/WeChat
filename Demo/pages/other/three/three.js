// three.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    open: false,
    translate: '',
    mark: 0,
    newmark: 0,
    status: 1,
    startmark: 0,
    windowWidth: wx.getSystemInfoSync().windowWidth
  },
  tapbtn:function(e){
    if (this.data.open) {
      this.setData({
        translate: 'transform: translateX(0px)'
      })
      this.data.open = false
    } else {
      this.setData({
        translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)'
      })
      this.data.open = true
    }
  },
  tap_start:function(e){
    this.data.mark = this.data.newmark = e.touches[0].pageX
    if (this.data.status == 1) {
      this.data.startmark = e.touches[0].pageX
    } else {
      this.data.startmark = e.touches[0].pageX
    }
  },
  tap_drag:function(e){
    this.data.newmark = e.touches[0].pageX
    if (this.data.mark < this.data.newmark) {
      if (this.data.status == 1) {
        if (this.data.windowWidth*0.75 > Math.abs(this.data.newmark - this.data.startmark)) {
          this.setData({
            translate: 'transform: translateX(' + (this.data.newmark - this.data.startmark) + 'px)'
          })
        }
      }
    }
    if (this.data.mark > this.data.newmark) {
      if (this.data.status == 1 && (this.data.newmark - this.data.startmark) > 0) {
        this.setData({
          translate: "transform: translateX(" + (this.data.newmark - this.data.startmark) + "px)"
        })
      } else if (this.data.status == 2 && this.data.startmark - this.data.newmark < this.data.windowWidth*0.75) {
        this.setData({
          translate: 'transform: translateX(' + (this.data.newmark + this.data.windowWidth*0.75 - this.data.startmark) + 'px)'
        })
      }
    }
    this.data.mark = this.data.newmark
  },
  tap_end:function(e){
    if (this.data.status == 1 && this.data.startmark < this.data.newmark) {
      if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowWidth*0.2)) {
        this.setData({
          translate: 'transform: translateX(0px)'
        })
        this.data.status = 1
      } else {
        this.setData({
          translate: 'transform: translateX(' + this.data.windowWidth*0.75 + 'px)' 
        })
        this.data.status = 2
      }
    } else {
      if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowWidth*0.2)) {
        this.setData({
          translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)'
        })
        this.data.status = 2
      } else {
        this.setData({
          translate: 'transform: translateX(0px)'
        })
        this.data.status = 1
      }
    }
    this.data.mark = 0
    this.data.newmark = 0
  }
})