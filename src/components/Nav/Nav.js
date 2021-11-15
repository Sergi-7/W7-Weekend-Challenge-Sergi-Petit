import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/">Homepage</Link>
      </nav>
    </>
  );
};

export default Nav;
