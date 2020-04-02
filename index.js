"use strict"

// Release 2

class FruitTree {
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
}


class Fruit {

}

// Release 0

const matureMango = 3
const maxGrowthMango = 10

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (age, height, fruits, healthStatus, harvested) {
    super (age, height, fruits, healthStatus, harvested)
  }

  // Grow the tree
  
  grow () {
    this.age += 1
    this.height += Math.round(Math.random()*10)/10
    if (this.age >= maxGrowthMango){
      this.healthStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if (this.age >= matureMango){
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


//  driver code untuk release 0
console.log(`The mango tree is alive! :smile:`)

let mangoTree = new MangoTree()
 do {
   mangoTree.grow();
   mangoTree.produceMangoes();
   mangoTree.harvest();
   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 } while (mangoTree.healthStatus != false)  

 console.log(`The tree has met its end. :sad:`)
 console.log(`\n=============================================================\n`)

 // Release 1

 const matureAgeApple = 5
 const maxGrowthApple = 15

 class AppleTree extends FruitTree {
  
  // Initialize a new AppleTree
  constructor (age, height, fruits, healthStatus, harvested) {
    super (age, height, fruits, healthStatus, harvested)
  }

  // Grow the tree
  
  grow () {
    this.age += 1
    this.height += Math.round(Math.random()*10)/10
    if (this.age >= maxGrowthApple){
      this.healthStatus = false
    }
  }

  // Produce some apples
  produceMangoes () {
    if (this.age >= matureAgeApple){
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

class Apple {
  constructor(){

  }
}

//  driver code untuk release 1
console.log(`The apple tree is alive! :smile:`)

let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)  

console.log(`The tree has met its end. :sad:`)
console.log(`\n=============================================================\n`)

 // Release 3

 const matureAgePear = 2
 const maxGrowthPear = 25

 class PearTree extends FruitTree {
  
  // Initialize a new PearTree
  constructor (age, height, fruits, healthStatus, harvested) {
    super (age, height, fruits, healthStatus, harvested)
  }

  // Grow the tree
  
  grow () {
    this.age += 1
    this.height += Math.round(Math.random()*10)/10
    if (this.age >= maxGrowthPear){
      this.healthStatus = false
    }
  }

  // Produce some pears
  produceMangoes () {
    if (this.age >= matureAgePear){
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

class Pear {
  constructor(){

  }
}

//  driver code untuk release 1
console.log(`The pear tree is alive! :smile:`)

let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceMangoes();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)  

console.log(`The tree has met its end. :sad:`)
console.log(`\n=============================================================\n`)