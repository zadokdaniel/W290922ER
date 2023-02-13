console.log(99_999_999);

let x = 50;
console.log(`hello from daniel



hello again ${1}
${1 + 1}

x = ${x}
console.log
${console.log()}
`);

console.log(
  "hello from daniel\r\n\r\n\r\nhello again" +
    1 +
    "\r\n" +
    (1 + 1) +
    "\r\nx = " +
    x +
    "\r\nconsole.log\r\n" +
    console.log()
);

function fn() {
  return "aaa";
}

let user = {
  name: "daniel",
  email: "zadok@gmail.com",
  age: 28,
  isLogged: true,
  gender: "male",
  address: {
    city: "tel aviv",
    street: "rotchild",
    number: 80,
  },
  sayHello: function () {}, // expressing a new function
  a: fn(), // a will be the returned turn
  b: fn, // the actual function
};

let car = {
  engine: {
    model: "v8",
    cylinders: 8,
    liters: {
      value: 1200,
      unit: "cc",
    },
  },
  speed: 200,
  burnt: 0.2,
  color: "pink",
};

console.log(car);
console.log(user.address.city);

function changeColor() {
  car.color = "blue";
}

function showColor() {
  console.log(car.color);
}

x = 50;
car.burnt += 100;
