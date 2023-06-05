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

Car.prototype.drive = function drive(/* this, */ km) {
  const burn = km * 0.2;
  if (this.tank - burn >= 0) {
    this.km += km;
    this.tank -= burn;
  }
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
