import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import NotFoundPage from "./NotFoundPage";

describe("Given a route '/users/register'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show the registerForm", () => {
      render(
        <Wrapper>
          <NotFoundPage />
        </Wrapper>
      );

      const notFoundMessage = screen.getByText("NoOOoOoOOooOo!");

      expect(notFoundMessage).toBeInTheDocument();
    });
  });
});
