import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import RegisterPage from "./pages/register/RegisterPage";

const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/users/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
