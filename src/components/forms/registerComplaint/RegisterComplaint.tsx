import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useComplaints from "../../../hooks/complaints/useComplaintsApi";
import RegisterComplaintStyled from "./RegisterComplaintStyled";

let formData = new FormData();

const RegisterComplaint = () => {
  const initialState = {
    category: "",
    title: "",
    description: "",
    countComplaints: 0,
    image: "",
    location: "",
  };
  const navigate = useNavigate();
  const { createComplaint } = useComplaints();
  const [newComplaint, setNewComplaint] = useState(initialState);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    formData.append(
      "newComplaint",
      JSON.stringify({
        category: newComplaint.category,
        title: newComplaint.title,
        description: newComplaint.description,
        countComplaints: newComplaint.countComplaints,
        location: newComplaint.location,
      })
    );
    await createComplaint(formData);

    setNewComplaint(initialState);
    formData = new FormData();
    navigate("/complaints");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewComplaint({ ...newComplaint, [event.target.id]: event.target.value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    handleChange(event);
  };

  return (
    <>
      <RegisterComplaintStyled onSubmit={handleSubmit}>
        <select
          className="category-selection"
          data-testid="select-category"
          id="category"
          placeholder="Category"
          value={newComplaint.category}
          onChange={handleChange}
          required
        >
          <option value="select">Seleccione una categoría</option>
          <option value="Acera">Acera</option>
          <option value="Bicing">Bicing</option>
          <option value="Arbolado en via pública">
            Arbolado en via pública
          </option>
          <option value="Bancos">Bancos</option>
          <option value="Calzada">Calzada</option>
          <option value="Contenedores de basura">Contenedores de basura</option>
          <option value="Fuentes">Fuentes</option>
          <option value="Instalaciones de ócio">Instalaciones de ócio</option>
          <option value="Limpieza en via pública">
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
          value={newComplaint.title}
          onChange={handleChange}
        />
        <input
          type="text"
          id="description"
          placeholder="Descripción"
          autoComplete="off"
          value={newComplaint.description}
          onChange={handleChange}
        />
        <input
          type="text"
          id="location"
          placeholder="Ubicación"
          autoComplete="off"
          value={newComplaint.location}
          onChange={handleChange}
        />
        <div className="image-container">
          <label htmlFor="image" className="image-button">
            <span>Añadir foto</span>
            <span className="icon-container">
              <FontAwesomeIcon
                className="image-button__icon-camera"
                icon={faCamera}
              />
            </span>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            style={{ display: "none" }}
            value={newComplaint.image}
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
