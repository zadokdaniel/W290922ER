import "./c.js";

const NAME = import.meta.url.split("/").at(-1);
console.groupCollapsed(`${NAME} module`);

function a_fn1() {
  return 80;
}

function a_fn2() {
  return 20;
}

console.log(a_fn2());

console.groupEnd(`${NAME} module`);
