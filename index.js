class FruitTree{
  constructor (name ,age = 0, height = 0, fruits = 0, healthStatus = true, harvested = 0, limitAge = 0, limitHeight = 5) {
    this._name = name
    this._age = age
    this._height = height
    this._fruits = []
    this._healthStatus = healthStatus
    this._harvested = harvested
    this.limitAge = limitAge
    this.limitHeight = limitHeight
  }

  get age () {
    return this._age
  }

  get height () {
    return this._height
  }

  get fruits () {
    return this.fruit
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
    
    this._age++

    let heighGrow = 0

    if(this._age < 10 && this.height < 4.4){
      heighGrow = (Math.floor(Math.random() * 10) / 10)
    }

    this._height += heighGrow
    this._height = Number(this._height.toFixed(2))

    if(this._age > 19){
      this._healthStatus = false
    }
  }

  // Produce some Applees
  produceFruit () {
    if(this._age > this.limitAge){
      let countFruits = Math.floor(Math.random() * 7) + 1

      for(let i=0; i<countFruits; i++){
        let fruit = new Fruit
        fruit.qualityFruits()
        this._fruits.push(fruit.quality)
      }
    }

  }

  // Get some fruits
  harvest () {
    let goodFruits = 0
    let badFruits = 0

    for(let i=0; i<this._fruits.length; i++){
      if(this._fruits[i] === 'Good'){
        goodFruits++
      } else {
        badFruits++
      }
    }

    this._harvested =  `${this._fruits.length} (${goodFruits} Good, ${badFruits} Bad)`
  }

}

class Fruit {
  // Produce a Apple
  constructor (quality) {
    this.quality = quality
  }

  qualityFruits(){
    let randomFruits = Math.round(Math.random())
    if(randomFruits === 0){
      this.quality = 'Good'
      return this
    } else {
      this.quality = 'bad'
      return this
    }
  }
}


class MangoTree extends FruitTree{
  constructor (name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight) {
    super(new Mango, age, height, fruits, healthStatus, harvested , limitAge, limitHeight)
  }
}

class Mango extends Fruit{
  constructor(quality){
    super(quality)
  }
}

class AppleTree extends FruitTree{
  constructor (name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight) {
    super(new Apple, age, height, fruits, healthStatus, harvested , limitAge, limitHeight)
  }
}

class Apple extends Fruit{
  constructor(quality){
    super(quality)
  }
}

class PearTree extends FruitTree{
  constructor (name, age, height, fruits, healthStatus, harvested , limitAge, limitHeight) {
    super(new Pear, age, height, fruits, healthStatus, harvested , limitAge, limitHeight)
  }
}

class Pear extends Fruit{
  constructor(quality){
    super(quality)
  }
}

console.log("=====================Mango================")
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceFruit();
 mangoTree.harvest();
 console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthStatus != false)
console.log(`the tree has met its end. :sad`)

console.log("=====================Apple================")
let appleTree = new AppleTree()
do {
  appleTree.grow();
  appleTree.produceFruit();
  appleTree.harvest();
 console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log(`the tree has met its end. :sad`)

console.log("=====================Pear================")
let pearTree = new PearTree()
do {
  pearTree.grow();
  pearTree.produceFruit();
  pearTree.harvest();
 console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log(`the tree has met its end. :sad`)