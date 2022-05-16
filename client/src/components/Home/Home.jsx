import React from "react";
import Blog from "../Blog/Blog";

import "./Home.scss";
const Home = () => {
  return (
    <>
      <div>
        <h1 className="my-5">Add a blog</h1>
        <div className="container my-3">
          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Enter blog text
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="container">
         
          <Blog />
        </div>
      </div>
    </>
  );
};

export default Home;
