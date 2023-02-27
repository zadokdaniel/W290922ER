const nameInput = document.querySelector(".ex1 .name-input");
const ageInput = document.querySelector(".ex1 .age-input");
const emailInput = document.querySelector(".ex1 .email-input");
const ex1_sendBtn = document.querySelector(".ex1 .send-btn");
const ex1_result = document.querySelector(".ex1 .result");

ex1_sendBtn.addEventListener("click", ex1_showUserInfo);

function ex1_showUserInfo() {
  const name = nameInput.value;
  const age = ageInput.value;
  const email = emailInput.value;

  ex1_result.innerHTML = `${name} (${age}) - ${email}`;
}

// EX 2
let ex2_result = document.querySelector(".ex2 .result");
let changeBorderBtn = document.querySelector(".ex2 .change-border-btn");
let changeBackgroundBtn = document.querySelector(".ex2 .change-background-btn");
let changeTextBtn = document.querySelector(".ex2 .change-text-btn");

let texts = ["apple", "banana", "orange", "grapes", "watermelon"];

changeBorderBtn.addEventListener("click", changeBorder);
changeBackgroundBtn.addEventListener("click", changeBackground);
changeTextBtn.addEventListener("click", changeText);

function changeBackground() {
  ex2_result.classList.toggle("background");
}
function changeBorder() {
  ex2_result.classList.toggle("border");
}
function changeText() {
  ex2_result.innerHTML = getRandomElement(texts);
}

function getRandomElement(arr) {
  return arr[getRandomInt(0, arr.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// EX_3

const levelsInput = document.querySelector(".ex3 .levels");
const charInput = document.querySelector(".ex3 .char");
const ex3_result = document.querySelector(".ex3 .result");
const ex3_result2 = document.querySelector(".ex3 .result2");

renderPyramid(); // so it will happen once the script starts

levelsInput.addEventListener("change", renderPyramid);
charInput.addEventListener("change", renderPyramid);

function renderPyramid() {
  // I made to options on how to show the pyramid for the second one look at css file
  renderPyramid1();
  renderPyramid2();
}

function renderPyramid1() {
  ex3_result.innerHTML = createPyramid(
    Number(levelsInput.value),
    charInput.value
  );
}
function renderPyramid2() {
  ex3_result2.innerHTML =
    "<div>" +
    createPyramid(Number(levelsInput.value), "<div></div>", "</div><div>") +
    "</div>";
}

// parameter with = afterwards sets default value in case not passed a value when the function ran
function createPyramid(levels, char, newRowChar = "\r\n") {
  if (levels <= 0) {
    return "";
  }

  let result = "";
  for (let i = 1; i <= levels; i++) {
    let padding = levels - i;
    result += repeat(" ", padding) + repeat(`${char} `, i) + newRowChar;
  }

  return result;
}

function repeat(char, times) {
  let str = "";
  for (let i = 0; i < times; i++) {
    str += char;
  }
  return str;
}
