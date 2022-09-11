import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRegisteredUser } from "../../../../interfaces/users/User";

const usersInitialState: IRegisteredUser = {
  userEmail: "",
  token: "",
  id: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    loginUser: (_previousState, action: PayloadAction<IRegisteredUser>) =>
      action.payload,
    logoutUser: (_previousState) => usersInitialState,
  },
});

export const usersReducer = usersSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = usersSlice.actions;
