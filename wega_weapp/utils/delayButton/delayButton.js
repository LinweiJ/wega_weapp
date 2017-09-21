

// 传入一个时间点，转换成总毫秒数
var total_micro_second;

var text_finish;

var delay_micro_second;

/* 初始化 */
function init(page, hint_begin, hint_finish, delay_time, delay) {

  text_finish = hint_finish;
  total_micro_second = parseInt(delay_time);
  delay_micro_second = parseInt(delay_time);
  page.setData({
    clock: hint_begin,
    isClocking: false
  });
  page.delaybutton = function (e) {
  
    if (page.data.isClocking) {
      //正在倒计时
      return;
    }
    delay();
  }

}

/**
 *  秒级倒计时
 * 
 */
function countdown(page) {

  if (total_micro_second <= 0) {
    // 复原时间
    total_micro_second = delay_micro_second;
    page.setData({
      clock: text_finish,
      isClocking: false
    });
    // timeout则跳出递归
    return;
  } else {
    // 渲染倒计时时钟
    page.setData({
      clock: dateformat(total_micro_second),
      isClocking: true
    });
  }

  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 1000;
    countdown(page);
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