import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUserThunk, logoutUserThunk } from "../redux/thunks/usersThunks";

const useUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store);
  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  const logoutUser = useCallback(() => {
    localStorage.removeItem("user");
    dispatch(logoutUserThunk());
  }, [dispatch]);

  return {
    users,
    loginUser,
    logoutUser,
  };
};

export default useUser;
