import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginUserAction } from "../actions/usersActionCreators";

const url = "http://localhost:3050/users/login";

export const loginUserThunk = (user) => async (dispatch) => {
  const { data: token } = await axios.post(url, user);
  localStorage.setItem("user", token.token);
  const userData = jwtDecode(token.token);
  dispatch(loginUserAction(userData));
};
