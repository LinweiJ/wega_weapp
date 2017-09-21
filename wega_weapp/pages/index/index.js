//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  //事件处理函数
  toast: function () {
    wx.navigateTo({
      url: '../toast_demo/toast_demo',
    })
  },
  dialog: function () {
    wx.navigateTo({
      url: '../dialog_demo/dialog_demo',
    })
  },
  delayButton: function () {
    wx.navigateTo({
      url: '../delayButton_demo/delayButton_demo',
    })
  }
})
