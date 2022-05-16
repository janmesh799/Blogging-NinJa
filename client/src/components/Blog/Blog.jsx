import React, { useContext } from "react";
import blogContext from "../../Context/blogs/blogContext";
import Blogitem from "../Blogitem/Blogitem";
const Blog = (props) => {
  const context = useContext(blogContext);
  const { blogs, setblogs } = context;
  return (
    <div>
      <h1>Your all Blogs</h1>
      <div className="row my-3">
      {blogs.map((blog) => {
        return <>
            <Blogitem note = {blog}/>
        </>;
      })}</div>
    </div>
  );
};

export default Blog;
