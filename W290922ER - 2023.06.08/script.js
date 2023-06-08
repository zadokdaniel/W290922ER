class Car {
  // own properties
  color;
  tank = 0;
  km = 0;

  // constructor
  constructor(/*this*/ color) {
    // this.tank = 0;
    // this.km = 0;

    this.color = color;
  }

  // Car.prototype
  fuel(/* this, */ liters) {
    if (this.tank + liters <= 25) {
      this.tank += liters;
    }
  }
  drive(/* car1, */ km, burnRate = 0.2) {
    const burn = km * burnRate;
    if (this.tank - burn >= 0) {
      this.km += km;
      this.tank -= burn;
    }
  }
}

class Truck extends Car {
  cargo = 0;

  //   constructor(color) {
  //     super(color);

  //     this.cargo = 0;
  //   }

  drive(km) {
    super.drive(km, 0.8);
  }

  load(kg) {
    if (this.cargo + kg > 20) {
      throw new Error("Overweight");
    }

    this.cargo += kg;
  }

  unload(kg) {
    if (this.cargo - kg < 0) {
      throw new Error("Do not steal my wheels, please 👼🏾");
    }

    this.cargo -= kg;
  }
}

console.log(new Truck("red"));
