import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import RegisterPage from "./pages/register/RegisterPage";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
