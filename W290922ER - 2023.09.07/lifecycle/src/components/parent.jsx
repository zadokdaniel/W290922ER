import { useState } from "react";
import Child from "./child";
import { useCounter } from "../hooks/useCounter";

const Parent = () => {
  const [isShown, setIsShown] = useState(false);
  const [counter, next] = useCounter();

  return (
    <div className="border border-2 border-danger p-2 m-2">
      <button
        onClick={() => setIsShown((isShown) => !isShown)}
        className="btn btn-primary btn-sm"
      >
        {isShown ? "hide" : "show"} child
      </button>

      <br />

      <button onClick={next} className="btn btn-primary">
        {counter}
      </button>

      {isShown && <Child />}
    </div>
  );
};

export default Parent;
