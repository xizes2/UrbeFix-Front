import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <>
      <HomePageStyled>
        <img src="/images/city-drawing.png" alt="city landscape vector" />
        <h2>Bienvenido a UrbeFix!</h2>
        <p>
          Aqui podrás hacer quejas sobre distintas infraestructuras de la ciudad
          ayudando a mantenerla en orden para todos.
        </p>
      </HomePageStyled>
    </>
  );
};
export default HomePage;
