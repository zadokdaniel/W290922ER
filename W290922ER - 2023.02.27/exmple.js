let $userAge = document.querySelector("input#age");
let $userName = document.querySelector("input#name");

let $result = document.querySelector("#result");
let $calculateButton = document.querySelector("button#calculate-btn");

$calculateButton.addEventListener("click", calculate);

function calculate() {
  $result.innerHTML = `${$userName.value} (${$userAge.value})`;
}
