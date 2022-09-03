import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import LoginPage from "./LoginPage";

describe("Given a route '/login'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show the login form", () => {
      render(
        <Wrapper>
          <LoginPage />
        </Wrapper>
      );

      const loginHeading = screen.getByRole("heading", { name: "Login" });

      expect(loginHeading).toBeInTheDocument();
    });
  });
});
