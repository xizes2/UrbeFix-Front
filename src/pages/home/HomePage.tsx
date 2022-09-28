import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <>
      <Header />
      <HomePageStyled>
        <img src="/images/city-drawing.png" alt="city landscape vector" />
        <h2>Bienvenido a UrbeFix!</h2>
        <p>
          Aqui podrás hacer quejas sobre distintas infraestructuras de la ciudad
          ayudando a mantenerla en orden para todos.
        </p>
        <div className="buttons-container">
          <Link className="buttons-container__link" to={"/login"}>
            <Button buttonClassName="button form" type="button">
              Login
            </Button>
          </Link>
          <Link className="buttons-container__link" to={"/register"}>
            <Button buttonClassName="button form white" type="button">
              Registrarse
            </Button>
          </Link>
        </div>
      </HomePageStyled>
    </>
  );
};
export default HomePage;
