import usersActionTypes from "../actions/usersActionTypes";
import usersListReducer from "./usersListReducer";

describe("Given a usersListReducer", () => {
  describe("When it receives a registerUser action", () => {
    test("Then it should return the list of users with the new user", () => {
      const users = [{ name: "a" }, { name: "b" }];
      const newUser = { name: "fig", password: "fig", username: "fig" };

      const action = {
        type: usersActionTypes.registerUser,
        user: newUser,
      };

      const newRegisteredUser = usersListReducer(users, action);

      expect(newRegisteredUser).toContain(newUser);
    });
  });
});
