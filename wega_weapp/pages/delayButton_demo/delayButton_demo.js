// pages/delayButton_demo/delayButton_demo.js

var delayButton=require("../../utils/delayButton/delayButton.js")
var delayButtonTemplate = require("../../utils/delayButton2/delayButton2.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    delayButton.init(this, "点击开始", "点击再次开始", 5000, function(e){
       //开始倒计时
      delayButton.countdown(that);

    })

    var data = {
      name:'delayButtonData',
      id:1,
      hint_begin:'点击开始',
      hint_finish:'再次点击',
      delay_time:5000,
      delay: function (data){
        console.log(data);
        delayButtonTemplate.countdown(that, data)
      }
    }
    delayButtonTemplate.init(this, data);
    
    var data2 = {
      name: 'delayButtonData2',
      id: 2,
      hint_begin: '获取验证码',
      hint_finish: '重新获取验证码',
      delay_time: 60000,
      delay: function (data) {
        console.log(data);
        delayButtonTemplate.countdown(that, data)
      }
    }
    delayButtonTemplate.init(this, data2);


    var data3 = {
      name: 'delayButtonData3',
      id: 3,
      hint_begin: '点击提交',
      hint_finish: '再次提交',
      delay_time: 15000,
      delay: function (data) {
        console.log(data);
        delayButtonTemplate.countdown(that, data)
      }
    }
    delayButtonTemplate.init(this, data3);
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