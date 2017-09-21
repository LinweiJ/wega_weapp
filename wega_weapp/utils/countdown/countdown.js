



/* 初始化 */
function start(page) {

  var data = {
    interval: 1000,
    now_micro_second: 2*60*60*1000,
    format: 'H:m:s',
    clock: "wode"
  };
  console.log(data);
  page.setData({
    countdownData: data
  });
  console.log(page.data.countdownData);
  countdown(page, data)
}

/* 秒级倒计时 */
function countdown(page, data) {

  if (data.now_micro_second <= 0) {

    data.clock = dateformat(data.now_micro_second);
    data.isClocking = false;
    // 复原时间
    page.setData({
      countdownData: data
    });
    // timeout则跳出递归
    return;
  } else {
    // 渲染倒计时时钟
    data.clock = dateformat(data.now_micro_second, data.format);
    data.isClocking = true;
    page.setData({
      countdownData: data
    });
  }

  setTimeout(function () {
    // 放在最后--
    data.now_micro_second -= data.interval;
    countdown(page, data);
  }, data.interval)
}

// 时间格式化输出，如60。每1000ms都会调用一次
function dateformat(micro_second, str_format) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 毫秒位，保留2位
  var micro_sec = Math.floor((micro_second % 1000) / 10);

 
  var result;
  switch (str_format) {
    case 'H:m:s ms':
      // 小时位
      var hr = Math.floor(second / 3600);
      // 分钟位
      var min = Math.floor((second - hr * 3600) / 60);
      // 秒位
      var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;
      result = hr + ':'+ min + ':' + sec + " " + micro_sec;
      break;
    case 'H:m:s':
      // 小时位
      var hr = Math.floor(second / 3600);
      // 分钟位
      var min = Math.floor((second - hr * 3600) / 60);
      // 秒位
      var sec = (second - hr * 3600 - min * 60);// equal to => var sec = second % 60;
      result = hr + ':' + min + ':' + sec ;
      break;
    case 'm:s ms':
      // 分钟位
      var min = Math.floor(second  / 60);
      // 秒位
      var sec = (second - min * 60);// equal to => var sec = second % 60;
     
      result = min + ':' + sec + " " + micro_sec;
      break;
    case 'm:s':
      // 分钟位
      var min = Math.floor(second / 60);
      // 秒位
      var sec = (second - min * 60);// equal to => var sec = second % 60;
      
      result = min + ':' + sec;
      break;
    case 's ms':
      result = second + " " + micro_sec;
      break;
    case 's':
      result = second;
      break;
  }

  return result;
}




module.exports = {

  countdown: countdown,
  start: start
}