"use strict"

// Release 2
class FruitTree {
  constructor() {

    this._age = 0
    this._matureAge = 5
    this._maxAge = 15
    this._heights = 0
    this._maxHeights = 10
    this._healthStatus = true
    this._yields = []
    this._fruits = []
    this._maxAge = 10
    this._matureAge = 3
    this._maxHeights = 8
  }

  get age () {
    return this._age
  }

  get matureAge () {
    return this._matureAge
  }

  get heights () {
    return `${this._heights} m`
  }

  get healthStatus () {
    return this._healthStatus
  }

  get yieldResult () {
    // yield result
    return `${this._yields[0]}, ${this._yields[1]} Good, ${this._yields[2]} Bad`
  }

  grow = () => {
    this._age++
    // assuming that if the tree has met it's EOL
    if ( this._age >= this._maxAge ) {
      this._healthStatus = false
    }
    // if age below mature, growth++
    if ( this._age < this._matureAge ) {
      this._heights += Math.floor(Math.random() * this._age) + 2
    }
  }

  maturedTree = () => {
    let random = Math.floor(Math.random() * this._matureAge) + 1
    let fruiting = new Fruit()

    if (this._age >= this._matureAge) {
      for (let i = 0; i < random; i++) {
        this._fruits.push(fruiting)
      }
    }
  }

  harvest = () => {
    let total = this._fruits.length, [good, bad, medium] = [0,0,0]

    for (let fruit = 0; fruit < total; fruit++) {
      good += this._fruits[fruit].quality == 'Good' ? 1 : 0
      bad += this._fruits[fruit].quality == 'Bad' ? 1 : 0
      // optional value
      // medium += this._fruits[fruit].quality == 'Medium' ? 1 : 0
    }

    this._yields = [total, good, bad]
  }
}

class Fruit {
  constructor () {
    this.quality = this.fruitQuality()
  }

  fruitQuality = () => {
    let random = Math.floor(Math.random() * 5),
        grades = {5:'Good', 4:'Good', 3:'Good', 2:'Bad', 1:'Bad', 0:'Bad'}
    // console.log(grades[random])
    return grades[random] 
  }
}

// Release 0

// class MangoTree {
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor () {
    super() // let the parent class handle all the property
    this._maxAge = 15
    this._maxHeights = 10
  }

  // Produce some mangoes
  produceMangoes = () => {
    let fruiting = Math.floor(Math.random() * this._heights) * 5
    this._fruits = []

    for (let m = 0; m < fruiting; m++) {
      this._fruits.push(new Mango())
    }
  }

}

class Mango extends Fruit {
  // Produce a mango
  // constructor () {
    
  // }
}

/* *
  * driver code untuk release 0
*/
let mangoTree = new MangoTree()
console.log('\n-------------------------------------------------------------------------\n')
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.heights} | Fruits harvested = ${mangoTree.yieldResult}`)
} while ( mangoTree.healthStatus != false )


// Release 1
class AppleTree extends FruitTree {
  constructor () {
    super(10, 3, 8) // again, let the parent class handle all the properties
    // this._maxAge = 10
    // this._matureAge = 3
    // this._maxHeights = 8
  }

  producingApples = () => {
    let fruiting = Math.floor(Math.random() * this._maxAge) * 5
    this._fruits = []

    for (let a = 0; a < fruiting; a++) {
      this._fruits.push(new Apple())
    }
  }
}

class Apple extends Fruit {}
console.log('\n-------------------------------------------------------------------------\n')
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.producingApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.heights} | Fruits harvested = ${appleTree.yieldResult}`)
} while ( appleTree.healthStatus != false )

// Release 3
class PearTree extends FruitTree {
  constructor () {
    super() // again, let the parent class handle all the properties
    this._maxAge = 25
    this._matureAge = 5
    this._maxHeights = 10
  }

  producingPears = () => {
    let fruiting = Math.floor(Math.random() * this._maxAge) * 5
    this._fruits = []

    for (let a = 0; a < fruiting; a++) {
      this._fruits.push(new Pear())
    }
  }
}

class Pear extends Fruit {}
console.log('\n-------------------------------------------------------------------------\n')
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.producingPears();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.heights} | Fruits harvested = ${pearTree.yieldResult}`)
} while ( pearTree.healthStatus != false )