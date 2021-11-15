import axios from "axios";
import {
  loadUsersAction,
  registerUserAction,
} from "../actions/usersActionCreators";

const url = process.env.REACT_APP_SERVER_URL;

// process.env.REACT_APP_SERVER_URL;

export const registerUserThunk = (user) => async (dispatch) => {
  const newUser = await axios.post(`${url}users/register`, user);
  dispatch(registerUserAction(newUser));
};

export const loadUsersThunk = () => async (dispatch) => {
  const token = localStorage.getItem("user");
  const usersList = await axios.get(`${url}socials/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { data: usersArray } = usersList;
  dispatch(loadUsersAction(usersArray));
};
