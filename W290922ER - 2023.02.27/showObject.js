// פתרון מורכב
function createSpaces(amount = 0, char = " ") {
  let str = "";
  for (let i = 0; i < amount; i++) {
    str += char;
  }
  return str;
}

function showObject(obj, level = 0) {
  let str = "";

  const levelSpace = createSpaces(level * 2);

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      str += `${levelSpace}${key} ====> \r\n `;
      str += levelSpace + showObject(obj[key], level + 1);
    } else {
      str += levelSpace + `${key} => ${obj[key]}` + "\r\n";
    }
  }

  return str;
}

console.log(
  showObject({
    name: "daniel",
    address: {
      city: "tlv",
    },
    users: [{ name: "daniel" }],
  })
);

// פתרון פשוט
function showObj(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      showObj(obj[key]);
    } else {
      console.log(key, "=>", obj[key]);
    }
  }
}

showObj({
  name: "daniel",
  address: {
    city: "tlv",
  },
  users: [{ name: "daniel" }],
});
