import AppStyled from "./AppStyled";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UsersList from "./components/UsersList/UsersList";

const App = (): JSX.Element => {
  return (
    <>
      <AppStyled className="main-container">
        <h1 className="main-container__title">SociMonsters</h1>
        <Register />
        <Login />
        <UsersList />
      </AppStyled>
    </>
  );
};

export default App;
