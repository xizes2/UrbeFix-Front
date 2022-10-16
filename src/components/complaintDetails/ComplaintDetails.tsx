import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IComplaint } from "../../interfaces/complaints/Complaints";
import Map from "../map/Map";
import ComplaintDetailsStyled from "./ComplaintDetailsStyled";
import Geocode from "react-geocode";
import Button from "../button/Button";

const geocodeKey = process.env.REACT_APP_GEOCODE_KEY;

Geocode.setLanguage("es");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.setApiKey(geocodeKey!);

const ComplaintDetails = ({ complaint }: IComplaint) => {
  const navigateTo = useNavigate();
  const { deleteComplaint } = useComplaints();
  const { id } = useParams();

  const handleDelete = () => {
    deleteComplaint(id!);
    navigateTo("/complaints");
  };

  return (
    <ComplaintDetailsStyled>
      <div className="complaint-card">
        <Map lat={complaint.location![0]} lng={complaint.location![1]} />
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Categoría:</h3>
          <span className="title-container__text">{complaint.category}</span>
        </div>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Ubicación:</h3>
          <span className="location-container__text">{complaint.address}</span>
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
            src={complaint.imageBackUp}
            alt={complaint.title}
            className="image-container__image"
            height={100}
            width={100}
          />
        </div>

        <Button
          type="button"
          buttonClassName="button-round--delete"
          onClick={handleDelete}
        >
          <FontAwesomeIcon
            className="delete-complaint__trashcan-icon"
            icon={faTrashCan}
          />
        </Button>
        <Button type="button" buttonClassName="button-round" onClick={() => {}}>
          <FontAwesomeIcon
            className="edit-complaint__edit-icon"
            icon={faPenToSquare}
          />
        </Button>
        <div className="return-button-container">
          <Link
            className="return-button-container__nav-link"
            to={"/complaints"}
          >
            <Button buttonClassName="button" type="button">
              Volver al Listado
            </Button>
          </Link>
        </div>
      </div>
    </ComplaintDetailsStyled>
  );
};

export default ComplaintDetails;
