import "./a.js";
import { a, b_fn3 } from "./b.js";
import theDefaultExportOfC, { c_fn1 } from "./c.js";

const NAME = import.meta.url.split("/").at(-1);
console.groupCollapsed(`${NAME} module`);

console.log("no need for deffer", document.querySelector("div"));

console.log("from b.js", a, b_fn3());
console.log("from c.js", theDefaultExportOfC, c_fn1);
console.log(
  "c_fn1 === theDefaultExportOfC.c_fn1",
  c_fn1 === theDefaultExportOfC.c_fn1
);

console.groupEnd(`${NAME} module`);
