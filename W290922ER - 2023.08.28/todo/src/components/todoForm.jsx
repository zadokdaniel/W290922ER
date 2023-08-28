/**
 *
 * TODO:
 *  V 2. on add clicked raise event
 *  V 3. pass input to todos as part of add clicked
 *  V 4.1 clear input after sending to todos
 *  V 4.2 show error when relevant
 *  4.3 disable add when error
 *  V 5. on Enter key clicked submit form
 *  V 1. sync input value with state
 */

import { useState } from "react";

const TodoForm = ({ onSubmit = () => {} }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    if (input.length < 2) {
      setError("Must be at least two characters long");
      return;
    }

    onSubmit(input);
    setInput("");
  };

  return (
    <div className="form">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">I need to:</span>
        </div>
        <input
          type="text"
          className={`form-control ${error ? "is-invalid" : ""}`}
          placeholder="Buy milk..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          onChange={handleInputChange}
          value={input}
        />
        <button onClick={handleSubmit} className="btn btn-primary rounded-end">
          Add
        </button>

        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

export default TodoForm;
