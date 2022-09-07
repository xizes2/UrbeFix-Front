import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { useAppDispatch } from "./app/store/hooks";
import { store } from "./app/store/store";

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
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
