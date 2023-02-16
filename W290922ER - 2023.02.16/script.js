let arr1 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(arr1);

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr2[0]);
let i = 5;
console.log(arr2[i]);
console.log(arr2[i + 2]);
console.log(arr2[11]);

console.log("the array length", arr2.length);

console.log(arr2.push("hello"));
console.log(arr2);

console.log(arr2.pop());
console.log(arr2);

console.log(arr2.shift());
console.log(arr2);

console.log(arr2.unshift(1));
console.log(arr2);

arr2.fill(5);
console.log(arr2);

arr2.fill("filled", 2);
console.log(arr2);

arr2.fill("filled22", 2, 4);
console.log(arr2);

arr2.fill("filled3333", 2, 3);
console.log(arr2);

arr2.fill("filled44444", arr2.length - 1, arr2.length);
console.log(arr2);

arr2.fill("filled5", -2);
console.log(arr2);
 