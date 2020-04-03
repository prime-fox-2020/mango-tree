class FruitTree{
constructor () {
    this._age=0
    this._height=0
    this._harvested=null
    this._fruits=0
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
class Fruit{
constructor(){
    this.good=0
    this.bad=0
}
check(){
    var x=Math.round(Math.random())
    if(x==1)
    {
    this.good++
    }else {
    this.bad++
    }
    return [this.good,this.bad]
}
}

class MangoTree extends FruitTree{
// Initialize a new MangoTree
constructor (age = 0, height = 0,  harvested = null,fruits=[0,0,0],healthStatus=true,matureage=Math.floor(Math.random()*10)+1 ,die=Math.floor(Math.random()*20)+2) {
    super(age, height, fruits, harvested,fruits,healthStatus,matureage,die)
}

random(angka) {
    return Math.floor(Math.random()*angka)+1
}

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
    this._fruits=Math.floor(Math.random()*10)+2
    const mango=new Mango()
    for (let i = 0; i < this.fruits; i++) {
        mango.check() 
    }
    return mango.check()
}

// Get some fruits
harvest () {
    let check=this.produceMangoes()
    if(this.age>=this.matureage){
    this._harvested=`${check[1]+check[0]} (${check[1]} good, ${check[0]} bad)`
    }
    else this._harvested='Not mature enough'
}

}

class Mango extends Fruit{
constructor (good,bad) {
    super(good,bad)
}

}

let mangoTree = new MangoTree()

// console.log(mangoTree.produceMangoes())

do {
mangoTree.grow();
mangoTree.produceMangoes();
mangoTree.harvest();
console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
if(mangoTree.healthStatus==false){
    console.log('The tree has met its end :(')
}
} while (mangoTree.healthStatus != false)

class AppleTree extends FruitTree{
// Initialize a new MangoTree
constructor (age = 0, height = 0,  harvested = null,fruits=[0,0,0],healthStatus=true,matureage=Math.floor(Math.random()*10)+1 ,die=Math.floor(Math.random()*20)+2) {
    super(age, height, fruits, harvested,fruits,healthStatus,matureage,die)
}

random(angka) {
    return Math.floor(Math.random()*angka)+1
}

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
produceApples () {
    this._fruits=Math.floor(Math.random()*10)+2
    const mango=new Mango()
    for (let i = 0; i < this.fruits; i++) {
        mango.check() 
    }
    return mango.check()
}

// Get some fruits
harvest () {
    let check=this.produceApples()
    if(this.age>=this.matureage){
    this._harvested=`${check[1]+check[0]} (${check[1]} good, ${check[0]} bad)`
    }
    else this._harvested='Not mature enough'
}

}

class Apple extends Fruit{
constructor (good,bad) {
    super(good,bad)
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

class PearTree extends FruitTree{
// Initialize a new MangoTree
constructor (age = 0, height = 0,  harvested = null,fruits=[0,0,0],healthStatus=true,matureage=Math.floor(Math.random()*10)+1 ,die=Math.floor(Math.random()*20)+2) {
    super(age, height, fruits, harvested,fruits,healthStatus,matureage,die)
}

random(angka) {
    return Math.floor(Math.random()*angka)+1
}

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
producePears () {
    this._fruits=Math.floor(Math.random()*10)+2
    const mango=new Mango()
    for (let i = 0; i < this.fruits; i++) {
        mango.check() 
    }
    return mango.check()
}

// Get some fruits
harvest () {
    let check=this.producePears()
    if(this.age>=this.matureage){
    this._harvested=`${check[1]+check[0]} (${check[1]} good, ${check[0]} bad)`
    }
    else this._harvested='Not mature enough'
}

}

class Pear extends Fruit{
constructor (good,bad) {
    super(good,bad)
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

