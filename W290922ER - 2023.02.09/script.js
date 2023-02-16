// let userAgeInput = prompt("what is your age?");
// let age = Number(userAgeInput);

// if (userAgeInput) {
//   // userAgeInput string with length

//   if (!Number.isNaN(age)) {
//     // number not NaN

//     if (age < 0) {
//       alert("not exist");
//     } else if (age < 13) {
//       alert("middle school");
//     } else if (age < 18) {
//       alert("highschool");
//     } else {
//       alert("enjoy life");
//     }
//   } else {
//     // age is NaN
//   }
// } else {
//   // userAgeInput  null or ''
// }

/******** FUNCTIONS */
// function declaration
// fn1;
// function fn1() {
//   alert("hello from fn1");
// }

// // function expression
// fn2;
// let fn2 = function () {
//   alert("hello from fn2");
// };

function checkIsAbove100_example1(num) {
  if (num > 100) {
    return true;
  } else {
    return false;
  }
}

function checkIsAbove100_example2_withEarlyReturn(num) {
  if (num > 100) {
    return true;
  }

  return false;
}

function checkIsAbove100_example3(num) {
  console.log("parameter", num);
  return num > 100;
}

console.log("returned", checkIsAbove100_example3(1));
console.log("returned", checkIsAbove100_example3("dfsf"));
console.log("returned", checkIsAbove100_example3("3"));
console.log("returned", checkIsAbove100_example3(100));
console.log("returned", checkIsAbove100_example3(101));
console.log("returned", checkIsAbove100_example3(100000));
console.log("returned", checkIsAbove100_example3(-5555));
console.log("returned", checkIsAbove100_example3(true));
console.log("returned", checkIsAbove100_example3(false));
console.log("returned", checkIsAbove100_example3(0));
console.log("returned", checkIsAbove100_example3(null));
console.log("returned", checkIsAbove100_example3(undefined));
console.log("returned", checkIsAbove100_example3());

function test(a, b, c, d, e, f, g, h, y) {
  let x = 5;
  y = 10;

  console.log(x);
  console.log(a, b, c, d, e, f, g, h);
}

let y = 5;

test();
test(1, 2, 3, 4, 5, 6);
// test(, 2, 3, 4); // error
// test(y, 2 * 5, y + 4, "a" + "b", confirm(), 6);

/******* EXAMPLE OF APP */
app();

function app() {
  let age = getUserAge();
  showUserAlertBasedOnAge(age);
}

function getUserAge() {
  let userAgeInput = prompt("what is your age?");
  let age = Number(userAgeInput);

  if (userAgeInput) {
    if (!Number.isNaN(age)) {
      return age;
    }
  }

  return null;
}

function showUserAlertBasedOnAge(age) {
  if (age < 0) {
    alert("not exist");
  } else if (age < 13) {
    alert("middle school");
  } else if (age < 18) {
    alert("highschool");
  } else {
    alert("enjoy life");
  }
}
