import Input from "./common/input";
import PageHeader from "./common/pageHeader";

const SignUp = () => {
  return (
    <>
      <PageHeader
        title="Sign Up"
        description="Open a new account now!!! It is free you yammani!!"
      />

      <form>
        <Input
          name="email"
          required
          label="Email"
          type="number"
          onChange={() => {}}
        />
        <Input name="name" label="Name" />
        <Input name="password" label="Password" />
      </form>
    </>
  );
};

export default SignUp;
