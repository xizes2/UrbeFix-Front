import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a register form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, 5 inputs and 2 buttons", () => {
      render(<RegisterForm />);

      const elements = [
        screen.getByText("Registro"),
        screen.getByPlaceholderText("Primer Nombre"),
        screen.getByPlaceholderText("Primer Apellido"),
        screen.getByPlaceholderText("Contraseña"),
        screen.getByPlaceholderText("Confirmar Contraseña"),
        screen.getByRole("button", { name: "Enviar" }),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When the button 'Enviar' is pressed", () => {
    test("Then the method onSubmit should be called", async () => {
      const handleSubmit = jest.fn();

      render(<RegisterForm />);

      fireEvent.click(screen.getByRole("button", { name: "Enviar" }));

      await waitFor(() => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
