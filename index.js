"use strict"

// Release 0

// class MangoTree {

//   // Initialize a new MangoTree
//   constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = 0, _maxAge = 20, maxGrow = 10) {
//     this._age = age
//     this._height = height
//     this._fruits = []
//     this._healthStatus = healthStatus
//     this._harvested = harvested
//     this._maxAge = _maxAge
//     this._maxGrow = maxGrow
//   }

//   get age () {
//     return this._age
//   }
  
//   set age(param) {
//     this._age = param;
//   }

//   get height () {
//     return this._height
//   }

//   get fruits () {
//     return this._fruits
//   }

//   set fruits (param) {
//      this._fruits = param
//   }

//   get healthStatus () {
//     return this._healthStatus
//   }

//   set healthStatus(param) {
//     this._healthStatus = param;
    
//   }

//   get harvested () {
//     return this._harvested
//   }

//   // Get current states here

//   // Grow the tree
//   grow () {
//     if(this._age <= this._maxAge) {
//       this.age++
//     }
//     if(this._age <= this._maxGrow) {
//       this._height += Math.random()
//     }
//     if(this._age == this._maxAge) {
//       this._healthStatus = false
//     }
//     return this
//   }

//   // Produce some mangoes
//   produceMangoes () {
//     if(this._age <= this._maxAge) {
//       let totalFruit = Math.ceil(Math.random()*10) 
//         for(let i = 0; i < totalFruit; i++) {
//           let fruit = new Mango
//           fruit.produce()
//           this._fruits.push(fruit.quality)
//         }
      
//     }
//   }

//   // Get some fruits
//   harvest () {
//     let good = 0
//     let bad = 0

//     for(let i = 0; i < this._fruits.length; i++) {
//       if(this._fruits[i] == 'good') {
//         good++
//       } else {
//         bad++
//       }
//     }
//     this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
//     this._fruits = []
//   }
// }

// class Mango {
//   // Produce a mango
//   constructor (quality) {
//     this.quality = quality
//   }

//   produce() {
//     let roll = Math.ceil(Math.random()*10)
//     if(roll > 5) {
//       this.quality = 'good'
//       return this
//     } else {
//       this.quality = 'bad'
//       return this
//     }
//   }
// }

// /**
//   * driver code untuk release 0
//   * let mangoTree = new MangoTree()
//   * do {
//   *   mangoTree.grow();
//   *   mangoTree.produceMangoes();
//   *   mangoTree.harvest();
//   *   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//   * } while (mangoTree.healthStatus != false)
//   */
//   let mangoTree = new MangoTree()
//   do {
//     mangoTree.grow();
//     mangoTree.produceMangoes();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)}m | Fruits harvested = ${mangoTree.harvested} `)
//   } while (mangoTree.healthStatus != false)
//   console.log('The tree has met its end.')
// console.log('\n ===========================================\n')

// // Release 1
// class AppleTree extends MangoTree{
//   constructor(age, height, fruits, healthStatus, harvested, _maxAge, maxGrow) {
//     super(age, height, fruits, healthStatus, harvested, 30, 20)
//   }

//   produceApples() {
//     if(this._age <= this._maxAge) {
//       let totalFruit = Math.ceil(Math.random()*6) 
//         for(let i = 0; i < totalFruit; i++) {
//           let apple = new Apple
//           apple.produce()
//           this._fruits.push(apple.quality)
//         }
      
//     }
//   }
// }

// class Apple extends Mango { 
//   constructor(quality) {
//     super(quality)
//   }
// }

// let appleTree = new AppleTree()

// do {
//   appleTree.grow();
//   appleTree.produceApples();
//   appleTree.harvest();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)}m | Fruits harvested = ${appleTree.harvested} `)
// } while (appleTree.healthStatus != false)
// console.log('The tree has met its end.')
// console.log('\n ===========================================\n')


// Release 2
class FruitTree { 
  constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = 0, _maxAge = 10, maxGrow = 50) {
    this._age = age
    this._height = height
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = harvested
    this._maxAge = _maxAge
    this._maxGrow = maxGrow
  }

  get age () {
    return this._age
  }
  
  set age(param) {
    this._age = param;
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this._fruits
  }

  set fruits (param) {
     this._fruits = param
  }

  get healthStatus () {
    return this._healthStatus
  }

  set healthStatus(param) {
    this._healthStatus = param;
    
  }

  get harvested () {
    return this._harvested
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this._age <= this._maxAge) {
      this.age++
    }
    if(this._age <= this._maxGrow) {
      this._height += Math.random()
    }
    if(this._age == this._maxAge) {
      this._healthStatus = false
    }
    return this
  }

  // Produce some fruits
  produceFruits () {
    if(this._age <= this._maxAge) {
      let totalFruit = Math.ceil(Math.random()*10) 
        for(let i = 0; i < totalFruit; i++) {
          let fruit = new Fruit
          fruit.produce()
          this._fruits.push(fruit.quality)
        }
      
    }
  }

  // Get some fruits
  harvest () {
    let good = 0
    let bad = 0

    for(let i = 0; i < this._fruits.length; i++) {
      if(this._fruits[i] == 'good') {
        good++
      } else {
        bad++
      }
    }
    this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
    this._fruits = []
  }
}

class Fruit {
  constructor (quality) {
    this.quality = quality
  }

  produce() {
    let roll = Math.ceil(Math.random()*10)
    if(roll > 5) {
      this.quality = 'good'
      return this
    } else {
      this.quality = 'bad'
      return this
    }
  }
}


// Manggo Tree Extends
class ManggoTree extends FruitTree{
    constructor(age, height, fruits, healthStatus, harvested, _maxAge, maxGrow) {
      super(age, height, fruits, healthStatus, harvested, 20, 10)
    }
  
    produceMangoes() {
      if(this._age <= this._maxAge) {
        let totalFruit = Math.ceil(Math.random()*10) 
          for(let i = 0; i < totalFruit; i++) {
            let manggo = new Manggo
            manggo.produce()
            this._fruits.push(manggo.quality)
          }
      }
    }
}

class Manggo extends Fruit { 
  constructor(quality) {
    super(quality)
  }
}
let mangoTree = new ManggoTree()

  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)}m | Fruits harvested = ${mangoTree.harvested} `)
  } while (mangoTree.healthStatus != false)
  console.log('The Mango tree has met its end.')
  console.log('\n ===========================================\n')



// Apple Tree Extends Fruit Tree
class AppleTree extends FruitTree{
  constructor(age, height, fruits, healthStatus, harvested, _maxAge, maxGrow) {
    super(age, height, fruits, healthStatus, harvested, 30, 20)
  }

  produceApples() {
    if(this._age <= this._maxAge) {
      let totalFruit = Math.ceil(Math.random()*10) 
        for(let i = 0; i < totalFruit; i++) {
          let apple = new Apple
          apple.produce()
          this._fruits.push(apple.quality)
        }
    }
  }
}

class Apple extends Fruit { 
constructor(quality) {
  super(quality)
}
}
let appleTree = new AppleTree()

do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)}m | Fruits harvested = ${appleTree.harvested} `)
} while (appleTree.healthStatus != false)
console.log('The Apple tree has met its end.')
console.log('\n ===========================================\n')


// RELEASE 3
// Pear Tree Extend Fruit Tree
class PearTree extends FruitTree{
  constructor(age, height, fruits, healthStatus, harvested, _maxAge, maxGrow) {
    super(age, height, fruits, healthStatus, harvested, 9, 5)
  }

  producePears() {
    if(this._age <= this._maxAge) {
      let totalFruit = Math.ceil(Math.random()*12) 
        for(let i = 0; i < totalFruit; i++) {
          let pear = new Pear
          pear.produce()
          this._fruits.push(pear.quality)
        }
    }
  }
}

class Pear extends Fruit { 
constructor(quality) {
  super(quality)
}
}
let pearTree = new PearTree()

do {
  pearTree.grow();
  pearTree.producePears();
  pearTree.harvest();
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)}m | Fruits harvested = ${pearTree.harvested} `)
} while (pearTree.healthStatus != false)
console.log('The Pear tree has met its end.')
console.log('\n ===========================================\n')