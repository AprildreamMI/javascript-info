function sum (a) {
  function f (b) {
    f.a += a + b
  }

  f.toString = function () {
    return f.a
  }

  return f
}

/**
 * 1 5
 * @param {*} from 
 * @param {*} to 
 */
function printNumbers (from, to) {
  let a = setInterval(() => {
    console.log(from++)
    if (from === to) {
      clearInterval(a)
    }
  }, 1000)
}

printNumbers(1, 5)