import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IComplaint } from "../../interfaces/complaints/Complaints";
import Map from "../map/Map";
import ComplaintDetailsStyled from "./ComplaintDetailsStyled";
import Geocode from "react-geocode";
import Button from "../button/Button";
import { useAppSelector } from "../../app/store/hooks";

const geocodeKey = process.env.REACT_APP_GEOCODE_KEY;

Geocode.setLanguage("es");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.setApiKey(geocodeKey!);

const ComplaintDetails = ({ complaint }: IComplaint) => {
  const navigate = useNavigate();
  const { deleteComplaint } = useComplaints();
  const { id } = useParams();

  const userId = useAppSelector((state) => state.users.id);

  const handleDelete = () => {
    deleteComplaint(id!);
    navigate("/complaints");
  };

  return (
    <ComplaintDetailsStyled>
      <div className="complaint">
        <Map lat={complaint.location![0]} lng={complaint.location![1]} />
        <div className="complaint__detail-container">
          <h3 className="field-title">Categoría:</h3>
          <span className="field-text">{complaint.category}</span>
        </div>
        <div className="complaint__detail-container">
          <h3 className="field-title">Ubicación:</h3>
          <span className="field-text">{complaint.address}</span>
        </div>
        <div className="complaint__detail-container">
          <h3 className="field-title">Fecha:</h3>
          <span className="field-text">
            {new Date(complaint.creationDate as Date).toDateString()}
          </span>
        </div>
        <span className="complaint__complaint-count">
          Queja repetida <span>{complaint.countComplaints}</span> vez
        </span>
        <div className="complaint__detail-container">
          <h3 className="field-title">Descripción:</h3>
          <span className="field-text">{complaint.description}</span>
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

        {userId === complaint.owner && (
          <>
            <Button
              type="button"
              buttonClassName="button-round--delete"
              onClick={handleDelete}
            >
              <FontAwesomeIcon className="delete-icon" icon={faTrashCan} />
            </Button>

            <Link
              className="edit-button-link"
              to={`/editComplaint/${complaint.id}`}
            >
              <Button
                type="button"
                buttonClassName="button-round"
                onClick={() => {}}
              >
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} />
              </Button>
            </Link>
          </>
        )}
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
