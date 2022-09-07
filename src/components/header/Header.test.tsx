import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import Header from "./Header";

describe("Given a header component", () => {
  describe("When instantiated", () => {
    test("Then it should display urbefix logo", () => {
      const altText = "urbefix logo";

      render(
        <Wrapper>
          <Header />
        </Wrapper>
      );

      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
