import { SyntheticEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { MainHeader, RegisterContainer } from "./RegisterFormStyled";
import useUser from "../../hooks/useUsersApi";

const RegisterForm = () => {
  const { registerUser } = useUser();

  const initialState = {
    firstName: "",
    firstSurname: "",
    profileImage: "",
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
      <RegisterContainer onSubmit={handleSubmit}>
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
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmar Contraseña"
            required
            autoComplete="off"
            onChange={handleChange}
          />
          <div className="image-container">
            <label htmlFor="imageInput" className="image-button">
              <span>Imagen de perfil</span>
              <FontAwesomeIcon
                className="image-button__icon-camera"
                icon={faCamera}
              />
            </label>
            <input
              type="file"
              id="profileImage"
              style={{ display: "none" }}
              value={registerData.profileImage}
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="buttons-container">
          <button type="submit">Enviar</button>
          <button type="submit">Volver</button>
        </div>
      </RegisterContainer>
    </>
  );
};

export default RegisterForm;
