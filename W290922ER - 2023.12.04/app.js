const [, , ...name] = process.argv;

console.log(`Welcome, ${TitleCase(name.join(" "))}`);

function TitleCase(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
