"use strict"

// Release 0
// Release 1
// Release 2
class FruitTree {
  constructor(name, age, height, matureAge, healthStatus, mature, averageFruits, growth, die) {
    this._name = name;
    this._age = age || 0;
    this._height = height || 0;
    this._matureAge = matureAge || 5;
    this._healthStatus = healthStatus || true;

    // ADDITIONAL
    this._fruits = 0;
    this._mature = mature || false;
    this.quality = {
      good: 0,
      bad: 0
    };

    this._averageFruits = averageFruits || 30;
    this._growth = growth || 12;
    this._die = die || 30;
  }

  get age() {
    return this._age;
  }
  get name() {
    return this._name;
  }
  get height() {
    return `${this._height.toFixed(1)}  m`;
  }
  get fruits() {
    return this._fruits;
  }
  get healthStatus() {
    return this._healthStatus;
  }
  get mature() {
    return this._mature;
  }
  get matureAge() {
    return this._matureAge;
  }
  get averageFruits() {
    return this._averageFruits;
  }
  get growth() {
    return this._growth;
  }
  get die() {
    return this._die;
  }
  get harvested() {
    return `${this._fruits} (${this.quality.good} GOOD, ${this.quality.bad} BAD)`;
  }

  randomGenerate(num) {
    return !num ? Math.random() : Math.ceil(Math.random() * num);
  }

  grow() {
    this._age++;
    if (this._age <= this._growth) this._height += this.randomGenerate();
    if (this._age === this._die) this._healthStatus = false;
    if (this._age === this._matureAge) this._mature = true;
  }

  produceFruits() {
    if (this._mature) this._fruits = this.randomGenerate(this._averageFruits);
  }

  harvest() {
    this.quality.good = 0;
    this.quality.bad = 0;
    for (let i = 0; i < this._fruits; i++) {
      let fruit = new Mango();
      if (fruit.quality === "GOOD") this.quality.good++;
      else this.quality.bad++;
    }
  }
}
class Fruit {
  constructor() {
    this.quality = this.quality()//isi dari fungsi quality di bawah
  }
  quality() {
    let value = ['GOOD', 'BAD'];//quality array
    return value[Math.floor(Math.random() * value.length)]//random value quality
  }
} 
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor() {
    super()
  }
}
class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super()
  }
}
// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

class AppleTree extends FruitTree {
  constructor() {
    super()
  }
}
class Apple extends Fruit {
  constructor() {
    super()
  }
}

let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
