/**
 * @constructor
 */

function Car(/* this, */ color) {
  this.color = color;
  this.tank = 0;
  this.km = 0;
}

Car.BURN_RATE = 0.2;
Car.avgKm = function avgKm(...cars) {
  return cars.reduce((acc, car) => acc + car.km, 0) / cars.length;
};

Car.prototype.fuel = function fuel(/* this, */ liters) {
  if (this.tank + liters <= 25) {
    this.tank += liters;
  }

  return this;
};

Car.prototype.drive = function drive(/* car1, */ km) {
  const burn = km * this.constructor.BURN_RATE;
  if (this.tank - burn >= 0) {
    this.km += km;
    this.tank -= burn;
  }

  return this;
};

function Truck(/* this, */ color) {
  Car.call(this, color);

  // this.color = color;
  // this.tank = 0;
  // this.km = 0;

  this.cargo = 0;
}

Truck.BURN_RATE = 0.8;

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

// Truck.prototype.fuel = function fuel(/* this, */ liters) {
//   if (this.tank + liters <= 25) {
//     this.tank += liters;
//   }
// };

// Truck.prototype.drive = function drive(/* this, */ km) {
//   const burn = km * 0.2;
//   if (this.tank - burn >= 0) {
//     this.km += km;
//     this.tank -= burn;
//   }
// };

Truck.prototype.load = function (kg) {
  if (this.cargo + kg > 20) {
    throw new Error("Overweight");
  }

  this.cargo += kg;

  return this;
};

Truck.prototype.unload = function (kg) {
  if (this.cargo - kg < 0) {
    throw new Error("Do not steal my wheels, please 👼🏾");
  }

  this.cargo -= kg;
  return this;
};

Truck.prototype.drive = function drive(km) {
  Car.prototype.drive.call(this, km, 0.8);
};

/** instances */
const cars = [
  new Truck("red").fuel(25).drive(100).load(19),
  new Truck("red").fuel(20).drive(50).load(10),
  new Truck("red").fuel(10).drive(2).load(5),
  new Car("black").fuel(25).drive(100),
  new Car("black").fuel(20).drive(50),
  new Car("black").fuel(10).drive(2),
];

console.log(...cars);
console.log(Car.avgKm(...cars));
