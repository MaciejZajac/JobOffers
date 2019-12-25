import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SIsAuthenticated } from "../../selectors";
import { ALogout } from "../../actions/authActions";
import { Button } from "reactbulma";

const Navbar = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(SIsAuthenticated);

  const handleLogout = () => {
    dispatch(ALogout());
  };

  return (
    <div class="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </span>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            {isAuthenticated && (
              <Link to="/dashboard" className="navbar-item">
                Dashboard
              </Link>
            )}

            {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="button is-primary"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/register" className="button is-primary">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="/login" className="button is-light">
                      Log in
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

    // <div>
    //   <nav className="nav">
    //     <div className="nav-container">
    //       <div>
    //         <Link to="/" className="nav__logo">
    //           Into.IT
    //         </Link>
    //       </div>
    //       <div>
    //         {isAuthenticated ? (
    //           <>
    //             <Link to="/dashboard">Dashboard</Link>
    //             <Link to="/" onClick={handleLogout}>
    //               Logout
    //             </Link>
    //           </>
    //         ) : (
    //           <>
    //             <Button white>
    //               <Link to="/login">Log in</Link>
    //             </Button>
    //             <Button white>
    //               <Link to="/register">Register</Link>
    //             </Button>
    //           </>
    //         )}
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;
