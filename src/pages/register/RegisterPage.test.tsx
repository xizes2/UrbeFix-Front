import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import RegisterPage from "./RegisterPage";

describe("Given a route '/register'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show the registerForm", () => {
      render(
        <Wrapper>
          <RegisterPage />
        </Wrapper>
      );

      const registerHeading = screen.getByRole("heading", { name: "Registro" });

      expect(registerHeading).toBeInTheDocument();
    });
  });
});
