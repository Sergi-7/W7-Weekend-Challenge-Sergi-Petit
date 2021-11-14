import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loginUserAction,
  logoutUserAction,
} from "../actions/usersActionCreators";

const url = process.env.REACT_APP_SERVER_URL;

export const loginUserThunk = (user) => async (dispatch) => {
  const { data: token } = await axios.post(`${url}/users/login`, user);
  localStorage.setItem("user", token.token);
  const userData = jwtDecode(token.token);
  dispatch(loginUserAction(userData));
};

export const logoutUserThunk = () => {
  return (dispatch) => {
    dispatch(logoutUserAction());
  };
};
