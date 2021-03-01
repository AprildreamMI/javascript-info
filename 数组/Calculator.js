function Calculator () {
  // 方法列表
  this.methodList = []
  this.calculate = function (str) {
    let list = str.split(' ')
    let he = 0
    if (list[1] === '+') {
      he = +list[0] + +list[2]
    } else if (list[1] === '-') {
      he = +list[0] - +list[2]
    } else {
      let methodItem = this.methodList.find(item => {
        return item.name === list[1]
      })

      if (!methodItem) {
        return new Error('不存在此运算方法！')
      }
      he = methodItem.func(list[0], list[2])
    }

    return he
  }

  this.addMethod = function (name, func) {
    this.methodList.push({
      name,
      func
    })
  }
}

let calc = new Calculator();
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

console.log(calc.calculate('3 + 7'))
console.log(calc.calculate('2 ** 3'))