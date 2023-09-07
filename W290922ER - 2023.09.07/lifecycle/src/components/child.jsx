import { useEffect } from "react";
import { useCounter } from "../hooks/useCounter";

const Child = () => {
  const [counter, next] = useCounter();

  useEffect(() => {
    console.log("Effect 1");

    return () => {
      console.log("Effect 1 - CLEAN UP");
    };
  });

  useEffect(() => {
    console.log("Effect 2");

    return () => {
      console.log("Effect 2 - CLEAN UP");
    };
  }, []);

  useEffect(() => {
    console.log("Effect 3");

    return () => {
      console.log("Effect 3 - CLEAN UP");
    };
  }, [counter]);

  console.log("rendered");

  return (
    <div className="border border-2 border-primary p-2">
      child
      <br />
      <button onClick={next} className="btn btn-primary">
        {counter}
      </button>
    </div>
  );
};

export default Child;
