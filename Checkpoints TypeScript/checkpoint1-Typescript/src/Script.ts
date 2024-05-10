// Define an interface named Vehicle
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Implement a class named Car that implements the Vehicle interface
class Car implements Vehicle {
  constructor(public make: string, public model: string, public year: number) {}
  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of the Car class and initialize it
const myCar = new Car("Mercedes", "C-Class", 2023);
myCar.start();
