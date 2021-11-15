import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/register">Register</Link>
      </nav>
    </>
  );
};

export default Nav;
