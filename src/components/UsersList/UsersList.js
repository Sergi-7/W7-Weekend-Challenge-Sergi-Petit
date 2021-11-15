import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import useUsersList from "../../hooks/useUsersList";
import UserCard from "../UserCard/UserCard";

const UsersList = () => {
  const { loadUsers, usersList } = useUsersList();
  const { users } = useUser();

  useEffect(() => {
    if (!users.isAuthenticated) {
      const checkUser = localStorage.getItem("user");
      if (checkUser) {
        loadUsers();
      }
    }
  }, [users, loadUsers]);
  return (
    <ul>
      {usersList.map((user) => {
        return <UserCard key={user.id} user={user}></UserCard>;
      })}
    </ul>
  );
};

export default UsersList;
