const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 5];

numbers.filter((x, index, originalArr) => x > 5); // => []

console.log(numbers.map((x, index, originalArr) => x * 2)); // => []

console.log(numbers.find((x, index, originalArr) => x === 5)); // the first element for which the function returns true.  => some element from original array

console.log(numbers.every((x, index, originalArr) => typeof x === "number")); // => boolean
console.log(numbers.every((x, index, originalArr) => x !== 5)); // => boolean

console.log(numbers.some((x, index, originalArr) => typeof x === "number")); // => boolean
console.log(numbers.some((x, index, originalArr) => x !== 5)); // => boolean

console.log(numbers.findIndex((x, index, originalArr) => x === 5)); // => positive number or -1
console.log(numbers.findIndex((x, index, originalArr) => x === 10)); // => positive number or -1

// without function will sort as strings (works only it's an array of string)

console.log(["b", "a", "c", "hello", "dvir", "daniel"].sort());
console.log(
  [
    { name: "daniel" },
    { name: "avi" },
    { name: "shalom" },
    { name: "yoram" },
    { name: "avrham" },
  ].sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  })
);

console.log(
  numbers.sort((a, b) => {
    // console.log(a, b, b - a);
    return b - a;
  })
);

console.log([true, false, false, true, false].sort((a, b) => (a ? -1 : 1)));
