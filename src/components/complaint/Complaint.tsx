import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IComplaint } from "../../interfaces/complaints/Complaints";
import ComplaintStyled from "./ComplaintStyled";

const Complaint = ({
  complaint: { category, image, title },
}: IComplaint): JSX.Element => {
  return (
    <ComplaintStyled className="complaint-card">
      <div className="image-container">
        <img
          src={image}
          alt={title}
          className="image-container__image"
          height={"50px"}
        />
      </div>
      <div className="complaint-card__text-container">
        <h3 className="complaint-card__title">{category}</h3>
        <div className="complaint-card__add-complaint-container">
          <span className="complaint-card__text">Agregar queja</span>
          <div className="icon-container">
            <FontAwesomeIcon
              className="icon-container__add-icon"
              icon={faCirclePlus}
            />
          </div>
        </div>
      </div>
      <button className="complaint-card__delete-container">
        <FontAwesomeIcon
          className="add-complaint__delete-icon"
          icon={faTrashCan}
        />
      </button>
    </ComplaintStyled>
  );
};

export default Complaint;
