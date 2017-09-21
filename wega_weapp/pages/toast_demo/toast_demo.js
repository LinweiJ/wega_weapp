// pages/toast/toast.js
/**
 * toast提示框
 */
var toast = require('../../utils/toast/toast.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },


  showToast1:function(e){
    toast.showToastDefault(this, "默认");
  },
  showToast2: function (e) {
    toast.showToastWithMask(this, "带蒙层");
  },
  showToast3: function (e) {
    toast.showToast(this, "5s无蒙层",5000,false);
  },
  showToast4: function (e) {
    toast.showToast(this, "5s有蒙层",5000,true);
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