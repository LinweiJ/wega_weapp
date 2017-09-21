// dialog.js

/**
 * 显示 打开dialog  默认隐藏标题 内容 取消 确定按钮 蒙层点击取消
 */
function dialog(data) {
  var that=this;
  var page = data.page;
  var currentStatu = data.currentStatu;
  var message = data.message;
  var cancelText = "取消";
  var confirmText ="确定";
  var confirm = data.confirm;
  var confirmColor ='rgb(75,75,75)';
  
  if (data.confirmColor)
  {
    var confirmColor = data.confirmColor;
  }
  if (data.confirmText) {
    confirmText = data.confirmText;
  }
  var showCancel=true;
  if (data.showCancel==false) {
    showCancel = data.showCancel;
  }
  var hiddenTitle = true;
  if (data.hiddenTitle == false) {
    hiddenTitle = data.hiddenTitle;
  }
  var canceledOnTouchOutside = true;
  if (data.canceledOnTouchOutside == false) {
    console.log("canceledOnTouchOutside");
    canceledOnTouchOutside = data.canceledOnTouchOutside;
  }else{
    console.log("canceledOnTouchOutside" + true);
    data.canceledOnTouchOutside == true;
  }
  // 点击事件
  page.powerDrawer = function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    data.currentStatu = currentStatu;
    that.openOrCloseDialog(data);
  }

  /* 动画部分 */
  // 第1步：创建动画实例 隐藏
  var animation = wx.createAnimation({
    duration: 200, //动画时长
    timingFunction: "ease", //线性
    delay: 0 //0则不延迟
  });
  // 蒙层动画
  var animation0 = wx.createAnimation({
    duration: 200, //动画时长
    timingFunction: "ease", //线性
    delay: 0 //0则不延迟
  });

  // 第2步：这个动画实例赋给当前的动画实例
  page.animation = animation;
  page.animation0 = animation0;

  // 第3步：执行第一组动画
  page.animation.opacity(0).scaleX(0).step();
  page.animation0.opacity(0).step();

  // 第4步：导出动画对象赋给数据对象储存
  page.setData({
    animationData: page.animation.export(),
    animationData0: page.animation0.export(),
    message: message,
    cancelText: cancelText,
    confirmText: confirmText,
    confirmColor: confirmColor,
    showCancel: showCancel,
    hiddenTitle: hiddenTitle,
    canceledOnTouchOutside: canceledOnTouchOutside,
  })

  // 第5步：设置定时器到指定时候后，执行第二组动画
  setTimeout(function () {
    // 显示 
    if (currentStatu == "open") {
      page.setData(
        {
          showModalStatus: true
        }
      );
    }
    // 执行第二组动画 显示
    page.animation.opacity(1).scaleX(1).step();
    page.animation0.opacity(0.5).step();
    // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
    page.setData({
      animationData: page.animation,
      animationData0: page.animation0,
    })
  }.bind(page), 200)
}

/**
 * 打开或关闭
 */
function openOrCloseDialog(data) {

  
  var page = data.page;
  var confirm = data.confirm;
  var currentStatu = data.currentStatu;
  console.log(data);
  //蒙层
  if (!page.data.canceledOnTouchOutside&&currentStatu == "out") {
    console.log("canceledOnTouchOutside" + "out");
    return;
  }
 
  /* 动画部分 */
  // 第1步：创建动画实例 隐藏
  var animation = wx.createAnimation({
    duration: 200, //动画时长
    timingFunction: "ease", //线性
    delay: 0 //0则不延迟
  });

  var animation0 = wx.createAnimation({
    duration: 200, //动画时长
    timingFunction: "ease", //线性
    delay: 0 //0则不延迟
  });

  var that = this;

  // 第2步：这个动画实例赋给当前的动画实例
  page.animation = animation;
  page.animation0 = animation0;

  // 第3步：执行第一组动画
  page.animation.opacity(0).scaleX(0).step();
  page.animation0.opacity(0).step();

  // 第4步：导出动画对象赋给数据对象储存
  page.setData({
    animationData: page.animation.export(),
    animationData0: page.animation0.export(),
  })

  // 第5步：设置定时器到指定时候后，执行第二组动画
  setTimeout(function () {
    //关闭
    if (currentStatu == "close") {
      page.setData(
        {
          showModalStatus: false
        }
      );
      return;
    }
    //确定
    if (currentStatu == "confirm") {

      page.setData(
        {
          showModalStatus: false
        }
      );
      if (confirm)
      {
        confirm();
      }
      
      return;
    }
    //蒙层
    if (currentStatu == "out") {

      page.setData(
        {
          showModalStatus: false
        }
      );
      return;
    }
    // 显示 
    if (currentStatu == "open") {
      page.setData(
        {
          showModalStatus: true
        }
      );
    }
    // 执行第二组动画 显示
    page.animation.opacity(1).scaleX(1).step();
    page.animation0.opacity(0.5).step();
    // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象
    page.setData({
      animationData: page.animation,
      animationData0: page.animation0,
    })
  }.bind(page), 200)
}

module.exports = {
  dialog: dialog,
  // initDialog: initDialog,
  openOrCloseDialog: openOrCloseDialog,
}