// use as or <> to fix the typescript problem. use webapi interfaces reference to find out what is the problem
document.querySelectorAll("*").forEach((element) => {
  console.log((element as HTMLElement).dir);
});

// use as or <> to fix the typescript problem. use webapi interfaces reference to find out what is the problem
(document.querySelectorAll("*") as NodeListOf<HTMLElement>).forEach(
  (element) => {
    console.log(element.dir);
  }
);

// use as or <> to fix the typescript problem. use webapi interfaces reference to find out what is the problem
document.querySelectorAll<HTMLElement>("*").forEach((element) => {
  console.log(element.dir);
});
