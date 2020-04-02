"use strict"

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

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1;

    if(this.height <= 5){
      this._height += Math.random() * 1;
    }
    
    if(this.age === 20) this._healthStatus = false
  }

  // Produce some mangoes
  produceMangoes () {
    if(this.age > 5){
      this._harvested = Math.ceil(Math.random() * 11)
      this.harvest(this._harvested)
    }
  }

  // Get some fruits
  harvest (fruits) {
    let good = 0;
    let bad = 0;
    for (let i = 0; i < fruits; i++) {
      const dice = Math.round(Math.random());
      if(dice === 1){
        good++;
      }else {
        bad++;
      }
    }
    this._harvested = `${fruits} (${good} good, ${bad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor () {
    
  }
}


  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
