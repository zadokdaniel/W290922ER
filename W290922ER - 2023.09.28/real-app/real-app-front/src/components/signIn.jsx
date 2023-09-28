import PageHeader from "./common/pageHeader";
import Input from "./common/input";

import { useFormik } from "formik";
import Joi from "joi";

const SignIn = () => {
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate(values) {
      const schema = Joi.object({
        email: Joi.string()
          .min(2)
          .max(255)
          .required()
          .email({ tlds: { allow: false } }),
        password: Joi.string().min(6).max(1024).required(),
      });

      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }

      const errors = {};
      for (const detail of error.details) {
        const key = detail.path[0];
        errors[key] = detail.message;
      }

      return errors;
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  return (
    <>
      <PageHeader title="Sign In" description="Sign in to your account" />

      <form onSubmit={form.handleSubmit}>
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          required
          error={form.touched.password && form.errors.password}
        />

        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
};

export default SignIn;
