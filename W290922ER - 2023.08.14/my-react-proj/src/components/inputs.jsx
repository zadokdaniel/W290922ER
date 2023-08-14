import { useState } from "react";

const MyInput = () => {
  const [input, setInput] = useState("ssdfsdf");
  const [select, setSelect] = useState("d");
  const [checked, setChecked] = useState(true);
  const [radio, setRadio] = useState("1");

  return (
    <div>
      <button onClick={() => setInput("hello")}>change input to hello</button>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />

      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
      </select>

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <input
        type="radio"
        name="radio-a"
        value="1"
        onChange={(e) => setRadio(e.target.value)}
        checked={radio === "1"}
      />
      <input
        type="radio"
        name="radio-a"
        value="2"
        onChange={(e) => setRadio(e.target.value)}
        checked={radio === "2"}
      />
      <input
        type="radio"
        name="radio-a"
        value="3"
        onChange={(e) => setRadio(e.target.value)}
        checked={radio === "3"}
      />
      <input
        type="radio"
        name="radio-a"
        value="4"
        onChange={(e) => setRadio(e.target.value)}
        checked={radio === "4"}
      />
      <input
        type="radio"
        name="radio-a"
        value="5"
        onChange={(e) => setRadio(e.target.value)}
        checked={radio === "5"}
      />
    </div>
  );
};

export default MyInput;
