import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import Map from "./Map";

describe("Given a Map component", () => {
  describe("When instantiated and the location is allowed by the user", () => {
    test("Then it should display a map with the coordinates where the user is", async () => {
      render(
        <Wrapper>
          <Map lat={41} lng={2.15} />
        </Wrapper>
      );

      const map = screen.getByTitle("complaint location");

      expect(map).toBeInTheDocument();
    });
  });
});
