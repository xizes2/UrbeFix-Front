import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisteredComplaint } from "../../../../interfaces/complaints/Complaints";

const complaintsInitialState: IRegisteredComplaint[] = [];

const complaintsSlice = createSlice({
  name: "complaints",
  initialState: complaintsInitialState,
  reducers: {
    getAllComplaints: (
      previousState,
      action: PayloadAction<Array<IRegisteredComplaint>>
    ) => action.payload,
    deleteComplaint: (previouState, action: PayloadAction<string>) =>
      previouState.filter((complaint) => complaint.id !== action.payload),
  },
});

export const complaintsReducer = complaintsSlice.reducer;

export const {
  getAllComplaints: getAllComplaintsActionCreator,
  deleteComplaint: deleteComplaintActionCreator,
} = complaintsSlice.actions;
