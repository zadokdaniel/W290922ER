// let x = 5;
// console.log("x", x);
// console.log("x++", x++);
// console.log("x", x);

// let y = 5;
// console.log("y", y);
// console.log("++y", ++y);
// console.log("y", y);

let names = [
  "daniel",
  "lora",
  "hanna",
  "avi",
  "shoshana",
  "kofiko",
  "ruchama",
  "ziva",
];

/***** WHILE LOOP */
// 1
let userInput1 = null;
while (!userInput1) {
  userInput1 = prompt("what is your name");
}
console.log(userInput1);

// 2
let userInput2 = null;
do {
  userInput2 = prompt("what is your name");
} while (!userInput2);

console.log("while starts");

// 3
let i = 0; // start
while (i < names.length) {
  let name = names[i];
  console.log(i, name);

  //   i = i + 1;
  //   i += 1;
  i++; // end of iteration
}

console.log("while ended");

/*** FOR  */
// for(;;) {}

for (
  /* before starting the while*/ let i = 0;
  /* condition between iterations */ i < names.length;
  /* end of each iteration */ i++
) {
  let name = names[i];
  console.log(i, name);
}

/*** FOR OF */
for (let name of names) {
  console.log(name);
}

/*** FOR IN */
let user = {
  name: "daniel",
  email: "shalom",
};

for (let key in user) {
  let value = user[key];
  console.log(key, value);
}

// let keys = Object.keys(user);
// for (let key of keys) {
//     let value = user[key];
//     console.log(key, value);
// }

// let keys = Object.keys(user);
// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   let value = user[key];
//   console.log(key, value);
// }

// let keys = Object.keys(user);
// let i = 0;
// while (i < keys.length) {
//   let key = keys[i];
//   let value = user[key];
//   console.log(key, value);
//   i++;
// }
