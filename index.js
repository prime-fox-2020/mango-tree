"use strict"

// Release 0

// class MangoTree {

//   // Initialize a new MangoTree
//   constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested, matureAge = 0, maxHeight = 5.5, deadAge = 19) {
//     this._age = age
//     this._height = height
//     this._fruits = []
//     this._healthStatus = healthStatus
//     this._harvested = harvested
//     this._matureAge = matureAge
//     this._maxHeight = maxHeight
//     this._deadAge = deadAge
//   }

//   get age () {
//     return this._age
//   }

//   get height () {
//     return this._height
//   }

//   get fruits () {
//     return this._fruits
//   }

//   get healthStatus () {
//     return this._healthStatus
//   }

//   get harvested () {
//     return this._harvested
//   }

//   // Get current states here

//   // Grow the tree
//   grow () {
//     this._age += 1
//     let changeHeight = 0
//     if(this._age < 10 && this.height < this._maxHeight){
//       changeHeight = (Math.floor(Math.random()*10)/10)
//     }
//     this._height += changeHeight
//     this._height = Number(this._height.toFixed(3))
//     if(this._age > this._deadAge){
//       this._healthStatus = false
//     }
//   }

//   // Produce some mangoes
//   produceMangoes () {
//     if(this._age > this._matureAge){
//       let countFruits = Math.floor(Math.random()*9) + 1
//       for(let i = 0; i < countFruits; i++){
//         let fruit = new Mango
//         fruit.qualityFruits()
//         this._fruits.push(fruit.quality)
//       }
//     }
//   }

//   // Get some fruits
//   harvest () {
//     let goodFruits = 0
//     let badFruits = 0
//     for(let i = 0; i < this._fruits.length; i++){
//       if(this._fruits[i] == 'good'){
//         goodFruits++
//       }
//       else{
//         badFruits++
//       }
//     }
//     this._harvested = `${this._fruits.length} ( ${goodFruits} good, ${badFruits} bad )`
//     this._fruits = []
//   }

// }

// class Mango {
//   // Produce a mango
//   constructor(quality){
//     this.quality = quality
//   }
//   qualityFruits(){
//     let random = Math.round(Math.random())
//     if(random == 0){
//       this.quality = 'good'
//       return this
//     }
//     else{
//       this.quality = 'bad'
//       return this
//     }
//   }
// }

  // driver code untuk release 0
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)
// console.log("The tree has met it's end. :sad:")

// Release 1
/* Creating new class using concept oop polymorphism */
// class AppleTree extends MangoTree{
//   constructor (age, height, fruits, healthStatus, harvested, matureAge, maxHeight, deadAge) {
//     super(age, height, fruits, healthStatus, harvested, 3, 7.5, 24)
//   }
//   produceApples () {
//     if(this._age > this._matureAge){
//       let countFruits = Math.floor(Math.random()*9) + 1
//       for(let i = 0; i < countFruits; i++){
//         let fruit = new Apple
//         fruit.qualityFruits()
//         this._fruits.push(fruit.quality)
//       }
//     }
//   }
// }
// class Apple extends Mango{
//   constructor (quality){
//     super(quality)
//   }
// }
// let appleTree = new AppleTree()
// do {
//   appleTree.grow();
//   appleTree.produceMangoes();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus != false)
// console.log("The tree has met it's end. :sad:")


// Release 2
class FruitTree {
  constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested, matureAge = 0, appMaxHeight = 4, heightStopAge = 10, deadAge = 9, fruitName = new Fruit) {
    this._age = age
    this._height = height
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = harvested
    this._matureAge = matureAge
    this._appMaxHeight = appMaxHeight
    this._heightStopAge = heightStopAge
    this._deadAge = deadAge
    this._fruitName = fruitName
  }
  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }
  grow () {
    this._age += 1
    let changeHeight = 0
    if(this._age < this._heightStopAge && this._height < this._appMaxHeight){
      changeHeight = (Math.floor(Math.random()*10)/10)
    }
    this._height += changeHeight
    this._height = Number(this._height.toFixed(3))
    if(this._age > this._deadAge){
      this._healthStatus = false
    }
  }
  produces () {
    if(this._age > this._matureAge){
      let countFruits = Math.floor(Math.random()*9) + 1
      for(let i = 0; i < countFruits; i++){
        let fruit = this._fruitName
        fruit.qualityFruits()
        this._fruits.push(fruit.quality)
      }
    }
  }
  harvest () {
    let goodFruits = 0
    let badFruits = 0
    for(let i = 0; i < this._fruits.length; i++){
      if(this._fruits[i] == 'good'){
        goodFruits++
      }
      else{
        badFruits++
      }
    }
    this._harvested = `${this._fruits.length} ( ${goodFruits} good, ${badFruits} bad )`
    this._fruits = []
  }
  
}
class Fruit {
  constructor(quality){
    this.quality = quality
  }
  qualityFruits(){
    let random = Math.round(Math.random())
    if(random == 0){
      this.quality = 'good'
      return this
    }
    else{
      this.quality = 'bad'
      return this
    }
  }
}
/* Creating new class with oop concept abstraction */
class MangoTree extends FruitTree{
  constructor (age, height, fruits, healthStatus, harvested, matureAge, appMaxHeight, heightStopAge, deadAge, fruitName) {
    super(age, height, fruits, healthStatus, harvested, 0, 5.5, 12, 19, new Mango)
  }
}
class Mango extends Fruit{
  constructor (quality){
    super(quality)
  }
}
class AppleTree extends FruitTree{
  constructor (age, height, fruits, healthStatus, harvested, matureAge, appMaxHeight, heightStopAge, deadAge, fruitName) {
    super(age, height, fruits, healthStatus, harvested, 3, 8, 25, 24, new Apple)
  }
}
class Apple extends Fruit{
  constructor (quality){
    super(quality)
  }
}

let mangoTree = new MangoTree()
console.log("Mango tree planted. Yeay!")
do {
  mangoTree.grow();
  mangoTree.produces();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log("The tree has met it's end. :sad:\n\n")

let appleTree = new AppleTree()
console.log("Apple tree planted. Yeay!")
do {
  appleTree.grow();
  appleTree.produces();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log("The tree has met it's end. :sad:\n\n")

/* Creating new class with oop concept abstraction */

class PearTree extends FruitTree{
  constructor (age, height, fruits, healthStatus, harvested, matureAge, maxHeight, heightStopAge, deadAge, fruitName) {
    super(age, height, fruits, healthStatus, harvested, 2, 12, 25, 29, new Pear)
  }
}
class Pear extends Fruit{
  constructor (quality){
    super(quality)
  }
}

let pearTree = new PearTree()
console.log("Pear tree planted. Yeay!")
do {
  pearTree.grow();
  pearTree.produces();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log("The tree has met it's end. :sad:")