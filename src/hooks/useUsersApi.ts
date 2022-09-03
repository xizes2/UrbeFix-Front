import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { loginUserActionCreator } from "../app/store/feature/user/userSlicer";
import { useAppDispatch } from "../app/store/hooks";
import {
  LoginData,
  RegisteredUser,
  UnregisteredUser,
  UserToken,
} from "../interfaces/users/User";

export const loadingModal = (message: string) =>
  toast.loading(message, {
    position: toast.POSITION.TOP_CENTER,
    closeButton: true,
  });

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });

const useUser = () => {
  const dispatch = useAppDispatch();

  const registerUser = async (registerData: UnregisteredUser) => {
    const url: string = `${process.env.REACT_APP_API_URL}users/register`;
    loadingModal("Give us a second...");
    try {
      await axios.post(url, registerData);
      successModal("Registered with success!");
    } catch (error) {
      errorModal("NoOoOoOoo! Please try again.");
    }
  };

  const loginUser = async (loginData: LoginData) => {
    loadingModal("Give us a second...");
    try {
      const {
        data: { token },
      }: AxiosResponse<UserToken> = await axios.post(
        `${process.env.REACT_APP_API_URL}users/login`,
        loginData
      );

      if (token) {
        localStorage.setItem("token", token);
        const userInfo: RegisteredUser = jwtDecode(token);
        dispatch(loginUserActionCreator(userInfo));
      }
      successModal("Logged with success!");
    } catch (error) {
      errorModal("NoOoOoOoo! Please try again.");
    }
  };

  return { registerUser, loginUser };
};

export default useUser;
