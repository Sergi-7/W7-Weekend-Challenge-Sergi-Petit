import { useState } from "react";

const Login = () => {
  const initialUser = {
    name: "",
    username: "",
    password: "",
  };

  const [user, setUser] = useState();
  const handleFormOnChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
