import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisteredUser } from "./model/User";

const usersInitialState: RegisteredUser[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loadUsers: (previousUsers, action: PayloadAction<RegisteredUser[]>) =>
      action.payload,
  },
});

export const usersReducer = usersSlice.reducer;

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;
