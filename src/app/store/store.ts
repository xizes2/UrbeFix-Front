import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { complaintsReducer } from "./feature/complaints/complaintsSlicer";
import { usersReducer } from "./feature/user/userSlicer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    complaints: complaintsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
