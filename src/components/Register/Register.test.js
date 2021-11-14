import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/renderWithProviders";
import Register from "./Register";

describe("Given a Register component", () => {
  describe("When it's rendered", () => {
    test("Then it should display five inputs and a button", () => {
      renderWithProviders(<Register />);

      const name = screen.getByLabelText("Name :");
      const username = screen.getByLabelText("Username :");
      const password = screen.getByLabelText("Password :");
      const bio = screen.getByLabelText("Biography :");
      const photo = screen.getByLabelText("Photo :");

      expect(name).toBeInTheDocument();
      expect(username).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(bio).toBeInTheDocument();
      expect(photo).toBeInTheDocument();
    });
  });
  describe("When the user tyes in the inputs", () => {
    test("Then it should render the inputs with the text inside", () => {
      renderWithProviders(<Register />);

      const typedWord = "figui";

      const name = screen.getByLabelText("Name :");
      const username = screen.getByLabelText("Username :");
      const password = screen.getByLabelText("Password :");
      const bio = screen.getByLabelText("Biography :");
      const photo = screen.getByLabelText("Photo :");

      userEvent.type(name, typedWord);
      userEvent.type(username, typedWord);
      userEvent.type(password, typedWord);
      userEvent.type(bio, typedWord);
      userEvent.type(photo, typedWord);

      expect(name).toHaveValue(typedWord);
      expect(username).toHaveValue(typedWord);
      expect(password).toHaveValue(typedWord);
      expect(bio).toHaveValue(typedWord);
      expect(photo).toHaveValue(typedWord);
    });
  });
});
