import { render, screen } from "@testing-library/react";
import Wrapper from "../../utils/Wrapper";
import Complaint from "./Complaint";

describe("Given a Complaint component", () => {
  describe("When instantiated with width equal or bigger than 601px", () => {
    test("Then it should show the complaint creation date on the component", () => {
      const complaintTest = {
        category: "fuente",
        title: "fuente rota",
        countComplaints: 1,
        image: "fuente.jpg",
        id: "654ds65s",
      };
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 700,
      });

      window.dispatchEvent(new Event("resize window"));

      render(
        <Wrapper>
          <Complaint complaint={complaintTest} />
        </Wrapper>
      );

      const textDate = screen.getByText("Fecha de creación:");

      expect(window.innerWidth).toBe(700);
      expect(textDate).toBeInTheDocument();
    });
  });
});
