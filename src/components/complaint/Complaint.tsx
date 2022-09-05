import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IComplaint } from "../../interfaces/complaints/Complaints";
import ComplaintStyled from "./ComplaintStyled";

const Complaint = ({
  complaint: { category, image, title },
}: IComplaint): JSX.Element => {
  return (
    <ComplaintStyled className="complaint-card">
      <div className="image container">
        <img
          src={image}
          alt={title}
          className="complaint-card__image"
          height={"50px"}
        />
      </div>
      <h3 className="complaint-card__title">{category}</h3>
      <div className="complaint-card__add-complaint-container">
        <span className="add-complaint-container__text">Agregar queja</span>
        <FontAwesomeIcon
          className="add-complaint__add-icon"
          icon={faCirclePlus}
        />
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
