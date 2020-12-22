function f(a) {
  console.log(a);
}

/**
 * 一直的调用函数 则只会每dTime调用一次函数
 * @param {*} fnc 
 * @param {*} dTime 
 */
function throttle(fnc, dTime) {
  let _this
  let arg
  let bol = false
  let w = function () {
    if (bol) {
      _this = this
      arg = arguments
      return
    }

    fnc.call(_this, ...arg)
    bol = true

    setTimeout(() =>{
      bol = false
      if (arg) {
        w.call(_this, ...arg)
        _this = arg = null
      }
    }, dTime)
  }

  return w
}

// f1000 最多每 1000ms 将调用传递给 f 一次
let f1000 = throttle(f, 5000);

f1000(1); // 显示 1
f1000(2); // (尚未到 1000ms)
f1000(3); // (尚未到 1000ms)
f1000(4); // (尚未到 1000ms)

// 当 1000ms 时间到...
// ...输出 3，中间值 2 被忽略