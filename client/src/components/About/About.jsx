import React from "react";
import "./About.scss";
const About = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> About Us </h1>
      <ul style={{display:"flex",textAlign:"center",flexDirection:"column",fontSize:"1.5em"}}>
        <li>User can create an user account on the sign-up page.</li>
        <li>User can Login into their respective account on the login page.</li>
        <li>If user is already logged in, then he/she will be  redirected on Homepage.</li>
        <li>If user is not logged in, then he/she will be redirected on Login Page.</li>
        <li>Without Login, user can only stay on Login Page, Explore Page and About Page.</li>
        <li>On Explore Page, all the <b> public </b> blogs are available from all the users.</li>
      </ul>
    </div>
  );
};

export default About;