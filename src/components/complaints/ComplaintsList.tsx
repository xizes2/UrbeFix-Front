import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";
import Button from "../button/Button";
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
          <select
            className="filter-category"
            id="category"
            placeholder="Categoria"
          >
            <option value="select">Seleccione una categoría</option>
            <option value="Acera">Acera</option>
            <option value="Bicing">Bicing</option>
            <option value="Arbolado en via pública">
              Arbolado en via pública
            </option>
            <option value="Bancos">Bancos</option>
            <option value="Calzada">Calzada</option>
            <option value="Contenedores de basura">
              Contenedores de basura
            </option>
            <option value="Fuentes">Fuentes</option>
            <option value="Instalaciones de ócio">Instalaciones de ócio</option>
            <option value="Limpieza en via pública">
              Limpieza en via pública
            </option>
            <option value="Plagas en via pública">Plagas en via pública</option>
            <option value="Semáforos">Semáforos</option>
            <option value="Transporte público">Transporte público</option>
          </select>
          <FontAwesomeIcon
            className="buttons-container__icon"
            icon={faMapPin}
          />
        </div>
        <Link
          className="buttons-container__nav-link"
          to={"/complaintsRegister"}
        >
          <Button buttonClassName="button complaint" type="button">
            Crear Queja
          </Button>
        </Link>
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
