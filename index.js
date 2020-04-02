"use strict"
//release 2

class FruitTree {
  constructor (age, height, fruits, healthStatus, harvested, mature) {
    this._age = age;
    this._height = height;
    this._fruits = fruits;
    this._healthStatus = healthStatus;
    this._harvested = harvested;
    this._mature = mature;
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
}

class Fruit {
  constructor (random) {
      this.quality =random;
  }
}


// Release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (age, height, fruits, healthStatus, harvested, mature) {
    super(age, height, fruits, healthStatus, harvested, mature)
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
  grow () {
    this._age++;
    this._healthStatus--;
    // this._healthStatus -= Math.floor((Math.random()*2));
    if (this._healthStatus <=0) {
      this._healthStatus = false;
    }
    if (this._age < 20) {
      this._height += Math.random()*1;
    }
  }

  // Produce some mangoes
  produceMangoes () {
    this._fruits = [];
    let quality = ["Good", "Bad"];
    let rand = Math.floor(Math.random()*10);

      while (rand >= 0) {
        let random = Math.floor(Math.random()*2);
        this._fruits.push(new Mango(quality[random]));
        rand--;
      }
  }

  // Get some fruits
  harvest () {
    let harvestedFruit = this._fruits.length
    let countBad = 0;
    let countGood = 0;

      for (var i = 0; i < harvestedFruit; i++) {
        if (this._fruits[i].quality == "Good") {
          countGood++;
        }
        else {
          countBad++;
        }
        this._harvested = `${this._fruits.length} (${countGood} Good, ${countBad} Bad)`
      }
    }
  }

  class Mango extends FruitTree{
    //produce a mango
    constructor (random) {
        super(random);
    }
  }

     // driver code untuk release 0
     console.log("================================================================================");
     console.log("===============================MANGO TREE=======================================");
     console.log("The tree is alive! :smile:");
     let mangoTree = new MangoTree(0, 0, 0, 20, 0, 10)
     do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false )
    console.log("The tree has met its end. :sad:");

// Release 1
console.log("================================================================================");
console.log("===============================APPLE TREE=======================================");
class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor (age, height, fruits, healthStatus, harvested, mature) {
    super(age, height, fruits, healthStatus, harvested, mature)
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
  grow () {
    this._age++;
    this._healthStatus -= Math.floor((Math.random()*20));
    if (this._healthStatus <=0) {
      this._healthStatus = false;
    }
    if (this._age < 20) {
      this._height += Math.random()*1;
    }
  }
  // Produce some mangoes
  produceApples () {
    this._fruits = [];
    let quality = ["Good", "Bad"];
    let rand = Math.floor(Math.random()*10);

      while (rand >= 0) {
        let random = Math.floor(Math.random()*2);
        this._fruits.push(new Mango(quality[random]));
        rand--;
      }
  }
  // Get some fruits
  harvest () {
    let harvestedFruit = this._fruits.length
    let countBad = 0;
    let countGood = 0;

      for (var i = 0; i < harvestedFruit; i++) {
        if (this._fruits[i].quality == "Good") {
          countGood++;
        }
        else {
          countBad++;
        }
        this._harvested = `${this._fruits.length} (${countGood} Good, ${countBad} Bad)`
      }
    }


}

class Apple extends FruitTree{
  //produce a apple
  constructor (random) {
      super(random);
  }
}

    console.log("The tree is alive! :smile:");
    let appleTree = new AppleTree(0, 0, 0, 200, 0, 10)
    do {
    appleTree.grow();
    appleTree.produceApples();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)

if (appleTree._age > 50) {
  console.log("The tree lives long enough :)");
}
else if (appleTree._age <= 20) {
  console.log("The tree is still a teenager");
}
else if (appleTree._age >= 20 && appleTree._age <= 50) {
  console.log("The tree is mature");
}


//Release 3

class PearTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (age, height, fruits, healthStatus, harvested, mature) {
    super(age, height, fruits, healthStatus, harvested, mature)
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
  grow () {
    this._age++;
    this._healthStatus -= Math.floor((Math.random()*30));
    if (this._healthStatus <=0) {
      this._healthStatus = false;
    }
    if (this._age < 30) {
      this._height += Math.random()*3;
    }
  }

  // Produce some mangoes
  producePears () {
    this._fruits = [];
    let quality = ["Good", "Bad"];
    let rand = Math.floor(Math.random()*10);

      while (rand >= 0) {
        let random = Math.floor(Math.random()*2);
        this._fruits.push(new Pear(quality[random]));
        rand--;
      }
  }

  // Get some fruits
  harvest () {
    let harvestedFruit = this._fruits.length
    let countBad = 0;
    let countGood = 0;

      for (var i = 0; i < harvestedFruit; i++) {
        if (this._fruits[i].quality == "Good") {
          countGood++;
        }
        else {
          countBad++;
        }
        this._harvested = `${this._fruits.length} (${countGood} Good, ${countBad} Bad)`
      }
    }
  }

  class Pear extends FruitTree{
    //produce a mango
    constructor (random) {
        super(random);
    }
  }

     // driver code untuk release 0
     console.log("================================================================================");
     console.log("===============================PEAR TREE========================================");
     console.log("The tree is alive! :smile:");
     let pearTree = new PearTree(0, 0, 0, 50, 0, 10)
     do {
     pearTree.grow();
     pearTree.producePears();
     pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
  } while (pearTree.healthStatus != false )
    console.log("The tree has met its end. :sad:");
