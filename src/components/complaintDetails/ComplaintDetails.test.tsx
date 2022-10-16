import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import ComplaintDetails from "./ComplaintDetails";

describe("Given a ComplaintDetails component", () => {
  describe("When instantiated", () => {
    test("Then it should show the complaints details", () => {
      const mockComplaint = {
        category: "",
        title: "",
        countComplaints: 0,
        image: "",
        id: "",
        imageBackUp: "",
        address: "",
        location: [41.39, 2.15],
      };

      render(
        <Wrapper>
          <ComplaintDetails complaint={mockComplaint} />
        </Wrapper>
      );

      const textCategory = screen.getByText("Categoría:");
      const textAddress = screen.getByText("Ubicación:");
      const textDate = screen.getByText("Fecha:");
      const textDescription = screen.getByText("Descripción:");

      expect(textCategory).toBeInTheDocument();
      expect(textAddress).toBeInTheDocument();
      expect(textDate).toBeInTheDocument();
      expect(textDescription).toBeInTheDocument();
    });
  });
});
