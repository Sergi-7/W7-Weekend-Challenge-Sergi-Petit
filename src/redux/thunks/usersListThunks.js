import axios from "axios";
import { registerUserAction } from "../actions/usersActionCreators";

const url = process.env.REACT_APP_SERVER_URL;

// process.env.REACT_APP_SERVER_URL;

export const registerUserThunk = (user) => async (dispatch) => {
  const newUser = await axios.post(`${url}users/register`, user);
  dispatch(registerUserAction(newUser));
};
