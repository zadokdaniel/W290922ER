const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// divider with default ',' returns string with all of the elements divided by the divider
console.log(arr.join());
console.log(arr.join(""));
console.log(arr.join("----"));

// mutable. fill(valueToFill: any, startInclusive?: number, end?: number) : any[]
console.log(arr.fill(4, 2, 3));

// get the value from the array
console.log(arr.at(1));
console.log(arr.at(-1));

// function at(arr, value) {
//   return value < 0 ? arr[arr.length - value] : arr[value];
// }

console.log(arr.includes("dsafdsf"));
console.log(arr.includes("d"));

// function includes(arr, value, startIndex = 0) {
//   for (let i = startIndex; i < arr.length; i++) {
//     if (value === arr[i]) {
//       return true;
//     }
//   }

//   return false;
// }

// function includes(arr, value, startIndex = 0) {
//   return arr.indexOf(value, startIndex) > 0;
// }

console.log(arr.indexOf(3));
console.log(arr.indexOf("f"));
console.log(arr.lastIndexOf("f"));

console.log(arr.reverse());

// slice immutable
console.log(arr.slice()); // [...arr]
console.log(arr.slice(4, 8));
console.log(arr);
