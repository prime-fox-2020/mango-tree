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
// let mangoTree = new MangoTree()
// do {
//   mangoTree.grow();
//   mangoTree.produceMangoes();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {

  // Initialize a new AppleTree
  constructor () {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healthStatus = 12;
    this._harvested = this.produceApples();
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
    let plus = Math.random()*80;
    this.height += parseInt(plus);
    if (this.height >= 250) {
      this.height = 250;
    }
    
    this.healthStatus--;
  }

  // Produce some mangoes
  produceApples () {
    let rand = Math.random() * 50;
    for (let i = 0; i < rand; i++) {
      this.fruits.push(new Apple);
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
class Apple {
  // Produce a apple
  constructor () {
    this.bad = 0;
    this.good = 0;
  }
}

// let appleTree = new AppleTree()
// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} cm | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus != false)

// Release 2
class FruitTree {
  // Initialize a new FruitTree
  constructor () {
    this._age = 0; //umur pohon
    this._height = 0; //tinggi pohon
    this._fruits = []; //jumlah buah
    this._healthStatus = true; //umur maksimal pohon
    this._harvested = false; //keterangan berapa buah yang dipanen
    this._maxHeight = 7; //maksimal pertumbuhan pada umur
    this._maxFruit = 50; //jumlah maksimal buah
    this.matureAge = 3; //usia pohon berbuah
    this.fruit = Fruit; //pilih objek buah
    this.increase = 1; //maksimal pertumbuhan pertahun (meter)
    this.dead = 20;
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
    if (this.age <= this._maxHeight) {
      let plus = (Math.random()*10*this.increase)/10;
      this.height += Number(plus.toFixed(1));
    }
    
    if (this.age == this.dead) this.healthStatus = false;
  }

  // Produce some fruits
  produceFruits () {
    let rand = Math.random() * this._maxFruit;
    for (let i = 0; i < rand; i++) {
      this.fruits.push(new this.fruit);
    }

    for (let i = 0; i < this.fruits.length; i++) {
      if (Math.random() > 0.5) {
        this.fruits[i].good++;
      } else {
        this.fruits[i].bad++;
      }
    }
    if (this.age < this.matureAge) this.fruits = [];
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

class Fruit {
  // Produce a fruit
  constructor () {
    this.bad = 0;
    this.good = 0;
  }
}

class MangoTree1 extends FruitTree{
  constructor () {
    super();
    this._healthStatus = 20;
    this._maxHeight = 500;
    this._maxFruit = 80;
    this.matureAge = 5;
    this.fruit = Mango1;
  }
}

class Mango1 extends Fruit{
  constructor () {
    super();
  }
}

class AppleTree1 extends FruitTree{
  constructor () {
    super();
    this._healthStatus = 14;
    this._maxHeight = 260;
    this._maxFruit = 100;
    this.fruit = Apple1;
    this.increase = 50;
  }
}

class Apple1 extends Fruit{
  constructor () {
    super();
  }
}

//example
/*
console.log(new Apple1)
let mangoTree = new MangoTree1();
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} cm | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log('')

let appleTree = new AppleTree1();
do {
  appleTree.grow();
  appleTree.produceFruits();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} cm | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
*/

//release 3
class PearTree extends FruitTree{
  constructor() {
    super();
    this._age = 1;
    this._maxHeight = 8;
    this._maxFruit = 30;
    this.fruit = Pear;
    this.increase = 3;
    this.matureAge = 4;
    this.dead = 15;
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
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
// console.log(pearTree)
