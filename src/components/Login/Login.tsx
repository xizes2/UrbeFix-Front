import { LoginHeader, LoginContainer } from "./LoginStyled";

const Login = (): JSX.Element => {
  return (
    <form className="register-form">
      <LoginHeader>Login</LoginHeader>
      <LoginContainer className="register-container">
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
      </LoginContainer>
    </form>
  );
};

export default Login;
