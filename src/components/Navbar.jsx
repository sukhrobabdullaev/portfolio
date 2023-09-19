import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to="/blog" className="active">
        Blog
      </NavLink>
      <NavLink to="/" className="active">
        Home
      </NavLink>
    </div>
  );
};

export default Navbar;
