import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="credit">
        <p>
          Designed and developed with{" "}
          <span style={{ color: "red", fontSize: "1.5em" }}> &hearts; </span>by{" "}
          <a
            target="blank"
            style={{ color: "yellow" }}
            href="https://www.linkedin.com/in/janmesh-kumar/"
          >
            <strong> Janmesh Kumar</strong>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
