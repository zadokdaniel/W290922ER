/**
 * @constructor
 */

function Car(/* this, */ color) {
  this.color = color;
  this.tank = 0;
  this.km = 0;
}

Car.prototype.fuel = function fuel(/* this, */ liters) {
  if (this.tank + liters <= 25) {
    this.tank += liters;
  }
};

Car.prototype.drive = function drive(/* car1, */ km, burnRate = 0.2) {
  const burn = km * burnRate;
  if (this.tank - burn >= 0) {
    this.km += km;
    this.tank -= burn;
  }
};

function Truck(/* this, */ color) {
  Car.call(this, color);

  // this.color = color;
  // this.tank = 0;
  // this.km = 0;

  this.cargo = 0;
}

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
};

Truck.prototype.unload = function (kg) {
  if (this.cargo - kg < 0) {
    throw new Error("Do not steal my wheels, please 👼🏾");
  }

  this.cargo -= kg;
};

Truck.prototype.drive = function drive(km) {
  Car.prototype.drive.call(this, km, 0.8);
};

/** instances */
const car1 = new Car(/* { __proto__: Car.prototype }, */ "red");
const car2 = new Car(/* { __proto__: Car.prototype }, */ "black");

console.log(car1);
car1.fuel(/*car1, */ 20);
car1.drive(/*car1, */ 20);
console.log(car1);

console.log(car2);
car2.fuel(/*car2, */ 25);
car2.drive(/*car2, */ 10);
console.log(car2);
