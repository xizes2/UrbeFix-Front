import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import ComplaintsPage from "./ComplaintsPage";

describe("Given a route '/complaints'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show the complaints", () => {
      const buttonText = "Categoría";
      const createComplaintText = "Crear Queja";

      render(
        <Wrapper>
          <ComplaintsPage />
        </Wrapper>
      );

      const categoryButton = screen.getByText(buttonText);
      const createComplaintButton = screen.getByText(createComplaintText);

      expect(categoryButton).toBeInTheDocument();
      expect(createComplaintButton).toBeInTheDocument();
    });
  });
});
