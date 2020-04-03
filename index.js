"use strict"

// Release 2

class FruitTree {
  constructor(mature, maxHarvest, heightAge, maxAge, maxHeight) {
    this._age = 0;
    this._height = 10;
    this._mature = mature;
    this._fruits = 0;
    this._harvested = 0;
    this._healthStatus = true;
    this._maxHarvest = maxHarvest;
    this._heightAge = heightAge;
    this._maxAge = maxAge;
    this._maxHeight = maxHeight;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    return this._healthStatus;
  }

  get harvested() {
    return this._harvested;
  }

  get mature() {
    return this._mature;
  }

  get maxHarvest() {
    return this._maxHarvest;
  }

  get heightAge() {
    return this._heightAge;
  }

  get maxAge() {
    return this._maxAge;
  }

  get maxHeight() {
    return this._maxHeight;
  }

  set height(value) {
    this._height = value;
  }

  set age(value) {
    this._age = value;
  }

  set healthStatus(value) {
    this._healthStatus = value;
  }

  set harvested(value) {
    this._harvested = value;
  }

  set fruits(value) {
    this._fruits = value;
  }
}

class Fruit { 
  constructor(qty) {
    this._good = Math.round(Math.random() * qty);
    this._bad = qty - this._good;
  }

  get good() {
    return this._good;
  }

  get bad() {
    return this._bad;
  }
}

// Release 0
class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor(mature, maxHarvest, heightAge, maxAge, maxHeight) {
    super(mature, maxHarvest, heightAge, maxAge, maxHeight);
  }

  // Get current states here

  // Grow the tree
  grow() {
    if (this.height !== this.maxHeight && this.age < this.heightAge) {
      let value = this.height + Math.round(Math.random() * 100);
      value > this.maxHeight ? value = this.maxHeight : value;
      this.height = value;
    }
    this.age++;
    if (this.age == this.maxAge) this.healthStatus = false;
  }

  // Produce some mangoes
  produceMangoes() {
    if (this.age >= this.mature) {
      this.fruits = Math.round(Math.random() * this.maxHarvest);
    }
  }

  // Get some fruits
  harvest() {
    const buah = new Mango(this.fruits);
    this.harvested = `${this.fruits} (${buah.good} good, ${buah.bad} bad)`;
  }

}

class Mango extends Fruit{
  // Produce a mango
  constructor(qty) {
    super(qty)
  }

}

/**
  * driver code untuk release 0
  */
let mangoTree = new MangoTree(3, 300, 9, 15, 450);
console.log('The tree is alive!');
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its end!');

// Release 1
class AppleTree extends FruitTree{
  constructor(mature, maxHarvest, heightAge, maxAge, maxHeight) {
    super(mature, maxHarvest, heightAge, maxAge, maxHeight);
  }
  // Get current states here

  // Grow the tree
  grow() {
    if (this.height !== this.maxHeight && this.age < this.heightAge) {
      let value = this.height + Math.round(Math.random() * 100);
      value > this.maxHeight ? value = this.maxHeight : value;
      this.height = value;
    }
    this.age++;
    if (this.age == this.maxAge) this.healthStatus = false;
  }

  // Produce some apples
  produceMangoes() {
    if (this.age >= this.mature) {
      this.fruits = Math.round(Math.random() * this.maxHarvest);
    }
  }

  // Get some fruits
  harvest() {
    const buah = new Apple(this.fruits);
    this.harvested = `${this.fruits} (${buah.good} good, ${buah.bad} bad)`;
  }
}

class Apple extends Fruit{
  // Produce a apple
  constructor(qty) {
    super(qty);
  }

}

let apple = new AppleTree(2, 400, 7, 10, 350);
console.log('The tree is alive!');
do {
  apple.grow();
  apple.produceMangoes();
  apple.harvest();
  console.log(`[Year ${apple.age} Report] Height = ${apple.height} cm | Fruits harvested = ${apple.harvested}`)
} while (apple.healthStatus != false)
console.log('The tree has met its end!');

// Release 3
class PearTree extends FruitTree{
  constructor(mature, maxHarvest, heightAge, maxAge, maxHeight) {
    super(mature, maxHarvest, heightAge, maxAge, maxHeight);
  }
  // Get current states here

  // Grow the tree
  grow() {
    if (this.height !== this.maxHeight && this.age < this.heightAge) {
      let value = this.height + Math.round(Math.random() * 100);
      value > this.maxHeight ? value = this.maxHeight : value;
      this.height = value;
    }
    this.age++;
    if (this.age == this.maxAge) this.healthStatus = false;
  }

  // Produce some tree
  produceMangoes() {
    if (this.age >= this.mature) {
      this.fruits = Math.round(Math.random() * this.maxHarvest);
    }
  }

  // Get some fruits
  harvest() {
    const buah = new Pear(this.fruits);
    this.harvested = `${this.fruits} (${buah.good} good, ${buah.bad} bad)`;
  }
}

class Pear extends Fruit{
  // Produce a apple
  constructor(qty) {
    super(qty);
  }

}

let pear = new PearTree(4, 500, 8, 9, 400);
console.log('The tree is alive!');
do {
  pear.grow();
  pear.produceMangoes();
  pear.harvest();
  console.log(`[Year ${pear.age} Report] Height = ${pear.height} cm | Fruits harvested = ${pear.harvested}`)
} while (pear.healthStatus != false)
console.log('The tree has met its end!');
