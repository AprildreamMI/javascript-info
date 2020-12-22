function f(x) {
  console.log(x);
}

function delay(fnc, dTime) {
  let wrapper = function (x) {
    setTimeout(() => {
      fnc(x)
    }, dTime)
  }

  return wrapper
}

// create wrappers
let f1000 = delay(f, 2000);
let f1500 = delay(f, 5000);

f1000("test"); // 在 1000ms 后显示 "test"
f1500("test2"); // 在 1500ms 后显示 "test"