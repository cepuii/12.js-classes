class Car{
    constructor(model, mark, country, speed){
        this.model = model;
        this.mark = mark;
        this.country = country;
        if(isPositiveNumber(speed)){  
            this.speed = speed;
        } else {
            console.error("speed must be a number");
        }
    }

    increaseSpeed(speedUpValue){
       return this.speed += speedUpValue; 
    }
    
    decreaseSpeed(speedDownValue){
       return this.speed -= speedDownValue; 
    }
}

function isPositiveNumber(number){
    return typeof number === "number" && number >= 0;
}

class Truck extends Car{
    constructor(model, mark, country, speed){
        super(model, mark, country, speed);
    }

    takeWeight(cargo){
        let message = isPositiveNumber(cargo) ? `truck ${this.mark} ${this.model} take ${cargo}kg` : 
            'Weight must be a number and greater then zero';
        console.log(message);
    }
}

class Bus extends Car{
    constructor(model, mark, country, speed){
        super(model, mark, country, speed);
    }

    takePeople(people){
        let message = isPositiveNumber(people) ? `bus ${this.mark} ${this.model} take ${people} people` : 
            'People count must be a number and greater then zero';
        console.log(message);
    }
}

class Transporter extends Car{
    constructor(model, mark, country, speed){
        super(model, mark, country, speed);
    }

    takeCars(cars){
        let message = isPositiveNumber(cars) ? `transporter ${this.mark} ${this.model} take ${cars} cars` : 
            'Cars amount must be a number and greater then zero';
        console.log(message);
    }
}


const errorTruck = new Truck('amg1000', 'Ford', 'USA', 'asd');

const truck = new Truck('amg1000', 'Ford', 'USA', 100);
truck.takeWeight('wqeqwe');
truck.takeWeight(-12);
truck.takeWeight(1000);

const bus = new Bus('ag25', 'GMS', 'USA', 50);
bus.takePeople(25);

const transporter = new Transporter('fm46', 'MAN', 'German', 250);
transporter.takeCars(12);