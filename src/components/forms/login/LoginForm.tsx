import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { LoginFormStyled, MainHeader } from "./LoginFormStyled";
import { ILoginData } from "../../../interfaces/users/User";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../../hooks/users/useUsersApi";
import Button from "../../button/Button";

const LoginForm = () => {
  const { loginUser } = useUser();

  const initialState: ILoginData = {
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
          <Button buttonClassName="button form" type="submit">
            Enviar
          </Button>
          <div className="buttons-container__return-container">
            <Link className="buttons-container__nav-link" to={"/home"}>
              <Button buttonClassName="button form white" type="button">
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </LoginFormStyled>
    </>
  );
};

export default LoginForm;
