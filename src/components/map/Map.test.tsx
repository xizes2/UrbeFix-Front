import { act, render, waitFor } from "@testing-library/react";
import React, { Dispatch } from "react";
import Wrapper from "../../utils/Wrapper";
import Map from "./Map";

const mockCallback = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useCallback: () => mockCallback,
}));

describe("Given a Map component", () => {
  describe("When instantiated and the location is allowed by the user", () => {
    test("Then it should display a map with the coordinates where the user is", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      Object.defineProperty(window.navigator, "geolocation", {
        value: mockGeolocation,
        configurable: true,
      });

      render(
        <Wrapper>
          <Map />
        </Wrapper>
      );

      const setStateMock = jest.fn();
      const useStateMock: any = (useState: any) => [useState, setStateMock];

      const spyUseState = jest
        .spyOn(React, "useState")
        .mockImplementation(useStateMock);

      const spyGetLocation = jest.spyOn(mockGeolocation, "getCurrentPosition");

      await act(() => {
        window.navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            setStateMock(position.coords.latitude);
            setStateMock(position.coords.longitude);
          }
        );
      });

      expect(mockCallback).toHaveBeenCalled();
      expect(spyGetLocation).toHaveBeenCalled();
    });
  });
});
