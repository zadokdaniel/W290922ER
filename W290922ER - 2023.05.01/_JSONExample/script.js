const jsonInput = document.getElementById("json-input");
const jsonOutput = document.getElementById("json-output");
const btnEncode = document.getElementById("btn-encode");
const btnDecode = document.getElementById("btn-decode");

btnDecode.addEventListener("click", () => {
  const input = jsonInput.value;

  console.log("JSON INPUT: ", input);
  console.log("VALUE OUTPUT: ", JSON.parse(input));
});

btnEncode.addEventListener("click", () => {
  jsonOutput.innerHTML += JSON.stringify(
    {
      hello: 1 + 1,
      a: [true, false, null, [12, 3, 4, 56], {}],
      b: { a: 1030 },
      now: new Date(),
      btnEncodeElement: btnEncode,
      fn: function sayHello() {
        console.log("say hello");
      },
    }
    // null,
    // 2
  );
});
