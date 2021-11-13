import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/thunks/usersThunks";

const useUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store);
  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  return {
    users,
    loginUser,
  };
};

export default useUser;
