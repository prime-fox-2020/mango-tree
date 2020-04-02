"use strict"

// Release 0

// class MangoTree {
//   // Initialize a new MangoTree
//   constructor () {
//     this._age = 0
//     this._height = 0
//     this._fruits = []
//     this._healthStatus = true
//     this._harvested = ''
    
//   }

//   get age () {
//     return this._age
//   }
  

//   get height () {
//     return this._height
//   }

//   get fruits () {
//     return this._fruits
//   }

//   get healthStatus () {
//     return this._healthStatus
//   }

//   get harvested () {
//     return this._harvested
//   }

//   // Get current states here

//   // Grow the tree
//   grow () {
//     if (this.age <= 20){
//       this._age ++
//     }
//     if (this.age < 10){
//       this._height += Math.random()
//     }
//     if (this.age == 20){
//       this._healthStatus = false
//     }
//   }

//   // Produce some mangoes
//   produceMangoes () {
//     let total = Math.ceil(Math.random()*10)
//     for (let i = 0; i < total; i++) {
//       let fruit = new Mango
//       fruit.qualitys()
//       this._fruits.push(fruit.quality)
//     }
//   }

//   // Get some fruits
//   harvest () {
//     let good = 0
//     let bad = 0
//     for (let i = 0; i < this._fruits.length; i++) {
//       if (this._fruits[i] == 'good'){
//         good += 1
//       } else {
//         bad +=1
//       }
//     }
//     this._harvested = `${this._fruits.length} (${good} good ${bad} bad)`
//     this._fruits = []
//   }
// }

// class Mango {
//   // Produce a mango
//   constructor (quality) {
//     this.quality = quality
//   }

//   qualitys() {
//     let dice = Math.random()
//     if (dice > 0.3){
//       this.quality = 'good'
//       return this
//     } else {
//       this.quality = 'bad'
//       return this
//     }
//   }
// }


// let mangoTree = new MangoTree()
//   console.log(`The mango tree is alive! :smile:`);
//   do {
//     mangoTree.grow();
//     mangoTree.produceMangoes();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested}`)
//   } while (mangoTree.healthStatus != false)
//   console.log(`The mango tree has met its end :sad:`);

// console.log(`\n`);

// // Release 1

// class AppleTree {
//   // Initialize a new MangoTree
//   constructor () {
//     this._age = 0
//     this._height = 0
//     this._fruits = []
//     this._healthStatus = true
//     this._harvested = ''
    
//   }

//   get age () {
//     return this._age
//   }
  

//   get height () {
//     return this._height
//   }

//   get fruits () {
//     return this._fruits
//   }

//   get healthStatus () {
//     return this._healthStatus
//   }

//   get harvested () {
//     return this._harvested
//   }

//   grow () {
//     if (this.age <= 20){
//       this._age ++
//     }
//     if (this.age < 10){
//       this._height += Math.random()
//     }
//     if (this.age == 20){
//       this._healthStatus = false
//     }
//   }

//   produceMangoes () {
//     let total = Math.ceil(Math.random()*10)
//     for (let i = 0; i < total; i++) {
//       let fruit = new Apple
//       fruit.qualitys()
//       this._fruits.push(fruit.quality)
//     }
//   }

//   // Get some fruits
//   harvest () {
//     let good = 0
//     let bad = 0
//     for (let i = 0; i < this._fruits.length; i++) {
//       if (this._fruits[i] == 'good'){
//         good += 1
//       } else {
//         bad +=1
//       }
//     }
//     this._harvested = `${this._fruits.length} (${good} good ${bad} bad)`
//     this._fruits = []
//   }
// }

// class Apple {
//   // Produce a mango
//   constructor (quality) {
//     this.quality = quality
//   }

//   qualitys() {
//     let dice = Math.random()
//     if (dice > 0.3){
//       this.quality = 'good'
//       return this
//     } else {
//       this.quality = 'bad'
//       return this
//     }
//   }
// }


// let appleTree = new AppleTree()
//   console.log(`The apple tree is alive! :smile:`);
//   do {
//     appleTree.grow();
//     appleTree.produceMangoes();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} | Fruits harvested = ${appleTree.harvested}`)
//   } while (appleTree.healthStatus != false)
//   console.log(`The apple tree has met its end :sad:`);


// Release 2
class FruitTree {
  // Initialize a new FruitTree
  constructor (startFruit = 0, stopGrow = 10, dead = 20) {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healthStatus = true
    this._harvested = ''
    this._startFruit = startFruit
    this._stopGrow = stopGrow
    this._dead = dead
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
  
  grow () {
    if (this.age <= this._dead){
      this._age ++
    }
    if (this.age <= this._stopGrow){
      this._height += Math.random()
    }
    if (this.age == this._dead){
      this._healthStatus = false
    }
  }

  produceFruits () {
    if (this._age > this._startFruit){
      let total = Math.ceil(Math.random()*10)
      for (let i = 0; i < total; i++) {
        let fruit = new Fruit
        fruit.qualitys()
        this._fruits.push(fruit.quality)
      }
    }
  }
    
  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0
    for (let i = 0; i < this._fruits.length; i++) {
      if (this._fruits[i] == 'good'){
        good += 1
      } else {
        bad +=1
      }
    }
    this._harvested = `${this._fruits.length} (${good} good ${bad} bad)`
    this._fruits = []
  }
}

class Fruit {
  // Produce a fruit
  constructor (quality) {
    this.quality = quality
  }

  qualitys() {
    let dice = Math.random()
    if (dice > 0.3){
      this.quality = 'good'
      return this
    } else {
      this.quality = 'bad'
      return this
    }
  }
}

class MangoTree extends FruitTree {
  constructor(){
    super(0, 10, 20)
  }
}

class Mango extends Fruit {
  constructor(quality){
    super(quality)
  }
}

class AppleTree extends FruitTree {
  constructor(){
    super(5, 15, 25)
  }
}

class Apple extends Fruit {
  constructor(){
    super(quality)
  }
}

let mangoTree = new MangoTree()
  console.log(`The Mango tree is alive! :smile:`);
  do {
    mangoTree.grow();
    mangoTree.produceFruits();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healthStatus != false)
  console.log(`The Mango tree has met its end :sad:`);
  console.log('\n')


let appleTree = new AppleTree()
console.log(`The apple tree is alive! :smile:`);
  do {
    appleTree.grow();
    appleTree.produceFruits();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)} | Fruits harvested = ${appleTree.harvested}`)
  } while (appleTree.healthStatus != false)
  console.log(`The apple tree has met its end :sad:`);
  console.log('\n')


// Release 3

class PearTree extends FruitTree {
  constructor(){
    super(2, 15, 15)
  }
}

class Pear extends Fruit {
  constructor(){
    super(quality)
  }
}

let pearTree = new PearTree()
console.log(`The pear tree is alive! :smile:`);
  do {
    pearTree.grow();
    pearTree.produceFruits();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)} | Fruits harvested = ${pearTree.harvested}`)
  } while (pearTree.healthStatus != false)
  console.log(`The pear tree has met its end :sad:`);
  console.log('\n')