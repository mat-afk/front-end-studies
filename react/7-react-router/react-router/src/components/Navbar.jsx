import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span> </span>
        <Link to="/contact">Contact us</Link>
      </nav>
    </div>
  );
};

export default Navbar;
