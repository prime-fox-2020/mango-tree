"use strict"

// Release 2
class FruitTree {
  
  constructor (age=0, height=0, fruits=0, healthStatus=true, harvested=null) {
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
}

class Fruit {
  constructor () {
    this.quality = this.quality()
  }
  quality(){
    if (Math.random() > 0.4){
      return 'good'
    } else {
      return 'bad'
    }
  }
}

// Release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor () {
    super()
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1
    if (this._height <= 6.5){
      this._height += Math.ceil(Math.random()*3)*0.5
    } else {
      this._height = this._height
    }
    if (this._age === 18){
      this._healthStatus = false
    } 
    return this
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._age >= 5){
      this._fruits = Math.ceil(Math.random()*10)
    }
    return this
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0; i<this._fruits; i++){
      let fruit = new Mango
      if (fruit.quality === 'good'){
        good++
      } else if (fruit.quality === 'bad'){
        bad++
      }
    }
    return this._harvested = `${this._fruits} (${good} good, ${bad} bad)`
  }

}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super()
  }
}


//   driver code untuk release 0
  //  let mangoTree = new MangoTree()
  //  console.log('the mango tree is alive')
  //  do {
  //    mangoTree.grow();
  //    mangoTree.produceMangoes();
  //    mangoTree.harvest();
  //    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  //  } while (mangoTree.healthStatus != false)
  //  console.log('the mango tree has dead')
  

// Release 1
class AppleTree extends FruitTree {
  constructor () {
    super()
    
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1
    if (this._height <= 8){
      this._height += Math.ceil(Math.random()*3)*0.75
    } else {
      this._height = this._height
    }
    if (this._age === 25){
      this._healthStatus = false
    }
    return this
  }

  // Produce some apples
  produceApples () {
    if(this._age >= 7){
      this._fruits = Math.ceil(Math.random()*10)
    }
    return this
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0; i<this._fruits; i++){
      let fruit = new Apple
      if (fruit.quality === 'good'){
        good++
      } else if (fruit.quality === 'bad'){
        bad++
      }
    }
    return this._harvested = `${this._fruits} (${good} good, ${bad} bad)`
  }
}
class Apple extends Fruit {
  // Produce a mango
  constructor () {
    super()
  }
}

// Start appleTree
// let appleTree = new AppleTree()
// console.log('the apple tree is alive')
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus != false)
// console.log('the apple tree has dead')


// Release 3

class PeachTree extends FruitTree{
  constructor(){
    super()
  }

  grow () {
    this._age += 1
    if (this._height <= 7){
      this._height += Math.ceil(Math.random()*3)*0.625
    } else {
      this._height = this._height
    }
    if (this._age === 23){
      this._healthStatus = false
    }
    return this
  }

  // Produce some apples
  producePeach () {
    if(this._age >= 9){
      this._fruits = Math.ceil(Math.random()*10)
    }
    return this
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0; i<this._fruits; i++){
      let fruit = new Peach
      if (fruit.quality === 'good'){
        good++
      } else if (fruit.quality === 'bad'){
        bad++
      }
    }
    return this._harvested = `${this._fruits} (${good} good, ${bad} bad)`
  }
}

class Peach extends Fruit {
  constructor(){
    super()
  }
}

let peachTree = new PeachTree()
console.log('the peach tree is alive')
do{
  peachTree.grow()
  peachTree.producePeach()
  peachTree.harvest()
  console.log(`[Year ${peachTree.age} Report] Height = ${peachTree.height} | Fruits harvested = ${peachTree.harvested}`)
}while (peachTree.healthStatus != false)
console.log('the peach tree is dead')