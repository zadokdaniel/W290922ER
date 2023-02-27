// console.dir(document.body.children[0].children[0]);

console.log(document.getElementById("a"));
console.log(document.getElementsByClassName("d"));

// selector like css
console.log(document.querySelector(".class1"));
console.log(document.querySelectorAll(".class1"));

console.log(document.querySelectorAll("body div p"));

function changeH1() {
  let h1Element = document.getElementById("a");

  h1Element.addEventListener("click", function () {
    console.log("clicked");
  });

  console.log("h1Element.innerHTML", h1Element.innerHTML);
  h1Element.innerHTML = "<i>hello from js</i>";

  console.log(
    "h1Element.style.backgroundColor",
    h1Element.style.backgroundColor
  );
  h1Element.style.backgroundColor = "red";

  console.log(
    'h1Element.classList.contains("border-green")',
    h1Element.classList.contains("border-green")
  );
}

function addGreen() {
  let h1Element = document.getElementById("a");
  h1Element.classList.add("border-green");
}
function removeGreen() {
  let h1Element = document.getElementById("a");
  h1Element.classList.remove("border-green");
}
function toggleGreen() {
  let h1Element = document.getElementById("a");
  h1Element.classList.toggle("border-green");
}

function readValue() {
  let input = document.querySelector("input");
  console.log("input.value", input.value);

  input.value = "";
}

function getAllClassesExistsInDom() {
  let foundClasses = [];

  for (let element of document.all) {
    let classes = Array.from(element.classList);

    for (let c of classes) {
      if (!foundClasses.includes(c)) {
        foundClasses.push(c);
      }
    }
  }

  return foundClasses;
}

function countAllClassesExistsInDom(elements) {
  let foundClasses = {};

  for (let element of elements) {
    // let classes = Array.from(element.classList);

    for (let c of element.classList) {
      if (!foundClasses[c]) {
        foundClasses[c] = 1;
      } else {
        foundClasses[c] += 1;
      }
    }
  }

  return foundClasses;
}

console.log(getAllClassesExistsInDom());
console.log(countAllClassesExistsInDom(document.all));


