import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserActionCreator } from "../../app/store/feature/user/userSlicer";
import { useAppDispatch } from "../../app/store/hooks";
import {
  ILoginData,
  IRegisteredUser,
  IUnregisteredUser,
  IUserToken,
} from "../../interfaces/users/User";

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

  const registerUser = async (registerData: IUnregisteredUser) => {
    const url: string = `${process.env.REACT_APP_API_URL}users/register`;
    loadingModal("Give us a second...");

    try {
      await axios.post(url, registerData);
      toast.dismiss();
      successModal("Registered with success!");
    } catch (error) {
      toast.dismiss();
      errorModal("NoOoOoOoo! Email already exists.");
    }
  };

  const loginUser = async (loginData: ILoginData) => {
    loadingModal("Give us a second...");
    try {
      const {
        data: {
          user: { token },
        },
      }: AxiosResponse<IUserToken> = await axios.post(
        `${process.env.REACT_APP_API_URL}users/login`,
        loginData
      );

      if (token) {
        localStorage.setItem("token", token);
        const userInfo: IRegisteredUser = jwtDecode(token);
        dispatch(loginUserActionCreator(userInfo));
      }
      toast.dismiss();
      successModal("Logged with success!");
    } catch (error) {
      toast.dismiss();
      errorModal("User or password not valid.");
    }
  };
  const navigateTo = useNavigate();
  navigateTo("/complaints");
  return { registerUser, loginUser };
};

export default useUser;
