"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = 0;
    this.mangoes = 0
    this.goodMango = 0
    this.badMango = 0
    this.mature = false
  }

  get age() {
    return this._age
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
  set harvested(jumlah) {
    this._harvested = jumlah
  }
  // Grow the tree
  grow() {
    this._age++
    if (this._age >= 30) {
      this._healthStatus = false
    }
    if (this._age >= 15) {
      this.mature = true
    } else {
      this._height = this._height + Math.round(Math.random() * 2)
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.mature) {
      this.mangoes = Math.round(Math.random() * 15)
      for (let i = 0; i < this.mangoes; i++) {
        let kualitas = new Mango()
        this._fruits.push(kualitas)
      }
    }
  }

  // Get some fruits
  harvest() {
    for (const key of this._fruits) {
      if (key.quality == "good") {
        this.goodMango++
      } else {
        this.badMango++
      }
    }
    this._harvested = `${this.mangoes} (${this.goodMango} good, ${this.badMango} bad)`
    this._fruits = []
    this.goodMango = 0
    this.badMango = 0
  }

}

class Mango {
  // Produce a mango
  constructor() {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 1) {
      this.quality = "good"
    } else {
      this.quality = "bad"
    }
  }
}

/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

// Release 1
class AppleTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = 0;
    this.mangoes = 0
    this.goodApple = 0
    this.badApple = 0
    this.mature = false
  }

  get age() {
    return this._age
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
  set harvested(jumlah) {
    this._harvested = jumlah
  }
  // Grow the tree
  grow() {
    this._age++
    if (this._age >= 30) {
      this._healthStatus = false
    }
    if (this._age >= 15) {
      this.mature = true
    } else {
      this._height = this._height + Math.round(Math.random() * 2)
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.mature) {
      this.mangoes = Math.round(Math.random() * 15)
      for (let i = 0; i < this.mangoes; i++) {
        let kualitas = new Mango()
        this._fruits.push(kualitas)
      }
    }
  }

  // Get some fruits
  harvest() {
    for (const key of this._fruits) {
      if (key.quality == "good") {
        this.goodApple++
      } else {
        this.badApple++
      }
    }
    this._harvested = `${this.mangoes} (${this.goodApple} good, ${this.badApple} bad)`
    this._fruits = []
    this.goodApple = 0
    this.badApple = 0
  }

}
class Apple {
  // Produce a Apple
  constructor() {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 1) {
      this.quality = "good"
    } else {
      this.quality = "bad"
    }
  }
}

// Release 2
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = 0;
    this.fruit = 0
    this.goodFruit = 0
    this.badFruit = 0
    this.mature = false
  }

  get age() {
    return this._age
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
  set harvested(jumlah) {
    this._harvested = jumlah
  }
  // Grow the tree
  grow() {
    this._age++
    if (this._age >= 30) {
      this._healthStatus = false
    }
    if (this._age >= 15) {
      this.mature = true
    } else {
      this._height = this._height + Math.round(Math.random() * 2)
    }
  }

  // Produce some Fruits
  produceFruits() {
    if (this.mature) {
      this.fruit = Math.round(Math.random() * 15)
      for (let i = 0; i < this.fruit; i++) {
        let kualitas = new Fruit()
        this._fruits.push(kualitas)
      }
    }
  }

  // Get some fruits
  harvest() {
    for (const key of this._fruits) {
      if (key.quality == "good") {
        this.goodFruit++
      } else {
        this.badFruit++
      }
    }
    this._harvested = `${this.fruit} (${this.goodFruit} good, ${this.badFruit} bad)`
    this._fruits = []
    this.goodFruit = 0
    this.badFruit = 0
  }
}
class Fruit {
  // Produce a Fruit
  constructor() {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 1) {
      this.quality = "good"
    } else {
      this.quality = "bad"
    }
  }
}

class mangoTree extends FruitTree {
  constructor() {
    super();
  }
}

class mango extends Fruit {
  constructor() {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 1) {
      this.quality = "good"
    } else {
      this.quality = "bad"
    }
  }
}

class appleTree extends FruitTree {
  constructor() {
    super()
  }
  grow() {
    this._age++
    if (this._age >= 30) {
      this._healthStatus = false
    }
    if (this._age >= 15) {
      this.mature = true
    } else {
      this._height = this._height + Math.round(Math.random() * 2)
    }
  }
}

class apple extends Fruit {
  constructor() {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 1) {
      this.quality = "good"
    } else {
      this.quality = "bad"
    }
  }
}

class pearTree extends FruitTree {
  constructor() {
    super()
    super._age
    super._height
    super._fruits
    super._healthStatus
    super._harvested
    super.goodPear
    super.badPear
    super.mature

    this.pear = 0
  }
  grow() {
    this._age++
    if (this._age >= 40) {
      this._healthStatus = false
    }
    if (this._age >= 25) {
      this.mature = true
    } else {
      this._height = this._height + Math.round(Math.random() * 2)
    }
  }

  producePear() {
    super.produceFruits()
  }
  harvest() {
    super.harvest()
  }
}

class pear extends Fruit {
  constructor() {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber == 1) {
      this.quality = "good"
    } else {
      this.quality = "bad"
    }
  }
}



let PearTree = new pearTree()
do {
  PearTree.grow();
  PearTree.producePear();
  PearTree.harvest();
  console.log(`[Year ${PearTree.age} Report] Height = ${PearTree.height} m | Pears harvested = ${PearTree.harvested}`)
} while (PearTree.healthStatus != false)