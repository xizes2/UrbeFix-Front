import { toast } from "react-toastify";
import { UnregisteredUser } from "../interfaces/users/User";
import useUser from "./useUsersApi";

jest.mock("react-toastify");

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should show a loading", async () => {
      const mockUser: UnregisteredUser = {
        firstName: "Adam",
        firstSurname: "Super",
        userEmail: "adam@gmail.com",
        password: "adampass",
      };

      const { registerUser } = useUser();
      await registerUser(mockUser);

      expect(toast.loading).toHaveBeenCalledWith("Give us a second...", {
        position: toast.POSITION.TOP_CENTER,
      });
    });

    test("Then it should post a new user", async () => {
      const mockUser: UnregisteredUser = {
        firstName: "Adam",
        firstSurname: "Super",
        userEmail: "adam@gmail.com",
        password: "adampass",
      };

      const { registerUser } = useUser();
      await registerUser(mockUser);

      expect(toast.success).toHaveBeenCalledWith("Registered with success!", {
        position: toast.POSITION.TOP_CENTER,
      });
    });

    describe("When invoke register function with a mockUser without required properties", () => {
      test("Then it should send a modal error", async () => {
        const mockUser2: UnregisteredUser = {
          firstName: "Adam",
          firstSurname: "Super",
          userEmail: "adam@gmail.com",
          password: "",
        };

        const { registerUser } = useUser();
        await registerUser(mockUser2);

        expect(toast.error).toHaveBeenCalledWith(
          "NoOoOoOoo! Please try again.",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );
      });
    });
  });
});
