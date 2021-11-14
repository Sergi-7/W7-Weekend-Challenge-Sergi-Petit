import usersActionTypes from "./usersActionTypes";
import { loginUserAction, logoutUserAction } from "./usersActionCreators";

describe("Given a loginUserAction", () => {
  describe("When it receives a user", () => {
    test("Then it should return a loginUserAction with the user received", () => {
      const user = {
        username: "isnat",
        password: "santi",
      };

      const expectedAction = {
        type: usersActionTypes.loginUser,
        user: user,
      };

      const actionResult = loginUserAction(user);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a logoutUserAction", () => {
  describe("When it is called", () => {
    test("Then it should return a logoutUserAction", () => {
      const expectedAction = {
        type: usersActionTypes.logoutUser,
      };

      const actionResult = logoutUserAction();

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
