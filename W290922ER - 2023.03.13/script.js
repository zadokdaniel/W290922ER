// primitives are copied between the two variables
let x = 5;
let y = x;
x = 20;

console.log(y, x);

// objects are by reference
let user = {
  name: "daniel",
  age: 28,
  address: {
    street: "rotchild",
    city: "tlv",
  },
};

let user1 = user;

console.log(user === user1); // both reference the same object
console.log(user.address === user1.address); // both reference the same object

user.email = "zadok.daniel@gmail.com";

console.log(user1, user);

let userCopy = {
  ...user,
  //   name: user.name, // primitive - by copy
  //   age: user.age, // primitive - by copy
  //   email: user.email, // primitive - by copy
  //   address: user.address, // object  - by reference
  address: {
    ...user.address,
    // street: user.address.street, // primitive - by copy
    // city: user.address.city, // primitive - by copy
  },
};

console.log(user === userCopy);
console.log(user.address === userCopy.address);

userCopy.address.state = "israel";
console.log(user, userCopy);

function copyObject(original) {
  //   debugger;
  const copy = {};

  for (const key in original) {
    const value = original[key];

    if (typeof value !== "object" || value === null) {
      // only primitives
      copy[key] = value;
    } else {
      // only objects
      copy[key] = copyObject(original[key]);
    }
  }

  return copy;
}

console.log(copyObject(user));
