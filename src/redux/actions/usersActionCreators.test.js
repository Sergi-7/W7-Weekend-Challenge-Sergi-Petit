import usersActionTypes from "./usersActionTypes";
import {
  loginUserAction,
  logoutUserAction,
  registerUserAction,
} from "./usersActionCreators";

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

describe("Given a registerUserAction", () => {
  describe("When it is called", () => {
    test("Then it should return a registerUserAction with user received", () => {
      const newUser = {
        name: "isnat",
        username: "santi",
        password: "fig",
        bio: "asd",
        photo: "das",
      };
      const expectedAction = {
        type: usersActionTypes.registerUser,
        user: newUser,
      };
      const actionResult = registerUserAction(newUser);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
