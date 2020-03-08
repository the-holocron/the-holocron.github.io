/* Without chaining */
class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    setMake(make) {
        this.make = make;
    }
    setModel(model) {
        this.model = model;
    }
    setColor(color) {
        this.color = color;
    }
    save() {
        console.log(this.make, this.model, this.color);
    }
}

const car = new Car(`Ford`, `F-150`, `red`);
car.setColor(`pink`);
car.save();

/* With chaining */
class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    setMake(make) {
        this.make = make;
        // NOTE: Returning this for chaining
        return this;
    }
    setModel(model) {
        this.model = model;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    save() {
        console.log(this.make, this.model, this.color);
        return this;
    }
}

const car = new Car(`Ford`, `F-150`, `red`).setColor(`pink`).save();
