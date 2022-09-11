import { render, screen } from "@testing-library/react";
import Wrapper from "../../../utils/Wrapper";
import RegisterComplaint from "./RegisterComplaint";

const mockUser = jest.fn();

jest.mock("../../../hooks/users/useUsersApi", () => () => ({
  registerUser: mockUser,
}));

describe("Given a register form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with 5 inputs and 2 buttons", () => {
      render(
        <Wrapper>
          <RegisterComplaint />
        </Wrapper>
      );

      const elements = [
        screen.getByText("Seleccione una categoría"),
        screen.getByPlaceholderText("Título"),
        screen.getByPlaceholderText("Descripción"),
        screen.getByPlaceholderText("Ubicación"),
        screen.getByRole("button", { name: "Enviar" }),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
