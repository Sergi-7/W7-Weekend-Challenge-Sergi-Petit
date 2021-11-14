import usersActionTypes from "../actions/usersActionTypes";

const usersReducer = (action, user = { isAuthenticated: false, user: {} }) => {
  let newUser;
  switch (action.type) {
    case usersActionTypes.loginUser:
      newUser = {
        isAuthenticated: true,
        user: action.user,
      };

      break;
    case usersActionTypes.logoutUser:
      newUser = {
        isAuthenticated: false,
        user: {},
      };
      break;
    default:
      newUser = user;
  }
  return newUser;
};

export default usersReducer;
