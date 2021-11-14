import { useState } from "react";
import useUser from "../../hooks/useUser";

const Login = () => {
  const initialUser = {
    name: "",
    username: "",
    password: "",
  };

  const { loginUser, logoutUser, users } = useUser();

  const [user, setUser] = useState(initialUser);
  const handleFormOnChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    if (users.isAuthenticated) {
      event.preventDefault();
      logoutUser();
    } else {
      event.preventDefault();
      loginUser(user);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name :</label>
      <input type="text" id="name" onChange={handleFormOnChange}></input>
      <label htmlFor="username">Username :</label>
      <input type="text" id="username" onChange={handleFormOnChange}></input>
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        onChange={handleFormOnChange}
      ></input>
      {users.isAuthenticated ? <button>Logout</button> : <button>Login</button>}
    </form>
  );
};

export default Login;
