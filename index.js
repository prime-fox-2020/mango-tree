"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = 0
    this.startProducing = false
    this._matureAge = null;
    this._wiltAge = null;
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

  // Get current states here

  // Grow the tree
  grow () {
    let heightGrowth = Math.round(Math.random()*5)/4

    this._age += 1
    
    if( this.age < this._wiltAge - 2 ){
      this._height += heightGrowth
    }

    if (this._matureAge == null) {
      let randomAge = Math.floor(Math.random() * 10) + 5;
      this._mature_age = randomAge;
    }

    if (this._wiltAge == null) {
      let randomAge = Math.floor(Math.random() * 10) + 10;
      this._wiltAge = this._matureAge + randomAge;
    }

    if (this._age == this._wiltAge) {
      this._healthStatus = false;
    }

    if(this._age > 1){
      this.startProducing = true
    }
    if(this.age > this._wiltAge -1){
      this.startProducing = false
    }
    // if(this.age === 20){
    //   this._healthStatus = false
    // }
  }

  // Produce some mangoes
  produceMangoes () {
    let randomProduct = Math.floor(Math.random()*10)+1
    let counter = 0
    while(counter < randomProduct && this.startProducing === true){
      this._fruits.push(new Mango())
      counter++
    }
  }

  // Get some fruits
  harvest () {
    this._harvested = 0
    let goodfruit = 0
    let badfruit = 0
    for( let i = 0 ; i < this._fruits.length ; i++){
      if(this.fruits[i].quality === 'bad'){
        badfruit++
      }
      else{
        goodfruit++
      }
    }
    this._harvested = badfruit + goodfruit + ' (good : ' + goodfruit + ',bad: ' + badfruit + ' )'
    this._fruits = []
  }
}

class Mango {
  // Produce a mango
  constructor () {
    let arrayQuality = ['good','bad']
    let randomize = Math.floor(Math.random()*2)
    this.quality = arrayQuality[randomize]
  }
}


  // driver code untuk release 0
  let mangoTree = new MangoTree()
  console.log(`The tree is alive! :smile:`)
  do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}m | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
  console.log(`The tree has met its end. :sad:`)


// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
