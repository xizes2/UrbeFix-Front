import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import { deleteComplaintActionCreator } from "../../app/store/feature/complaints/complaintsSlicer";
import Wrapper from "../../utils/Wrapper";
import useComplaints from "./useComplaintsApi";

jest.mock("react-toastify");

const mockDispatch = jest.fn();

jest.mock("../../app/store/hooks", () => ({
  ...jest.requireActual("../../app/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a useComplaints hook", () => {
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
    });
  });

  describe("When invoke deleteComplaint function with a complaint id", () => {
    const {
      result: {
        current: { deleteComplaint },
      },
    } = renderHook(useComplaints, { wrapper: Wrapper });

    test("Then it should delete this complaint", async () => {
      const complaintId = "654654jhgjhg";

      await act(async () => {
        deleteComplaint(complaintId);
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          deleteComplaintActionCreator(complaintId)
        );
      });
      expect(toast.success).toHaveBeenCalledWith(
        "The complaint has been deleted!",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        }
      );
    });
  });

  describe("When invoke deleteComplaint function with an incorrect id", () => {
    const {
      result: {
        current: { deleteComplaint },
      },
    } = renderHook(useComplaints, { wrapper: Wrapper });

    test("Then it should return an error", async () => {
      // axios.defaults.headers.get["IsTestError"] = true;
      const nonExistingComplaintId = "ff0ds312uxh";

      await act(async () => {
        deleteComplaint(nonExistingComplaintId);
      });

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(
          "NoOoOoOoo! Please try again.",
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          }
        );
      });
    });
  });
});
