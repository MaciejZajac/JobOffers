import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-container">
          <div>
            <Link to="/" className="nav__logo">
              Into.IT
            </Link>
          </div>
          <div>
            <Link to="/login" className="nav__link">
              Log in
            </Link>
            <Link to="/register" className="nav__link">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
