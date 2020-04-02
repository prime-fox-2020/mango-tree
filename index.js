"use strict"


class MangoTree {

  // Initialize a new MangoTree
  constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = 0, limitAge = 0, limitHeight = 5) {
    this._age = age
    this._height = height
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = harvested
    this.limitAge = limitAge
    this.limitHeight = limitHeight
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this.fruit
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age++
    let heighGrow = 0

    if(this._age < 10 && this.height < 4.4){
      heighGrow = (Math.floor(Math.random() * 10) / 10)
    }
    this._height += heighGrow
    this._height = Number(this._height.toFixed(2))

    if(this._age > 19){
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age > this.limitAge){
      let countFruits = Math.floor(Math.random() * 2) + 1

      for(let i = 0; i < countFruits; i++){
        let fruit = new Mango
        fruit.qualityFruits()
        this._fruits.push(fruit.quality)
      }
    }

  }

  // Get some fruits
  harvest () {
    let goodFruits = 0
    let badFruits = 0

    for(let i = 0; i < this._fruits.length; i++){
      if(this._fruits[i] === 'Good'){
        goodFruits++
      } else {
        badFruits++
      }
    }

    this._harvested =  `${this._fruits.length} (${goodFruits} Good, ${badFruits} Bad)`
    this._fruits
  }

}

class Mango {
  // Produce a mango
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

class AppleTree {
  constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = 0, limitAge = 0, limitHeight = 5) {
    this._age = age
    this._height = height
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = harvested
    this.limitAge = limitAge
    this.limitHeight = limitHeight
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this.fruit
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }

  // Grow the tree
  grow () {
    this._age++
    let heighGrow = 0

    if(this._age < 10 && this.height < 4.4){
      heighGrow = (Math.floor(Math.random() * 10) / 10)
    }
    this._height += heighGrow
    this._height = Number(this._height.toFixed(2))

    if(this._age > 19){
      this._healthStatus = false
    }
  }

  // Produce some mangoes
  produceApple () {
    if(this._age > this.limitAge){
      let countFruits = Math.floor(Math.random() * 2) + 1

      for(let i = 0; i < countFruits; i++){
        let fruit = new Apple
        fruit.qualityFruits()
        this._fruits.push(fruit.quality)
      }
    }

  }

  // Get some fruits
  harvest () {
    let goodFruits = 0
    let badFruits = 0

    for(let i = 0; i < this._fruits.length; i++){
      if(this._fruits[i] === 'Good'){
        goodFruits++
      } else {
        badFruits++
      }
    }

    this._harvested =  `${this._fruits.length} (${goodFruits} Good, ${badFruits} Bad)`
    this._fruits
  }

}

class Apple {
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

console.log("--------Mango--------")
console.log("The tree is alive! :smile:")
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
 mangoTree.harvest();
 console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log(`the tree has met its end. :sad:`)

console.log("--------Apple--------")
console.log("The tree is alive! :smile:")
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApple();
 appleTree.harvest();
 console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log(`the tree has met its end. :sad:`)