import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UnregisteredUser } from "../../../../interfaces/users/User";

const usersInitialState: UnregisteredUser = {
  firstName: "",
  firstSurname: "",
  profileImage: "",
  userEmail: "",
  password: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    createUser: (previousUsers, action: PayloadAction<UnregisteredUser>) =>
      action.payload,
  },
});

export const usersReducer = usersSlice.reducer;

export const { createUser: createUserActionCreator } = usersSlice.actions;
