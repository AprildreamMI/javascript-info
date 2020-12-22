function sumTo (n) {
  if (n === 1) {
    return n
  } else {
    return n + sumTo(n - 1)
  }
}

console.log(sumTo(100))