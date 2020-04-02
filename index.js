"use strict"

// Release 2
class FruitTree {
  
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = ''
    this._matureAge = false
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

  get matureAge () {
    return this._matureAge

  }

}
class Fruit {
  constructor (good, bad) {
    this.good = good
    this.bad = bad
    
  }
}

// Release 0

class MangoTree extends FruitTree{

  // Initialize a new MangoTree
  constructor (age, height, fruits, healthStatus, harvested, matureAge) {
    super(age, height, fruits, healthStatus, harvested, matureAge)
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

  get matureAge () {
    return this._matureAge

  }

  // Get current states here

  // Grow the tree
  grow () {
    //mature age 6 year
    //height 35–40 m
    //lifespan 300 year
    //ripen 5 months
    if (this._age < 300){
      this._age += 1
    } else {
      this._healthStatus = false
    }

    if(this._height < 40){
      this._height += Math.floor((Math.random() * 11)+ 1)/10
    } else if (this._height > 40){
      this._height = 40
    }

    if(this._age >= 6){
      this._matureAge = true
    }
  }

  // Produce some mangoes
  produceMangoes () {
    let good = 0
    let bad = 0

    if(this._matureAge === true){
      let howMuch = Math.floor(Math.random() * 10) + 1
      for(let a = 0; a < howMuch; a++){
        let changes = Math.floor(Math.random() * 11) + 1
        if(changes >= 6){
          good += a
        } else {
          bad += a
        }
      }
    }
    this._fruits.push(new Mango(good, bad))
  }

  // Get some fruits
  harvest () {
    let good = this._fruits[this._age - 1].good
    let bad = this._fruits[this._age - 1].bad
    
    this._harvested = `${good+bad} (${good} good, ${bad} bad)`
  }

}

class Mango extends Fruit{
  // Produce a mango
  constructor (good, bad) {
    super(good, bad)
  }
}


//driver code untuk release 0
let mangoTree = new MangoTree()
console.log('The Mango Tree is alive! :smile:')
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('The Mango Tree has met its end. :sad:')
  

// Release 1
class AppleTree extends FruitTree{

  constructor (age, height, fruits, healthStatus, harvested, matureAge) {
    super(age, height, fruits, healthStatus, harvested, matureAge)
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

  get matureAge () {
    return this._matureAge

  }

  grow () {

    if (this._age < 25){
      this._age += 1
    } else {
      this._healthStatus = false
    }

    if(this._height < 15){
      this._height += Math.floor((Math.random() * 11)+ 1)/10
    } else if (this._height > 15){
      this._height = 15
    }

    if(this._age >= 3){
      this._matureAge = true
    }
  }

  produceApples () {
    let good = 0
    let bad = 0

    if(this._matureAge === true){
      let howMuch = Math.floor(Math.random() * 5) + 1
      for(let a = 0; a < howMuch; a++){
        let changes = Math.floor(Math.random() * 11) + 1
        if(changes >= 7){
          good += a
        } else {
          bad += a
        }
      }
    }
    this._fruits.push(new Apple(good, bad))
  }

  harvest () {
    let good = this._fruits[this._age - 1].good
    let bad = this._fruits[this._age - 1].bad
    
    this._harvested = `${good+bad} (${good} good, ${bad} bad)`
  }


}
class Apple extends Fruit{
  constructor (good, bad) {
    super(good, bad)
  }
}

let appleTree = new AppleTree()
console.log('The Apple Tree is alive! :smile:')
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log('The Apple Tree has met its end. :sad:')

// Release 3
class PearTree extends FruitTree{

  constructor (age, height, fruits, healthStatus, harvested, matureAge) {
    super(age, height, fruits, healthStatus, harvested, matureAge)
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

  get matureAge () {
    return this._matureAge

  }

  grow () {

    if (this._age < 100){
      this._age += 1
    } else {
      this._healthStatus = false
    }

    if(this._height < 30){
      this._height += Math.floor((Math.random() * 11)+ 1)/10
    } else if (this._height > 30){
      this._height = 30
    }

    if(this._age >= 10){
      this._matureAge = true
    }
  }

  producePears () {
    let good = 0
    let bad = 0

    if(this._matureAge === true){
      let howMuch = Math.floor(Math.random() * 15) + 1
      for(let a = 0; a < howMuch; a++){
        let changes = Math.floor(Math.random() * 11) + 1
        if(changes >= 8){
          good += a
        } else {
          bad += a
        }
      }
    }
    this._fruits.push(new Pear(good, bad))
  }

  harvest () {
    let good = this._fruits[this._age - 1].good
    let bad = this._fruits[this._age - 1].bad
    
    this._harvested = `${good+bad} (${good} good, ${bad} bad)`
  }


}
class Pear extends Fruit{
  constructor (good, bad) {
    super(good, bad)
  }
}

let pearTree = new PearTree()
console.log('The Pear Tree is alive! :smile:')
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log('The Pear Tree has met its end. :sad:')


