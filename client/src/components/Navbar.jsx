import React from "react";
import logo from "../assets/kennInitial.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span>ToDo App</span>
      </div>
    </nav>
  );
};

export default Navbar;