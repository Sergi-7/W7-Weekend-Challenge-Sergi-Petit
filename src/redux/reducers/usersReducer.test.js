import usersActionTypes from "../actions/usersActionTypes";
import usersReducer from "./usersReducer";

describe("Given a usersReducer", () => {
  describe("When it receives a loginUser action", () => {
    test("Then it should return the user received with a property isAuthenticated true", () => {
      const initialUser = {};
      const newUser = {
        username: "isnat",
        password: "santi",
      };

      const action = {
        type: usersActionTypes.loginUser,
        user: newUser,
      };

      const newLoggedUser = usersReducer(initialUser, action);

      expect(newLoggedUser).toHaveProperty("isAuthenticated", true);
    });
  });
  describe("When it receives a logoutUser function", () => {
    test("Then it should return a user with a property isAuthenticated false", () => {
      const user = {
        username: "isnat",
        password: "santi",
      };

      const action = {
        type: usersActionTypes.logoutUser,
      };

      const newUser = usersReducer(user, action);

      expect(newUser).toHaveProperty("isAuthenticated", false);
    });
  });
});
