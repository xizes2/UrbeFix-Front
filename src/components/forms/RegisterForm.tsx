import { SyntheticEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { MainHeader, RegisterContainer } from "./RegisterFormStyled";

const RegisterForm = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    profileimage: "",
    userEmail: "",
    password: "",
  });

  const formData = new FormData();

  const handleSubmit = async (ev: SyntheticEvent) => {
    ev.preventDefault();
    formData.append("user", JSON.stringify(registerData));
    console.log("Submit", formData.get("image"), formData.get("user"));
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [ev.target.name]: ev.target.value });
    formData.append(ev.target.name, ev.target.value);
  };

  const handleChangeFile = (ev: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", ev.target.files![0]);
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
            name="firstName"
            placeholder="Primer Nombre"
            required
            autoComplete="off"
            value={registerData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Último Nombre"
            required
            autoComplete="off"
            value={registerData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="password"
            placeholder="Contraseña"
            required
            autoComplete="off"
            value={registerData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            required
            autoComplete="off"
            value={registerData.password}
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
              id="imageInput"
              name="image"
              style={{ display: "none" }}
              value={registerData.profileimage}
              onChange={handleChangeFile}
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
