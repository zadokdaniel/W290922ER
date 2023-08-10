import { useState } from "react";

const ShortCircuit = () => {
  const [arr, setArr] = useState([]);

  const user = "aa";

  if (!arr?.length) {
    return null;
  }
  return (
    <div>
      <div>
        {arr.length && <button onClick={() => setArr([])}>clear arr</button>}
        {!arr.length && (
          <button onClick={() => setArr([1, 2, 3, 4, 5, 6])}>fill arr</button>
        )}
      </div>

      {arr.length ? <span>{arr.join(", ")}</span> : <span>arr is empty</span>}

      <br />

      {user && `hello, ${user}`}
    </div>
  );
};

export default ShortCircuit;
