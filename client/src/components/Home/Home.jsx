import React from "react";
import Addblog from "../Addblog/Addblog";
import Blog from "../Blog/Blog";

import "./Home.scss";
const Home = (props) => {
  const { showAlert } = props;
  return (
    <>
      <div className="container">
        <Addblog showAlert={showAlert} />
        <Blog showAlert={showAlert} />
      </div>
    </>
  );
};

export default Home;
