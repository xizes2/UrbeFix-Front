import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";
import Map from "../map/Map";
import ComplaintDetailsStyled from "./ComplaintDetailsStyled";
import Geocode from "react-geocode";

const geocodeKey = process.env.REACT_APP_GEOCODE_KEY;

Geocode.setLanguage("es");
Geocode.setRegion("es");
Geocode.setLocationType("ROOFTOP");
Geocode.setApiKey(geocodeKey!);

const ComplaintDetails = () => {
  const complaintInitialState: IRegisteredComplaint = {
    category: "",
    title: "",
    countComplaints: 0,
    image: "",
    id: "",
  };

  const urlProduction = process.env.REACT_APP_API_URL;

  const navigateTo = useNavigate();
  const [complaint, setComplaint] = useState(complaintInitialState);
  const { getComplaint, deleteComplaint } = useComplaints();
  const { id } = useParams();

  const catalunyaSquareLat = 41.387016;
  const catalunyaSquareLng = 2.170047;
  const [lat, setLat] = useState(catalunyaSquareLat);
  const [lng, setLng] = useState(catalunyaSquareLng);
  const [address, setAddres] = useState("Barcelona");

  useEffect(() => {
    setLat(complaint.location?.[0] ? complaint.location?.[0] : lat);
    setLng(complaint.location?.[1] ? complaint.location?.[1] : lng);
  }, [complaint.location, lat, lng]);

  Geocode.fromLatLng(lat.toString(), lng.toString()).then((response) => {
    const address: string = response.results[0].formatted_address;
    setAddres(address);
  });

  const handleDelete = () => {
    deleteComplaint(id!);
    navigateTo("/complaints");
  };

  useEffect(() => {
    (async () => {
      const complaint = await getComplaint(id!);
      setComplaint(complaint);
    })();
  }, [getComplaint, id]);

  return (
    <ComplaintDetailsStyled>
      <div className="complaint-card">
        <Map lat={lat} lng={lng} />
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Categoría:</h3>
          <span className="title-container__text">{complaint.category}</span>
        </div>
        <div className="complaint-card__detail-container">
          <h3 className="complaint-card__title">Ubicación:</h3>
          <span className="location-container__text">{address}</span>
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
            src={`${urlProduction}${complaint.image}`}
            alt={complaint.image}
            className="image-container__image"
            height={100}
          />
        </div>
        <button
          className="complaint-card__delete-container"
          onClick={handleDelete}
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
