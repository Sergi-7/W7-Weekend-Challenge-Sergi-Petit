import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../redux/thunks/usersListThunks";

const useUsersList = () => {
  const usersList = useSelector(({ usersList }) => usersList);
  const dispatch = useDispatch();

  const registerUser = useCallback(
    async (user) => {
      const response = await dispatch(registerUserThunk(user));
      return response;
    },
    [dispatch]
  );

  return {
    usersList,
    registerUser,
  };
};

export default useUsersList;
