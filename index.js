"use strict"

class FruitTree {
    constructor(limitAge,limitGrow,matureAge) {
        this.age = 0
        this.height = 0
        this.fruits = []
        this.harvested = { good: 0, bad: 0 }
        this.healthStatus = true
        this.maturityStatus = false
        this.limitAge = limitAge;
        this.limitGrow = limitGrow;
        this.matureAge = matureAge;
    }
    /// calculatornya di sini lah ya ////
    /// fungsi get dan set untuk mengubah value dari properti yang private
    /// constructor (parameter)

    get getAge() {
        return this.age;
    }

    get getHeight() {
        return this.height;
    }

    get getFruits() {
        return this.fruits;
    }

    get getHealthStatus() {
        return this.healthStatus;
    }

    get getHarvested() {
        let goodFruits = this.harvested.good;
        let badFruits = this.harvested.bad;
        return ` ${goodFruits + badFruits} (${goodFruits} good, ${badFruits} bad)`
    }
    
    grow() {
        this.harvested.good = 0;
        this.harvested.bad = 0;
    
        this.age++;
        if (this.age < this.limitGrow) {
            this.height += Math.floor(Math.random() * 3) + 1;
        }
        if (this.matureAge < this.age) { 
            this.maturityStatus = true
        }
        if (this.age == this.limitAge) {
            this.healthStatus = false
        }
    }
    
    harvest() {
        for (let i = 0; i < this.fruits.length; i++) {
            if (this.fruits[i].quality == 1) this.harvested.good++;
            else this.harvested.bad++;
        }
        this.fruits = []
    }


}
// buat extend nanti
class Fruit {
    constructor() {
        this.quality = Math.round(Math.random())
    }
}

class MangoTree extends FruitTree {

    constructor() {
        super(23,10,5)
    }

    produceMangoes() {
        if (this.maturityStatus == true){
            let randomFruits = Math.round(Math.random() * 20) + 1;
            for (let i = 0; i < randomFruits; i++) {
                this.fruits.push(new Mango())
            }
        }
    }
}

class Mango extends Fruit {
    constructor() {
        super()
    }
}


class AppleTree extends FruitTree {
    constructor() {
        super(23,10,5)
    }
    produceApples() {
        if (this.maturityStatus == true){
            let randomFruits = Math.round(Math.random() * 20) + 1;
            for (let i = 0; i < randomFruits; i++) {
                this.fruits.push(new Apple())
            }
        }
    }
}

class Apple extends Fruit {
    // Produce a Apple
    constructor() {
        super()
    }
}

class PearTree extends FruitTree {
    constructor() {
        super(23,10,5)
    }

    producePears() {
        if (this.maturityStatus == true){
            let randomFruits = Math.round(Math.random() * 10) + 1;
            for (let i = 0; i < randomFruits; i++) {
                this.fruits.push(new Pear())
            }
        }
    }
}

class Pear extends Fruit {
    // Produce a Pear
    constructor() {
        super()
    }
}


let mangoTree = new MangoTree()
console.log(`ITS ALIVE`)
do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    mangoTree.harvest();
    console.log(`[Year ${mangoTree.getAge} Report] Height = ${mangoTree.getHeight} m | Fruits harvested = ${mangoTree.getHarvested}`)
} while (mangoTree.getHealthStatus != false)
console.log('Game Over for Mango Tree')
console.log('😭   😭   😭   😭   😭   😭   😭   😭   😭   😭   😭')

console.log('\n')

let appleTree = new AppleTree()
console.log(`ITS ALIVE`)
do {
    appleTree.grow();
    appleTree.produceApples();
    appleTree.harvest();
    console.log(`[Year ${appleTree.getAge} Report] Height = ${appleTree.getHeight} m | Fruits harvested = ${appleTree.getHarvested}`)
} while (appleTree.getHealthStatus != false)
console.log('Game Over for Apple Tree')
console.log('😭   😭   😭   😭   😭   😭   😭   😭   😭   😭   😭')
console.log('\n')

let pearTree = new PearTree()
console.log(`ITS ALIVE`)
do {
    pearTree.grow();
    pearTree.producePears()
    pearTree.harvest();
    console.log(`[Year ${pearTree.getAge} Report] Height = ${pearTree.getHeight} m | Fruits harvested = ${pearTree.getHarvested}`)
} while (pearTree.getHealthStatus != false)
console.log('Game Over for Pear Tree')
console.log('😭   😭   😭   😭   😭   😭   😭   😭   😭   😭   😭')