import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given a route '/users/register'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show the registerForm", () => {
      render(<NotFoundPage />);

      const notFoundMessage = screen.getByText("Not Found Page");

      expect(notFoundMessage).toBeInTheDocument();
    });
  });
});
