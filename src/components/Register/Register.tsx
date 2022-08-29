import { RegisterHeader, RegisterContainer } from "./RegisterStyled";

const Register = (): JSX.Element => {
  return (
    <form className="register-form">
      <RegisterHeader>Register</RegisterHeader>
      <RegisterContainer className="register-container">
        <input
          type="text"
          className="register-container__userName"
          name="userName"
          placeholder="Name"
          required
          autoComplete="off"
        />
        <input
          type="email"
          className="register-container__userEmail"
          name="userPassword"
          placeholder="Email"
          required
          autoComplete="off"
        />
        <input
          type="password"
          className="register-container__userPassword"
          name="userPassword"
          placeholder="Password"
          required
          autoComplete="off"
        />
      </RegisterContainer>
    </form>
  );
};

export default Register;
