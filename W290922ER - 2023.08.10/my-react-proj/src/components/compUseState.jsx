import { useState } from "react";

const CompUseState = () => {
  const [state, setState] = useState(10);
  const [users, setUsers] = useState([
    { id: 1, name: "daniel" },
    { id: 2, name: "avi" },
    { id: 3, name: "yoarm" },
    { id: 4, name: "lora" },
  ]);

  return (
    <div>
      <button onClick={() => setState((state) => state + 1)}>{state}</button>

      {!!users.length && (
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>
              {name}{" "}
              <span
                onClick={() => {
                  setUsers((users) => users.filter((user) => user.id !== id));
                }}
                className="text-danger"
              >
                delete
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompUseState;
