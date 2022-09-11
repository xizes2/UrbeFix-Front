import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createComplaintActionCreator,
  deleteComplaintActionCreator,
  getAllComplaintsActionCreator,
} from "../../app/store/feature/complaints/complaintsSlicer";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { IRegisteredComplaint } from "../../interfaces/complaints/Complaints";

export const loadingModal = (message: string) =>
  toast.loading(message, {
    position: toast.POSITION.TOP_CENTER,
    closeButton: true,
    toastId: "error modal",
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
  const navigateTo = useNavigate();
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
      toast.dismiss("error modal");
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

  const getComplaint = useCallback(
    async (complaintId: string) => {
      const url: string = `${process.env.REACT_APP_API_URL}complaints/details/${complaintId}`;
      const token = localStorage.getItem("token");

      try {
        const {
          data: { complaint },
        } = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return complaint;
      } catch (error) {
        errorModal("Cannot show complaint's details");
        navigateTo("/complaints");
      }
    },
    [navigateTo]
  );

  const createComplaint = useCallback(
    async (complaint: IRegisteredComplaint) => {
      const url: string = `${process.env.REACT_APP_API_URL}complaints/`;
      const token = localStorage.getItem("token");
      try {
        const {
          data: { newComplaint },
        } = await axios.post(url, complaint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        successModal("Your songs has been correctly uploaded!");
        dispatch(createComplaintActionCreator(newComplaint));
        return newComplaint;
      } catch (error) {
        errorModal("Couldn't create the complaint.");
      }
    },
    [dispatch]
  );

  return {
    complaints,
    getAllComplaints,
    deleteComplaint,
    getComplaint,
    createComplaint,
  };
};

export default useComplaints;
