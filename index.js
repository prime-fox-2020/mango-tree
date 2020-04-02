"use strict"

// Release 0

class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._matureAge = 5 + Math.round(Math.random() * 10);
    this._pauseAge = this.matureAge + 5 + Math.round(Math.random() * 15);
    this._witherAge = this.pauseAge + 5 + Math.round(Math.random() * 5);
    this._fruits = [];
    // this._report = '';
  }

  get age() {return this._age;}
  set age(param) {this._age = param;}
  get height() {return this._height;}
  set height(param) {this._height = param;}
  get matureAge() {return this._matureAge;}
  get pauseAge() {return this._pauseAge;}
  get witherAge() {return this._witherAge;}

  get fruits() {return this._fruits;}
  set fruits(param) {this._fruits = param;}
  
  get healthStatus() {;}
  get harvested() {;}

  // get report() {return this._report;}
  // set report(param) {this._report = param;}

  // Grow the tree
  grow() {
    console.log("The tree is alive! :smile:");
    do {
      this.age += 1;
      if (this.age < this.pauseAge) {
        this.height += +Math.random().toFixed(1);
      }
      if (this.age >= this.matureAge && this.age <= this.pauseAge) {
        this.produceMangoes(this.fruits);
      }
      this.harvest(this.fruits, this.goodFruits, this.badFruits);
    }
    while (this.age != this.witherAge);
    console.log("The tree has met it's end. :sad:")
  }

  // Produce some mangoes
  produceMangoes(fruits) {
    const countFruits = (this.age-this.matureAge) + Math.ceil(Math.random() * (2+this.age-this.matureAge));
    for (let i = 0; i < countFruits; i++) {
      const fruit = new Mango;
      fruits.push(fruit);
    }
  }
  
  // Get some fruits
  harvest(fruits) {
    let goodFruits = 0;
    let badFruits = 0;
    for (let fruit of fruits) {
      if (fruit.quality == "Good") {
        goodFruits++;
      } else if (fruit.quality == "Bad") {
        badFruits++;
      }
    }
    console.log(`[Year ${this.age} Report] Height = ${this.height.toFixed(1)} | Fruit harvested = ${this.fruits.length} (${goodFruits} good, ${badFruits} bad)`);
    this.fruits = [];
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = this.makeFruit();
  }

  makeFruit(){
    const coin = Math.random();
    if (coin > 0.3){
      return "Good";
    } else {
      return "Bad";
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
 *   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
 * } while (mangoTree.healthStatus != false)
 */

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}

const tree1 = new MangoTree;
tree1.grow();