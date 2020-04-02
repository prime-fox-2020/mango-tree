"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor (age = 0, height=0, fruits=0, harvestAge=5, harvested, maxAge=10) {
    this._age = age;
    this._height = height;
    this._fruits = fruits;
    this._harvestAge = harvestAge;
    this._harvested = harvested;
    this._maxAge = maxAge;
    this._healthStatus = true;
  }

  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get fruits () {
    return this._fruits;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvestAge () {
    return this._harvestAge;
  }

  get harvested () {
    return this._harvested;
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1;
    this._height += Math.random();
    this._height = Number(Number(this._height).toFixed(2));
    if (this._age >= this._maxAge) {
      this._healthStatus = false;
    }
    return this;
  }

  // Produce some mangoes
  produceMangoes () {
    if (this._age >= this._harvestAge) {
      this._fruits = Math.floor(Math.random()*11);
    }
    return this;
  }

  // Get some fruits
  harvest () {
    if (this._fruits > 0) {
      let good = this._fruits - Math.floor(Math.random()*this._fruits);
      let bad = this._fruits - good;
      this._harvested = `${this._fruits} (${good} good, ${bad} bad)`;
    }
    return this;
  }
}


class Mango {
  // Produce a mango
  constructor (quality) {
    this.quality = quality
  }
  qualityFruits () {
    let random = Math.round(Math.random());
    if (random > 0) {
      this.quality = 'good';
      return this;
    }
    else {
      this.quality = 'bad';
      return this
    }
  }
}


let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log("The tree has met it's end :sad:")










/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harvest();
  *   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  * } while (mangoTree.healthStatus != false)
  */

  


// Release 1
class AppleTree {

}
class Apple {

}

// Release 2
class FruitTree {}
class Fruit {}
