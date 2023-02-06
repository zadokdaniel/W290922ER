let x;
console.log(x);

x = 5;
console.log(x);

x = "hello from daniel";
console.log(x);

x = x + x;
console.log(x);

let y = 5;
y = x + "daniel";
console.log(y);

y = x;
console.log(y);

y = x + y;
console.log(y);

let z = 5;
let g = 8;

if (z * g > 20) {
  console.log(z + " * " + g + " is bigger than 20");
}

let w = 5;
w += 5 * 5;
// w = w + 5 * 5
console.log(w);

/*
    1. create a new project with an external js
    2. create a variable named "greeting" with the value Welcome
    3. create a variable named "myName" with your name as string
    4. create a variable message with as follows "Welcome, Daniel" 
    5. show message using alert 

    6. create a variable named age with your age
    7. change age to your age multiplied by 2
    8. if your age is over 80 show message using alert "you are above 40" else "you are less than 40"
*/

let t;
console.log(typeof t);

console.log(typeof "daniel");
console.log(typeof "");
console.log(typeof "a");
console.log(typeof ("a" + "a") === "string");
console.log(typeof 5);
console.log(typeof NaN);
console.log(typeof (5 * 5));
console.log(typeof 0);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof (() => {}));

// let result = prompt("dkfsjf", "zxcjhvfdskfc");
// console.log(result);

// let result1 = confirm("how are you?");
// console.log(result1);

if (confirm("do you want to continue?")) {
  let age = Number(prompt("what is your age?"));

  if (!Number.isNaN(age)) {
    console.log(age);
  }
}
