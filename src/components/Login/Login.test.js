import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/renderWithProviders";
import Login from "./Login";

describe("Given a Login component", () => {
  describe("When it's rendered", () => {
    test("Then it should display three inputs and a button", () => {
      renderWithProviders(<Login />);

      const nameInput = screen.getByLabelText("Name :");
      const usernameInput = screen.getByLabelText("Username :");
      const passwordInput = screen.getByLabelText("Password :");
      const button = screen.getByRole("button");

      expect(nameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user types in the inputs", () => {
    test("Then it should render the inputs with the text inside", () => {
      renderWithProviders(<Login />);
      const typedWord = "fig";

      const nameInput = screen.getByLabelText("Name :");
      const usernameInput = screen.getByLabelText("Username :");
      const passwordInput = screen.getByLabelText("Password :");
      userEvent.type(nameInput, typedWord);
      userEvent.type(usernameInput, typedWord);
      userEvent.type(passwordInput, typedWord);

      expect(nameInput).toHaveValue(typedWord);
      expect(usernameInput).toHaveValue(typedWord);
      expect(passwordInput).toHaveValue(typedWord);
    });
  });
});
