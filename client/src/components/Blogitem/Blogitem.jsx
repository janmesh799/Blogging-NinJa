import React, { useContext } from "react";
import blogContext from "../../Context/blogs/blogContext";
const Blogitem = (props) => {
  const context = useContext(blogContext);
  const {  deleteblog } = context;
  const {blog, updateblog } = props;
  return (
    <>
      <div className="card mx-2  my-4 col-md-3">
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.description}</p>
          <i
            className="fa-solid fa-trash-can mx-2"
            onClick={() => {
              deleteblog(blog._id);
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              updateblog(blog);
            }}  
          ></i>
        </div>
      </div>
    </>
  );
};

export default Blogitem;
