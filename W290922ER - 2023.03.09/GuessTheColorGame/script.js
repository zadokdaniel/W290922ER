// data + process on data
let correctColor;
let colors = [];

function checkColor(color) {
  return color === correctColor;
}

function shuffleColors() {
  colors = [];

  let correctIndex = getRandomInt(0, 6);

  for (let i = 0; i < 6; i++) {
    const color = getRandomColor();

    if (i === correctIndex) {
      correctColor = color;
    }

    colors.push(color);
  }

  return colors;
}

function getRandomColor() {
  return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(
    0,
    255
  )})`;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// render

const $colorsBoard = document.querySelector(".colors");
const $regenerateBtn = document.getElementById("regenerate-btn");
const $guessPanel = document.querySelector(".header > h1");

$regenerateBtn.addEventListener("click", renderBoard);

renderBoard();

function renderBoard() {
  const colors = shuffleColors();

  let html = "";
  for (const color of colors) {
    html += `<div onclick="handleColorClicked('${color}')" style="background-color: ${color}"></div>`;
  }

  $guessPanel.innerHTML = correctColor;
  $colorsBoard.innerHTML = html;
}

function handleColorClicked(color) {
  if (checkColor(color)) {
    alert("good job");
  } else {
    alert("you were wrong");
  }

  renderBoard();
}
