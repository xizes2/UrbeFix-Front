import { useLocation } from "react-router-dom";
import useUser from "../../hooks/users/useUsersApi";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const { logoutUser } = useUser();

  const showLogoutBUtton = () => {
    if (pathname === "/complaints" || pathname.includes("details")) {
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
  };

  return (
    <HeaderStyled className="main-header">
      <h1 className="main-title">
        <img
          className="urbefix-logo"
          src="/images/urbefixlogo.png"
          alt="urbefix logo"
        />
      </h1>
      <h2 className="main-header__location">{showLocation()}</h2>
      {showLogoutBUtton() ? (
        <button className="main-header__logout-button" onClick={logoutUser}>
          Logout
        </button>
      ) : (
        ""
      )}
    </HeaderStyled>
  );
};

export default Header;
