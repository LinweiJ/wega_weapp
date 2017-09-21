

// 传入一个时间点，转换成总毫秒数
// var total_micro_second;

// var text_finish;

// var delay_micro_second;

//多个点击数据组
var dataArr = [];


/* 初始化 */
function init(page, data) {

  data.clock = data.hint_begin;
  data.isClocking = false;
  data.now_micro_second = data.delay_time;
  dataArr.push(data);

  page.setData({
    [data.name]: data
  });
  page.delaybutton2 = function (e) {

    var dataName = e.currentTarget.dataset.name;
    if (page.data[dataName].isClocking) {
      //正在倒计时
      return;
    }
    page.data[dataName].delay(page.data[dataName]);
  }

}

/**
 *  秒级倒计时
 * 
 */
function countdown(page, data) {

  if (data.now_micro_second <= 0) {
    // 复原时间
    data.now_micro_second = data.delay_time;
    data.isClocking = false;
    data.clock = data.hint_finish;
    page.setData({
      [data.name]: data,
    });
    // timeout则跳出递归
    return;
  } else {
    // 渲染倒计时时钟
    data.clock = dateformat(data.now_micro_second),
      data.isClocking = true,
      page.setData({
        [data.name]: data,
      });
  }

  setTimeout(function () {
    // 放在最后--
    data.now_micro_second -= 1000;
    countdown(page, data);
  }, 1000)
}

// 时间格式化输出，如60。每1000ms都会调用一次
function dateformat(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  return second + "秒后可点击";
}

module.exports = {
  countdown: countdown,
  init: init
}