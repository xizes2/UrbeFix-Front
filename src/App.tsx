import AppStyled from "./AppStyled";
import RegisterForm from "./components/forms/RegisterForm";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled className="main-container">
        <RegisterForm />
      </AppStyled>
    </>
  );
};

export default App;
