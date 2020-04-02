"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._harvested = { good: 0, bad: 0 }
    this._healthStatus = true
    this.deadAge = 20
    this.matureAge = 4
    this.limitGrowth = 15
    this.limitProduce = 19
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
    let good = this._harvested.good
    let bad = this._harvested.bad
    return `${good + bad} (${good} good, ${bad} bad)`
  }

  // Get current states here

  // Grow the tree
  grow () {
  }

  // Produce some mangoes
  produceMangoes () {
  }

  // Get some fruits
  harvest () {

  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality = Math.round(Math.random()) ? 1 : 0
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

 console.log(`The tree is alive! :smile:`)
 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus != false)
 console.log(`The tree has met its end. :sad:`)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
