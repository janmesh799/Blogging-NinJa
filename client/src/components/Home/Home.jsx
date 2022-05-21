import React from "react";
import Addblog from "../Addblog/Addblog";
import Blog from "../Blog/Blog";

import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="container">
        <Addblog />
        <Blog />
      </div>
    </>
  );
};

export default Home;
