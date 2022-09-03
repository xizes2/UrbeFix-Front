import { Link } from "react-router-dom";
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
            <button className="buttons-container__login" type="submit">
              Login
            </button>
          </Link>
          <Link className="buttons-container__link" to={"/register"}>
            <button className="buttons-container__register">Registrarse</button>
          </Link>
        </div>
      </HomePageStyled>
    </>
  );
};
export default HomePage;
