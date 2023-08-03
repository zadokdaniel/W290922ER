import { useState } from "react";

const SimpleCounter = ({ initialValue }) => {
  const [isOn, setIsOn] = useState(true); // states[0]
  const [counter, setCounter] = useState(10); // states[1]

  return (
    <div className="simple-counter">
      <span className="mx-5 text-success fw-bold">{counter}</span>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        +
      </button>

      <span onClick={() => setIsOn(!isOn)}>It is {isOn ? "On" : "Off"}</span>
    </div>
  );
};

export default SimpleCounter;
