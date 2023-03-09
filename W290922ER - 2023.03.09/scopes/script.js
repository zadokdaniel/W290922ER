// console.log(window);

// console.log("global: ", i);

// function fn() {
//   console.log("fn: ", i);
//   for (var i = 0; i < 5; i++) {
//     console.log("for: ", i);
//   }

//   console.log("fn: ", i);

//   var i;
//   console.log("fn: ", i);
// }
// fn();

// console.log("global: ", i);

// var i;
// console.log("global: ", i);

/****** LET / CONST */

for (let i = 0; i < 5; i++) {
  console.log("for: ", i);
}

// console.log("global: ", i); // Cannot access 'i' before initialization
let i;
// let i; // Identifier 'i' has already been declared
console.log("global: ", i);

