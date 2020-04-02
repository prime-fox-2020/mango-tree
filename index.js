"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthStatus = 20;
    this._harvested = this.produceMangoes();
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

  get harvested () {
    return this._harvested;
  }

  set age (par) {
    this._age = par;
  }

  set height (par) {
    this._height = par;
  }

  set fruits (par) {
    this._fruits = par;
  }

  set healthStatus (par) {
    this._healthStatus = par;
  }

  set harvested (par) {
    this._harvested = par;
  }

  // Get current states here

  // Grow the tree
  grow () {
    this.age++;
    let plus = Math.random()*100;
    this.height += parseInt(plus);
    if (this.height >= 480) {
      this.height = 480
    }
    
    this.healthStatus--;
  }

  // Produce some mangoes
  produceMangoes () {
    let rand = Math.random() * 30;
    for (let i = 0; i < rand; i++) {
      this.fruits.push(new Mango);
    }
    
    for (let i = 0; i < this.fruits.length; i++) {
      if (Math.random() > 0.5) {
        this.fruits[i].good++;
      } else {
        this.fruits[i].bad++;
      }
    }
  }

  // Get some fruits
  harvest () {
    let good = 0, bad = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].good) {
        good++;
      } else {
        bad++;
      }
    }
    this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this.fruits = [];
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.bad = 0;
    this.good = 0;
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
// console.log(parseInt(2.2432.toFixed(2)))