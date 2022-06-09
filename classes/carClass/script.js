// classes: Main topic
// methods
// properties

// this
class Car {
  constructor(name, color, topSpeed) {
    // properties
    this.name = name
    this.color = color
    this.topSpeed = topSpeed
    this.currentSpeed = 0;
  }

  // getters & setters
  getCurrentSpeed() {
    return currentSpeed
  }

  zeroToSixty() {
    setTimeout(() => {
      console.log('pHEW! That was fast!')
      this.currentSpeed = 60;
      console.log(this.currentSpeed)
    }, 3000)
  }

  drive(speed=10) {
    // console.log('just drove 2 miles!')
    this.currentSpeed += speed
    console.log(`driving speed at ${this.currentSpeed} mph`)
  }

  brake() {
    console.log('braking!')
    this.currentSpeed -= 10
  }

  stop() {
    console.log('coming to a screeching halt!')
    this.currentSpeed = 0
  }
}

// porsche, 'yellow', 250

const ferrari = new Car('ferrari', 'red', 250)
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
console.log(ferrari.currentSpeed)
ferrari.brake()
ferrari.stop()
console.log(ferrari.currentSpeed)

const porsche = new Car('Porsche', 'yellow', 250)
console.log(porsche.name)
console.log(porsche.color)
console.log(porsche.topSpeed)
// const nums = [1, 2, 3, 4, 5]
// nums.forEach(_ => porsche.drive())
porsche.drive(40)
porsche.drive(80)
console.log(porsche.currentSpeed)
porsche.zeroToSixty()
porsche.stop()
console.log(porsche.currentSpeed)

// console.log(ferrari.name)
// console.log(ferrari.color)
// console.log(ferrari.topSpeed)

// console.log(ferrari.currentSpeed)

// ferrari.drive()
// ferrari.brake()

// console.log(ferrari.currentSpeed)
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.zeroToSixty()
// console.log(ferrari.currentSpeed)

// console.log(ferrari)

// you can only have methods inside of classes
// const numbers = [1, 2, 3]
// numbers.push(4) // method
// // console.log(typeof )
// console.log(numbers)

Array.prototype.myPush = function(item) {
  this[this.length] = item 
  return this
}

const fruits = ['🍌', '🍓', '🍪', '🍐', '🍎']
fruits.myPush('🥝')
fruits.myPush('🍪')
fruits.myPush('🍓')
fruits.myPush('🍊')
console.log(fruits)