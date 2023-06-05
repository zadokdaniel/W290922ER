function drive(/* this, */) {
  console.log("drive", this);
}

function createCar(/* this, */ color) {
  return {
    color,
    tank: 0,
    km: 0,
    drive,
    fuel() {
      console.log("fuel", this);
    },
  };
}

const car1 = createCar("red");
console.log(car1);

car1.drive(/* car1, */);
