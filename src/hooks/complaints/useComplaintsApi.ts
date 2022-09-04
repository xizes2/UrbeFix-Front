import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { getAllComplaintsActionCreator } from "../../app/store/feature/complaints/complaintsSlicer";

import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import IRegisteredComplaint from "../../interfaces/complaints/Complaints";

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

const useComplaints = () => {
  const complaints = useAppSelector(({ complaints }) => complaints);
  const dispatch = useAppDispatch();

  const getAllComplaints = useCallback(async () => {
    const url: string = `${process.env.REACT_APP_API_URL}complaints`;
    loadingModal("Give us a second...");
    try {
      const { data }: AxiosResponse<IRegisteredComplaint> = await axios.get(
        url
      );
      dispatch(getAllComplaintsActionCreator([data]));
      successModal("Registered with success!");
    } catch (error) {
      errorModal("NoOoOoOoo! Please try again.");
    }
  }, [dispatch]);

  return { getAllComplaints };
};

export default useComplaints;
