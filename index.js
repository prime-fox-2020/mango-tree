"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 10;
    this._mature = 3;
    this._fruits = 0;
    this._harvested = 0;
    this._healthStatus = true;
    this._maxHarvest = 30;
    this._heightAge = 8;
    this._maxAge = 15;
    this._maxHeight = 500;
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
  // Get current states here

  // Grow the tree
  grow() {
    let plus = Math.round(Math.random() * 100);
    if (this.height !== this.maxHeight && this.age < this.heightAge) {
      let value = this.height + plus;
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
    const good = Math.round(Math.random() * this.fruits);
    const bad = this.fruits - good;
    const buah = new Mango(good, bad);
    this.harvested = `${this.fruits} (${buah.good} good, ${buah.bad} bad)`;
  }

}

class Mango {
  // Produce a mango
  constructor(good, bad) {
    this._good = good;
    this._bad = bad;
  }

  get good() {
    return this._good;
  }

  set good(value) {
    this._good = value;
  }

  get bad() {
    return this._bad;
  }

  set bad(value) {
    this._bad = value;
  }

  produce(qty) {
    this.good = Math.round(Math.random() * qty);
    this.bad = qty - this.good;
  }

}

/**
  * driver code untuk release 0
  */
let mangoTree = new MangoTree()
console.log('The tree is alive!');
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('The tree has met its end!');

// Release 1
class AppleTree { }
class Apple { }

// Release 2
class FruitTree { }
class Fruit { }
