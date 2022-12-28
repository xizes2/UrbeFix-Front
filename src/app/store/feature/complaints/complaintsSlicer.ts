import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisteredComplaint } from "../../../../interfaces/complaints/Complaints";

export interface IComplaintsExtended {
  complaints: IRegisteredComplaint[];
  currentPage: number;
  totalPages: number;
}

const complaintsInitialState: IComplaintsExtended = {
  complaints: [],
  currentPage: 0,
  totalPages: 0,
};

const complaintsSlice = createSlice({
  name: "complaints",
  initialState: complaintsInitialState,
  reducers: {
    getAllComplaints(
      previousState,
      action: PayloadAction<IComplaintsExtended>
    ) {
      previousState.complaints = [
        ...previousState.complaints,
        ...action.payload.complaints,
      ];
      previousState.currentPage = action.payload.currentPage;
      previousState.totalPages = action.payload.totalPages;
    },
    deleteComplaint(previousState, action: PayloadAction<string>) {
      previousState.complaints.filter(
        (complaint: IRegisteredComplaint) => complaint.id !== action.payload
      );
    },
    createComplaint(
      previousState,
      action: PayloadAction<IRegisteredComplaint>
    ) {
      previousState.complaints = [...previousState.complaints, action.payload];
    },
  },
});

export const complaintsReducer = complaintsSlice.reducer;

export const {
  getAllComplaints: getAllComplaintsActionCreator,
  deleteComplaint: deleteComplaintActionCreator,
  createComplaint: createComplaintActionCreator,
} = complaintsSlice.actions;
