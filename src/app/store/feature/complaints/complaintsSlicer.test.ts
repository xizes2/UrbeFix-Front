import { IRegisteredComplaint } from "../../../../interfaces/complaints/Complaints";
import {
  complaintsReducer,
  createComplaintActionCreator,
  deleteComplaintActionCreator,
  getAllComplaintsActionCreator,
} from "./complaintsSlicer";

describe("Given a complaintSlice reducer", () => {
  describe("When its invoked with a getAllComplaints action", () => {
    test("Then it should return the complaints array", () => {
      const complaintsList: IRegisteredComplaint[] = [
        {
          category: "Contenedores de Resíduos",
          countComplaints: 1,
          creationDate: new Date(),
          description: "contenedor lleno",
          image:
            "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
          title: "Contenedor lleno",
          id: "631ce2cdf35c0700d659456c",
        },
      ];

      const action = getAllComplaintsActionCreator(complaintsList);

      const expectedValue = complaintsReducer([], action);

      expect(expectedValue).toStrictEqual(complaintsList);
    });
  });

  describe("When its invoked with a deleteComplaint action with an id", () => {
    test("Then it should return an array with all complaints minus the deleted one", () => {
      const complaintsList: IRegisteredComplaint[] = [
        {
          category: "Contenedores de Resíduos",
          countComplaints: 1,
          creationDate: new Date(),
          description: "contenedor lleno",
          image:
            "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
          title: "Contenedor lleno",
          id: "631ce2cdf35c0700d659456c",
        },
      ];

      const complaintIdToBeDeleted = "631ce2cdf35c0700d659456c";

      const action = deleteComplaintActionCreator(complaintIdToBeDeleted);

      const expectedValue = complaintsReducer(complaintsList, action);

      expect(expectedValue).toStrictEqual([]);
    });
  });

  describe("When its invoked with a createComplaint action with a complaint object", () => {
    test("Then it should return the complaint created", () => {
      const complaint: IRegisteredComplaint = {
        category: "Contenedores de Resíduos",
        countComplaints: 1,
        creationDate: new Date(),
        description: "contenedor lleno",
        image:
          "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
        title: "Contenedor lleno",
        id: "631ce2cdf35c0700d659456c",
      };

      const action = createComplaintActionCreator(complaint);

      const expectedValue = complaintsReducer([], action);

      expect(expectedValue).toStrictEqual([complaint]);
    });
  });
});
