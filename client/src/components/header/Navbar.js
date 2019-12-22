import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SIsAuthenticated } from "../../selectors";
import { ALogout } from "../../actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(SIsAuthenticated);

  const handleLogout = () => {
    dispatch(ALogout());
  };

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
            {isAuthenticated ? (
              <Link to="/" onClick={handleLogout} className="nav__link">
                Logout
              </Link>
            ) : (
              <Link to="/login" className="nav__link">
                Log in
              </Link>
            )}
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
