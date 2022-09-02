import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a route '/home'", () => {
  describe("When it  is accessed", () => {
    test("Then it should show an image, a title and a paragraph", () => {
      const altText = "city landscape vector";
      const titleText = "Bienvenido a UrbeFix!";
      const paragrapghText =
        "Aqui podrás hacer quejas sobre distintas infraestructuras de la ciudad ayudando a mantenerla en orden para todos.";

      render(<HomePage />);

      const image = screen.getByAltText(altText);
      const title = screen.getByText(titleText);
      const paragraph = screen.getByText(paragrapghText);

      expect(image).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
    });
  });
});
