import { SyntheticEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";
import useUser from "../../../hooks/useUsersApi";
import { UnregisteredUser } from "../../../interfaces/users/User";
import { MainHeader, RegisterFormStyled } from "./RegisterFormStyled";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const { registerUser } = useUser();

  const initialState: UnregisteredUser = {
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
          <button type="submit">Enviar</button>
          <Link className="buttons-container__nav-link" to={"/home"}>
            <button className="buttons-container__return">Volver</button>
          </Link>
        </div>
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
