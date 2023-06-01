const savedData = document.getElementById("saved-data");
const userInput = document.getElementById("user-input");
const clearLastValueBtn = document.getElementById("clear-last-value");
const clearAllBtn = document.getElementById("clear-all");
userInput.value = localStorage.getItem("lastValue");
userInput.addEventListener("input", (e) => {
    localStorage.setItem("lastValue", e.target.value);
});
clearAllBtn.addEventListener("click", () => {
    localStorage.clear();
});
clearLastValueBtn.addEventListener("click", () => {
    localStorage.removeItem("lastValue");
});
const amountVisited = Number(localStorage.getItem("visited"));
document.body.insertAdjacentHTML("beforeend", `<div>${amountVisited}</div>`);
localStorage.setItem("visited", amountVisited + 1);
