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
    this._harvested = 0
  }

  get age () {
    return this._age;
  }

  get height () {
    return `${this._height.toFixed(1)} m`;
  }

  get fruits () {

  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvested () {
    return this._harvested;
  }

  // Get current states here

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
      this._harvested += Math.round(Math.random() * 15 * this._height);
    }
  }

  // Get some fruits
  harvest () {

  }

}

class Mango {
  // Produce a mango
  constructor () {
    
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
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)

// Release 1
class AppleTree {}
class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
