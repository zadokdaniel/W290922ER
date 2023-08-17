const TodoItem = () => {
  return (
    <>
      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault11"
          />
          <label className="ms-2 flex-grow-1" htmlFor="flexCheckDefault11">
            List group item heading
          </label>

          <small className="text-muted">3 days ago</small>

          <button className="btn btn-danger btn-sm ms-2">
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>

      <div className="list-group-item">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault111"
          />
          <label
            className="ms-2 flex-grow-1 text-decoration-line-through text-muted"
            htmlFor="flexCheckDefault111"
          >
            List group item heading
          </label>

          <small className="text-muted">3 days ago</small>

          <button className="btn btn-danger btn-sm ms-2">
            <i className="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
