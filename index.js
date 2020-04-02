"use strict"
// Release 2
class FruitTree {
  constructor () {
    this._age=0
    this._height=0
    this._harvested=null
    this._fruits=[0,0,0]
    this._healthStatus=true
    this._matureage=Math.floor(Math.random()*10)+1
    this._die=Math.floor(Math.random()*20)+2
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
  get matureage(){
    return this._matureage
  }
  get die(){
    return this._die
  }
}
class Fruit {
  constructor(){
    this.quantity=this.check()
  }
  check(){
    let good=0
    let bad=0
    var x=Math.round(Math.random())
    if(x==1)
    {
      good++
    }else {
      bad++
    }
  }
}
// Release 0
class MangoTree extends FruitTree{
 
  // Initialize a new MangoTree
  constructor (age = 0, height = 0,  harvested = null,fruits=[0,0,0],healthStatus=true,matureage=Math.floor(Math.random()*10)+1 ,die=Math.floor(Math.random()*20)+2) {
    super(age, height, fruits, harvested,fruits,healthStatus,matureage,die)
  }
  
  random(angka) {
    return Math.floor(Math.random()*angka)+1
  }

 

  // Get current states here

  // Grow the tree
  grow () {
    if(this.healthStatus==true){      
      this._age+=1
      if(this.height<=3.7){
        this._height+=(Math.random()*1)
        this._height= +this._height.toFixed(2)
      }
      if((this.age)==this.die){
        this._healthStatus=false
      }
    }
  }

  // Produce some mangoes
  produceMangoes () {
      this._fruits[0]=this.random(10)
      this._fruits[1]=this.random(10)
      this._fruits[2]=this.fruits[0]+this.fruits[1]
  }

  // Get some fruits
  harvest () {
    if(this.age>=this.matureage){
      this._harvested=`${this.fruits[2]} (${this.fruits[0]} good, ${this.fruits[1]} bad)`
    }
    else this._harvested='Not mature enough'
  }

}


class Mango extends Fruit{
  // Produce a mango
  constructor () {
    super(this.quantity)
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
    if(mangoTree.healthStatus==false){
      console.log('The tree has met its end :(')
    }
  } while (mangoTree.healthStatus != false)

// Release 1
class AppleTree extends FruitTree{
  constructor (age = 0, height = 0,  harvested = null,fruits=[0,0,0],healthStatus=true,matureage=Math.floor(Math.random()*10)+1 ,die=Math.floor(Math.random()*20)+2) {
    super(age, height, fruits, harvested,fruits,healthStatus,matureage,die)
  }
  
  random(angka) {
    return Math.floor(Math.random()*angka)+1
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this.healthStatus==true){      
      this._age+=1
      if(this.height<=3.7){
        this._height+=(Math.random()*1)
        this._height= +this._height.toFixed(2)
      }
      if((this.age)==this.die){
        this._healthStatus=false
      }
    }
  }

  // Produce some apples
  produceApples () {
      this._fruits[0]=this.random(10)
      this._fruits[1]=this.random(10)
      this._fruits[2]=this.fruits[0]+this.fruits[1]
  }

  // Get some fruits
  harvest () {
    if(this.age>=this.matureage){
      this._harvested=`${this.fruits[2]} (${this.fruits[0]} good, ${this.fruits[1]} bad)`
    }
    else this._harvested='Not mature enough'
  }
}
class Apple extends Fruit{
  constructor () {
    super(this.quantity)
  }
}


let appleTree = new AppleTree()
  do {
    appleTree.grow();
    appleTree.produceApples();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
    if(appleTree.healthStatus==false){
      console.log('The tree has met its end :(')
    }
  } while (appleTree.healthStatus != false)


//Release 3


class PearTree extends FruitTree{
  constructor (age = 0, height = 0,  harvested = null,fruits=[0,0,0],healthStatus=true,matureage=Math.floor(Math.random()*10)+1 ,die=Math.floor(Math.random()*20)+2) {
    super(age, height, fruits, harvested,fruits,healthStatus,matureage,die)
  }
  
  random(angka) {
    return Math.floor(Math.random()*angka)+1
  }

  // Get current states here

  // Grow the tree
  grow () {
    if(this.healthStatus==true){      
      this._age+=1
      if(this.height<=3.7){
        this._height+=(Math.random()*1)
        this._height= +this._height.toFixed(2)
      }
      if((this.age)==this.die){
        this._healthStatus=false
      }
    }
  }

  // Produce some apples
  producePears () {
      this._fruits[0]=this.random(10)
      this._fruits[1]=this.random(10)
      this._fruits[2]=this.fruits[0]+this.fruits[1]
  }

  // Get some fruits
  harvest () {
    if(this.age>=this.matureage){
      this._harvested=`${this.fruits[2]} (${this.fruits[0]} good, ${this.fruits[1]} bad)`
    }
    else this._harvested='Not mature enough'
  }
}
class Pear extends Fruit{
  constructor () {
    super(this.quantity)
  }
}


let pearTree = new PearTree()
  do {
    pearTree.grow();
    pearTree.producePears();
    pearTree.harvest();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
    if(pearTree.healthStatus==false){
      console.log('The tree has met its end :(')
    }
  } while (pearTree.healthStatus != false)
