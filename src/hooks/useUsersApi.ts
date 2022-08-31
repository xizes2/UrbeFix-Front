import axios from "axios";
import { toast } from "react-toastify";
import { UnregisteredUser } from "../interfaces/users/User";

export const loadingModal = (message: string) =>
  toast.loading(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const successModal = (message: string) =>
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });

const useUser = () => {
  const registerUser = async (registerData: UnregisteredUser) => {
    const url: string = `${process.env.REACT_APP_API_URL}users/register`;
    try {
      await axios.post(url, registerData);
      successModal("Registered with success!");
    } catch (error) {
      errorModal("NoOoOoOoo! Please try again.");
    }
  };

  return { registerUser };
};

export default useUser;
