import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import ComplaintsPage from "./ComplaintsPage";

describe("Given a route '/complaints'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show the complaints", () => {
      const createComplaintText = "Crear Queja";

      render(
        <Wrapper>
          <ComplaintsPage />
        </Wrapper>
      );

      const createComplaintButton = screen.getByText(createComplaintText);

      expect(createComplaintButton).toBeInTheDocument();
    });
  });
});
