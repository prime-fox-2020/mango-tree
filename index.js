"use strict"

const random = function() {
  return ~~(Math.random() * 5) + 1
}

// Release 123
class FruitTree {

  constructor () {
    this._age = 0;
    this._height = 0.1;
    this._healthStatus = true;
    this._fruits = {}
    this._harvested = '';
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
  // Fruit: Manggo, Apple, Pear

  // Grow the tree
  grow () {
    this._age++
    if (this._age <= 12) this._height += ~~(random() * 0.5)
    if (this._age > 17 ) this._healthStatus = false
    return this
  }

  // Produce some fruits
  produceFruits (age = 3) {
    this._fruits = {
      good: 0,
      bad: 0
    }
    if (this._age < age) return this // produce fruits after mature at 3
    let num = random() + 5
    for (let i = 0; i < num; i++) {
      let fruit = new Fruit()
      fruit.ripe()
      if(fruit.good) this._fruits.good++
      if(fruit.bad) this._fruits.bad++
    }
    return this
  }

  // Get some fruits
  harvest () {
    this._harvested = ''
    this._harvested += (this._fruits.good + this._fruits.bad)
    this._harvested += ` (${this._fruits.good} good, ${this._fruits.bad} bad)`
    this._fruits = {
      good: 0,
      bad: 0
    }
    return this
  }

}

class Fruit {
  // Produce a fruit
  constructor () {
    this.bad = 0;
    this.good = 0;
  }

  ripe () {
    let num = random()
    if (random() >= num/2) this.good += 1
    else this.bad += 1
    return this
  }

}

// Pear

class PearTree extends FruitTree {

  grow (old = 7) {
    this._age++
    if (this._age <= old) this._height += ~~(random() * 0.3)
    if (this._age > 12) this._healthStatus = false
    return this
  }

  producePears (mature = 3) {
    this._fruits = {
      good: 0,
      bad: 0
    }
    if (this._age < mature) return this // produce fruits after mature
    let num = random() + 8 + ~~(this._age / 2)
    for (let i = 0; i < num; i++) {
      let fruit = new Pear()
      fruit.ripe()
      if(fruit.good) this._fruits.good++
      if(fruit.bad) this._fruits.bad++
    }
    return this
  }

}

class Pear extends Fruit {}

let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.producePears(5);
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus)
console.log(`The pear tree has met its end :sad: \n`);


// Mango

class MangoTree extends FruitTree {

  grow () {
    this._age++
    if (this._age <= 12) this._height += ~~(random() * 0.5)
    if (this._age > 17 ) this._healthStatus = false
    return this
  }

  produceMangoes (mature = 4) {
    this._fruits = {
      good: 0,
      bad: 0
    }
    if (this._age < mature) return this // produce fruits after mature
    let num = random() + 3
    for (let i = 0; i < num; i++) {
      let fruit = new Mango()
      fruit.ripe()
      if(fruit.good) this._fruits.good++
      if(fruit.bad) this._fruits.bad++
    }
    return this
  }

}

class Mango extends Fruit {}

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus)
console.log(`The mango tree has met its end :sad: \n`);

// Apple

class AppleTree extends FruitTree {

  grow (old = 5) {
    this._age++
    if (this._age <= old) this._height += ~~(random() * 0.5)
    if (this._age > 12) this._healthStatus = false
    return this
  }

  produceApples (mature = 2) {
    this._fruits = {
      good: 0,
      bad: 0
    }
    if (this._age < mature) return this // produce fruits after mature
    let num = random() + 10 + ~~(this._age / 2)
    for (let i = 0; i < num; i++) {
      let fruit = new Apple()
      fruit.ripe()
      if(fruit.good) this._fruits.good++
      if(fruit.bad) this._fruits.bad++
    }
    return this
  }

}

class Apple extends Fruit {}
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus)
console.log(`The apple tree has met its end :sad:\n`);