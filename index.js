"use strict";

//#region FruitTree
class FruitTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._harvested = { good: 0, bad: 0 };
    this._healthStatus = true;
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
    let good = this._harvested.good;
    let bad = this._harvested.bad;
    return `${good + bad} (${good} good, ${bad} bad)`
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._harvested.good = 0;
    this._harvested.bad = 0;
    this._age++;

    if (this._age < this.limitGrowth) {
      this._height += Math.random() * 3 + 1;
    }
    if (this._age === this.deadAge) {
      this._healthStatus = false;
    }

  }

  produceFruits(value) {
    for (let i = 0; i < Math.round(Math.random() * 100 + 1); i++) {
      this._fruits.push(value);
    }
  }

  // Get some fruits
  harvest() {
    this._fruits.forEach(fruit => {
      fruit.quality ? this._harvested.good++ : this._harvested.bad++;
    });
    this._fruits.length = 0;
  }
}

class Fruit {
  constructor() {
    this.quality = Math.round(Math.random()) ? 1 : 0;
  }
}
//#endregion

//#region AppleTree
class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor(
  ) {
    super();

    this.deadAge = 15;
    this.matureAge = 2;
    this.limitGrowth = 8;
    this.limitProduce = 14;
  }
  produceApples() {
    super.produceFruits(new Apple());
  }
}

class Apple extends Fruit {
  // Produce a apple
  constructor() {
    super();
  }
}
//#endregion

//#region MangoTree
class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(
  ) {
    super();

    this.deadAge = 20;
    this.matureAge = 4;
    this.limitGrowth = 15;
    this.limitProduce = 19;
  }
  produceMangoes() {
    super.produceFruits(new Mango());
  }
}

class Mango extends Fruit {
  // Produce a mango
  constructor() {
    super();
  }
}
//#endregion

//#region PearTree
class PearTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(
  ) {
    super();

    this.deadAge = 18;
    this.matureAge = 3;
    this.limitGrowth = 16;
    this.limitProduce = 15;
  }
  producePears() {
    super.produceFruits(new Pear());
  }
}

class Pear extends Fruit {
  // Produce a mango
  constructor() {
    super();
  }
}
//#endregion

// driver code untuk release 0 dan 1
console.log(`======== MANGO =========`);
let mangoTree = new MangoTree();
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(
    `[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested}`
  );
} while (mangoTree.healthStatus != false);

console.log(`The MANGO tree has met its end. :sad:\n`);

// driver code untuk release 2
console.log(`======== APPLE =========`);
let appleTree = new AppleTree();
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(
    `[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} m | Fruits harvested = ${appleTree.harvested}`
  );
} while (appleTree.healthStatus != false);
console.log(`The APPLE tree has met its end. :sad:\n`);

console.log(`======== PEAR =========`);
let pearTree = new PearTree();
do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(
    `[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} m | Fruits harvested = ${pearTree.harvested}`
  );
} while (pearTree.healthStatus != false);
console.log(`The PEAR tree has met its end. :sad:\n`);