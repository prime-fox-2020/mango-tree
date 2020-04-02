"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._matureAge    = 10;
    this._mature       = false;
    this._age          = 0;
    this._maxAge       = 20;
    this._height       = 0;
    this._maxHeight    = 6.82;
    this._fruits       = [];
    this._healthStatus = true;
    this._harvested    = 0;

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
  
  set age (val) {
    this._age = val;
  }

  set height (val) {
    this._height = val;
  }

  set fruits(val){
    this._fruits = val;
  }

  set healthStatus(val){
    this._healthStatus = val;
  }

  set harvested (val) {
    this._harvested = val;
  }
  // Get current states here

  // Grow the tree
  grow () {
    //check Age
    if(this.age < this._maxAge) this.age++
    else if(this.age >= this._maxAge) {
      this.healthStatus = false;
    }
    if(this.age >= this._matureAge) this._mature = true;
    //check Height
    if(this.height < this._maxHeight) {
      this.height += Math.random();
      this.height = Number(Number(this.height).toFixed(2));
    }
  }

  // Produce some mangoes
  produceMangoes () {
    if(this._mature){
      this.fruits = [];
      const produces = Math.ceil(Math.random() * 10);
      for(let i = 0; i < produces; i++){
        this.fruits.push(new Mango());
      }
    }
  }

  // Get some fruits
  harvest () {
    const produce = {
      good : 0, bad: 0
    };
    for(let mango of this.fruits){
      produce[mango.val]++;
    }
    this.harvested = `${this.fruits.length} (${produce.good} good, ${produce.bad} bad)`;
  }
}

class Mango {
  // Produce a mango
  constructor () {
    this.val = (Math.random() * 5) > 3 ? "bad" : "good";
  }
}


  // driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`)
    if(!mangoTree.healthStatus) console.log(`The tree has met it's end :sad:`);
  } while (mangoTree.healthStatus != false)


// Release 1
class AppleTree {
  constructor () {
    this._matureAge    = 4;
    this._mature       = false;
    this._age          = 0;
    this._maxAge       = 15;
    this._height       = 0;
    this._maxHeight    = 4.76;
    this._fruits       = [];
    this._healthStatus = true;
    this._harvested    = 0;
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
  
  set age (val) {
    this._age = val;
  }

  set height (val) {
    this._height = val;
  }

  set fruits(val){
    this._fruits = val;
  }

  set healthStatus(val){
    this._healthStatus = val;
  }

  set harvested (val) {
    this._harvested = val;
  }
  // Get current states here

  // Grow the tree
  grow () {
    //check Age
    if(this.age < this._maxAge) this.age++
    else if(this.age >= this._maxAge) {
      this.healthStatus = false;
    }
    if(this.age >= this._matureAge) this._mature = true;
    //check Height
    if(this.height < this._maxHeight) {
      this.height += Math.random();
      this.height = Number(Number(this.height).toFixed(2));
    }

  }

  // Produce some mangoes
  produceApples () {
    if(this._mature){
      const produces = Math.ceil(Math.random() * 10);
      for(let i = 0; i < produces; i++){
        this.fruits.push(new Apple());
      }
    }
  }

  // Get some fruits
  harvest () {
    const produce = {
      good : 0, bad: 0
    };
    for(let apple of this.fruits){
      produce[apple.val]++;
    }
    this.harvested = `${this.fruits.length} (${produce.good} good, ${produce.bad} bad)`;
    this.fruits = [];
  }
}
class Apple {
  constructor () {
    this.val = (Math.random() * 5) > 3 ? "bad" : "good";
  }
}

// Release 2
class FruitTree {
  constructor () {
  }
}
class Fruit {
  constructor () {
    this.val = (Math.random() * 5) > 3 ? "bad" : "good";
  }
}
