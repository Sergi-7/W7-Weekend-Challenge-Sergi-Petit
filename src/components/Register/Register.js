import { useState } from "react";
import useUser from "../../hooks/useUser";
import useUsersList from "../../hooks/useUsersList";

const Register = () => {
  const initialUser = {
    name: "",
    username: "",
    password: "",
    bio: "",
    photo: "",
  };

  const { registerUser } = useUsersList();

  const [user, setUser] = useState(initialUser);
  const handleFormOnChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(user);
    event.preventDefault();
    registerUser(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario de registro</h2>
      <label htmlFor="name">Name :</label>
      <input
        type="text"
        id="name"
        value={user.name}
        onChange={handleFormOnChange}
      ></input>
      <label htmlFor="username">Username :</label>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={handleFormOnChange}
      ></input>
      <label htmlFor="password">Password :</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={handleFormOnChange}
      ></input>
      <label htmlFor="bio">Biography :</label>
      <input
        type="text"
        id="bio"
        value={user.bio}
        onChange={handleFormOnChange}
      ></input>
      <label htmlFor="photo">Photo :</label>
      <input
        type="text"
        id="photo"
        value={user.photo}
        onChange={handleFormOnChange}
      ></input>
      <button>Submit</button>
    </form>
  );
};

export default Register;
