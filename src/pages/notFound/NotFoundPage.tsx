import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <Link className="buttons-container__nav-link" to={"/home"}>
        <Header />
      </Link>
      <NotFoundPageStyled>
        <span>NoOOoOoOOooOo!</span>
        <img src="/images/man-screaming.png" alt="man screaming vector" />
        <span>Intenta otra vez</span>
      </NotFoundPageStyled>
    </>
  );
};
export default NotFoundPage;
