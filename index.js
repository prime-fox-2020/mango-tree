"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(age = 0, height = 0, fruits = [], healthStatus = true, harvested = false, matureAge = 3, maxHeight = 7, die = 15, quality = []) {
    this._age = age;
    this._height = height;
    this._fruits = fruits;
    this._healthStatus = healthStatus;
    this._harvested = harvested;
    this._matureAge = matureAge;
    this._maxHeight = maxHeight;
    this._dead = die;
    this._quality = quality;
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

  // Get current states here

  // Grow the tree
  grow() {
    this._age += 1;
    if (this._age <= this._maxHeight) {
      this._height += (Math.ceil(Math.random() * 6)) / 4;
    }
    if (this._age == this._dead) {
      this._healthStatus = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    let count = 0;
    if (this._age > this._matureAge) {
      let countFruits = Math.floor(Math.random() * 10 + 1);
      for (let a = 0; a < countFruits; a++) {
        count++;
      }
    }

    for (let b = 0; b < count; b++) {
      let random = Math.ceil(Math.random() * 10) + Math.floor(Math.random() * 10);
      if (random <= 9) {
        this._quality.push('good');
      } else {
        this._quality.push('bad');
      }
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let a = 0; a < this._quality.length; a++) {
      if (this._quality[a] == 'good') {
        good++;
      } else {
        bad++;
      }
    }
    this._harvested = `${this._quality.length} ( ${good} good, ${bad} bad )`;
    this._fruits = [];
    this._quality = [];
  }
}

class Mango {
  // Produce a mango
  constructor() {

  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree.healthStatus != false)
console.log('Tebang aja');

// Release 1
class AppleTree { }
class Apple { }

// Release 2
class FruitTree { }
class Fruit { }
