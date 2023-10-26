import { useState } from "react";

const useForm = ({ initialValue = {}, onSubmit = () => {} }) => {
  const [inputs, setInputs] = useState(initialValue);

  const handleChange = (e) => {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(inputs);
  };

  return {
    handleChange,
    handleSubmit,
    inputs,
  };
};

const Form = () => {
  const form = useForm({
    initialValue: { email: "", name: "" },
    onSubmit(value) {
      console.log(value);
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <input
        name="name"
        value={form.inputs.name}
        onChange={form.handleChange}
        type="text"
      />

      <input
        name="email"
        value={form.inputs.email}
        onChange={form.handleChange}
        type="text"
      />

      <button>submit</button>
    </form>
  );
};

export default Form;
