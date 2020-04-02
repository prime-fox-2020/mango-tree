'use strict';
class FruitTree {
	constructor(year = 0, alreadyHarvested = 0, heightRightNow = 0, status = true) {
		this.year = year;
		this.alreadyHarvested = alreadyHarvested;
		this.heightRightNow = heightRightNow;
		this.status = status;
		this.harvestedFruits = {
			good: 0,
			bad: 0
		};
	}
	get age() {
		return this.year;
	}
	get height() {
		let heightMeter = this.heightRightNow.toFixed(2);
		return `${heightMeter} m`;
	}
	get fruits() {
		return this.harvestedFruits;
	}
	get healthStatus() {
		return this.status;
	}
	get harvested() {
		let goodFruits = this.harvestedFruits.good;
		let badFruits = this.harvestedFruits.bad;
		let fruitsInBox = this.alreadyHarvested;
		return `${fruitsInBox} ( ${goodFruits} good, ${badFruits} bad )`;
	}
	grow() {
		this.year += 1;
		if (this.year === 11) {
			this.status = false;
		}
		let randomize = Math.random() + 0.2;
		if (this.year <= 5) {
			this.heightRightNow += randomize;
		}
		return this;
	}
	produceFruits() {
		let newFruit = new Fruit();
		//random gen
		let max = Math.floor(8);
		let randomize = Math.floor(Math.random() * max);
		if (this.year >= 5) {
			if (newFruit.quality) {
				return (this.harvestedFruits['good'] = randomize);
			} else {
				return (this.harvestedFruits['bad'] = randomize);
			}
		}
	}
	harvest() {
		let goodFruits = this.harvestedFruits.good;
		let badFruits = this.harvestedFruits.bad;
		this.alreadyHarvested = goodFruits + badFruits;
		return this.alreadyHarvested;
	}
}
class Fruit {
	constructor() {
		this.quality = Math.random() >= 0.5;
	}
}
class MangoTree extends FruitTree {
	constructor() {
		super();
	}
	type(type) {
		return `Mangga ${type}`;
	}
}
class Mango extends Fruit {
	constructor() {
		super();
	}
}
class AppleTree extends FruitTree {
	constructor() {
		super();
	}
	color(color) {
		return `warna apel ini adalah ${color} :D`;
	}
}
class Apple extends Fruit {
	constructor() {
		super();
	}
}
class PearTree extends FruitTree {
	constructor() {
		super();
	}
	shape(shape) {
		return `Bentuk pir ${shape}`;
	}
}
class Pear extends Fruit {
	constructor() {
		super();
	}
}
// for mango
console.log('ini untuk mangga ==');
console.log('------------------------------------------------------------------');
let mangoTree = new MangoTree();
do {
	mangoTree.grow();
	mangoTree.produceFruits();
	mangoTree.harvest();
	console.log(`Tahun ke-${mangoTree.age} ==> Tinggi = ${mangoTree.height} ::: Hasil Panen = ${mangoTree.harvested}`);
} while (mangoTree.status != false);
console.log('\n' + mangoTree.type('Harum Manis') + '\n');
// for apple
console.log('Buah apel');
console.log('------------------------------------------------------------------');
let appleTree = new AppleTree();
do {
	appleTree.grow();
	appleTree.produceFruits();
	appleTree.harvest();
	console.log(`Tahun ke-${appleTree.age} =>Tinggi = ${appleTree.height} ::: Hasil Panen = ${appleTree.harvested}`);
} while (appleTree.status != false);
console.log('\n' + appleTree.color('merah') + '\n');
// for pear
console.log('buah pir buah pir <==');
console.log('------------------------------------------------------------------');
let pearTree = new PearTree();
do {
	pearTree.grow();
	pearTree.produceFruits();
	pearTree.harvest();
	console.log(`Tahun ke-${pearTree.age} ==> Tinggi = ${pearTree.height} ::: Hasil Panen = ${pearTree.harvested}`);
} while (pearTree.status != false);
console.log('\n' + pearTree.shape('kotak') + '\n');
