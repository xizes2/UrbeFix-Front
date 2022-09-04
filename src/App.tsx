import { Route, Routes } from "react-router-dom";
import ComplaintsPage from "./pages/complaintsPage/ComplaintsPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import RegisterPage from "./pages/register/RegisterPage";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
