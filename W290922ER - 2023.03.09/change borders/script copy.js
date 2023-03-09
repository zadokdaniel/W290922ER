let changeDiv = document.getElementById("change");

let borderBtn = document.getElementById("border-btn");
let textBtn = document.getElementById("text-btn");
let backgroundBtn = document.getElementById("background-btn");

let fruits = ["apple", "orange", "grapes", "banana"];
let currentFruitsIndex = null;

let backgrounds = ["", "red", "green", "blue", "salmon"];
let currentBackgroundsIndex = 0;

let borders = ["solid", "dashed", "dotted", "double", "groove"];
let currentBordersIndex = 0;

textBtn.addEventListener("click", changeRandomFruit);
backgroundBtn.addEventListener("click", changeBackground);
borderBtn.addEventListener("click", changeBorders);

function changeBackground() {
  currentBackgroundsIndex =
    currentBackgroundsIndex >= backgrounds.length - 1
      ? 0
      : currentBackgroundsIndex + 1;

  changeDiv.style.backgroundColor = backgrounds[currentBackgroundsIndex];
}

function changeBorders() {
  currentBordersIndex =
    currentBordersIndex >= borders.length - 1 ? 0 : currentBordersIndex + 1;

  changeDiv.style.border = `2px ${borders[currentBordersIndex]} blue`;
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
