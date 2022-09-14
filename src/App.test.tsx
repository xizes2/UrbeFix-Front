import { render } from "@testing-library/react";
import App from "./App";
import Wrapper from "./utils/Wrapper";

const mockDispatch = jest.fn();

jest.mock("./app/store/hooks", () => ({
  ...jest.requireActual("./app/store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a App component", () => {
  describe("When it's instantiated", () => {
    test("Then it set the token to localStorage", () => {
      const mockToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

      window.localStorage.setItem("token", mockToken);

      render(
        <Wrapper>
          <App />
        </Wrapper>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
