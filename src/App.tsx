import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { loginUserActionCreator } from "./app/store/feature/user/userSlicer";
import { useAppDispatch, useAppSelector } from "./app/store/hooks";
import ComplaintDetailsPage from "./pages/complaintDetails/ComplaintDetailsPage";
import ComplaintRegisterPage from "./pages/complaintRegister/ComplaintRegisterPage";
import ComplaintsPage from "./pages/complaints/ComplaintsPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import RegisterPage from "./pages/register/RegisterPage";
import fetchToken from "./utils/auth";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const localUser = fetchToken(token!);
    dispatch(loginUserActionCreator(localUser));
    navigate(pathname);
  }, [dispatch, navigate, pathname]);

  const token = useAppSelector((state) => state.users.token);

  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/login"
          element={!token ? <LoginPage /> : <Navigate to="/complaints" />}
        />
        <Route
          path="/complaints"
          element={token ? <ComplaintsPage /> : <Navigate to="/login" />}
        />
        <Route path="/details/:id" element={<ComplaintDetailsPage />} />
        <Route path="/complaintsRegister" element={<ComplaintRegisterPage />} />
        <Route path="" element={token ? <ComplaintsPage /> : <HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
