import { useState } from "react";

const Counter = ({
  start = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
}) => {
  if (min >= max) {
    throw new Error(
      `minimum (${min}) cannot be greater or equal to maximum (${max})`
    );
  }

  if (start > max || start < min) {
    throw new Error(
      `start (${start}) must be in range of min (${min}) and maximum (${max})`
    );
  }

  const [counter, setCounter] = useState(start);

  const increment = () => {
    if (counter + step > max) {
      return;
    }

    setCounter((counter) => counter + step);
  };

  const decrement = () => {
    if (counter - step < min) {
      return;
    }

    setCounter((counter) => counter - step);
  };

  return (
    <div>
      <button
        disabled={counter - step < min}
        onClick={decrement}
        className="btn btn-danger"
      >
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button
        disabled={counter + step > max}
        onClick={increment}
        className="btn btn-success"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
