import { useLocation } from "react-router-dom";
import useUser from "../../hooks/users/useUsersApi";
import Button from "../button/Button";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const { logoutUser } = useUser();

  const showLogoutBUtton = () => {
    if (
      pathname === "/complaints" ||
      pathname.includes("details") ||
      pathname === "/complaintsRegister" ||
      pathname.includes("editComplaint")
    ) {
      return true;
    }
  };

  const showLocation = () => {
    if (pathname === "/complaints") {
      return "Listado de Quejas";
    }
    if (pathname.includes("details")) {
      return "Detalles de Queja";
    }
    if (pathname === "/complaintsRegister") {
      return "Completar Queja";
    }
    if (pathname.includes("/editComplaint")) {
      return "Editar Queja";
    }
  };

  return (
    <HeaderStyled className="main-header">
      <h1 className="main-title">
        <img
          className="urbefix-logo"
          src="/images/urbefixlogo.png"
          alt="urbefix logo"
          height={100}
          width={100}
        />
      </h1>
      <h2 className="main-header__location">{showLocation()}</h2>
      {showLogoutBUtton() ? (
        <Button
          buttonClassName="button-white"
          type="button"
          onClick={logoutUser}
        >
          Logout
        </Button>
      ) : (
        ""
      )}
    </HeaderStyled>
  );
};

export default Header;
