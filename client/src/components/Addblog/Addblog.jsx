import React from "react";
import { useContext, useState } from "react";
import blogContext from "../../Context/blogs/blogContext";
const Addblog = () => {
  const context = useContext(blogContext);
  const { addblog } = context;
  const [blog, setblog] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleclick = (e) => {
      e.preventDefault();
    addblog(blog.title,blog.description, blog.tag);
  };
  const onchange = (e) => {
    setblog({ ...blog, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1 className="my-5">Add a blog</h1>
      <div className="container my-3">
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              onChange={onchange}
              type="text"
              name="title"
              className="form-control"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Enter blog text
            </label>
            <input
              onChange={onchange}
              type="text"
              name="description"
              className="form-control"
              id="description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Enter blog tags
            </label>
            <input
              onChange={onchange}
              type="text"
              name="tag"
              className="form-control"
              id="tag"
            />
          </div>
          
          <button
            type="submit"
            onClick={handleclick}
            className="btn btn-primary"
          >
            ADD Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
