import usersActionTypes from "./usersActionTypes";

export const loginUserAction = (user) => ({
  type: usersActionTypes.loginUser,
  user,
});

export const logoutUserAction = () => ({
  type: usersActionTypes.logoutUser,
});

export const registerUserAction = (user) => ({
  type: usersActionTypes.registerUser,
  user,
});
