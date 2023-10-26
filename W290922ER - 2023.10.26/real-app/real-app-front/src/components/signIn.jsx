import { useState } from "react";
import PageHeader from "./common/pageHeader";
import Input from "./common/input";

import { useFormik } from "formik";
import Joi from "joi";
import { validateFormikUsingJoi } from "../utils/validateFormikUsingJoi";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";

const SignIn = ({ redirect }) => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const { user, login } = useAuth();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateFormikUsingJoi({
      email: Joi.string()
        .min(2)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),
    async onSubmit(values) {
      try {
        await login(values);

        if (redirect) {
          navigate(redirect);
        }
      } catch (err) {
        if (err.response?.status === 400) {
          setServerError(err.response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title="Sign In" description="Sign in to your account" />

      <form onSubmit={form.handleSubmit}>
        {serverError && <div className="alert alert-danger">{serverError}</div>}

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
