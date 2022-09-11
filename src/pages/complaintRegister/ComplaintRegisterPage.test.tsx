import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import ComplaintRegisterPage from "./ComplaintRegisterPage";

describe("Given a register form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with 5 inputs and 2 buttons", () => {
      render(
        <Wrapper>
          <ComplaintRegisterPage />
        </Wrapper>
      );

      const heading = screen.getByRole("heading", { level: 1 });

      expect(heading).toBeInTheDocument();
    });
  });
});
