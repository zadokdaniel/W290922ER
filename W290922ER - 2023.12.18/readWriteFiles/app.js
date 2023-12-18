const fs = require("node:fs");
const fsPromises = require("node:fs/promises");
const path = require("node:path");

const filePath = path.resolve(__dirname, "./a.txt");

main();

async function main() {
  // SYNC
  fs.writeFileSync(filePath, "daniel");
  const result = fs.readFileSync(filePath, "utf8");
  console.log(result);

  // ASYNC
  fs.writeFile(filePath, "shalom", (err) => {});
  fs.readFile(filePath, "utf8", (err, data) => console.log(data));

  await wait(100);

  // fs.promises.*
  fsPromises.writeFile(filePath, "avi").catch((err) => console.log(err));
  fsPromises
    .readFile(filePath, "utf8")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
