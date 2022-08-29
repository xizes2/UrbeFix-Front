import { render, screen } from "@testing-library/react";
import UsersList from "./UsersList";
import * as reactRedux from "react-redux";
import { store } from "../../app/store/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <reactRedux.Provider store={store}>{children}</reactRedux.Provider>;
};

describe("Given a Register component", () => {
  describe("When instantiated", () => {
    test("Then it should render a form with 3 inputs", () => {
      render(
        <Wrapper>
          <UsersList />
        </Wrapper>
      );

      const userList = screen.getByRole("heading", { name: "Users List" });

      expect(userList).toBeInTheDocument();
    });
  });
});
