"use strict"

const matureAge = 3
const maxGrowth = 10

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = null) {
    this._age = age
    this._height = height
    this._fruits = fruits
    this._healthStatus = healthStatus
    this._harvested = harvested
  }

  get age () {
    return this._age
  }
  set age (param) {
    this._age = param
  }

  get height () {
    return this._height
  }
  set height (param){
    this._height = param 
  }

  get fruits () {
    return this._fruits
  }
  set fruits (param){
    this._fruits = param
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (param){
  this._healthStatus = param    
  }

  get harvested () {
    return this._harvested
  }
  set harvested (param){
    this._harvested = param
  }

  // Get current states here

  // Grow the tree
  
  grow () {
    this.age += 1
    this.height += Math.round(Math.random()*10)/10
    if (this.age >= maxGrowth){
      this.healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if (this.age >= matureAge){
      this.fruits = Math.round(Math.random()*10)
    }
  }
  
  // Get some fruits
  harvest () {
    let good = 0;
    let bad = 0;
    for (let i = 0; i < this.fruits; i++) {
      const random = Math.round(Math.random());
      if(random === 1){
        good++;
      }else {
        bad++;
      }
    }
    this.harvested = `${this.fruits} (${good} good, ${bad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor () {
    
  }
}

console.log(`The tree is alive! :smile:`)

//  driver code untuk release 0
 let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus != false)

 console.log(`The tree has met its end. :sad:`)
  

// Release 1
// class AppleTree {}
// class Apple {}

// Release 2
// class FruitTree {}
// class Fruit {}
