/**
 * 1: 1
 * 2: 1
 * 3: 2
 * 4: 3
 * 5: 5
 * 6: 8
 * 7: 13
 * 8: 21
 */

function fib (n) {
  if (n === 0) {
    return 0
  }
  if (n === 1 || n === 2) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

let tmp = {
  0: 0,
  1: 1,
  2: 1
}
function fib (n) {
  if (tmp[n]) {
    return tmp[n]
  } else {
    tmp[n] = fib(n - 1) + fib(n - 2)
    return tmp[n]
  }
}
console.log(fib(77))

console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
console.log(fib(9))