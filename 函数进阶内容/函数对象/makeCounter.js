function makeCounter () {
  makeCounter.count = 4

  makeCounter.set = function (value) {
    console.log('set', value)
    makeCounter.count = value
  }
  makeCounter.decrease = function () {
    makeCounter.count--
  }
  
  return makeCounter.count
}

console.log(makeCounter())
makeCounter.set(6)
console.log(makeCounter())
