"use strict"

// release 2
class FruitTree{
  constructor(age, height, fruits, healthStatus, harvested){
    this._age = age
    this._height = height
    this._fruits = fruits
    this._healthStatus = healthStatus
    this._harvested = harvested
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  get healthStatus () {
    return this._healthStatus
  }

  get harvested () {
    return this._harvested
  }
}
// Release 0

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = null ) {
    super(age, height, fruits, healthStatus, harvested)
  }

  // Get current states here

  // Grow the tree
  grow () {
    this._age += 1;

    //Stop the height
    if(this.height <= 7){
      this._height += Math.random() * 1;
    } 
    
    // Died Tree
    if(this.age === 20) this._healthStatus = false;
  }

  // Produce some mangoes
  produceMangoes () {
    if(this.age >= 3){ //Mature Age
      this._fruits = Math.ceil(Math.random() * 11); // get the fruits
      this.harvest(this.fruits); 
    } else{
      this.harvest(this.fruits)
    }
  }

  // Get some fruits
  harvest (fruits) {
    let good = 0;
    let bad = 0;
    // decider either good or bad
    for (let i = 0; i < fruits; i++) {
      const dice = Math.round(Math.random());
      if(dice === 1){
        good++;
      }else {
        bad++;
      }
    }
    this._harvested = `${fruits} (${good} good, ${bad} bad)`;
  }
}

class Mango {}


   let mangoTree = new MangoTree()
   console.log('==================')
   console.log('====MANGO-TREE====')
   console.log('==================')
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(2)} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthStatus != false)
   console.log('\n')


// Release 1
class AppleTree extends FruitTree {
  constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = null) {
    super(age, height, fruits, healthStatus, harvested)
    }
  
    // Get current states here
  
    // Grow the tree
    grow () {
      this._age += 1;
  
      //Stop the height
      if(this.height <= 7){
        this._height += Math.random() * 1;
      } 
      
      // Died Tree
      if(this.age === 20) this._healthStatus = false;
    }
  
    // Produce some apples
    produceApples () {
      if(this.age >= 3){ //Mature Age
        this._fruits = Math.ceil(Math.random() * 11); // get the fruits
        this.harvest(this.fruits); 
      } else {
        this.harvest(this.fruits)
      }
    }
  
    // Get some fruits
    harvest (fruits) {
      let good = 0;
      let bad = 0;
      // decider either good or bad
        for (let i = 0; i < fruits; i++) {
        const dice = Math.round(Math.random());
        if(dice === 1){
          good++;
        }else {
          bad++;
        }
      }
      this._harvested = `${fruits} (${good} good, ${bad} bad)`;
    }
}

class Apple {}

let appleTree = new AppleTree()
console.log('==================')
console.log('====APPLE-TREE====')
console.log('==================')
   do {
     appleTree.grow();
     appleTree.produceApples();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(2)} | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthStatus != false)
   console.log('\n')

