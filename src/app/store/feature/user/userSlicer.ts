import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisteredUser } from "../../../../interfaces/users/User";

const usersInitialState: RegisteredUser = {
  userEmail: "",
  token: "",
  id: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loginUser: (previousState, action: PayloadAction<RegisteredUser>) =>
      action.payload,
  },
});

export const usersReducer = usersSlice.reducer;

export const { loginUser: loginUserActionCreator } = usersSlice.actions;
