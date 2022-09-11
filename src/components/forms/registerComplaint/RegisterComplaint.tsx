import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import RegisterComplaintStyled from "./RegisterComplaintStyled";

const RegisterComplaint = () => {
  const initialState = {
    category: "",
    title: "",
    description: "",
    countComplaints: 0,
    image: "",
    creationDate: "",
    location: "",
  };

  const formData = initialState;
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleFileChange = () => {};

  return (
    <>
      <RegisterComplaintStyled onSubmit={handleSubmit}>
        <select
          className="category-selection"
          data-testid="select-category"
          id="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="select">Seleccione una categoría</option>
          <option value="Acera">Acera</option>
          <option value="saBicingxo">Bicing</option>
          <option value="Arbolado en vis pública">
            Arbolado en vis pública
          </option>
          <option value="Bancos">Bancos</option>
          <option value="Calzada">Calzada</option>
          <option value="Contenedores de basura">Contenedores de basura</option>
          <option value="Fuentes">Fuentes</option>
          <option value="Instalaciones de ócio">Instalaciones de ócio</option>
          <option value="Limpieza en via públic">
            Limpieza en via pública
          </option>
          <option value="Plagas en via pública">Plagas en via pública</option>
          <option value="Semáforos">Semáforos</option>
          <option value="Transporte público">Transporte público</option>
        </select>
        <input
          type="text"
          id="title"
          placeholder="Título"
          required
          autoComplete="off"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          id="description"
          placeholder="Descripción"
          autoComplete="off"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          id="location"
          placeholder="Ubicación"
          autoComplete="off"
          value={formData.location}
          onChange={handleChange}
        />
        <div className="image-container">
          <label htmlFor="image" className="image-button">
            <span>Añadir foto</span>
            <FontAwesomeIcon
              className="image-button__icon-camera"
              icon={faCamera}
            />
          </label>
          <input
            type="file"
            id="image"
            name="image"
            style={{ display: "none" }}
            value={formData.image}
            onChange={handleFileChange}
          />
        </div>
        <div className="buttons-container">
          <button type="submit">Enviar</button>
          <div className="buttons-container__return-container">
            <Link className="buttons-container__nav-link" to={"/complaints"}>
              <button className="buttons-container__return">Volver</button>
            </Link>
          </div>
        </div>
      </RegisterComplaintStyled>
    </>
  );
};

export default RegisterComplaint;
