let num1 = Number(process.argv[2]),
  operator = process.argv[3],
  num2 = Number(process.argv[4]);

const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  x: (a, b) => a * b,
  "^": (a, b) => a ** b,
  "%": (a, b) => a % b,
};

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  throw new Error(
    `operands must be valid number you provided ${process.argv[2]}, ${process.argv[4]}`
  );
}

if (!Object.keys(OPERATIONS).includes(operator)) {
  throw new Error(`the operator '${operator}' is not applicable`);
}

console.log(
  `${num1} ${operator} ${num2} = ${OPERATIONS[operator](
    Number(num1),
    Number(num2)
  )}`
);
