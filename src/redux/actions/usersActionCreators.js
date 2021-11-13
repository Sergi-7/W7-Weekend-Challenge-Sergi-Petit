import usersActionTypes from "./usersActionTypes";

export const loginUserAction = (user) => ({
  type: usersActionTypes.loginUser,
  user,
});
