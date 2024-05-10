"use strict";
// Implement a class named Car that implements the Vehicle interface
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Create an instance of the Car class and initialize it
const myCar = new Car("Mercedes", "C-Class", 2023);
myCar.start();
