"use strict"

// Release 2
class FruitTree {
  constructor (yearLimit, heightLimit, matureAge) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = {good: 0, bad: 0}
    this._yearLimit = yearLimit
    this._heightLimit = heightLimit
    this._matureAge = matureAge
  }

  get age () {
    return this._age
  }
  get height () {
    return this._height.toFixed(1)
  }
  get fruits () {
    return this._fruits
  }
  get healthStatus () {
    return this._healthStatus
  }
  get harvested () {
    return `${this._harvested.good + this._harvested.bad} (${this._harvested.good} good, ${this._harvested.bad} bad)`
  }

  // Grow the tree
  grow () {
    this._age++
    if(this._age > this._yearLimit){
      this._healthStatus = false
    }
    if(this._height < this._heightLimit){
      this._height += Math.random()
    }
  }

  harvest () {
    let good = []
    let bad = []
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i]._quality === 'bad') {
        bad.push(this.fruits[i])
      } else {
        good.push(this.fruits[i])
      }
    }
    this._harvested.good = good.length
    this._harvested.bad = bad.length
    this._fruits = []
  }

}

class Fruit {
  constructor () {
    this._quality = Math.round(Math.random()) ? 'good' : 'bad'
  }
}

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor () {
    super(10, 3, 7)
  }
  
  // Produce some mangoes
  produceMangoes () {
    if (this._age >= this._matureAge) {
      let total = Math.floor(Math.random() * 15) + 1
      for (let i = 0; i < total; i++) {
        let mangga = new Mango()
        this._fruits.push(mangga)
      }
    }
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor () {
    super()
  }
}

// console.log(mangoTree);



// Release 1
class AppleTree extends FruitTree {
  // Initialize a new MangoTree
  constructor () {
    super(19, 5, 4)
  }
  
  // Produce some appless
  produceApples () {
    if (this._age >= this._matureAge) {
      let total = Math.floor(Math.random() * 15) + 1
      for (let i = 0; i < total; i++) {
        let apple = new Apple()
        this._fruits.push(apple)
      }
      // console.log(this._fruits);
    }
  }
}

class Apple extends Fruit {
  // Produce an apple
  constructor () {
    super()
  }
}

// driver code untuk release 0

let mangoTree = new MangoTree()
let appleTree = new AppleTree()

do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

