import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Wrapper from "../../../utils/Wrapper";
import LoginForm from "./LoginForm";

const mockUser = jest.fn();

jest.mock("../../hooks/users/useUsersApi", () => () => ({
  loginUser: mockUser,
}));

describe("Given a login form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with a title 2 inputs and 2 buttons", () => {
      render(
        <Wrapper>
          <LoginForm />
        </Wrapper>
      );

      const elements = [
        screen.getByText("Login"),
        screen.getByPlaceholderText("Email"),
        screen.getByPlaceholderText("Contraseña"),
        screen.getByRole("button", { name: "Enviar" }),
        screen.getByRole("button", { name: "Volver" }),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When the word 'hello' is written to the first name input field", () => {
    test("Then the value of the username input field should be 'hello'", async () => {
      const placeHolder = "Email";
      const inputText = "hello@hello.com";

      render(
        <BrowserRouter>
          <LoginForm />
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
          <LoginForm />
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: buttonText });
      await userEvent.click(submitButton);

      expect(mockUser).toHaveBeenCalled();
    });
  });
});
