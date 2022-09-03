import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { LoginFormStyled, MainHeader } from "./LoginFormStyled";
import { LoginData } from "../../../interfaces/users/User";
import { SyntheticEvent, useState } from "react";
import useUser from "../../../hooks/useUsersApi";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { loginUser } = useUser();

  const initialState: LoginData = {
    userEmail: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialState);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    await loginUser({
      userEmail: loginData.userEmail,
      password: loginData.password,
    });
    setLoginData(initialState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  return (
    <>
      <MainHeader className="main-header">
        <FontAwesomeIcon className="main-header__icon" icon={faUserCircle} />
        <h2>Login</h2>
      </MainHeader>
      <LoginFormStyled onSubmit={handleSubmit}>
        <div className="form-fields">
          <input
            type="email"
            id="userEmail"
            placeholder="Email"
            required
            autoComplete="off"
            value={loginData.userEmail}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            required
            autoComplete="off"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <div className="buttons-container">
          <button className="buttons-container__send" type="submit">
            Enviar
          </button>
          <Link className="buttons-container__nav-link" to={"/home"}>
            <button className="buttons-container__return">Volver</button>
          </Link>
        </div>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
