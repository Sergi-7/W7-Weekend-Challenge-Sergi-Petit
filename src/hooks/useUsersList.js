import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserThunk,
  loadUsersThunk,
} from "../redux/thunks/usersListThunks";

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

  const loadUsers = useCallback(() => {
    dispatch(loadUsersThunk());
  }, [dispatch]);
  return {
    usersList,
    registerUser,
    loadUsers,
  };
};

export default useUsersList;
