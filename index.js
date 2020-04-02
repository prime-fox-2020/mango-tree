"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0,
    this._height = 0,
    this._isMature = false,
    this._canGrow = true,
    this._healthStatus = true,
    this._harvested = 0,
    this._goodGrade = 0,
    this._fruits = []
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

  // Get current states here
  get goodGrade () {
    return this._goodGrade;
  }

  set harvested (num) {
    this._harvested = num;
  }

  set fruits (arr) {
    this._fruits = arr;
  }

  set goodGrade (num) {
    this._goodGrade = num;
  }
  // Grow the tree
  grow () {
    if (this._canGrow) this._height += Math.random();

    // Tambah umur
    this._age++;

    // Layak berbuah di umur ke 3
    if (this._age === 3) this._isMature = true;

    // Stop grow height
    if (this._age === 8) this._canGrow = false;
    
    // Sudah saatnya pohon mati
    if (this._age === 20) this._healthStatus = false;
  }

  // Produce some mangoes
  produceMangoes () {
    if (this._isMature) {
      // Generate mango for this year randomly base on this height, this age and fixed bonus value
      let total = 50 + Math.round(Math.random() * 10 * this.height * this.age);
      for (let i = 0; i < total; i++) {
        this.fruits.push(new Mango(70 + Math.floor(Math.random() * 30)));
      }
    }
  }

  // Get some fruits
  harvest () {

    // Quality check for each fruit this year
    let goodGrade = 0;
    this.fruits.forEach(el => {
      if (el._grade > 80) goodGrade++;
    });

    // Recording our tree performance for this year
    this.harvested = this.fruits.length;
    this.goodGrade = goodGrade;
    // console.log(this.fruits)
    // Clearing tree or harvesting mango is finished
    this.fruits = [];
  }

}

class Mango {
  // Produce a mango
  constructor(grade) {
    // 20 persen buah diprediksi qualitas buruk
    this._grade = grade;
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

let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} m | Fruits harvested = ${mangoTree.harvested} | (${mangoTree.goodGrade} good, ${Math.abs(mangoTree.harvested - mangoTree.goodGrade)} bad)`);
} while (mangoTree.healthStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
