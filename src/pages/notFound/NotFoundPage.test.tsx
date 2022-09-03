import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("Given a route '/users/register'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show the registerForm", () => {
      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const notFoundMessage = screen.getByText("NoOOoOoOOooOo!");

      expect(notFoundMessage).toBeInTheDocument();
    });
  });
});
