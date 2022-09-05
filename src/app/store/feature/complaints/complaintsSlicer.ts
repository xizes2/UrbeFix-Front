import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisteredComplaint } from "../../../../interfaces/complaints/Complaints";

const complaintsInitialState: IRegisteredComplaint[] = [
  {
    category: "",
    title: "",
    description: "",
    countComplaints: 0,
    image: "",
    id: "",
  },
];

const complaintsSlice = createSlice({
  name: "complaints",
  initialState: complaintsInitialState,
  reducers: {
    getAllComplaints: (
      previousState,
      action: PayloadAction<Array<IRegisteredComplaint>>
    ) => action.payload,
  },
});

export const complaintsReducer = complaintsSlice.reducer;

export const { getAllComplaints: getAllComplaintsActionCreator } =
  complaintsSlice.actions;
