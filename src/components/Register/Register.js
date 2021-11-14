import { useState } from "react";
import useUser from "../../hooks/useUser";

const Register = () => {
  const initialUser = {
    name: "",
    username: "",
    password: "",
    bio: "",
    photo: "",
  };

  const { users } = useUser();

  const [user, setUser] = useState(initialUser);
  const handleFormOnChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {};

  return (
    <form>
      <h2>Formulario de registro</h2>
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
      <label htmlFor="bio">Biography :</label>
      <input type="text" id="bio" onChange={handleFormOnChange}></input>
      <label htmlFor="photo">Photo :</label>
      <input type="text" id="photo" onChange={handleFormOnChange}></input>
    </form>
  );
};

export default Register;
