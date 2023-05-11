const NAME = import.meta.url.split("/").at(-1);
console.groupCollapsed(`${NAME} module`);

export const a = 5;

function b_fn1() {
  return 20;
}

function b_fn2() {
  return 80;
}

export function b_fn3() {
  return b_fn2() + b_fn1();
}

console.groupEnd(`${NAME} module`);
