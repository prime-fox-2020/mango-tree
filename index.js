"use strict"

class FruitTree{
  constructor (name ,age = 0, height = 0, fruits = [], healthStatus = true, harvested = 0, limitAge = 19, limitHeight = 5) {
    this._name = name
    this._age = age
    this._height = height
    this._fruits = fruits
    this._healthStatus = healthStatus
    this._harvested = harvested
    this.limitAge = limitAge
    this.limitHeight = limitHeight
  }

  get age () {
    return this._age
  }

  set age(param){
    this._age = param
    return this
  }

  get height () {
    return this._height
  }

  set height(param){
    this._height = param
    return this
  }

  get fruits () {
    return this._fruits
  }

  set fruits(param){
    this._fruits = param
    return this
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus(param){
    this._healthStatus = param
  }

  get harvested () {
    return this._harvested
  }

  set harvested(param){
    this._harvested = param
    return this
  }


  // Grow the tree
  grow () {
    
    this.age++

    let heighGrow = 0

    if(this.age < 19 && this.height < this.limitHeight){
      heighGrow = (Math.floor(Math.random() * 5) / 10)
    }

    this.height += heighGrow
    this.height = Number(this.height.toFixed(2))

    if(this.age > this.limitAge){
      this.healthStatus = false
    }
  }

  // Produce some Applees
  produceFruit () {
    if(this.age > 0){
      let countFruits = Math.floor(Math.random() * 7) + 1

      for(let i = 0; i < countFruits; i++){
        let fruit = new Fruit()
        fruit.qualityFruits()
        this.fruits.push(fruit.quality)
      }
    }
  }

  // Get some fruits
  harvest () {
    let goodFruits = 0
    let badFruits = 0

    for(let i = 0; i < this.fruits.length; i++){
      if(this.fruits[i] === 'Good'){
        goodFruits++
      } else {
        badFruits++
      }
    }

    this.harvested =  `${this.fruits.length} (${goodFruits} Good, ${badFruits} Bad)`
  }

}

class Fruit {
  // Produce a Apple
  constructor (quality) {
    this.quality = quality
  }

  qualityFruits(){
    let randomFruits = Math.round(Math.random())
    if(randomFruits === 0){
      this.quality = 'Good'
      return this
    } else {
      this.quality = 'bad'
      return this
    }
  }
}

class MangoTree extends FruitTree{
  constructor (name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight) {
    super(name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight)
  }
  produceMangoes() {
    if(this.age > 0){
      let countFruits = Math.floor(Math.random() * 7) + 1

      for(let i = 0; i < countFruits; i++){
        let fruit = new Mango()
        fruit.qualityFruits()
        this.fruits.push(fruit.quality)
      }
    }
  }
}
class Mango extends Fruit {
  constructor(quality){
    super(quality)
  }
}

class AppleTree extends FruitTree{
  constructor (name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight) {
    super(name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight)
  }
  produceApples() {
    if(this.age > 0){
      let countFruits = Math.floor(Math.random() * 7) + 1

      for(let i = 0; i < countFruits; i++){
        let fruit = new Apple()
        fruit.qualityFruits()
        this.fruits.push(fruit.quality)
      }
    }
  }
}
class Apple extends Fruit{
  constructor(quality){
    super(quality)
  }
}

class PearTree extends FruitTree{
  constructor (name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight) {
    super(name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight)
  }
  producePears() {
    if(this.age > 0){
      let countFruits = Math.floor(Math.random() * 7) + 1

      for(let i = 0; i < countFruits; i++){
        let fruit = new Pear()
        fruit.qualityFruits()
        this.fruits.push(fruit.quality)
      }
    }
  }
}
class Pear extends Fruit{
  constructor(quality){
    super(quality)
  }
}

console.log("--------Mango--------")
console.log("The tree is alive! :smile:")
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log(`the tree has met its end. :sad:`)

console.log("--------Apple--------")
console.log("The tree is alive! :smile:")
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log(`the tree has met its end. :sad:`)

console.log("--------Pear--------")
console.log("The tree is alive! :smile:")
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log(`the tree has met its end. :sad:`)