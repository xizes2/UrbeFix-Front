import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const mockUser = jest.fn();

jest.mock("../../../hooks/useUsersApi", () => () => ({
  registerUser: mockUser,
}));

describe("Given a register form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title, 5 inputs and 2 buttons", () => {
      render(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const elements = [
        screen.getByText("Registro"),
        screen.getByPlaceholderText("Primer Nombre"),
        screen.getByPlaceholderText("Primer Apellido"),
        screen.getByPlaceholderText("Contraseña"),
        screen.getByRole("button", { name: "Enviar" }),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When the word 'hello' is written to the first name input field", () => {
    test("Then the value of the username input field should be 'hello'", async () => {
      const placeHolder = "Primer Nombre";
      const inputText = "hello";

      render(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const nameInput: HTMLInputElement =
        screen.getByPlaceholderText(placeHolder);

      await userEvent.type(nameInput, inputText);

      expect(nameInput).toHaveValue(inputText);
    });
  });

  describe("When a user fills the inputs and click the button", () => {
    test("Then the register function will be called", async () => {
      const buttonText = "Enviar";

      render(
        <BrowserRouter>
          <RegisterForm />
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: buttonText });
      await userEvent.click(submitButton);

      expect(mockUser).toHaveBeenCalled();
    });
  });
});
