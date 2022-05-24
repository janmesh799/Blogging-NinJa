import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Blogging Nin-Ja
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {!localStorage.getItem("token") ? (
          <div>
            <Link className="btn btn-primary mx-3" to="/login" role="button">
              Log-in
            </Link>
            <Link className="btn btn-primary mx-3" to="/signup " role="button">
              Sign-up
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/profile" style={{ color: "white",textDecoration:"none",textAlign:"center" }}>
              <h3 style={{margin:"0px"}}> {props.name}</h3>
              <small >{props.email}</small>
            </Link>
            <button className="btn btn-primary mx-3" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
