import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useComplaints from "../../../hooks/complaints/useComplaintsApi";
import { IComplaint } from "../../../interfaces/complaints/Complaints";
import Button from "../../button/Button";
import RegisterComplaintStyled from "../registerComplaint/RegisterComplaintStyled";

let formData = new FormData();

const EditComplaint = ({ complaint }: IComplaint) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editComplaint } = useComplaints();

  const [editedComplaint, setEditedComplaint] = useState(complaint);

  useEffect(() => {
    setEditedComplaint({ ...complaint });
  }, [complaint]);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    formData.append(
      "complaint",
      JSON.stringify({
        ...editedComplaint,
      })
    );

    await editComplaint(formData, id!);

    setEditedComplaint(complaint);
    formData = new FormData();
    navigate("/complaints");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditedComplaint({
      ...editedComplaint,
      [event.target.id]: event.target.value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formData.append("image", event.target.files![0]);
    handleChange(event);
  };

  const isDisabled =
    editedComplaint.category === "" ||
    editedComplaint.title.length < 5 ||
    formData.keys.name.includes("image");

  return (
    <>
      <RegisterComplaintStyled onSubmit={handleSubmit}>
        <select
          className="category-selection"
          data-testid="select-category"
          id="category"
          value={editedComplaint.category}
          onChange={handleChange}
          required
        >
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
          autoComplete="off"
          value={editedComplaint.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="description"
          autoComplete="off"
          value={editedComplaint.description}
          onChange={handleChange}
        />

        <span className="address-container">{editedComplaint.address}</span>
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
            value={""}
            onChange={handleFileChange}
          />
        </div>
        <div className="buttons-container">
          <Button
            buttonClassName="button form"
            type="submit"
            onClick={() => {}}
            disabled={isDisabled}
          >
            Enviar
          </Button>
          <div className="buttons-container__return-container">
            <Link className="buttons-container__nav-link" to={"/complaints"}>
              <Button buttonClassName="button form white" type="button">
                Volver
              </Button>
            </Link>
          </div>
        </div>
      </RegisterComplaintStyled>
    </>
  );
};

export default EditComplaint;
