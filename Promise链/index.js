new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000)
}).then(function (result) {
  console.log(result)
  return result * 2
}).then(function (result) {
  console.log(result)
  setTimeout(function () {
    return result * 2
  }, 3000)
}).then(function (result) {
  console.log(result)
})


new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000)
}).then(function(result) {
  console.log(result)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000)
  })
}).then(function(result) {
  console.log(result)
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000)
  })
}).then(function(result) {
  console.log(result)
})

console.log(fetch)