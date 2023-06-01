const NAME = import.meta.url.split("/").at(-1);
console.groupCollapsed(`${NAME} module`);
export function c_fn1() {
    return 20;
}
export function c_fn2() {
    return 40;
}
export default { c_fn1, c_fn2 };
console.groupEnd(`${NAME} module`);
