import { SyntheticEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import { IUnregisteredUser } from "../../../interfaces/users/User";
import { MainHeader, RegisterFormStyled } from "./RegisterFormStyled";
import { Link } from "react-router-dom";
import useUser from "../../../hooks/users/useUsersApi";
import Button from "../../button/Button";

const RegisterForm = () => {
  const { registerUser } = useUser();

  const initialState: IUnregisteredUser = {
    firstName: "",
    firstSurname: "",
    userEmail: "",
    password: "",
  };

  const [registerData, setRegisterData] = useState(initialState);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    registerUser(registerData);
    setRegisterData(initialState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [event.target.id]: event.target.value });
  };

  return (
    <>
      <MainHeader className="main-header">
        <FontAwesomeIcon className="main-header__icon" icon={faUserCircle} />
        <h2>Registro</h2>
      </MainHeader>
      <RegisterFormStyled onSubmit={handleSubmit}>
        <div className="form-fields">
          <input
            type="text"
            id="firstName"
            placeholder="Primer Nombre"
            required
            autoComplete="off"
            value={registerData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            id="firstSurname"
            placeholder="Primer Apellido"
            required
            autoComplete="off"
            value={registerData.firstSurname}
            onChange={handleChange}
          />
          <input
            type="email"
            id="userEmail"
            placeholder="Email"
            required
            autoComplete="off"
            value={registerData.userEmail}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            required
            autoComplete="off"
            value={registerData.password}
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
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
