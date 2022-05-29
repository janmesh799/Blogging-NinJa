import React, { useState } from "react";
import Addblog from "../Addblog/Addblog";
import Blog from "../Blog/Blog";

import "./Home.scss";
const Home = (props) => {
  const { showAlert } = props;
  const [showaddblog, setshowaddblog] = useState("d-none");
  const onpenaddblog = () => {
    if (showaddblog === "d-none") setshowaddblog("d-block");
    else setshowaddblog("d-none");
  };
  return (
    <>
      <div className="container">
        <button
          onClick={onpenaddblog}
          type="button"
          className={`btn my-3 btn-${
            showaddblog === "d-none" ? "primary" : "danger"
          }`}
        >
          {showaddblog === "d-none" ? "Add a new Blog" : "Close"}
        </button>
        <Addblog show={showaddblog} showAlert={showAlert} />
        <Blog showAlert={showAlert} />
      </div>
    </>
  );
};

export default Home;
