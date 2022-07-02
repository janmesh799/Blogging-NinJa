import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Blogpage = (props) => {
  const location = useLocation();
  const host = "http://localhost:5000";
  const id = location.hash.substring(1);
  const [blog, setblog] = useState({
    date: "",
    description: "",
    tag: [],
    title: "",
    user: "",
    __v: 0,
    _id: "",
  });
  const getoneblog = async (id) => {
    const response = await fetch(`${host}/api/blog/blog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        _id: id,
      },
    });
    const json = await response.json();
    // console.log(json);
    setblog(json);
  };
  useEffect(() => {
    getoneblog(id);
    // eslint-disable-next-line
  }, []);

  //   console.log(blog);
  //   const blog = getoneblog(id);
  const { title, _id, date } = blog;
  // const date = new Date(blog.date);
  return (
    <div>
      {`${id}`}
      <h1>{title}</h1>
      <h6>{_id}</h6>
      <h6>{date}</h6>
      <div className="container">
        <div>
          <h1>{title}</h1>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
