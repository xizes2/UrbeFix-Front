import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useAppSelector } from "../../app/store/hooks";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import IRegisteredComplaint from "../../interfaces/complaints/Complaints";
import ComplaintsListStyled from "./ComplaintsListStyled";

const ComplaintsList = (): JSX.Element => {
  const complaints = useAppSelector<IRegisteredComplaint[]>(
    (state) => state.complaints
  );

  // const { getAllComplaints } = useComplaints();

  // useEffect(() => {
  //   getAllComplaints();
  // }, [getAllComplaints]);

  return (
    <ComplaintsListStyled>
      <div className="buttons-container">
        <div className="buttons-container__filter-buttons">
          <button className="buttons-container__category">Categoría</button>
          <FontAwesomeIcon
            className="buttons-container__icon"
            icon={faMapPin}
          />
        </div>
        <button className="buttons-container__create-complaint">
          Crear Queja
        </button>
      </div>
      <ul>
        {complaints.map((complaint, index) => (
          <li key={complaint.id}>
            {/* <ComplaintCard complaint={complaint} /> */}
          </li>
        ))}
      </ul>
    </ComplaintsListStyled>
  );
};

export default ComplaintsList;
