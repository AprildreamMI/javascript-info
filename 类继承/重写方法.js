class Animal {
  constructor (name) {
    this.speed = 0
    this.name = name
  }
  rund (speed) {
    this.speed = speed
    console.log(`${this.name} runs with speed ${this.speed}`)
  }
  stop () {
    this.speed = 0
    console.log(`${this.name} stands still`)
  }
}

let animal = new Animal('狗')

animal.rund(10)

class Rabbit extends Animal {
  hide () {
    console.log(`${this.name} hides`)
  }

  stop () {
    super.stop() // 调用父类的stop
    this.hide()
  }
}

let rabbit = new Rabbit('White Rabbit')

rabbit.rund(5)
rabbit.stop()
console.log(rabbit)