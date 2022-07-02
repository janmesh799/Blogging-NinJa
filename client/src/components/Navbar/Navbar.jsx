import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
              <li style={{ margin: "0px" }}>
                <NavLink to="/">
                  <img
                    className="title-img"
                    src="https://imgur.com/ZCpZ1eL.jpg" alt="logo"
                  />
                  <button className="title-btn"> Blogging Nin-Ja</button>
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  className={`nav-link glow-on-hover ${
                    location.pathname === "/" || location.pathname === "/login"
                      ? "nav-link-active"
                      : ""
                  }`}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  className={`nav-link glow-on-hover ${
                    location.pathname === "/explore" ? "nav-link-active" : ""
                  }`}
                  to="/explore"
                >
                  Explore
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  className={`nav-link glow-on-hover ${
                    location.pathname === "/about" ? "nav-link-active" : ""
                  }`}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="login">
            {!localStorage.getItem("token") ? (
              <div>
                <NavLink to="/login" role="button">
                  <button className="glow-on-hover"> Login </button>
                </NavLink>
                <NavLink to="/signup " role="button">
                  <button className="glow-on-hover"> Sign-up</button>
                </NavLink>
              </div>
            ) : (
              <div className="creds">
                <NavLink to="/profile">
                  <div>
                    <h3> {props.name}</h3>
                    <small>{props.email}</small>
                  </div>
                </NavLink>
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
