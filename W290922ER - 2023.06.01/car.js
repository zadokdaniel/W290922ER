function createCar(color) {
  const BURN_RATE = 0.2;

  let car = {
    color,
    tank: 0,
    km: 0,
  };

  function fuel(liters) {
    if (liters > 0 && liters + car.tank < 25) {
      car.tank += liters;
    }
  }

  function drive(km) {
    const burn = km * BURN_RATE;

    if (car.tank > burn) {
      car.tank -= burn;
      car.km += km;
    }
  }

  return {
    car,
    fuel,
    drive,
  };
}

const car1 = createCar("black");
const car2 = createCar("pink");

console.log(car1.car, car2.car);
car1.drive(20);
console.log(car1.car, car2.car);
car1.fuel(20);
console.log(car1.car, car2.car);
car1.drive(20);
console.log(car1.car, car2.car);
car2.fuel(190);
console.log(car1.car, car2.car);
car2.fuel(10);
console.log(car1.car, car2.car);
car2.drive(10);
console.log(car1.car, car2.car);
