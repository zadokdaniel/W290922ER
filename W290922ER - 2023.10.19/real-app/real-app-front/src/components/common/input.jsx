const Input = ({ label, error, ...rest }) => {
  return (
    <div className="form-group my-1">
      <label htmlFor={rest.name}>
        {label}
        {rest.required && <span className="text-danger ms-1">*</span>}
      </label>

      <input
        {...rest}
        id={rest.name}
        className={["form-control", error && "is-invalid"]
          .filter(Boolean)
          .join(" ")}
      />
      <span className="invalid-feedback">{error}</span>
    </div>
  );
};

export default Input;
