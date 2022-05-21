import React, { useEffect, useContext, useRef } from "react";
import blogContext from "../../Context/blogs/blogContext";
import Blogitem from "../Blogitem/Blogitem";
const Blog = (props) => {
  const context = useContext(blogContext);
  const { blogs, getblogs } = context;
  useEffect(() => {
    getblogs();
  }, []);
  const ref = useRef(null);
  const updateblog = (blog) => {
    ref.current.click();
  };
  return (
    <>
      <button
        type="button"
        ref={ref}
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Edit blog
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>Your all Blogs</h1>
      <div className="row my-3">
        {blogs.map((blog) => {
          return (
            <Blogitem key={blog._id} updateblog={updateblog} blog={blog} />
          );
        })}
      </div>
    </>
  );
};

export default Blog;
