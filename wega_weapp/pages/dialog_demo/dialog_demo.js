// pages/dialog_demo/dialog_demo.js

/**
 * dialog对话框
 */
var dialog = require('../../utils/dialog/dialog.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  dialog1:function(e){
     
     dialog.dialog({
         page:this,
         currentStatu:"open",
         message:"默认dialog",
         confirm:function(){
           console.log("confirm");
         },
     });

  },
  

  dialog2:function(e){
     
     dialog.dialog({
         page:this,
         showCancel: false,
         currentStatu:"open",
         canceledOnTouchOutside: false,
         message:"单键dialog",
         confirm:function(){
           console.log("confirm");
         },

     });

  },

  dialog3: function (e) {

    dialog.dialog({
      page: this,
      currentStatu: "open",
      confirmColor:"#00a7e5",
      message: "蓝色dialog\n蓝色dialog",
      confirm: function () {
        console.log("confirm");
      },
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

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