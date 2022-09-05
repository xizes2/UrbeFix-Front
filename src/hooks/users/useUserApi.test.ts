import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { ILoginData, IUnregisteredUser } from "../../interfaces/users/User";
import Wrapper from "../../utils/Wrapper";
import useUser from "./useUsersApi";

jest.mock("react-toastify");

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should show a loading", async () => {
      const mockUser: IUnregisteredUser = {
        firstName: "Adam",
        firstSurname: "Super",
        userEmail: "adam@gmail.com",
        password: "adampass",
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      await registerUser(mockUser);

      expect(toast.loading).toHaveBeenCalledWith("Give us a second...", {
        position: toast.POSITION.TOP_CENTER,
        closeButton: true,
      });
    });
  });

  test("Then it should post a new user", async () => {
    const mockUser: IUnregisteredUser = {
      firstName: "Adam",
      firstSurname: "Super",
      userEmail: "adam@gmail.com",
      password: "adampass",
    };

    const {
      result: {
        current: { registerUser },
      },
    } = renderHook(useUser, { wrapper: Wrapper });
    await registerUser(mockUser);

    expect(toast.success).toHaveBeenCalledWith("Registered with success!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  });

  describe("When invoke register function with a mockUser without required properties", () => {
    test("Then it should send a modal error", async () => {
      const mockUser2: IUnregisteredUser = {
        firstName: "Adam",
        firstSurname: "Super",
        userEmail: "adam@gmail.com",
        password: "",
      };

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });
      await registerUser(mockUser2);

      expect(toast.error).toHaveBeenCalledWith(
        "NoOoOoOoo! Email already exists.",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        }
      );
    });
  });

  describe("When invoke login function with a mockUser", () => {
    test("Then it should show a loading", async () => {
      const mockUser: ILoginData = {
        userEmail: "adam@gmail.com",
        password: "adampass",
      };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      await loginUser(mockUser);

      expect(toast.loading).toHaveBeenCalledWith("Give us a second...", {
        position: toast.POSITION.TOP_CENTER,
        closeButton: true,
      });
    });

    test("Then it should show a success toaster", async () => {
      const mockUser: ILoginData = {
        userEmail: "adam@gmail.com",
        password: "adampass",
      };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      await loginUser(mockUser);

      expect(toast.success).toHaveBeenCalledWith("Logged with success!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    });

    test("Then it should show an error toaster", async () => {
      const mockUser: ILoginData = {
        userEmail: "adam@gmail.com",
        password: "",
      };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });
      await loginUser(mockUser);

      expect(toast.error).toHaveBeenCalledWith("User or password not valid.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    });
  });
});
