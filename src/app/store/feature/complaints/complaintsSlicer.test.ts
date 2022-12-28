import { IRegisteredComplaint } from "../../../../interfaces/complaints/Complaints";
import {
  complaintsReducer,
  createComplaintActionCreator,
  deleteComplaintActionCreator,
  getAllComplaintsActionCreator,
  IComplaintsExtended,
} from "./complaintsSlicer";

describe("Given a complaintSlice reducer", () => {
  describe("When its invoked with a getAllComplaints action", () => {
    test("Then it should return the complaints array", () => {
      const complaintsList: IComplaintsExtended = {
        complaints: [
          {
            category: "Contenedores de Resíduos",
            countComplaints: 1,
            creationDate: new Date(),
            description: "contenedor lleno",
            image:
              "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
            title: "Contenedor lleno",
            id: "631ce2cdf35c0700d659456c",
            imageBackUp:
              "https://gddtzsfibvhkrjzrphxo.supabase.co/storage/v1/object/public/urbefix/1663067160059ocio.jpg",
            address: "Barcelona",
            owner: "631254c916f7acfa6537dad0",
          },
        ],
        currentPage: 1,
        totalPages: 5,
      };

      const action = getAllComplaintsActionCreator(complaintsList);

      const expectedValue = complaintsReducer(
        { complaints: [], currentPage: 1, totalPages: 5 },
        action
      );

      expect(expectedValue).toStrictEqual(complaintsList);
    });
  });

  describe("When its invoked with a deleteComplaint action with an id", () => {
    test("Then it should return an array with all complaints minus the deleted one", () => {
      const complaintsList: IComplaintsExtended = {
        complaints: [
          {
            category: "Contenedores de Resíduos",
            countComplaints: 1,
            creationDate: new Date(),
            description: "contenedor lleno",
            image:
              "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
            title: "Contenedor lleno",
            id: "631ce2cdf35c0700d659456c",
            imageBackUp:
              "https://gddtzsfibvhkrjzrphxo.supabase.co/storage/v1/object/public/urbefix/1663067160059ocio.jpg",
            address: "Barcelona",
            owner: "631254c916f7acfa6537dad0",
          },
        ],
        currentPage: 1,
        totalPages: 5,
      };

      const action = deleteComplaintActionCreator(
        complaintsList.complaints[0].id
      );

      const expectedValue = complaintsReducer(complaintsList, action);

      expect(expectedValue).toStrictEqual(complaintsList);
    });
  });

  describe("When its invoked with a createComplaint action with a complaint object", () => {
    test("Then it should return the complaint created", () => {
      const complaintsList: IComplaintsExtended = {
        complaints: [
          {
            category: "Contenedores de Resíduos",
            countComplaints: 1,
            creationDate: new Date(),
            description: "contenedor lleno",
            image:
              "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
            title: "Contenedor lleno",
            id: "631ce2cdf35c0700d659456c",
            imageBackUp:
              "https://gddtzsfibvhkrjzrphxo.supabase.co/storage/v1/object/public/urbefix/1663067160059ocio.jpg",
            address: "Barcelona",
            owner: "631254c916f7acfa6537dad0",
          },
        ],
        currentPage: 1,
        totalPages: 5,
      };
      const complaint: IRegisteredComplaint = {
        category: "Contenedores de Resíduos",
        countComplaints: 1,
        creationDate: new Date(),
        description: "contenedor lleno",
        image:
          "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
        title: "Contenedor lleno",
        id: "631ce2cdf35c0700d659456c",
        imageBackUp:
          "https://gddtzsfibvhkrjzrphxo.supabase.co/storage/v1/object/public/urbefix/1663067160059ocio.jpg",
        address: "Barcelona",
        owner: "631254c916f7acfa6537dad0",
      };

      const action = createComplaintActionCreator(complaintsList.complaints[0]);

      const expectedValue = complaintsReducer(complaintsList, action);

      expect(expectedValue.complaints[0]).toStrictEqual(complaint);
    });
  });
});
