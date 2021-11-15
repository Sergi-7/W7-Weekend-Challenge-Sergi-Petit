import usersActionTypes from "../actions/usersActionTypes";

const usersListReducer = (users = [], action) => {
  let newUsersList;
  switch (action.type) {
    case usersActionTypes.registerUser:
      newUsersList = [...users, action.user];
      break;
    case usersActionTypes.loadUsers:
      newUsersList = [...action.users];
      break;
    default:
      return users;
  }
  return newUsersList;
};

export default usersListReducer;
