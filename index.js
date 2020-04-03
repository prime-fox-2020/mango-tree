"use strict"

// Release 0
/* Release 1
    Release 2
    Release 3
*/

class FruitTree {
  // Initialize a new MangoTree
  constructor(age = 0, height = 0, healthStatus = true, harvested = false) {
    this._age = age;
    this._height = height;
    this._healthStatus = healthStatus;
    this._harvested = harvested;
    this.quality = [];
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
      this._height += Number((Math.random() * 5).toFixed(1));

    }
    if (this._age == this._dead) {
      this._healthStatus = false;
    }
  }

  produceFruits() {
    let count = 0;
    if (this._age > this._matureAge) {
      let countFruits = Math.floor(Math.random() * 10 + 1);
      for (let a = 0; a < countFruits; a++) {
        count++;
      }
    }

    for (let b = 0; b < count; b++) {
      if (this._fruits === 'mango') {
        let buah = new Mango();
        if (buah.buah == 'good') {
          this.quality.push('good');
        } else {
          this.quality.push('bad');
        }
      } else if (this._fruits === 'apple') {
        let buah = new Apple();
        if (buah.buah == 'good') {
          this.quality.push('good');
        } else {
          this.quality.push('bad');
        }
      } else if (this._fruits === 'pear') {
        let buah = new Pear();
        if (buah.buah == 'good') {
          this.quality.push('good');
        } else {
          this.quality.push('bad');
        }
      }
    }
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for (let a = 0; a < this.quality.length; a++) {
      if (this.quality[a] == 'good') {
        good++;
      } else {
        bad++;
      }
    }
    this._harvested = `${this.quality.length} ( ${good} good, ${bad} bad )`;
    this.quality = [];
  }
}

class Fruit {
  constructor() {
    this.buah = this.produce();
  }

  produce() {
    let simpan;
    let random = Math.ceil(Math.random() * 10) + Math.floor(Math.random() * 10);
    if (random <= 9) {
      simpan = 'good';
    } else {
      simpan = 'bad';
    }
    return simpan;
  }
}

class MangoTree extends FruitTree {
  // Produce a mango
  constructor(matureAge = 3, maxHeight = 7, die = 15, fruits = 'mango') {
    super();
    this._matureAge = matureAge;
    this._maxHeight = maxHeight;
    this._dead = die;
    this._fruits = fruits;
  }
}

class Mango extends Fruit {
  constructor() {
    super();
  }
}

// driver code untuk release 0
let mangoTree = new MangoTree();
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree._height} | Fruits harvested = ${mangoTree._harvested}`)
} while (mangoTree.healthStatus != false)
console.log('Tebang aja');
console.log('------------------------------------------------------');

// Release 1
class AppleTree extends FruitTree {
  constructor(matureAge = 2, maxHeight = 5, die = 10, fruits = 'apple') {
    super();
    this._matureAge = matureAge;
    this._maxHeight = maxHeight;
    this._dead = die;
    this._fruits = fruits;
  }
}

class Apple extends Fruit {
  constructor() {
    super();
  }
}

let appleTree = new AppleTree();
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} | Fruits harvested = ${appleTree._harvested}`)
} while (appleTree.healthStatus != false)
console.log('Tebang aja');
console.log('---------------------------------------------------');

// // Release 3
class PearTree extends FruitTree {
  constructor(matureAge = 2, maxHeight = 7, die = 10, fruits = 'pear') {
    super();
    this._matureAge = matureAge;
    this._maxHeight = maxHeight;
    this._dead = die;
    this._fruits = fruits;
  }
}

class Pear extends Fruit {
  constructor() {
    super();
  }
}

let pearTree = new PearTree();
do {
  pearTree.grow();
  pearTree.produceFruits();
  pearTree.harvest();
  console.log(`[Year ${pearTree._age} Report] Height = ${pearTree._height} | Fruits harvested = ${pearTree._harvested}`)
} while (pearTree.healthStatus != false)
console.log('Tebang aja');
console.log('------------------------------------------------------');