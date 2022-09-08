import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useAppSelector } from "../../app/store/hooks";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";
import Complaint from "../complaint/Complaint";
import ComplaintsListStyled from "./ComplaintsListStyled";

const ComplaintsList = (): JSX.Element => {
  const complaintsList = useAppSelector((state) => state.complaints);

  const { getAllComplaints } = useComplaints();

  useEffect(() => {
    getAllComplaints();
  }, [getAllComplaints]);

  return (
    <ComplaintsListStyled>
      <div className="buttons-container">
        <div className="buttons-container__filter-buttons">
          <button
            className="buttons-container__category"
            aria-label="category-button"
          >
            Categoría
          </button>
          <FontAwesomeIcon
            className="buttons-container__icon"
            icon={faMapPin}
          />
        </div>
        <button
          className="buttons-container__create-complaint"
          aria-label="create-complaint-button"
        >
          Crear Queja
        </button>
      </div>
      <ul className="complaints-container">
        {complaintsList.map((complaintItem: IRegisteredComplaint) => (
          <li
            className="complaints-container__complaint"
            key={complaintItem.id}
          >
            <Complaint complaint={complaintItem} />
          </li>
        ))}
      </ul>
    </ComplaintsListStyled>
  );
};

export default ComplaintsList;
