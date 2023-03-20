let obj1 = {
  a: 5,
  b: 6,
};

let obj2 = {
  ...obj1,
  // a: obj1.a,
  // b: obj1.b
  c: 6,
  a: 20,
};

console.log(obj1, obj2);

let arr = [1, 2, 3, 4, 5, 6];
let arr1 = [234334, 43, 43, 43, 43, { a: 5 }];

let sum = [
  ...arr,
  // arr[0] // primitive
  // arr[1] // primitive
  // arr[2] // primitive
  // arr[3] // primitive
  // arr[4] // primitive
  // arr[5] // primitive

  ...arr1,
  // arr1[0] // primitives
  // arr1[1] // primitives
  // arr1[2] // primitives
  // arr1[3] // primitives
  // arr1[4] // primitives
  // arr1[5] // reference,
];

sum[11] = { ...arr1[5] };

console.log(sum, "sum[11] !== arr1[5]", sum[11] !== arr[5]);
