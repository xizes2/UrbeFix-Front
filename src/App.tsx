import AppStyled from "./AppStyled";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/registerPage";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <AppStyled className="main-container">
          <main className="main-container">
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="users/register" element={<RegisterPage />} />
          </main>
        </AppStyled>
      </Routes>
    </>
  );
};

export default App;
