"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._harvested = 0 // total ,(x good, y bad )
    this._healthStatus = true;
    this._matureAge = Math.floor(Math.random() * 5)
    this.maxAgeGrow = Math.floor((Math.random() * (10 - 5) + 5))
    this.maxTreeAge = Math.round((Math.random() * (30 - 20) + 20))
    this._fruits = [];
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healthStatus() {
    return this._healthStatus
  }

  get harvested() {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    let heightGrow = Math.round(Math.random() * 10) / 10
    if (this._age < this.maxAgeGrow) {
      this._height += heightGrow
    }
    if (this._age == this.maxTreeAge) {
      this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits = []
    let quality = ['good', 'bad']
    let randomSum = Math.round(Math.random() * 10) // jumlah buah yg di produce
    // console.log(this._matureAge)
    // if (this._age >= this._matureAge) {
    while (randomSum >= 0) {
      let random = Math.floor(Math.random() * 2) // bisa 0 sama bisa 1 
      this._fruits.push(new Mango(quality[random]))
      randomSum--
      // }
    }

  }

  // Get some fruits
  harvest() {
    let harvestedFruit = this._fruits.length
    let countGood = 0
    let countBad = 0
    for (var i = 0; i < harvestedFruit; i++) {
      if (this._fruits[i].quality == 'good') {
        countGood++
      } else if (this._fruits[i].quality == 'bad') {
        countBad++
      }
    }
    this._harvested = `${this._fruits.length} (${countGood} good, ${countBad} bad)`
  }
}

class Mango {
  // Produce a mango
  constructor(random) {
    this.quality = random
  }
}
// 
// let mangoTree = new MangoTree()
// do{
//   mangoTree.grow()
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}`)
// }while (mangoTree.healthStatus !== false)
// test code produce & harvest
// let mangoTree = new MangoTree
// mangoTree.produceMangoes();
// console.log(mangoTree.fruits)
// mangoTree.harvest();
// console.log(mangoTree.harvested)

// // * driver code untuk release 0

// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)


// Release 1 -> add new parameter 'Increased Height'
class AppleTree extends MangoTree {
  constructor() {
    super()
    this.increasedHeight = 0
  }
  grow() {
    this._age++
    let heightGrow = Math.round(Math.random() * 10) / 10
    this.increasedHeight = heightGrow
    if (this._age < this.maxAgeGrow) {
      this._height += heightGrow
    } else {
      this.increasedHeight = 0
    }
    if (this._age == this.maxTreeAge) {
      this._healthStatus = false;
    }
  }

  produceApples() {
    this._fruits = []
    let quality = ['good', 'bad']
    let randomSum = Math.round(Math.random() * 10) // jumlah buah yg di produce
    // console.log(this._matureAge)
    if (this._age >= this._matureAge) {
      while (randomSum >= 0) {
        let random = Math.floor(Math.random() * 2)
        this._fruits.push(new Apple(quality[random]))
        randomSum--
      }
    }

  }
  harvest() {
    super.harvest()
  }

}
class Apple extends Mango {
  constructor() {
    super()
  }
}

//drive code release 1
// let appleTree = new AppleTree()
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}, Increased Height = ${appleTree.increasedHeight}| Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus != false)

// Release 2 -> basic extend
class FruitTree extends MangoTree {
  constructor() {
    super()
  }
  grow() {
    super.grow()
  }
  produceFruit() {
    this._fruits = []
    let quality = ['good', 'bad']
    let randomSum = Math.round(Math.random() * 10) // jumlah buah yg di produce
    // console.log(this._matureAge)
    if (this._age >= this._matureAge) {
      while (randomSum >= 0) {
        let random = Math.floor(Math.random() * 2)
        this._fruits.push(new Fruit(quality[random]))
        randomSum--
      }
    }

  }

  harvest() {
    super.harvest()
  }
}

class Fruit extends Mango {
  constructor() {
    super()
  }
}


//drive code release 2
// let fruitTree = new FruitTree()
// do {
//   fruitTree.grow();
//   fruitTree.produceFruit();
//   fruitTree.harvest();
//   console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height}| Fruits harvested = ${fruitTree.harvested}`)
// } while (fruitTree.healthStatus != false)

class PearTree extends MangoTree {
  constructor() {
    super()
  }
  grow() {
    super.grow()
  }
  produceFruit() {
    this._fruits = []
    let quality = ['good', 'bad']
    let randomSum = Math.round(Math.random() * 10) // jumlah buah yg di produce
    // console.log(this._matureAge)
    if (this._age >= this._matureAge) {
      while (randomSum >= 0) {
        let random = Math.floor(Math.random() * 2)
        this._fruits.push(new Fruit(quality[random]))
        randomSum--
      }
    }
  }
  harvest() {
    super.harvest()
  }
}
class Pear extends Mango {
  constructor() {
    super()
  }
}
//drive code release 2
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height}| Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
