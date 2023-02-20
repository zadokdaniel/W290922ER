// 1. ask the user for a password and keep asking until he enters 1234 or tried 4 times
// 	- on success show logged in
// 	- after 4 times show you shall not pass
// 2. receive from the user a number and show all even numbers until that number in console
// 3. show the following template "name (age) - balance"
// [
//   {
//     "balance": "$1,107.16",
//     "age": 36,
//     "name": "Cantu Mckenzie"
//   },
//   {
//     "balance": "$1,608.24",
//     "age": 25,
//     "name": "Schultz Sears"
//   },
//   {
//     "balance": "$1,266.22",
//     "age": 37,
//     "name": "Lana Key"
//   },
//   {
//     "balance": "$1,728.23",
//     "age": 24,
//     "name": "Maggie Blanchard"
//   },
//   {
//     "balance": "$1,412.79",
//     "age": 33,
//     "name": "Julianne Curry"
//   }
// ]

// 4. log the following  object "key => value, key => value" in one string

// {
//     "_id": "63f3b7cadf9d3ea073e07d6f",
//     "index": 0,
//     "guid": "1741cd60-75c7-496e-b880-0e3e5adfd1d5",
//     "isActive": true,
//     "balance": "$1,412.34",
//     "picture": "http://placehold.it/32x32",
//     "age": 28,
//     "eyeColor": "brown",
//     "name": "Mcintosh Mills",
//     "gender": "male",
//     "company": "BOINK",
//     "email": "mcintoshmills@boink.com",
//     "phone": "+1 (874) 488-2691",
//     "address": "480 Amity Street, Byrnedale, Tennessee, 8254",
//     "about": "Cillum nisi officia qui dolore dolor non nisi. Irure velit proident nisi duis voluptate. Velit Lorem anim veniam aute id officia et enim consequat aliquip. Lorem proident officia Lorem sit anim laborum non esse irure occaecat.\r\n",
//     "registered": "2015-10-09T02:34:25 -03:00",
//     "latitude": -86.307639,
//     "longitude": 31.864756,
//     "tags": [
//       "irure",
//       "minim",
//       "consequat",
//       "ipsum",
//       "Lorem",
//       "labore",
//       "non"
//     ],
//     "friends": [
//       {
//         "id": 0,
//         "name": "Teresa Horn"
//       },
//       {
//         "id": 1,
//         "name": "Tanner Nguyen"
//       },
//       {
//         "id": 2,
//         "name": "Shelby Gates"
//       }
//     ],
//     "greeting": "Hello, Mcintosh Mills! You have 3 unread messages.",
//     "favoriteFruit": "strawberry"
//   }

// ex_1
function checkUserInput(message, correctInput, maxAttempts) {
  let input;
  let attempts = 0;

  while (input !== correctInput && attempts < maxAttempts) {
    input = prompt(message);
    attempts++;
  }

  return input === correctInput;
}

function ex_1() {
  if (checkUserInput("what is the password", "1234", 4)) {
    alert("you are logged in");
  } else {
    alert("you shall not function");
  }
}

// 2

function getUserNumber(message) {
  let input;

  while (input !== null) {
    if (input !== "" && !Number.isNaN(Number(input))) {
      return Number(input);
    }

    input = prompt(message);
  }

  return null;
}

function ex_2() {
  let until = getUserNumber("Until which number should I show evens?");

  if (!until) {
    return;
  }

  /**
   * For the input 100 will run 100 times and show only 50 logs
   */
  //   let i = 0;
  //   while (i <= until) {
  //     let isEven = i % 2 === 0;

  //     if (isEven) {
  //       console.log(i);
  //     }

  //     i++;
  //   }

  /**
   * For the input 100 will run 50 times
   */
  //   let i = 0;
  //   while (i <= until) {
  //     console.log(i);
  //     i += 2;
  //   }

  /**
   * better because the amount of iterations is known upon starting the loop
   */
  for (let i = 0; i < until; i += 2) {
    console.log(i);
  }
}

// 3

function userToString(user) {
  return `${user.name} (${user.age}) - ${user.balance}`;
}

function ex_3() {
  let users = [
    {
      balance: "$1,107.16",
      age: 36,
      name: "Cantu Mckenzie",
    },
    {
      balance: "$1,608.24",
      age: 25,
      name: "Schultz Sears",
    },
    {
      balance: "$1,266.22",
      age: 37,
      name: "Lana Key",
    },
    {
      balance: "$1,728.23",
      age: 24,
      name: "Maggie Blanchard",
    },
    {
      balance: "$1,412.79",
      age: 33,
      name: "Julianne Curry",
    },
  ];

  for (let user of users) {
    console.log(userToString(user));
  }
}

ex_3();

// 4

let someObject = {
  _id: "63f3b7cadf9d3ea073e07d6f",
  index: 0,
  guid: "1741cd60-75c7-496e-b880-0e3e5adfd1d5",
  isActive: true,
  balance: "$1,412.34",
  picture: "http://placehold.it/32x32",
  age: 28,
  eyeColor: "brown",
  name: "Mcintosh Mills",
  gender: "male",
  company: "BOINK",
  email: "mcintoshmills@boink.com",
  phone: "+1 (874) 488-2691",
  address: "480 Amity Street, Byrnedale, Tennessee, 8254",
  about:
    "Cillum nisi officia qui dolore dolor non nisi. Irure velit proident nisi duis voluptate. Velit Lorem anim veniam aute id officia et enim consequat aliquip. Lorem proident officia Lorem sit anim laborum non esse irure occaecat.\r\n",
  registered: "2015-10-09T02:34:25 -03:00",
  latitude: -86.307639,
  longitude: 31.864756,
  tags: ["irure", "minim", "consequat", "ipsum", "Lorem", "labore", "non"],
  friends: [
    {
      id: 0,
      name: "Teresa Horn",
    },
    {
      id: 1,
      name: "Tanner Nguyen",
    },
    {
      id: 2,
      name: "Shelby Gates",
    },
  ],
  greeting: "Hello, Mcintosh Mills! You have 3 unread messages.",
  favoriteFruit: "strawberry",
};

function objectToString(obj) {
  let str = "";
  for (let key in obj) {
    str += `${key} => ${obj[key]}\r\n`;
  }
  return str;
}

function ex_4() {
  console.log(objectToString(someObject));
}
