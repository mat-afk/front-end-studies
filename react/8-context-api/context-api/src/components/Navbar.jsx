import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <span> </span>
        <NavLink to="/contact">Contact us</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
