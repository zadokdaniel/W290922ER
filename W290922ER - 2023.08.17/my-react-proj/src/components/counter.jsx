import { useState } from "react";

const Counter = ({
  start = 0,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,

  onIncrement = () => {},
  onDecrement = () => {},
  onChange = () => {},

  onReachedRange = () => {},
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

    setCounter((counter) => {
      const nextCounter = counter + step;

      const event = {
        counter: nextCounter,
        min,
        max,
        step,
        isMinimum: nextCounter <= min,
        isMaximum: nextCounter >= max,
      };
      onIncrement(event);
      onChange(event);

      if (event.isMaximum) {
        onReachedRange(event);
      }

      return nextCounter;
    });
  };

  const decrement = () => {
    if (counter - step < min) {
      return;
    }

    setCounter((counter) => {
      const nextCounter = counter - step;

      const event = {
        counter: nextCounter,
        min,
        max,
        step,
        isMinimum: counter - step < min,
        isMaximum: counter + step > max,
      };
      onDecrement(event);
      onChange(event);

      if (event.isMinimum) {
        onReachedRange(event);
      }

      return nextCounter;
    });
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
