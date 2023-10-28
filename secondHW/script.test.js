const Vehicle = require('./script.js');
const Car = require('./script.js');
const Motorcycle = require('./script.js');

describe('Vehicle', () => {
  test('Car is an instance of Vehicle', () => {
    const car = new Car("Toyota", "Camry", 2021);
    expect(car instanceof Vehicle).toBe(true);
  });
});

describe('Car', () => {
  test('Car has 4 wheels', () => {
    const car = new Car("Toyota", "Camry", 2021);
    expect(car.numWheels).toBe(4);
  });

  test('Car accelerates to 60 during test drive', () => {
    const car = new Car("Toyota", "Camry", 2021);
    car.testDrive();
    expect(car.speed).toBe(60);
  });

  test('Car stops during parking', () => {
    const car = new Car("Toyota", "Camry", 2021);
    car.testDrive();
    car.park();
    expect(car.speed).toBe(0);
  });
});

describe('Motorcycle', () => {
  test('Motorcycle has 2 wheels', () => {
    const motorcycle = new Motorcycle("Honda", "CBR500R", 2022);
    expect(motorcycle.numWheels).toBe(2);
  });

  test('Motorcycle accelerates to 75 during test drive', () => {
    const motorcycle = new Motorcycle("Honda", "CBR500R", 2022);
    motorcycle.testDrive();
    expect(motorcycle.speed).toBe(75);
  });

  test('Motorcycle stops during parking', () => {
    const motorcycle = new Motorcycle("Honda", "CBR500R", 2022);
    motorcycle.testDrive();
    motorcycle.park();
    expect(motorcycle.speed).toBe(0);
  });
});


  

