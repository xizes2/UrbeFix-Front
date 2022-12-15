import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/hooks";
import useComplaints from "../../hooks/complaints/useComplaintsApi";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";
import Button from "../button/Button";
import Complaint from "../complaint/Complaint";
import ComplaintsListStyled from "./ComplaintsListStyled";

const ComplaintsList = (): JSX.Element => {
  let complaintsList = useAppSelector((state) => state.complaints);
  const { getAllComplaints, totalPages } = useComplaints();
  const [filteredComplaints, setFilteredComplaints] = useState(complaintsList);
  const [categoryFilter, setCategoryFilter] = useState("");
  let [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getAllComplaints(1);
  }, [getAllComplaints]);

  const loadMoreComplaints = () => {
    const updatedPage = page + 1;
    getAllComplaints(updatedPage);
    setPage(updatedPage);
  };

  const isLoadMoreButtonActive = () => {
    return page >= totalPages;
  };

  useEffect(() => {
    if (categoryFilter !== "") {
      setFilteredComplaints(
        complaintsList.filter(
          (complaint) => complaint.category === categoryFilter
        )
      );
    } else {
      setFilteredComplaints(complaintsList);
    }
  }, [complaintsList, categoryFilter]);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <ComplaintsListStyled>
      <div className="buttons-container">
        <div className="buttons-container__filter-buttons">
          <select
            className="filter-category"
            id="category"
            onChange={handleCategoryChange}
          >
            <option value="">Seleccione una categoría</option>
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
        {filteredComplaints.map((complaintItem: IRegisteredComplaint) => (
          <li
            className="complaints-container__complaint"
            key={complaintItem.id}
          >
            <Complaint complaint={complaintItem} />
          </li>
        ))}
      </ul>
      <Button
        buttonClassName="load-more-button"
        type="button"
        onClick={() => {
          loadMoreComplaints();
        }}
        disabled={isLoadMoreButtonActive()}
      >
        Cargar más
      </Button>
    </ComplaintsListStyled>
  );
};

export default ComplaintsList;
