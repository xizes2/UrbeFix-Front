import { render, screen } from "@testing-library/react";
import RegisterPage from "./registerPage";

describe("Given a route '/users/register'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show the registerForm", () => {
      render(<RegisterPage />);

      const registerHeading = screen.getByRole("heading", { name: "Registro" });

      expect(registerHeading).toBeInTheDocument();
    });
  });
});
