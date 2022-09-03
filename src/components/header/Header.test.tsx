import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When instantiated", () => {
    test("Then it should display urbefix logo", () => {
      const altText = "urbefix logo";

      render(<Header />);

      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
