import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import { logoutUserActionCreator } from "../../app/store/feature/user/userSlicer";
import { ILoginData, IUnregisteredUser } from "../../interfaces/users/User";
import Wrapper from "../../utils/Wrapper";
import useUser from "./useUsersApi";

jest.mock("react-toastify");

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

const mockUseDispatch = jest.fn();

jest.mock("../../app/store/hooks", () => ({
  ...jest.requireActual("../../app/store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a useUser hook", () => {
  describe("When invoke register function with a mockUser", () => {
    test("Then it should redirect to the list page", async () => {
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

      await waitFor(() => {
        registerUser(mockUser);
      });

      await waitFor(() => {
        expect(mockUseNavigate).toHaveBeenCalledWith("/complaints");
      });
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
        "NoOoOoOoo! Hubo un error. Por favor, intente otra vez",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        }
      );
    });
  });

  describe("When invoke loginUser function with a mockUser", () => {
    test("Then it should dispatch the login action", async () => {
      const mockUser3 = {
        userEmail: "mizuki@gmaimizukil.com",
        password: "mizuki",
      };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      const expectedUser = {
        payload: {
          id: "63164c769464004cf78cfab2",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTY0Yzc2OTQ2NDAwNGNmNzhjZmFiMiIsInVzZXJFbWFpbCI6Im1penVraUBnbWFpbWl6dWtpbC5jb20iLCJpYXQiOjE2NjI0ODk3Mjd9.Z_cDzD8Xh4zSfooYAHtmx0vEIrwfFtDfTMs-ZqiRYJU",
          userEmail: "mizuki@gmaimizukil.com",
        },
        type: "users/loginUser",
      };

      await act(async () => {
        await loginUser(mockUser3);
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(expectedUser);
      });
    });

    describe("When invoke login function with the wrong data", () => {
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

        expect(toast.error).toHaveBeenCalledWith(
          "NoOoOoOoo! Hubo un error. Por favor, intente otra vez",
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          }
        );
      });
    });
  });

  describe("When invoke logoutUser function", () => {
    test("Then it should dispatch the logout action creator", async () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(useUser, { wrapper: Wrapper });

      act(() => {
        logoutUser();
      });

      expect(mockUseDispatch).toHaveBeenCalledWith(logoutUserActionCreator());
    });
  });
});
