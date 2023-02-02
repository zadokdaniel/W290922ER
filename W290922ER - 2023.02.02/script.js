if ("d") {
  console.log("from inside the if");
} else {
  console.log("would never happen");
}

if (8 < 3) {
  console.log("would never happen");
} else {
  console.log("8 is not less than 3");
}

if (8) {
  console.log("this will always happen");
}

if (8 % 2) {
  console.log(
    '8 % 2 expresses 0 which is converted to boolean by "if" which is a falsy value'
  );
}

if (8) {
  if (9) {
    console.log("always will happen");
  }

  if (null) {
    console.log("will never happen");
  } else {
    console.log("this happens because null is falsy");
  }

  console.log("will happen");
}

console.log("will always happen");
