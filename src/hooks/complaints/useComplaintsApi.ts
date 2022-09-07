import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import {
  deleteComplaintActionCreator,
  getAllComplaintsActionCreator,
} from "../../app/store/feature/complaints/complaintsSlicer";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";

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
  const dispatch = useAppDispatch();
  const complaints = useAppSelector((complaints) => complaints);

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
          creationDate: new Date(
            complaint.creationDate as Date
          ).toLocaleDateString(),
        })
      );

      dispatch(getAllComplaintsActionCreator(complaintsList));
    } catch (error) {
      errorModal("NoOoOoOoo! Please try again.");
    }
  }, [dispatch]);

  const deleteComplaint = useCallback(
    async (complaintId: string) => {
      const token = localStorage.getItem("token");
      const url: string = `${process.env.REACT_APP_API_URL}complaints/delete/${complaintId}`;

      try {
        await axios.delete(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(deleteComplaintActionCreator(complaintId));
        successModal("The complaint has been deleted!");
      } catch (error) {
        errorModal("NoOoOoOoo! Please try again.");
      }
    },
    [dispatch]
  );

  toast.dismiss();
  return { complaints, getAllComplaints, deleteComplaint };
};

export default useComplaints;
