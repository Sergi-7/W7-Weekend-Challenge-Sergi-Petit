import { useState } from "react";
import useUser from "../../hooks/useUser";

const Login = () => {
  const initialUser = {
    name: "",
    username: "",
    password: "",
  };

  const { loginUser } = useUser();
  const [user, setUser] = useState(initialUser);
  const handleFormOnChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">Name :</label>
      <input type="text" id="Name" onChange={handleFormOnChange}></input>
      <label htmlFor="username">Username :</label>
      <input type="text" id="username" onChange={handleFormOnChange}></input>
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        onChange={handleFormOnChange}
      ></input>
      <button>Login</button>
    </form>
  );
};

export default Login;
