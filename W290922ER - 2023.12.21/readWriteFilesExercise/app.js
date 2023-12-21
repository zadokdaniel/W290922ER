const fs = require("node:fs");
const path = require("node:path");

const NOOP = () => {};

const DIRECTORY = "files";

const ENCODING = "utf8";
const OPTIONS = {
  "-sync": syncCopy,
  "-cb": cbCopy,
  "-p": promiseCopy,
  "-s": streamCopy,
};

// resolve parameters
const args = process.argv.slice(2);

// get the parameter following the --name argument. example "--name copy"
const copyFileName = args.includes("--name")
  ? args[args.indexOf("--name") + 1]
  : undefined;

// get the parameter function -sync/-cb/-p
const option = Object.keys(OPTIONS).find((option) => args.includes(option));

// get files names
const originalFile = `${DIRECTORY}/original.txt`;
const copyFile = `${DIRECTORY}/${copyFileName || "copy"}.txt`;

// get copy function
const copyFunction = OPTIONS[option || "-sync"];

// some logs
console.log(
  `copying "${originalFile}" to "${copyFile}" using "${copyFunction.name}"`
);

// run
copyFunction(originalFile, copyFile);

// resolve relative path in relative to current module
function $(relativePath) {
  return path.resolve(
    __dirname,
    relativePath.startsWith(".") ? relativePath : `./${relativePath}` // make sure it is relative. if don't start with relative treats as "./"
  );
}

//***********************/
function syncCopy(originalRelativePath, copyRelativePath) {
  const originalPath = $(originalRelativePath);
  const copyPath = $(copyRelativePath);

  const txt = fs.readFileSync(originalPath, ENCODING);
  fs.writeFileSync(copyPath, txt, ENCODING);
}

function cbCopy(originalRelativePath, copyRelativePath) {
  const originalPath = $(originalRelativePath);
  const copyPath = $(copyRelativePath);

  fs.readFile(originalPath, ENCODING, (err, data) => {
    fs.writeFile(copyPath, data, ENCODING, NOOP);
  });
}

function promiseCopy(originalRelativePath, copyRelativePath) {
  const originalPath = $(originalRelativePath);
  const copyPath = $(copyRelativePath);

  fs.promises
    .readFile(originalPath, ENCODING)
    .then((data) => fs.promises.writeFile(copyPath, data, ENCODING));
}

function streamCopy(originalRelativePath, copyRelativePath) {
  const originalPath = $(originalRelativePath);
  const copyPath = $(copyRelativePath);

  const rs = fs.createReadStream(originalPath);
  const ws = fs.createWriteStream(copyPath);

  // rs.on("data", (chunk) => ws.write(chunk));
  // rs.on("end", () => ws.end());

  rs.pipe(ws);
}
