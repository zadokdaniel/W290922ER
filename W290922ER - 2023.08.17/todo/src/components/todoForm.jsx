const TodoForm = () => {
  return (
    <div className="form">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">I need to:</span>
        </div>
        <input
          type="text"
          className="form-control is-invalid"
          placeholder="Buy milk..."
        />
        <button className="btn btn-primary rounded-end">Add</button>

        <div className="invalid-feedback">Please provide a valid city.</div>
      </div>
    </div>
  );
};

export default TodoForm;
