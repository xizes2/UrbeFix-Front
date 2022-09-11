import { IRegisteredUser } from "../../../../interfaces/users/User";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  usersReducer,
} from "./userSlicer";

describe("Given a userSlice reducer", () => {
  describe("When its invoked with a loginUser action and a user", () => {
    test("Then it should return the user's token", () => {
      const userInitialState = {
        id: "",
        userEmail: "",
        token: "",
      } as IRegisteredUser;

      const user = {
        id: "654fd54",
        userEmail: "biro@gmail.com",
        token: "biropass",
      } as IRegisteredUser;

      const action = loginUserActionCreator(user);

      const receivedValue = usersReducer(userInitialState, action);

      expect(receivedValue).toStrictEqual(user);
    });
  });

  describe("When its invoked with a logoutUser action", () => {
    test("Then it should return the user's initial state: all data empty", () => {
      const userInitialState = {
        id: "",
        userEmail: "",
        token: "",
      } as IRegisteredUser;

      const user = {
        id: "654fd54",
        userEmail: "biro@gmail.com",
        token: "biropass",
      } as IRegisteredUser;

      const action = logoutUserActionCreator();

      const receivedValue = usersReducer(user, action);

      expect(receivedValue).toStrictEqual(userInitialState);
    });
  });
});
