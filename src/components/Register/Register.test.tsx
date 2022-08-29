import { render, screen } from "@testing-library/react";
import Register from "./Register";

describe("Given a Register component", () => {
  describe("When instantiated", () => {
    test("Then it should render a form with 3 inputs", () => {
      render(<Register />);

      const registerForm = screen.getByRole("heading", { name: "Register" });

      expect(registerForm).toBeInTheDocument();
    });
  });
});
