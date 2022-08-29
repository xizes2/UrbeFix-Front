import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("Given a Register component", () => {
  describe("When instantiated", () => {
    test("Then it should render a form with 3 inputs", () => {
      const testUser = {
        id: "",
        userName: "",
        image: "",
        userEmail: "",
        token: "",
      };

      render(<UserCard user={testUser} />);

      const userCard = screen.getByRole("heading", { name: testUser.userName });

      expect(userCard).toBeInTheDocument();
    });
  });
});
