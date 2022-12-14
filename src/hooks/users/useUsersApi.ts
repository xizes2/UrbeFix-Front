import { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../app/store/feature/user/userSlicer";
import { useAppDispatch } from "../../app/store/hooks";
import {
  ILoginData,
  IRegisteredUser,
  IUnregisteredUser,
  IUserToken,
} from "../../interfaces/users/User";
import fetchToken from "../../utils/auth";

export const loadingModal = (message: string) =>
  toast.loading(message, {
    position: toast.POSITION.TOP_CENTER,
    closeButton: true,
    toastId: "loading modal",
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
  const navigateTo = useNavigate();

  const registerUser = async (registerData: IUnregisteredUser) => {
    const url: string = `${process.env.REACT_APP_API_URL}users/register`;

    try {
      await axios.post(url, registerData);

      const loginData = {
        userEmail: registerData.userEmail,
        password: registerData.password,
      };
      loginUser(loginData);
      navigateTo("/complaints");
    } catch (error) {
      toast.dismiss();
      errorModal("NoOoOoOoo! Hubo un error. Por favor, intente otra vez");
    }
  };

  const loginUser = async (loginData: ILoginData) => {
    try {
      loadingModal("Give us a second...");
      const {
        data: {
          user: { token },
        },
      }: AxiosResponse<IUserToken> = await axios.post(
        `${process.env.REACT_APP_API_URL}users/login`,
        loginData
      );

      const userInfo: IRegisteredUser = fetchToken(token);
      localStorage.setItem("token", token);
      dispatch(loginUserActionCreator(userInfo));

      toast.dismiss();
      successModal("Logged with success!");

      navigateTo("/complaints");
      return;
    } catch (error) {
      toast.dismiss();
      errorModal("NoOoOoOoo! Hubo un error. Por favor, intente otra vez");
    }
  };

  const logoutUser = () => {
    dispatch<PayloadAction>(logoutUserActionCreator());
    localStorage.removeItem("token");
    navigateTo("/login");
  };

  return { registerUser, loginUser, logoutUser };
};

export default useUser;
