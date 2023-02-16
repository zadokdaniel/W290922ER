let name = "daniel";

const messages = {
  allowedVariableName: "some value 1",
  "not a valid variable Name 👼🏾": "some value 2",
  [name]: "some message 3", // set the property name according to some expression
  ["a" + name]: "some message 4", // set the property name according to some expression

  name, // name: name
  theNameForTheFunction() {}, // theNameForTheFunction: function theNameForTheFunction() {},
};

console.log(messages.allowedVariableName);
console.log(messages.somePropertyThatWasNotSetWithAValue);
console.log(messages["not a valid variable Name 👼🏾"]);
console.log(messages["not a valid " + "variable Name 👼🏾"]);

messages.somePropertyThatWasNotSetWithAValue = "hello";
console.log(messages.somePropertyThatWasNotSetWithAValue);

let key = "not a valid " + "variable Name 👼🏾";
console.log(messages[key]);

function fn1() {
  return "not a valid " + "variable Name 👼🏾";
}
console.log(messages[fn1()]);

console.log(messages);
