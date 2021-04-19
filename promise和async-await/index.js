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


function loadJson1(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}


async function loadScript(url) {
  try {
    let result = await fetch(url)
    return result
  } catch (err) {
    console.log(err)
  }
}


// 询问用户名，直到 github 返回一个合法的用户
function demoGithubUser1() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

// 询问用户名，直到 github 返回一个合法的用户
async function demoGithubUser() {
  let user
  do {
    let name = prompt("Enter a name?", "iliakan");

    try {
      let user = loadJson(`https://api.github.com/users/${name}`)
      alert(`Full name: ${user.name}.`);
      return user
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
      } else {
        throw err;
      }
    }
  } while (!user)
}
