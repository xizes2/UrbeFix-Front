import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import Complaint from "./Complaint";
import userEvent from "@testing-library/user-event";

const userId = "631254c916f7acfa6537dad0";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => userId,
}));

let mockDeleteComplaint = { deleteComplaint: jest.fn() };
jest.mock(
  "../../hooks/complaints/useComplaintsApi",
  () => () => mockDeleteComplaint
);

const mockComplaint = {
  category: "Contenedores de Resíduos",
  countComplaints: 1,
  description: "contenedor lleno",
  image: "",
  imageBackUp:
    "https://thumbs.dreamstime.com/z/contenedor-lleno-dos-y-muchos-bolsos-de-basura-en-la-calle-ciudad-monta%C3%B1a-146937943.jpg",
  title: "Contenedor lleno",
  id: "",
  address: "Barcelona",
  owner: "631254c916f7acfa6537dad0",
};

describe("Given a Complaint component", () => {
  describe("When instantiated with width equal or bigger than 601px", () => {
    test("Then it should show the complaint creation date on the component", () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 700,
      });

      window.dispatchEvent(new Event("resize window"));

      render(
        <Wrapper>
          <Complaint complaint={mockComplaint} />
        </Wrapper>
      );

      const textDate = screen.getByText("Fecha de creación:");

      expect(window.innerWidth).toBe(700);
      expect(textDate).toBeInTheDocument();
    });
  });

  describe("When click on delete button", () => {
    test("Then it should call the delete function", async () => {
      render(
        <Wrapper>
          <Complaint complaint={mockComplaint} />
        </Wrapper>
      );

      const deleteButton = screen.getByLabelText("delete-complaint-button");

      await userEvent.click(deleteButton);

      expect(deleteButton).toBeInTheDocument();
      await expect(mockDeleteComplaint.deleteComplaint).toHaveBeenCalled();
    });
  });
});
