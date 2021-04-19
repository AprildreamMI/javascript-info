Function.prototype.defer = function(ms) {
  let _this = this
  console.dir(this)
  return function (a, b) {
    setTimeout(() => {
      _this(a, b)
    }, ms);
  }
};

function f(a, b) {
  console.log( a + b );
}


f.defer(1000)(1, 2); 