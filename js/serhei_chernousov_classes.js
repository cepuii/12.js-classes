class Car{
    constructor(model, mark, country, speed){
        this.model = model;
        this.mark = mark;
        this.country = country;
        if(typeof speed === 'number' && speed >= 0){  
            this.speed = speed;
        } else {
            throw new Error("speed must be a number")
        }
    }

    increaseSpeed(speedUpValue){
       return this.speed += speedUpValue; 
    }
    
    decreaseSpeed(speedDownValue){
       return this.speed -= speedDownValue; 
    }
}

class Truck extends Car{
    constructor(model, mark, country, speed){
        super(model, mark, country, speed);
    }

    takeWeight(cargo){
        console.log(`truck ${this.mark} ${this.model} take ${cargo}kg`);
    }
}

class Bus extends Car{
    constructor(model, mark, country, speed){
        super(model, mark, country, speed);
    }

    takePeople(people){
        console.log(`bus ${this.mark} ${this.model} take ${people} people`);
    }
}

class Transporter extends Car{
    constructor(model, mark, country, speed){
        super(model, mark, country, speed);
    }

    takeCars(cars){
        console.log(`transporter ${this.mark} ${this.model} take ${cars} cars`);
    }
}
