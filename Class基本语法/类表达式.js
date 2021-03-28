// 类表达式
let User = class {
  sayHi() {
    alert("Hello")
  }
}

// 类表达式也可以有文字
let User = class MyClass {
  sayHi () {
    // 此名字只在类内部可见
    console.log(MyClass)
  }
}

// 显示MyClass
new User().sayHi()
// 在外部不可见
alert(MyClass)

// 也可以按需动态创建类
function makeClass (phrase) {
  return class {
    sayHi () {
      console.log(phrase)
    }
  }
}

let User = makeClass('Hello')
// Hello
new User().sayHi()

/**  Getters/setters  */

class User {
  constructor (name) {
    this.name = name
  }

  get name () {
    return this._name
  }

  set name (value) {
    if (value < 4) {
      console.error('name is too short')
      return
    }
    this._name = value
  }
}

let user = new User('John')
console.log(user.name)

user = new User()
console.log(user.name)


/**  类字段 */
// 类字段是一种允许添加任何属性的语法

class User {
  timer = 'w'

  sayHi = () => {
    console.log(`Hello, ${timer}!`);
  }
}

new User().sayHi() // Hello John

// 类字段重要不同之处在于，他们会在每个独立对象中被设好，而不是设在User.prototype
class User {
  name = 'John'
}

let user = new User()
console.log(user.name) // John
console.log(User.prototype.name) // undefined

