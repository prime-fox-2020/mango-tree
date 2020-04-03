"use strict"

class FruitTree {
  // Initialize a new FruitTree
  constructor(matureAge, maxAge, growthRate, stopGrowingAge, baseFruitsPerYear) {
    this.matureAge = matureAge
    this.maxAge = maxAge,
    this.growthRate = growthRate,
    this.stopGrowingAge = stopGrowingAge,
    this.baseFruitsPerYear = baseFruitsPerYear,
    this._age = 0,
    this._height = 0,
    this._isMature = false,
    this._canGrow = true,
    this._healthStatus = true,
    this._growthStat = [],
    this._harvested = 0,
    this._goodGrade = 0,
    this._fruits = []
  }

  get canGrow() {
    return this._canGrow;
  }
  get growthStat() {
    return this._growthStat;
  }
  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  get isMature() {
    return this._isMature;
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
  get goodGrade() {
    return this._goodGrade;
  }

  // Get current states here
  set age(num) {
    this._age += num;
  }
  set height(num) {
    let growth = this.growthRate * num;
    this._height += growth;
  }
  set isMature(bool) {
    this._isMature = bool;
  }
  set canGrow(bool) {
    this._canGrow = bool;
  }
  set healthStatus(bool) {
    this._healthStatus = bool;
  }
  set harvested(num) {
    this._harvested = num;
  }
  set fruits(arr) {
    this._fruits = arr;
  }
  set goodGrade(num) {
    this._goodGrade = num;
  }
  // Grow the tree
  grow() {
    if (this.canGrow) this.height = Math.random();

    // Tambah umur
    this.age = 1;

    // Layak berbuah di umur ke 3
    if (this.age === this.matureAge) this.isMature = true;

    // Stop grow height
    if (this.age === this.stopGrowingAge) this.canGrow = false;

    // Sudah saatnya pohon mati
    if (this.age === this.maxAge) this.healthStatus = false;
  }
  // Get some fruits
  harvest() {
    // Quality check for each fruit this year
    let goodGrade = 0;
    this.fruits.forEach(el => {
      if (el.grade > 80) goodGrade++;
    });

    // Recording our tree performance for this year
    this.harvested = this.fruits.length;
    this.goodGrade = goodGrade;
    // console.log(this.fruits)
    // Clearing tree or harvesting mango is finished
    this.fruits = [];
  }
}
class Fruit {
  // Produce a mango
  constructor(grade) {
    // 20 persen buah diprediksi qualitas buruk
    this._grade = grade;
  }

  get grade() {
    return this._grade;
  }
}
class MangoTree extends FruitTree {
  constructor(matureAge = 3, maxAge = 20, growthRate = 100, stopGrowingAge = 12, baseFruitsPerYear = 10) {
    super(matureAge, maxAge, growthRate, stopGrowingAge, baseFruitsPerYear);
    this.name = 'Mango Tree';
    this.product = 'Mango';
  }

  produceFruits() {
    let total = 0;
    if (this.isMature) {
      // Generate mango for this year randomly base on this height, this age and fixed bonus value
      total = this.baseFruitsPerYear + Math.round(Math.random() * (this.height / 100) * (this.age * 5));
      for (let i = 0; i < total; i++) {
        this.fruits.push(new Mango(75 + Math.floor(Math.random() * 30)));
      }
    }
    this.growthStat.push(total);
  }
}

class Mango extends Fruit {
  constructor(grade) {
    super(grade);
    this.name = 'Mango';
  }
}

class AppleTree extends FruitTree {
  constructor(matureAge = 5, maxAge = 15, growthRate = 80, stopGrowingAge = 8, baseFruitsPerYear = 8) {
    super(matureAge, maxAge, growthRate, stopGrowingAge, baseFruitsPerYear);
    this.name = 'Apple Tree';
    this.product = 'Apple';
  }

  produceFruits() {
    let total = 0;
    if (this.isMature) {
      // Generate mango for this year randomly base on this height, this age and fixed bonus value
      total = this.baseFruitsPerYear + Math.round(Math.random() * (this.height / 100) * (this.age * 5));
      for (let i = 0; i < total; i++) {
        this.fruits.push(new Apple(75 + Math.floor(Math.random() * 20)));
      }
    }
    this.growthStat = total;
  }
}

class Apple extends Fruit {
  constructor(grade) {
    super(grade);
    this.name = 'Apple';
  }
}

let mangoTree = new MangoTree();
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${(mangoTree.height / 100).toFixed(1)} m | ${mangoTree.product} harvested = ${mangoTree.harvested} | (${mangoTree.goodGrade} good, ${Math.abs(mangoTree.harvested - mangoTree.goodGrade)} bad)`);
  console.log(`Statistic so far: ${mangoTree.growthStat}`);
  console.log(`Total: ${mangoTree.growthStat.reduce((acc, curr) => acc + curr)}\n`);
} while (mangoTree.healthStatus != false)
