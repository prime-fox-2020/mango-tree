"use strict"

// Release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor () {
    this._age = 0 
    this._height = 0
    this._fruits = 0 
    this._healthStatus = true
    this._harvested = []
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
    this._age ++
    if (this._age == 1){
      this._height = 0.5
    }else if(this._age>1 && this._age <=10){
      this._height += Math.random()*2
    }else if(this._age<=20){
      this._height += Math.random()*0.5
    }
    //Pohon Mati Umur 21Tahun
    if(this.age>20){
      this._healthStatus = false
      console.log('The Mango tree has met its end. :sad:')
    }

    this._height = Math.floor(this._height*10)/10 ;
    
    return this
  }

  // Produce some mangoes
  // Mangga Berbuah biasanya Umur 3 tahun
  produceMangoes () {
    if(this._age>=3 && this._age<=8){
      this._fruits = Math.random()*20
    }else if(this.age>8){
      this._fruits = Math.random()*30
    }
  }
  

  // Get some fruits
  harvest () {
  
    let good =0;
    let bad = 0
    for (let i = 0; i < this.fruits; i++) {
      let tesManggo = new Mango();
      tesManggo.cek()
      if(tesManggo.quality == 'good'){
        good ++
      }else{
        bad ++
      }
    }
    this._harvested=`${good+bad} (${good} good, ${bad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor () {
    this.quality =''
  }

  cek(){
    let angka = Math.random();
    if(angka<0.2){
      this.quality = 'bad'
    }else{
      this.quality = 'good'
    }
  }

}

// driver code untuk release 0
let mangoTree = new MangoTree()
mangoTree.harvest()
console.log('The Mango tree is alive! :smile:')
do {
  if(mangoTree.age>0){
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`);
  }
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
} while (mangoTree.healthStatus != false)

  
console.log(`\n ================================================================= `)
console.log(` ================================================================= \n`)
// // Release 1
// class AppleTree {}
// class Apple {}
class AppleTree {

  // Initialize a new AppleTree
  constructor () {
    this._age = 0 
    this._height = 0
    this._fruits = 0 
    this._healthStatus = true
    this._harvested = []
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
    this._age ++
    if (this._age == 1){
      this._height = 0.4
    }else if(this._age>1 && this._age <=10){
      this._height += Math.random()*0.5
    }else if(this._age<=25){
      this._height += Math.random()*0.25
    }
    //Pohon Mati Umur 21Tahun
    if(this.age>30){
      this._healthStatus = false
      console.log('The Aplle tree has met its end. :sad:')
    }

    this._height = Math.ceil(this._height*10)/10 ;
    
    return this
  }

  // Produce some mangoes
  // Aplle Berbuah biasanya Umur 5 tahun
  produceMangoes () {
    if(this._age>=5 && this._age<=10){
      this._fruits = Math.random()*30
    }else if(this.age>8){
      this._fruits = Math.random()*50
    }
  }
  

  // Get some fruits
  harvest () {
  
    let good =0;
    let bad = 0
    for (let i = 0; i < this.fruits; i++) {
      let tesApple = new Apple();
      tesApple.cek()
      if(tesApple.quality == 'good'){
        good ++
      }else{
        bad ++
      }
    }
    this._harvested=`${good+bad} (${good} good, ${bad} bad)`
  }

}

class Apple {
  // Produce a mango
  constructor () {
    this.quality =''
  }

  cek(){
    let angka = Math.random();
    if(angka<0.2){
      this.quality = 'bad'
    }else{
      this.quality = 'good'
    }
  }

}

// driver code untuk release 0
let appleTree = new AppleTree()
appleTree.harvest()
console.log('The Aplle tree is alive! :smile:')
do {
  if(appleTree.age>0){
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} m | Fruits harvested = ${appleTree.harvested}`);
  }
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
} while (appleTree.healthStatus != false)



// // Release 2
// class FruitTree {}
// class Fruit {}

