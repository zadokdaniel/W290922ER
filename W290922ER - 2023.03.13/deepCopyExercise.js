// const original = [
//   {
//     _id: "640f732d713d53687e93d814",
//     index: 0,
//     guid: "e25a2439-34a0-428c-97b6-cc6c89f82706",
//     isActive: true,
//     balance: "$1,689.49",
//     picture: "http://placehold.it/32x32",
//     age: 32,
//     eyeColor: "green",
//     name: "Burris Hines",
//     gender: "male",
//     company: "MAGNEATO",
//     email: "burrishines@magneato.com",
//     phone: "+1 (973) 504-2704",
//     address: "767 Legion Street, Nogal, Alabama, 1435",
//     about:
//       "Irure Lorem ea ea id sunt reprehenderit consectetur in nostrud laborum est. Proident laboris ad deserunt esse non cillum. Exercitation non proident occaecat excepteur consequat veniam commodo consequat est dolore dolor ad enim.\r\n",
//     registered: "2023-03-06T01:58:45 -02:00",
//     latitude: 15.709295,
//     longitude: -119.991507,
//     tags: [
//       "est",
//       "culpa",
//       "eiusmod",
//       "eiusmod",
//       "consequat",
//       "proident",
//       "officia",
//     ],
//     friends: [
//       {
//         id: 0,
//         name: "Jamie Pope",
//       },
//       {
//         id: 1,
//         name: "Susana Copeland",
//       },
//       {
//         id: 2,
//         name: "Gloria Underwood",
//       },
//     ],
//     greeting: "Hello, Burris Hines! You have 3 unread messages.",
//     favoriteFruit: "strawberry",
//   },
//   {
//     _id: "640f732d9d8556a09e48eaf6",
//     index: 1,
//     guid: "b6605afe-c3d0-4130-8280-1689dc6def95",
//     isActive: false,
//     balance: "$3,297.47",
//     picture: "http://placehold.it/32x32",
//     age: 26,
//     eyeColor: "blue",
//     name: "Morgan Rivera",
//     gender: "male",
//     company: "GUSHKOOL",
//     email: "morganrivera@gushkool.com",
//     phone: "+1 (845) 412-3949",
//     address: "174 Lefferts Place, Spokane, Texas, 7243",
//     about:
//       "Excepteur velit officia reprehenderit anim Lorem qui aute mollit. Laborum sint ea aute mollit deserunt veniam aliqua consectetur ipsum dolor aliquip excepteur. Minim ullamco excepteur cupidatat dolore dolore enim ut reprehenderit anim laborum velit ex ex. Exercitation proident amet nisi minim sit anim non commodo do ipsum ut magna. Duis dolore officia velit ea deserunt nostrud veniam fugiat. Id enim laborum veniam qui laborum id adipisicing deserunt esse fugiat Lorem exercitation.\r\n",
//     registered: "2020-12-20T11:24:09 -02:00",
//     latitude: -68.121659,
//     longitude: 160.681795,
//     tags: [
//       "adipisicing",
//       "sunt",
//       "laborum",
//       "eiusmod",
//       "ea",
//       "sit",
//       "excepteur",
//     ],
//     friends: [
//       {
//         id: 0,
//         name: "Rivers Burt",
//       },
//       {
//         id: 1,
//         name: "Barlow Rosales",
//       },
//       {
//         id: 2,
//         name: "Heather Duke",
//       },
//     ],
//     greeting: "Hello, Morgan Rivera! You have 10 unread messages.",
//     favoriteFruit: "banana",
//   },
//   {
//     _id: "640f732df86926d93c9bb2dd",
//     index: 2,
//     guid: "f43f4be9-58e2-460f-967a-1ae1a1dd9eee",
//     isActive: true,
//     balance: "$3,194.73",
//     picture: "http://placehold.it/32x32",
//     age: 31,
//     eyeColor: "brown",
//     name: "Harrison Aguilar",
//     gender: "male",
//     company: "SONGLINES",
//     email: "harrisonaguilar@songlines.com",
//     phone: "+1 (806) 412-2345",
//     address: "253 Gunther Place, Iberia, Kansas, 2439",
//     about:
//       "Est sit et duis sint id nisi. Exercitation amet occaecat fugiat aliquip veniam officia enim ex dolore cillum commodo. Laboris pariatur minim nisi voluptate consequat irure fugiat laboris sit. Laborum velit sint aute aute nisi aliquip laboris.\r\n",
//     registered: "2019-06-30T04:10:22 -03:00",
//     latitude: -69.666838,
//     longitude: -65.408185,
//     tags: [
//       "esse",
//       "exercitation",
//       "reprehenderit",
//       "laborum",
//       "mollit",
//       "excepteur",
//       "labore",
//     ],
//     friends: [
//       {
//         id: 0,
//         name: "Mindy Chen",
//       },
//       {
//         id: 1,
//         name: "Tabitha Frank",
//       },
//       {
//         id: 2,
//         name: "Gonzales Porter",
//       },
//     ],
//     greeting: "Hello, Harrison Aguilar! You have 8 unread messages.",
//     favoriteFruit: "banana",
//   },
// ];
const original = [
  {
    longitude: -119.991507,
    tags: [
      "est",
      "culpa",
      "eiusmod",
      "eiusmod",
      "consequat",
      "proident",
      "officia",
    ],
    friends: [
      {
        id: 0,
        name: "Jamie Pope",
      },
      {
        id: 1,
        name: "Susana Copeland",
      },
      {
        id: 2,
        name: "Gloria Underwood",
      },
    ],
    greeting: "Hello, Burris Hines! You have 3 unread messages.",
    favoriteFruit: "strawberry",
  },
];

function logColored(...texts) {
  const txt = [];
  const colors = [];

  for (const { color = "white", text = "" } of texts) {
    txt.push(`%c${text}`);
    colors.push(color);
  }

  console.log(txt.join(" "), ...colors.map((c) => `color: ${c}`));
}

const typeMap = {
  error: "red",
  success: "green",
};

function log(type, path, text) {
  logColored(
    { text: path, color: "lightblue" },
    {
      text,
      color: typeMap[type],
    }
  );
}

function checkIsDeepCopy(original, copy, path = "*") {
  // create array with all unique keys from both objects
  const keys = [...new Set([...Object.keys(original), ...Object.keys(copy)])];

  for (const key of keys) {
    const keyPath = `${path}${isNaN(Number(key)) ? `.${key}` : `[${key}]`}`;
    const existsIn =
      original.hasOwnProperty(key) && copy.hasOwnProperty(key)
        ? null
        : original.hasOwnProperty(key)
        ? "original"
        : "copy";

    const isPrimitive =
      typeof original[key] !== "object" || original[key] === null;

    // in case key exists only in one
    if (existsIn) {
      log("error", keyPath, `exists only in ${existsIn}`);
    } else if (isPrimitive) {
      const isEqual = original[key] === copy[key];
      log(isEqual ? "success" : "error", keyPath, isEqual);
    } else {
      // if object
      const isEqual = checkIsDeepCopy(original[key], copy[key], keyPath);
      log(isEqual ? "success" : "error", keyPath, isEqual);
      return isEqual;
    }
  }
}

checkIsDeepCopy(original, [{ ...original }]);
