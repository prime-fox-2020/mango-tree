"use strict"

class FruitTree {
  // Initialize a new FruitTree
  constructor(age = 0, height = 0, matureAge = 0, pauseAge = 0, witherAge = 0, fruits = [], healthStatus = true, harvested = '') {
    this._age = age;
    this._height = height;
    this._matureAge = matureAge + 5 + Math.round(Math.random() * 10);
    this._pauseAge = pauseAge + this.matureAge + 5 + Math.round(Math.random() * 15);
    this._witherAge = witherAge + this.pauseAge + 5 + Math.round(Math.random() * 5);
    this._fruits = fruits;
    this._healthStatus = healthStatus;
    this._harvested = harvested;
  }

  get age() {return this._age;}
  set age(param) {this._age = param;}
  get height() {return this._height;}
  set height(param) {this._height = param;}
  get matureAge() {return this._matureAge;}
  set matureAge(param) {this._matureAge = param;}
  get pauseAge() {return this._pauseAge;}
  set pauseAge(param) {this._pauseAge = param;}
  get witherAge() {return this._witherAge;}
  set witherAge(param) {this._witherAge = param;}
  get fruits() {return this._fruits;}
  set fruits(param) {this._fruits = param;}
  get healthStatus() {return this._healthStatus;}
  set healthStatus(param) {this._healthStatus = param;}
  get harvested() {return this._harvested;}
  set harvested(param) {this._harvested = param;}

  // Grow the tree
  grow() {
    this.age += 1;
    if (this.age < this.pauseAge) {
      this.height += Math.random();
      this.height = +this.height.toFixed(1);
    }
  }
  
  // Produce some fruits
  produceFruits() {
    if (this.age >= this.matureAge && this.age <= this.pauseAge) {
      const countFruits = (this.age-this.matureAge) + Math.ceil(Math.random() * (2+this.age-this.matureAge));
      for (let i = 0; i < countFruits; i++) {
        const fruit = new Fruit;
        this.fruits.push(fruit);
      }
    }
  }
  
  // Get some fruits
  harvest() {
    let goodFruits = 0;
    let badFruits = 0;
    for (let fruit of this.fruits) {
      if (fruit.quality == "Good") {
        goodFruits++;
      } else if (fruit.quality == "Bad") {
        badFruits++;
      }
    }
    this.harvested = `${this.fruits.length} (${goodFruits} good, ${badFruits} bad)`;
    this.fruits = [];

    if (this.age == this.witherAge) {
      this.healthStatus = false;
    }
  }
}

class Fruit {
  // Produce a fruit
  constructor(quality) {
    this._quality = this.makeFruit();
  }

  get quality() {return this._quality;}

  makeFruit(){
    const coin = Math.random();
    if (coin > 0.5){
      return "Good";
    } else {
      return "Bad";
    }
  }
}

class MangoTree extends FruitTree {
  // MangoTree has the ability to grow faster
  constructor (growRate = 5) {
    super();
    this._growRate = growRate;
  }
  get growRate() {return this._growRate;}

  grow() {
    this.age += 1;
    if (this.age < this.pauseAge) {
      this.height += (Math.random() * this.growRate);
      this.height = +this.height.toFixed(1);
    }
  }

  produceFruits() {
    if (this.age >= this.matureAge && this.age <= this.pauseAge) {
      const countFruits = (this.age-this.matureAge) + Math.ceil(Math.random() * (2+this.age-this.matureAge));
      for (let i = 0; i < countFruits; i++) {
        const fruit = new Mango;
        this.fruits.push(fruit);
      }
    }
  }
}

class Mango extends Fruit {
  //Each type of fruit tree have different succes chance producing good fruit
  constructor() {
    super();
  }
  makeFruit(){
    const coin = Math.random();
    if (coin > 0.25){
      return "Good";
    } else {
      return "Bad";
    }
  }
}

class AppleTree extends FruitTree {
  // AppleTree has the ability to produce longer
  constructor(longevity = 3) {
    super();
    this._longevity = longevity;
    this.matureAge -= this.longevity;
    this.pauseAge += this.longevity;
  }
  get longevity() {return this._longevity;}

  produceFruits() {
    if (this.age >= this.matureAge && this.age <= this.pauseAge) {
      const countFruits = (this.age-this.matureAge) + Math.ceil(Math.random() * (2+this.age-this.matureAge));
      for (let i = 0; i < countFruits; i++) {
        const fruit = new Apple;
        this.fruits.push(fruit);
      }
    }
  }
}

class Apple extends Fruit {
  //Each type of fruit tree have different succes chance producing good fruit
  constructor() {
    super();
  }
  makeFruit(){
    const coin = Math.random();
    if (coin > 0.35){
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

// let treeOfLife = new FruitTree();
// console.log("The fruit tree is alive! :smile:");
// do {
//   treeOfLife.grow();  
//   treeOfLife.produceFruits();
//   treeOfLife.harvest();
//   console.log(`[Year ${treeOfLife.age} Report] Height = ${treeOfLife.height} | Fruits harvested = ${treeOfLife.harvested}`)
// } while (treeOfLife.healthStatus != false);
// console.log("The fruit tree has met it's end. :sad:");

let tree0 = new MangoTree();
console.log(`The ${tree0.constructor.name} is alive! :smile:`);
do {
  debugger;
  tree0.grow();  
  tree0.produceFruits();
  tree0.harvest();
  console.log(`[Year ${tree0.age} Report] Height = ${tree0.height} m | Fruits harvested = ${tree0.harvested}`)
} while (tree0.healthStatus != false);
console.log(`The ${tree0.constructor.name} has met it's end. :sad:`);

console.log("\n===============================================================\n");

let tree1 = new AppleTree();
console.log(`The ${tree1.constructor.name} is alive! :smile:`);
do {
  tree1.grow();  
  tree1.produceFruits();
  tree1.harvest();
  console.log(`[Year ${tree1.age} Report] Height = ${tree1.height} | Fruits harvested = ${tree1.harvested}`)
} while (tree1.healthStatus != false);
console.log(`The ${tree1.constructor.name} has met it's end. :sad:`);
