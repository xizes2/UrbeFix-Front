import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import { getAllComplaintsActionCreator } from "../../app/store/feature/complaints/complaintsSlicer";
import Wrapper from "../../utils/Wrapper";
import useComplaints from "./useComplaintsApi";

jest.mock("react-toastify");

const mockDispatch = jest.fn();

jest.mock("../../app/store/hooks", () => ({
  ...jest.requireActual("../../app/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a useComplaints hook", () => {
  const mockComplaint = {
    complaints: [
      {
        category: "fuentes",
        title: "fuente rota",
        description: "",
        countComplaints: 1,
        image: "fuente.jpg",
        creationDate: new Date(),
        id: "987654",
      },
    ],
  };

  describe("When invoke getAllComplaints function with a mockUser", () => {
    test("Then it should show a loading and", async () => {
      const {
        result: {
          current: { getAllComplaints },
        },
      } = renderHook(useComplaints, { wrapper: Wrapper });

      await act(async () => {
        await getAllComplaints();
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(toast.loading).toHaveBeenCalledWith("Give us a second...", {
          position: toast.POSITION.TOP_CENTER,
          closeButton: true,
        });
      });
    });
  });

  describe("When invoke getAllComplaints function and it not receives a mockComplaint List", () => {
    test("Then it should send an error message modal", async () => {
      axios.defaults.headers.get["IsTestError"] = true;

      const {
        result: {
          current: { getAllComplaints },
        },
      } = renderHook(useComplaints, { wrapper: Wrapper });

      await getAllComplaints();

      expect(toast.error).toHaveBeenCalledWith("NoOoOoOoo! Please try again.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });

      delete axios.defaults.headers.get["IsTestError"];
    });
  });
});
