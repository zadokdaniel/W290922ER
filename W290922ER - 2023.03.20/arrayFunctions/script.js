let numbers = [
  2, 33, 4, 564, 334, 5, 4, 54, 54, 54, 45452342, 3, 34, 43, 43, 434334, 3434,
];

// function filter(arr, fn) {
//   let results = [];

//   for (let i = 0; i < arr.length; i++) {
//     const item = item[i];
//     if (fn(item, i, arr)) {
//       results.push(item);
//     }
//   }

//   return results;
// }

// function isOver100(num) {
//   return num > 100;
// }

// function isOver30(num) {
//   return num > 30;
// }

// console.log(filter(numbers, isOver30));

console.log(
  [{ name: "daniel" }, { name: "shalom" }, { name: "avi" }].filter(function (
    user,
    index,
    arr
  ) {
    return user.name.length >= 5;
  })
);

const strings = ["daniel", "shalom", "avi", "yora", "lori", "Avigail", "Tav"];
const users = [
  { name: "daniel", age: 28, city: "tlv" },
  { name: "shlom", age: 62, city: "jerusalem" },
  { name: "avi", age: 56, city: "tlv" },
  { name: "yora", age: 23, city: "holon" },
  { name: "lori", age: 12, city: "holon" },
  { name: "avigail", age: 32, city: "tlv" },
];

strings.filter(function (name) {
  return name.length < 4;
});
