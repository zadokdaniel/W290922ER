import { useState } from "react";

export const useCounter = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  start = 0,
} = {}) => {
  const [counter, setCounter] = useState(start);

  const increment = () => {
    if (counter < max) {
      setCounter((counter) => counter + 1);
    }
  };

  const decrement = () => {
    if (counter > min) {
      setCounter((counter) => counter - 1);
    }
  };

  return {
    counter,
    increment,
    decrement,
  };
};
