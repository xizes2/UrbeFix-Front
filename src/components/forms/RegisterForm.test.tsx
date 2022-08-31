import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a register form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, 5 inputs and 2 buttons", () => {
      render(<RegisterForm />);

      const elements = [
        screen.getByText("Registro"),
        screen.getByPlaceholderText("Primer Nombre"),
        screen.getByPlaceholderText("Último Nombre"),
        screen.getByPlaceholderText("Contraseña"),
        screen.getByPlaceholderText("Confirmar Contraseña"),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });
});
