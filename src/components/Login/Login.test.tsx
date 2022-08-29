import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Given a Login component", () => {
  describe("When instantiated", () => {
    test("Then it should render a form with 2 inputs", () => {
      render(<Login />);

      const loginForm = screen.getByRole("heading", { name: "Login" });

      expect(loginForm).toBeInTheDocument();
    });
  });
});
