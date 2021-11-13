import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "../redux/thunks/usersThunks";

const useUser = () => {
  const dispatch = useDispatch();

  const loginUser = useCallback(
    (user) => {
      dispatch(loginUserThunk(user));
    },
    [dispatch]
  );

  return {
    loginUser,
  };
};

export default useUser;
