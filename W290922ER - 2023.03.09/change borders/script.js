let changeDiv = document.getElementById("change");

let borderBtn = document.getElementById("border-btn");
let textBtn = document.getElementById("text-btn");
let backgroundBtn = document.getElementById("background-btn");

let fruits = ["apple", "orange", "grapes", "banana"];
let currentFruitsIndex = null;

let backgrounds = createArrayIterator(["", "red", "green", "blue", "salmon"]);
let borders = createArrayIterator([
  "solid",
  "dashed",
  "dotted",
  "double",
  "groove",
]);

textBtn.addEventListener("click", changeRandomFruit);
backgroundBtn.addEventListener("click", changeBackground);
borderBtn.addEventListener("click", changeBorders);

function createArrayIterator(arr) {
  let current = 0;

  function next() {
    current = current >= arr.length - 1 ? 0 : current + 1;
    return arr[current];
  }

  function getCurrentIndex() {
    return current;
  }

  function getValues() {
    return arr;
  }

  return {
    next,
    getCurrentIndex,
    getValues,
  };
}

function changeBackground() {
  changeDiv.style.backgroundColor = backgrounds.next();
}

function changeBorders() {
  changeDiv.style.border = `2px ${borders.next()} blue`;
}

function changeRandomFruit() {
  let index;
  do {
    index = getRandomInt(0, fruits.length);
  } while (index === currentFruitsIndex);

  currentFruitsIndex = index;

  changeDiv.innerHTML = fruits[index];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
