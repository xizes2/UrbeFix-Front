import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IComplaint } from "../../interfaces/complaints/Complaints";
import Button from "../button/Button";
import ComplaintStyled from "./ComplaintStyled";

const Complaint = ({
  complaint: { id, category, title, creationDate, imageBackUp, owner },
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

  const userId = useAppSelector((state) => state.users.id);

  const handleDelete = () => {
    deleteComplaint(id);
  };

  return (
    <ComplaintStyled className="complaint-card">
      <div className="image-container">
        <Link to={`/details/${id}`}>
          <img
            src={imageBackUp}
            alt={title}
            className="image-container__image"
            height={100}
            width={100}
          />
        </Link>
      </div>

      <div className="complaint-card__text-container">
        <Link to={`/details/${id}`}>
          <h3 className="complaint-card__title">{category}</h3>
          {windowSize ? (
            <>
              <span className="complaint-card__date">
                Fecha de creación: {creationDate as unknown as string}
              </span>
              <div className="complaint-card__add-complaint-container">
                <span className="complaint-card__text">Agregar queja</span>
                <div className="icon-container">
                  <FontAwesomeIcon
                    className="icon-container__add-icon"
                    icon={faCirclePlus}
                  />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </Link>
      </div>
      {userId === owner && (
        <Button
          buttonClassName="complaint-card__button--delete"
          type="button"
          onClick={handleDelete}
          aria-label="delete-complaint-button"
        >
          <FontAwesomeIcon
            className="delete-complaint__trashcan-icon"
            icon={faTrashCan}
          />
        </Button>
      )}
    </ComplaintStyled>
  );
};

export default Complaint;
