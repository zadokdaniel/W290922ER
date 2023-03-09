// number
console.log((5555.2).toFixed(2));
console.log((5555).toLocaleString());
console.log((5555).toString());

// string (array like)
let a = "daniel";

console.log(a[0]);
console.log(a[1]);

for (const letter of a) {
  console.log(letter);
}

console.log(a.length);

console.log("split", "danielnisdfsfni".split("ni"));
console.log("split", "daniel, shalom, avi".split(", "));
console.log("split", "daniel, shalom, avi".split(""));

console.log("daniel done".replace("d", "??"));
console.log("daniel done".replaceAll("d", "??"));

console.log("DKJFKLSDJFdsfgsd".toLowerCase());
console.log("sdfadsfDADFSADFF".toUpperCase());

console.log("a".repeat(9));

console.log("shalom as avi".includes("as"));
console.log("shalom as avi".startsWith("as"));
console.log("as shalom as avi".startsWith("as"));
console.log("shalom as avi as".endsWith("as"));

console.log("       KSDFJSKDFJDF      ".trim().replaceAll(" ", "*"));
console.log("       KSDFJSKDFJDF      ".trimStart().replaceAll(" ", "*"));
console.log("       KSDFJSKDFJDF      ".trimEnd().replaceAll(" ", "*"));

console.log("0123456789".slice(1, 5));
console.log("0123456789".substring(1, 7));
