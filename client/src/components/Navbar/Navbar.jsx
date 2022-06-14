import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.scss";
const Navbar = (props) => {
  let location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav>
      {" "}
      <div className="navbar-background">
        <div className="parent">
          <div>
            <ul className="nav-list">
              <li>
                <Link to="/">
                  <button className="title-btn"> Blogging ninja</button>
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={`nav-link ${
                    location.pathname === "/" || location.pathname ==="/login" ? "nav-link-active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={`nav-link ${
                    location.pathname === "/explore" ? "nav-link-active" : ""
                  }`}
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "nav-link-active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="login">
            {!localStorage.getItem("token") ? (
              <div>
                <Link to="/login" role="button">
                  <button className="glow-on-hover"> Login </button>
                </Link>
                <Link to="/signup " role="button">
                  <button className="glow-on-hover"> Sign-up</button>
                </Link>
              </div>
            ) : (
              <div className="creds">
                <Link to="/profile">
                  <div>
                    <h3> {props.name}</h3>
                    <small>{props.email}</small>
                  </div>
                </Link>
                <button className="glow-on-hover" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
