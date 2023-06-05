function createCar(/* this, */ color) {
  const BURN_RATE = 0.2;

  let car = {
    color,
    tank: 0,
    km: 0,
  };

  function fuel(/* this, */ liters) {
    if (liters > 0 && liters + this.tank < 25) {
      this.tank += liters;
    }
  }

  function drive(/* this, */ km) {
    const burn = km * BURN_RATE;

    if (this.tank > burn) {
      this.tank -= burn;
      this.km += km;
    }
  }

  return {
    ...car,
    fuel,
    drive,
  };
}

const car1 = createCar("black");
const car2 = createCar("pink");

console.log(car1, car2);
car1.drive(/* car1, */ 20);
console.log(car1, car2);
car1.fuel(/* car1, */ 20);
console.log(car1, car2);
car1.drive(/* car1, */ 20);
console.log(car1, car2);
car2.fuel(190);
console.log(car1, car2);
car2.fuel(10);
console.log(car1, car2);
car2.drive(10);
console.log(car1, car2);

// EXAMPLE 2

// function createCar(/* this, */ color) {
//   return { color, tank: 0, km: 0 };
// }

// let car1 = createCar("red");
// let car2 = createCar("black");

// function drive(/* this, */ car, km) {
//   const burnt = km * 0.2;
//   if (car.tank - burnt >= 0) {
//     car.tank -= burnt;
//     car.km += km;
//   }
// }

// function fuel(/* this, */ car, liter) {
//   if (car.tank + liter <= 25) {
//     car.tank += liter;
//   }
// }

// fuel(car1, 20);
// fuel(car2, 20);
