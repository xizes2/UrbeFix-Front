import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IComplaint } from "../../interfaces/complaints/Complaints";
import ComplaintStyled from "./ComplaintStyled";

const Complaint = ({
  complaint: { id, category, image, title, creationDate },
}: IComplaint): JSX.Element => {
  const [windowSize, setWindowSize] = useState(window.innerWidth > 601);
  const { deleteComplaint } = useComplaints();

  const setViewPortSize = () => {
    setWindowSize(window.innerWidth > 601);
  };

  useEffect(() => {
    window.addEventListener("resize", setViewPortSize);
    return () => window.removeEventListener("resize", setViewPortSize);
  });

  const handleDelete = () => {
    deleteComplaint(id);
  };

  return (
    <ComplaintStyled className="complaint-card">
      <div className="image-container">
        <img
          src={image}
          alt={title}
          className="image-container__image"
          height={"100px"}
          width={"100px"}
        />
      </div>
      <div className="complaint-card__text-container">
        <Link to={`/details/${id}`}>
          <h3 className="complaint-card__title">{category}</h3>
          {windowSize ? (
            <span className="complaint-card__date">
              Fecha de creación: {creationDate as unknown as string}
            </span>
          ) : (
            ""
          )}
          <div className="complaint-card__add-complaint-container">
            <span className="complaint-card__text">Agregar queja</span>
            <div className="icon-container">
              <FontAwesomeIcon
                className="icon-container__add-icon"
                icon={faCirclePlus}
              />
            </div>
          </div>
        </Link>
      </div>
      <button
        className="complaint-card__delete-container"
        onClick={handleDelete}
        aria-label="delete-complaint-button"
      >
        <FontAwesomeIcon
          className="add-complaint__delete-icon"
          icon={faTrashCan}
        />
      </button>
    </ComplaintStyled>
  );
};

export default Complaint;
