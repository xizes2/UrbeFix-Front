import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";
import Map from "../map/Map";
import ComplaintDetailsStyled from "./ComplaintDetailsStyled";

const ComplaintDetails = () => {
  const complaintInitialState: IRegisteredComplaint = {
    category: "",
    title: "",
    countComplaints: 0,
    image: "",
    id: "",
  };

  const [complaint, setComplaint] = useState(complaintInitialState);
  const { getComplaint } = useComplaints();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const complaint = await getComplaint(id!);
      setComplaint(complaint);
    })();
  }, [getComplaint, id]);
  return (
    <ComplaintDetailsStyled>
      <div className="complaint-card">
        <Map />
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Categoría:</h3>
          <span className="title-container__text">{complaint.category}</span>
        </div>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Dirección:</h3>
          <span className="location-container__text">
            Carrer de Bismark, 43
          </span>
        </div>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Fecha:</h3>
          <span className="date-container__text">
            {new Date(complaint.creationDate as Date).toDateString()}
          </span>
        </div>
        <span className="complaint-card__complaint-count">
          Queja repetida <span>{complaint.countComplaints}</span> vez
        </span>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Descripción:</h3>
          <span className="description-container__text">
            {complaint.description}
          </span>
        </div>
        <div className="image-container">
          <img
            src={complaint.image}
            alt={complaint.image}
            className="image-container__image"
            height={"50px"}
          />
          <img
            src={complaint.image}
            alt={complaint.image}
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
        <div className="return-button-container">
          <Link
            className="return-button-container__nav-link"
            to={"/complaints"}
          >
            <button className="return-button-container__return">
              Volver al Listado
            </button>
          </Link>
        </div>
      </div>
    </ComplaintDetailsStyled>
  );
};

export default ComplaintDetails;
