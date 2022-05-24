import React from "react";
import { useContext, useState } from "react";
import blogContext from "../../Context/blogs/blogContext";
const Addblog = (props) => {
  const context = useContext(blogContext);
  const { addblog } = context;
  const [blog, setblog] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleclick = (e) => {
    e.preventDefault();
    addblog(blog.title, blog.description, blog.tag);
    
    props.showAlert("Blog added successfully", "success");
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
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Enter blog text
            </label>
            <textarea
              onChange={onchange}
              type="text"
              name="description"
              className="form-control"
              id="description"
              required
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
            disabled={blog.title.length < 5 || blog.description.length < 5}
            type="submit"
            onClick={handleclick}
            className="btn btn-primary"
          >
            ADD Blog
          </button>
          <p
            className={
              blog.title.length < 5 || blog.description.length < 5
                ? ""
                : "d-none"
            }
          >
            **Title and Description should be atleast 5 characters long
          </p>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
