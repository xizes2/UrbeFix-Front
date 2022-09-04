import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { getAllComplaintsActionCreator } from "../../app/store/feature/complaints/complaintsSlicer";
import { useAppDispatch } from "../../app/store/hooks";
import IRegisteredComplaint from "../../interfaces/complaints/Complaints";

export const loadingModal = (message: string) =>
  toast.loading(message, {
    position: toast.POSITION.TOP_CENTER,
    closeButton: true,
  });

export const errorModal = (error: string) =>
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });

const useComplaints = () => {
  const dispatch = useAppDispatch();
  const getAllComplaints = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem("token");
    const url: string = `${process.env.REACT_APP_API_URL}complaints`;
    try {
      loadingModal("Give us a second...");

      const {
        data: { complaints },
      } = await axios.get(url, {
        headers: { authorization: `Bearer ${token}` },
      });

      const complaintsList = complaints.map(
        (complaint: IRegisteredComplaint) => ({
          ...complaint,
          creationDate: new Date(complaint.creationDate as Date),
        })
      );

      dispatch(getAllComplaintsActionCreator(complaintsList));
    } catch (error) {
      errorModal("NoOoOoOoo! Please try again.");
    }
  }, [dispatch]);

  return { getAllComplaints };
};

export default useComplaints;
