new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
}).then(res => {
  console.log(res)
  return res * 2
})


let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})

console.log(p.then(res => {
  return res * 2
}))