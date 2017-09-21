# wega_weapp

   toast   dailog   delayButton  

![wege_weapp_1.gif](https://github.com/LinweiJ/wega_weapp/blob/master/screen_shot/wege_weapp_1.gif)



## 一.toast

1.将/utils/toast文件夹copy到根目录下的utils

2.copy以下代码 到所需page目录xxx.wxss,或者 多个页面使用,直接导入app.wxss 全局都可使用(建议)

```js
/* 导入toast样式 */
@import "utils/toast/toast.wxss";
```

3.copy以下代码到所需page目录xxx.wxml

```js
<!-- toast 提示框 -->
<include src="../../utils/toast/toast.wxml" />
```

4.copy以下代码到所需page目录xxx.js

```js
/**
 * toast提示框
 */
var toast = require('../../utils/toast/toast.js');
```

5.使用

```js
//全屏可点击 默认1500ms 类似android toast
toast.showToastDefault(page, toastText)
//全屏不可点击 默认 2000ms
toast.showToastWithMask(page, toastText)
//可定制 
toast.showToast(page, toastText, count, isShowMask)
//参数
page:页面
toastText:提示文字
count:显示时间
isShowMask:是否显示蒙层
```

6.参考

更多细节参考wega_weapp/pages/toast_demo/

## 二.dialog

1.将/utils/dialog文件夹copy到根目录下的utils

2.copy以下代码 到所需page目录xxx.wxss,或者 多个页面使用,直接导入app.wxss 全局都可使用(建议)

```js
/* 导入dialog样式 */
@import "utils/dialog/dialog.wxss";
```

3.copy以下代码到所需page目录xxx.wxml

```js
<!-- dialog 对话框 -->
<include src="../../utils/dialog/dialog.wxml" />
```

4.copy以下代码到所需page目录xxx.js

```js
/**
 * dialog对话框
 */
var dialog = require('../../utils/dialog/dialog.js');
```

5.使用

```js
 dialog.dialog({
      page: this,
      currentStatu: "open",
      message:"是否拨打客服电话",
      confirmText: '拨打',
      confirmColor: "#00a7e5",
      confirm: function () {
        console.log("confirm");
      }
    })
//参数
 page:页面 (必需)
 currentStatu:状态 'open' 'close' 'confirm'
 message:提示文字
 confirmText:确定键文字
 confirmColor:确定键文字颜色 如"#ff00ff"  rgb(0,0,0)
 confirm:确定键点击事件 
 showCancel:是否显示取消键,默认 true
 canceledOnTouchOutside:蒙层是否可以取消  默认 true,
```

6.参考

更多细节参考wega_weapp/pages/dialog_demo/



 to be continue...



















