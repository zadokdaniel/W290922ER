import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const next = () => setCounter((counter) => counter + 1);

  return [counter, next];
};
