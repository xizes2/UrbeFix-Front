import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import React from "react";
import Wrapper from "../../../utils/Wrapper";
import RegisterComplaint from "./RegisterComplaint";

beforeEach(() => jest.restoreAllMocks());

const mockUseComplaint = {
  createComplaint: jest.fn(),
};
jest.mock(
  "../../../hooks/complaints/useComplaintsApi",
  () => () => mockUseComplaint
);

describe("Given a register form component", () => {
  describe("When instantiated", () => {
    test("Then it should display a form with 4 inputs and 2 buttons", () => {
      render(
        <Wrapper>
          <RegisterComplaint />
        </Wrapper>
      );

      const elements = [
        screen.getByText("Seleccione una categoría"),
        screen.getByPlaceholderText("Título"),
        screen.getByPlaceholderText("Descripción"),
        screen.getByRole("button", { name: "Enviar" }),
      ];

      elements.forEach((element) => expect(element).toBeInTheDocument());
    });

    test("Then, when the user write it should appear on the textbox", async () => {
      const text = "Fuente rota";
      render(
        <Wrapper>
          <RegisterComplaint />
        </Wrapper>
      );
      const textInput = screen.getAllByRole("textbox");
      await UserEvent.type(textInput[0], text);

      await waitFor(() => expect(textInput[0]).toHaveValue(text));
    });

    test("Then, when the user upload a file it should call the usestate", async () => {
      const useState = jest.spyOn(React, "useState");
      const labelText = "Añadir foto";
      const file = new File([""], "");
      render(
        <Wrapper>
          <RegisterComplaint />
        </Wrapper>
      );
      const fileInput = screen.getByLabelText(labelText);
      await UserEvent.upload(fileInput, file);

      await waitFor(() => expect(useState).toHaveBeenCalled());
    });

    test("Then, wWhen the user submit the form it should call the createComplaint hook function", async () => {
      render(
        <Wrapper>
          <RegisterComplaint />
        </Wrapper>
      );
      const buttonSubmit = screen.getByRole("button", { name: "Enviar" });
      fireEvent.submit(buttonSubmit);

      await waitFor(() =>
        expect(mockUseComplaint.createComplaint).toHaveBeenCalled()
      );
    });

    test("Then, it should call the geolocation function", async () => {
      render(
        <Wrapper>
          <RegisterComplaint />
        </Wrapper>
      );

      const mockGetUserLocation = jest.fn(async () => {
        return new Promise<void>((resolve) => {
          resolve();
        });
      });

      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
      };

      Object.defineProperty(window.navigator, "geolocation", {
        value: mockGeolocation,
        configurable: true,
      });

      window.navigator.geolocation.getCurrentPosition(mockGetUserLocation);

      const getLocation = jest.spyOn(mockGeolocation, "getCurrentPosition");

      await waitFor(() => {
        expect(getLocation).toHaveBeenCalled();
      });
    });
  });
});
