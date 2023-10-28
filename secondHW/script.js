'use strict'

class Vehicle {
    constructor(company, model, yearRelease, numWheels, speed) {
      this.company = company;
      this.model = model;
      this.yearRelease = yearRelease;
      this.numWheels = numWheels;
      this.speed = speed;
    }
  
    testDrive() {
    }
  
    park() { 
    }
  }
  module.exports = Vehicle;
  
  class Car extends Vehicle {
    constructor(company, model, yearRelease) {
      super(company, model, yearRelease, 4, 0);
    }
    testDrive() {
      // Установить скорость на 60
      this.speed = 60;
      console.log("Test driving...");
    }
    park() {
      // Установить скорость на 0
      this.speed = 0;
      console.log("Parked.");
    }
  }
  module.exports = Car;
  
  class Motorcycle extends Vehicle {
    constructor(company, model, yearRelease) {
      super(company, model, yearRelease, 2, 0);
    }
    testDrive() {
      // Установить скорость на 60
      this.speed = 75;
      console.log("Test driving...");
    }
    park() {
      // Установить скорость на 0
      this.speed = 0;
      console.log("Parked.");
    }
  }
  module.exports = Motorcycle;
  
  // Пример использования классов:
  const car = new Car("Toyota", "Camry", 2021);
  console.log(car);
  car.testDrive(); // Установит скорость на 60
  console.log(car);
  car.park(); // Установит скорость на 0
  console.log(car);
  
  const motorcycle = new Motorcycle("Honda", "CBR500R", 2022);
  console.log(motorcycle);
  motorcycle.testDrive(); // Установит скорость на 75
  console.log(motorcycle);
  motorcycle.park(); // Установит скорость на 0
  console.log(motorcycle);
  