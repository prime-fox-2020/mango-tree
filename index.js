"use strict"


class FruitTree {
  // Initialize a new FruitTree
  constructor (age = 0, height = 0, fruits = [], stopGrowAt = 10, matureAge = 2, deadAt = 25, healthStatus = true, harvested = '') {
    this._age = age
    this._height = height
    this._fruits = fruits
    this._stopGrowAt = stopGrowAt
    this._matureAge = matureAge
    this._deadAt = deadAt
    this._healthStatus = healthStatus
    this._harvested = harvested
  }

  //setter&getter
  get age(){return this._age}
  set age(p){this._age=p}
  get height(){return this._height}
  set height(p){this._height=p}
  get fruits(){return this._fruits}
  set fruits(p){this._fruits=p}
  get stopGrowAt(){return this._stopGrowAt}
  set stopGrowAt(p){this._stopGrowAt=p}
  get matureAge(){return this._matureAge}
  set matureAge(p){this._matureAge=p}
  get deadAt(){return this._deadAt}
  set deadAt(p){this._deadAt=p}
  get healthStatus(){return this._healthStatus}
  set healthStatus(p){this._healthStatus=p}
  get harvested(){return this._harvested}
  set harvested(p){this._harvested=p}

  // Grow the tree
  grow () {
    if(this.age < this.deadAt){
      this.age++
      if(this.age < this.stopGrowAt){
        let add = Math.round((Math.random() * (2 - 0) + 0) * 10) / 10
        if((add * 10) % 1 !== 0){
          add += 0.000000000001
        }
        this.height += add
      }
    }
  }

  // Produce some fruits
  produceFruits () {
    if(this.age >= this.matureAge){
      const numberOfFruits = Math.floor(Math.random() * (15 - 1)) + 1
      for(let i = 0; i < numberOfFruits; i++){
        const fruit = new Fruit()
        this.fruits.push(fruit)
      }
    }
  }

  // Get some fruits
  harvest () {
    let numberOfGoods = 0
    let numberOfBads = 0

    for(let i = 0; i < this.fruits.length; i++){
      if(this.fruits[i].condition === 1){
        numberOfGoods++
      }else if(this.fruits[i].condition === 0){
        numberOfBads++
      }
    }
    this.harvested = `${numberOfBads + numberOfGoods} (${numberOfGoods} good, ${numberOfBads} bad)`
    this.fruits = [];
    if(this.age === this.deadAt){
      this.healthStatus = false
    }
  }
}


class Fruit {
  constructor (condition = 0) {
    this.condition = condition + Math.round(Math.random())
  }
}


class MangoTree extends FruitTree{
  constructor () {
    super()
  }
}


class Mango extends Fruit{
  constructor () {
    super()
  }
}

//print
console.log('========== MANGO ==========')
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('The mango tree has met its end. :sad:')


class AppleTree extends FruitTree{
  constructor () {
    super(null, null, [], 2, 3, 5, null, null)
  }

  produceFruits () {
    if(this.age >= this.matureAge){
      const numberOfFruits = Math.floor(Math.random() * (15 - 1)) + 1
      for(let i = 0; i < numberOfFruits; i++){
        const apple = new Apple()
        apple.generateColor()
        this.fruits.push(apple)
      }
    }
  }

  harvest(){
    let numberOfGoods = 0
    let numberOfBads = 0
    let numberOfGreens = 0
    let numberOfReds = 0

    for(let i = 0; i < this.fruits.length; i++){
      if(this.fruits[i].condition === 1){
        numberOfGoods++
      }else if(this.fruits[i].condition === 0){
        numberOfBads++
      }
      if(this.fruits[i].color === 'green'){
        numberOfGreens++
      }else if(this.fruits[i].color === 'red'){
        numberOfReds++
      }
    }
    this.harvested = `${numberOfBads + numberOfGoods} (${numberOfGoods} good, ${numberOfBads} bad) (${numberOfGreens} green, ${numberOfReds} red)`
    this.fruits = [];
    if(this.age === this.deadAt){
      this.healthStatus = false
    }
  }
}


class Apple extends Fruit{
  constructor (color) {
    super()
    this._color = color
  }

  get color(){return this._color}
  set color(p){this._color=p}

  generateColor(){
    let colors = ['red', 'green']
    this.color = colors[Math.round(Math.random())]
  }
}


//print
console.log('========== APPLE ==========')
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log('The apple tree has met its end. :sad:')


class PearTree extends FruitTree{
  constructor () {
    super(null, null, [], 7, 5, 15, null, null)
  }
}


class Pear extends Fruit{
  constructor () {
    super()
  }
}

//print
console.log('========== PEAR ==========')
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log('The pear tree has met its end. :sad:')