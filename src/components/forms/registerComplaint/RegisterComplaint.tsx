import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { SyntheticEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useComplaints from "../../../hooks/complaints/useComplaintsApi";
import { IUnegisteredComplaint } from "../../../interfaces/complaints/Complaints";
import Button from "../../button/Button";
import RegisterComplaintStyled from "./RegisterComplaintStyled";
import Geocode from "react-geocode";

let formData = new FormData();

const errorModal = (error: string) => {
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};

const RegisterComplaint = () => {
  const initialState: IUnegisteredComplaint = {
    category: "",
    title: "",
    description: "",
    countComplaints: 0,
    image: "",
    location: [],
    address: "",
  };

  const navigate = useNavigate();
  const { createComplaint } = useComplaints();

  const [newComplaint, setNewComplaint] = useState(initialState);
  const [lat, setLat] = useState<number | undefined>();
  const [lng, setLng] = useState<number | undefined>();
  const [address, setAddress] = useState("");

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const coordinates = position.coords;
        setLat(coordinates.latitude);
        setLng(coordinates.longitude);

        try {
          Geocode.fromLatLng(
            coordinates.latitude.toString(),
            coordinates.longitude.toString()
          ).then((response) => {
            const address: string = response.results[0].formatted_address;
            setAddress(address);
          });
        } catch {
          errorModal("Ooops, por favor, intente otra vez.");
        }
      },

      () => {
        errorModal("Por favor, active la ubicación del dispositivo.");
      },

      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    formData.append(
      "newComplaint",
      JSON.stringify({
        category: newComplaint.category,
        title: newComplaint.title,
        description: newComplaint.description,
        countComplaints: newComplaint.countComplaints,
        location: [lat, lng],
        address: address,
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

  const isDisabled =
    newComplaint.category === "" ||
    newComplaint.title.length < 5 ||
    !lat ||
    !lng ||
    newComplaint.image === "";

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
        <Button
          buttonClassName="button-geolocation"
          type="button"
          onClick={handleLocation}
        >
          Ubicación automática
        </Button>
        <span className="address-container">{address}</span>
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
          <Button
            buttonClassName="button form"
            type="submit"
            onClick={() => handleLocation}
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

export default RegisterComplaint;
