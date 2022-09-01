import { UnregisteredUser } from "../../../../interfaces/users/User";
import { createUserActionCreator, usersReducer } from "./userSlicer";

describe("Given a userSlice reducer", () => {
  describe("When its invoked with a createUser action and a user", () => {
    test("Then it should return the same user", () => {
      const user = {
        firstName: "Biro",
        firstSurname: "Lorin",
        userEmail: "biro.jpg",
        password: "biropass",
      } as UnregisteredUser;

      const action = createUserActionCreator(user);

      const initialValue = {
        firstName: "",
        firstSurname: "",
        userEmail: "",
        password: "",
      };

      const receivedValue = usersReducer(initialValue, action);

      expect(receivedValue).toEqual(user);
    });
  });
});
