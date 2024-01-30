import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <span> </span>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact us
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
