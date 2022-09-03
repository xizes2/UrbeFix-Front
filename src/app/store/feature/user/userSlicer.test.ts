import { RegisteredUser } from "../../../../interfaces/users/User";
import { loginUserActionCreator, usersReducer } from "./userSlicer";

describe("Given a userSlice reducer", () => {
  describe("When its invoked with a loginUser action and a user", () => {
    test("Then it should return the user's token", () => {
      const userInitialState = {
        id: "",
        userEmail: "",
        token: "",
      } as RegisteredUser;

      const user = {
        id: "654fd54",
        userEmail: "biro@gmail.com",
        token: "biropass",
      } as RegisteredUser;

      const action = loginUserActionCreator(user);

      const receivedValue = usersReducer(userInitialState, action);

      expect(receivedValue).toStrictEqual(user);
    });
  });
});
