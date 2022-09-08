import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import ComplaintDetailsStyled from "./ComplaintDetailsStyled";

const ComplaintDetails = () => {
  return (
    <ComplaintDetailsStyled>
      <div className="complaint-card">
        <MapContainer
          center={[41.390205, 2.154007]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Categoría:</h3>
          <span className="title-container__text">Contenedor de resíduos</span>
        </div>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Dirección:</h3>
          <span className="location-container__text">
            Carrer de Bismark, 43
          </span>
        </div>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Fecha:</h3>
          <span className="date-container__text">27/08/2022</span>
        </div>
        <span className="complaint-card__complaint-count">
          Queja repetida <span>1</span> vez
        </span>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Descripción:</h3>
          <span className="description-container__text">
            El contenedor de orgánico casi siempre está lleno y por eso las
            personas dejan la basura fuera. Mucha suciedad alrededor.
          </span>
        </div>
        <div className="image-container">
          <img
            src="/images/man-screaming.png"
            alt={"man screaming"}
            className="image-container__image"
            height={"50px"}
          />
          <img
            src="/images/man-screaming.png"
            alt={"man screaming"}
            className="image-container__image"
            height={"50px"}
          />
        </div>
        <button
          className="complaint-card__delete-container"
          onClick={() => {}}
          aria-label="delete-complaint-button"
        >
          <FontAwesomeIcon
            className="delete-complaint__delete-icon"
            icon={faTrashCan}
          />
        </button>
        <button
          className="complaint-card__edit-container"
          onClick={() => {}}
          aria-label="edit-complaint-button"
        >
          <FontAwesomeIcon
            className="edit-complaint__edit-icon"
            icon={faPenToSquare}
          />
        </button>
      </div>
    </ComplaintDetailsStyled>
  );
};

export default ComplaintDetails;
