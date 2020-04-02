"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._mature = 3
    this._fruits = 0
    this._healthStatus = true
    this._harvestedGood = this.fruits - Math.trunc((Math.random() * this.fruits))
    this._harvestedBad = this.fruits - this.harvestedGood
    this._harvested = `${this.fruits} (${this.harvestedGood} Good, ${this.harvestedBad} Bad)`
    this._growScale = 10  
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
  set height (param) {
    this._height = param
  }
  get growScale () {
    return this._growScale
  }
  set growScale (param) {
    this._growScale = param
  }
  
  get fruits () {
    return this._fruits
  }
  set fruits (param) {
    this._fruits = param
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (param) {
    this._healthStatus = param
  }

  get harvestedGood () {
    return this._harvestedGood
  }
  set harvestedGood (param) {
    this._harvestedGood = param
  }
  get harvestedBad () {
    return this._harvestedBad
  }
  set harvestedBad (param) {
    this._harvested = param
  }
  get harvested () {
    return this._harvested
  }
  set harvested (param) {
    this._harvested = param
  }
  get mature () {
    return this._mature
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this.age <= 14){
      let randomGrow = (Math.trunc(Math.random()*this.growScale))*0.1
      this.height += randomGrow
      this.height = +this.height.toFixed(1)
    }
    this.age += 1

    if(this.age === 20){
      this.healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if(this.age>=this.mature){
      if(this.age<18){
        this.fruits = Math.trunc(Math.random()*10)
      } else{
        this.fruits = 0
      }
    }
  }

  // Get some fruits
  harvest () {
    this.harvestedGood = this.fruits - Math.trunc((Math.random() * this.fruits))
    this.harvestedBad = this.fruits - this.harvestedGood
    this.harvested = `${this.fruits} (${this.harvestedGood} Good, ${this.harvestedBad} Bad)` 
  }

}

class Mango {
  // Produce a mango
  constructor () {
  }
}
// driver code untuk release 0
//  let mangoTree = new MangoTree()
//  do {
//    mangoTree.grow();
//    mangoTree.produceMangoes();
//    mangoTree.harvest();
//    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
//  } while (mangoTree.healthStatus != false)
  



// Release 1
class AppleTree {

  constructor () {
    this._age = 0
    this._height = 0
    this._mature = 4
    this._fruits = 0
    this._healthStatus = true
    this._harvestedGood = this.fruits - Math.trunc((Math.random() * this.fruits))
    this._harvestedBad = this.fruits - this.harvestedGood
    this._harvested = `${this.fruits} (${this.harvestedGood} Good, ${this.harvestedBad} Bad)` 
    this._growScale = 4
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
  set height (param) {
    this._height = param
  }

  get growScale () {
    return this._growScale
  }
  set growScale (param) {
    this._growScale = param
  }
  
  get fruits () {
    return this._fruits
  }
  set fruits (param) {
    this._fruits = param
  }

  get healthStatus () {
    return this._healthStatus
  }
  set healthStatus (param) {
    this._healthStatus = param
  }

  get harvestedGood () {
    return this._harvestedGood
  }
  set harvestedGood (param) {
    this._harvestedGood = param
  }
  get harvestedBad () {
    return this._harvestedBad
  }
  set harvestedBad (param) {
    this._harvested = param
  }
  get harvested () {
    return this._harvested
  }
  set harvested (param) {
    this._harvested = param
  }
  get mature () {
    return this._mature
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this.age <= 14){
      let randomGrow = (Math.trunc(Math.random()*this.growScale))*0.1
      this.height += randomGrow
      this.height = +this.height.toFixed(1)
    }
    this.age += 1

    if(this.age === 20){
      this.healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if(this.age>=this.mature){
      if(this.age<18){
        this.fruits = Math.trunc(Math.random()*10)
      } else{
        this.fruits = 0
      }
    }
  }

  // Get some fruits
  harvest () {
    this.harvestedGood = this.fruits - Math.trunc((Math.random() * this.fruits))
    this.harvestedBad = this.fruits - this.harvestedGood
    this.harvested = `${this.fruits} (${this.harvestedGood} Good, ${this.harvestedBad} Bad)` 
  }

}

class Apple {}

let appleTree = new AppleTree()
 do {
   appleTree.grow();
   appleTree.produceMangoes();
   appleTree.harvest();
   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
 } while (appleTree.healthStatus != false)


// // Release 2
// class FruitTree {}
// class Fruit {}
