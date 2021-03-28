function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(script)

  document.head.append(script)
}

loadScript('my/script', function () {
  // 在脚本加载完成后，回调函数才会执行
  console.log(111)
})

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // 所加载的脚本中声明的函数
});

;(function (x) {
  console.log(x)
}.apply({a: 6}, [5]))

;(function (x) {
  console.log('3')
})


// 使用Promises 的方式

function loadScript (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src

    script.onload = () => resolve(script)
    script.onerror = () => reject(new Error(`Script load error for ${src}`))

    document.head.append(script)
  })
}

let p = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js')

p.then(res => {
  console.log(res)
}).catch(error => {
  console.log(error)
})