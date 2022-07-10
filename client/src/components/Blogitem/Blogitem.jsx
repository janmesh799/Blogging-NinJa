import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import blogContext from "../../Context/blogs/blogContext";
import "./Blogitem.scss";
const Blogitem = (props) => {
  const context = useContext(blogContext);
  const { deleteblog } = context;
  const { blog, updateblog } = props;
  // const description1 = blog.description;
  const [description1, setdescription1] = useState(blog.description);

  if (description1.length > 200) {
    setdescription1(description1.slice(0, 200));
  }

  return (
    <>
      <div className="card mx-2  my-4 col-md-3">
        <div className="card-body">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <h5 style={{width:props.control?"60%":"100%"}} className="card-title">{blog.title}</h5>
            {props.control ? (
              <div>
                <div className="icons">
                  <i
                    className="fa-solid fa-trash-can  icon"
                    onClick={() => {
                      deleteblog(blog._id);
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-pen-to-square  icon"
                    onClick={() => {
                      updateblog(blog);
                    }}
                  ></i>

                  {blog._private ? (
                    <img
                      className="icon"
                      style={{ width: "2em" }}
                      src="https://img.icons8.com/ios-filled/50/000000/lock.png"
                      alt="This blog is private"
                    />
                  ) : (
                    <img
                      className="icon"
                      style={{ width: "2em" }}
                      src="https://img.icons8.com/ios-filled/50/000000/unlock--v1.png"
                      alt="This blog is private"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <p 
          style={{marginTop:"2em"}}
           className="card-text">
            {description1 + "......"}
            <Link to={"/blog/blog#" + blog._id}>read more</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogitem;
