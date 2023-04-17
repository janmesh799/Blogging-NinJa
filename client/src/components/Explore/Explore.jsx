import React, { useState, useEffect } from "react";
import Blogitem from "../Blogitem/Blogitem";
import "./Explore.scss";
const Explore = () => {
  const host = "https://blogging-nin-ja-kitb.vercel.app";
  const [blogs, setblogs] = useState([]);
  const getblogs = async () => {
    const response = await fetch(`${host}/api/blog/explore`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setblogs(json);
  };
  useEffect(() => {
    getblogs();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="row my-3">
      {blogs.length > 0 ? (
        <div>
          <h3
            className="mx-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {blogs.length === 0 && "no blogs to show"}
          </h3>
          <div style={{ display: "flex",flexWrap:"wrap",justifyContent:"center" }}>
            {blogs.map((blog) => {
              return <Blogitem control={false} key={blog._id} blog={blog} />;
            })}
          </div>
        </div>
      ) : (
        <h2 style={{ textAlign: "center" }}>Sorry, No blogs available</h2>
      )}
    </div>
  );
};

export default Explore;
