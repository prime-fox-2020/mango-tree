class Car {
    constructor(model, price){
        this._model = model
        this._price = price
    }

    get price(){
        return this._price
    }

    brush(color){
        console.log(`${this._model} color is ${color}`)
    }
}

class Toyota extends Car{
    constructor(model, price, cc){
        super(model, price)
        this._cc = cc
    }

    start(){
        console.log(`The ${this._model} engine is started`)
    }
}

var t = new Toyota('Yaris', 2000, 1000)

t.brush('red')
t.start()