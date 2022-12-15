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
  const page = 1;

  describe("When invoke getAllComplaints function", () => {
    test("Then it should show a loading modal", async () => {
      const {
        result: {
          current: { getAllComplaints },
        },
      } = renderHook(useComplaints, { wrapper: Wrapper });

      await act(async () => {
        await getAllComplaints(page);
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalled();
      });

      await waitFor(() => {
        expect(toast.loading).toHaveBeenCalledWith("Give us a second...", {
          position: toast.POSITION.TOP_CENTER,
          closeButton: true,
          toastId: "loading modal",
        });
      });
    });
  });

  describe("When invoke getAllComplaints function without a token", () => {
    test("Then it should send an error message modal", async () => {
      axios.defaults.headers.get["IsTestError"] = true;

      const {
        result: {
          current: { getAllComplaints },
        },
      } = renderHook(useComplaints, { wrapper: Wrapper });

      await getAllComplaints(page);

      expect(toast.error).toHaveBeenCalledWith("NoOoOoOoo! Please try again.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      delete axios.defaults.headers.get["IsTestError"];
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

  describe("When invoke getComplaint function with an id", () => {
    test("Then it should return the complaint", async () => {
      const mockComplaint = {
        category: "Contenedores de Resíduos",
        countComplaints: "1",
        creationDate: "2022-09-06T11:13:00.000Z",
        description: "contenedor lleno",
        image:
          "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
        title: "Contenedor lleno",
        id: "654654jhgjhg",
        owner: "631254c916f7acfa6537dad0",
      };

      const {
        result: {
          current: { getComplaint },
        },
      } = renderHook(useComplaints, { wrapper: Wrapper });

      const complaintexpected = await getComplaint(mockComplaint.id);

      await expect(complaintexpected).toStrictEqual(mockComplaint);
    });
  });

  describe("When invoke getComplaint function without an id", () => {
    test("Then it should show an error modal", async () => {
      const mockComplaint = {
        category: "Contenedores de Resíduos",
        countComplaints: "1",
        creationDate: "2022-09-06T11:13:00.000Z",
        description: "contenedor lleno",
        image:
          "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
        title: "Contenedor lleno",
        id: "",
      };

      const {
        result: {
          current: { getComplaint },
        },
      } = renderHook(useComplaints, { wrapper: Wrapper });

      await getComplaint(mockComplaint.id);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(
          "Cannot show complaint's details",
          {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          }
        );
      });
    });
  });

  describe("When invoke createComplaint function with a new complaint", () => {
    test("Then it should call the succes modal", async () => {
      const mockFormData = new FormData();

      const mockComplaint = {
        category: "Plaga en via pública",
        title: "ratas en el jardin",
        description:
          "Especialmente por la noche se ve muchas ratas paseando por el jardin",
        countComplaints: 1,
        image:
          "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2022/07/28/62e2d7628699e.jpeg",
        location: [41, 2.15],
      };

      mockFormData.append(
        "newComplaint",
        JSON.stringify({
          category: mockComplaint.category,
          title: mockComplaint.title,
          description: mockComplaint.description,
          countComplaints: mockComplaint.countComplaints,
          location: mockComplaint.location,
        })
      );
      mockFormData.append("image", "file.jpg");

      const {
        result: {
          current: { createComplaint },
        },
      } = renderHook(useComplaints, { wrapper: Wrapper });

      await createComplaint(mockFormData);

      expect(toast.success).toHaveBeenCalledWith(
        "Your complaint has been correctly registered!",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        }
      );
    });
  });

  describe("When invoke createComplaint function with a new complaint with wrong data", () => {
    test("Then it should call the error modal", async () => {
      const {
        result: {
          current: { createComplaint },
        },
      } = renderHook(useComplaints, { wrapper: Wrapper });

      const mockFormData = new FormData();
      axios.defaults.headers.post["IsTestError"] = true;

      const mockComplaint = {
        category: "Plaga en via pública",
        title: "ratas en el jardin",
        description:
          "Especialmente por la noche se ve muchas ratas paseando por el jardin",
        countComplaints: 1,
        image:
          "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2022/07/28/62e2d7628699e.jpeg",
        location: [41, 2.15],
      };

      mockFormData.append(
        "newComplaint",
        JSON.stringify({
          category: mockComplaint.category,
          title: mockComplaint.title,
          description: mockComplaint.description,
          countComplaints: mockComplaint.countComplaints,
          location: [41, 2.15],
        })
      );

      await createComplaint(mockFormData);

      expect(toast.error).toHaveBeenCalledWith(
        "Couldn't create the complaint.",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        }
      );
    });
  });
});
