function f(x) {
  console.log(x);
}

/**
 * 一直等待dTime 毫秒的安静期后才再次把最新的参数传入调用fnc
 * 
 * @param {*} fnc 
 * @param {*} dTime 
 */
function debounce(fnc, dTime) {
  let wrapper = function () {
    if (wrapper.t) {
      clearTimeout(wrapper.t)
    }
    wrapper.t = setTimeout(() =>{
      fnc.call(this, ...arguments)
    }, dTime)
  }
  wrapper.t = null

  return wrapper
}

let fWrapper = debounce(f, 5000)

fWrapper("a");
setTimeout( () => fWrapper("b"), 1000);
setTimeout( () => fWrapper("c"), 4000);

