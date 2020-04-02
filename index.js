"use strict"

// Release 2
class FruitTree {
  constructor(age = 0, height = 0) {
    this._age = age,
      this._height = height,
      this._fruits = [],
      this._healthStatus = true,
      this._haevested = null
    }
    
  get age() {
    return this._age
  }
  
  get height() {
    return this._height.toFixed(1)
  }
  
  get fruits() {
    return this._fruits
  }

  get healthStatus() {
    return this._healthStatus
  }

  get harvested() {
    return this._haevested
  }

  // Get current states here

  grow() {
    this._age++
    if (this._age > this.deadAge) {
      this._healthStatus = false
    }
    if (this._age < this.stopHeight) {
      this._height += Math.random() * 0.7 + 0.2
    }
  }
  
  // Get some fruits
  harvest() {
    let goodQuality = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i].quality == 'good') {
        goodQuality++
      }
    }

    this._haevested = `${this._fruits.length} (${goodQuality} good : ${this._fruits.length - goodQuality} bad)`
  }
}

class Fruit {
  constructor() {
    this.quality = this.getQuality()
  }
  
  getQuality() {
    return Math.random() < 0.5 ? 'good' : 'bad'
  }
}

// Release 0
class MangoTree extends FruitTree{
  // Initialize a new MangoTree
  constructor() {
    super()
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.matureAge = 2
    this.stopHeight = 18
    this.deadAge = 20
    super.grow()
  }

  // Produce some mangoes
  produceMangoes() {
    if (this._age >= this.matureAge) {
      let totalManggo = Math.round(Math.random() * 10) + 2
      this._fruits = []
      for (let i = 0; i < totalManggo; i++) {
        this._fruits.push(new Mango())
      }
    }
  }

}

class Mango extends Fruit{
  // Produce a mango
  constructor() {
    super()
  }
}

// driver code untuk release 0
console.clear();
console.log(`\n ===== Mango Tree =====`);
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)


// Release 1
class AppleTree extends FruitTree {
  constructor() {
   super()
  }

  // Get current states here
  // Grow the tree
  grow() {
    this.matureAge = 4
    this.stopHeight = 19
    this.deadAge = 20
    super.grow()
  }

  // Produce some apples
  produceApples() {
    if (this._age > this.matureAge) {
      let totalApples = Math.round(Math.random() * 10) + 2
      this._fruits = []
      for (let i = 0; i < totalApples; i++) {
        this._fruits.push(new Apple())
      }
    }
  }

}

class Apple extends Fruit {
  constructor() {
    super()
  }
}

let appleTree = new AppleTree()
console.log(`\n ===== Apple Tree =====`);
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

// Release 3
class PearTree extends FruitTree {
  constructor() {
   super()
  }

  // Get current states here
  // Grow the tree
  grow() {
    this.matureAge = 3
    this.stopHeight = 17
    this.deadAge = 20
    super.grow()
  }

  // Produce some apples
  producePear() {
    if (this._age > this.matureAge) {
      let totalPear = Math.round(Math.random() * 10) + 2
      this._fruits = []
      for (let i = 0; i < totalPear; i++) {
        this._fruits.push(new Pear())
      }
    }
  }

}

class Pear extends Fruit {
  constructor() {
    super()
  }
}

let pearTree = new PearTree()
console.log(`\n ===== Pear Tree =====`);
do {
  pearTree.grow();
  pearTree.producePear();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)