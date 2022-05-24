import React, { useContext, useState } from "react";
import blogContext from "../../Context/blogs/blogContext";
const Blogitem = (props) => {
  const context = useContext(blogContext);
  const { deleteblog } = context;
  const { blog, updateblog } = props;
  // const description1 = blog.description;
  const [description1, setdescription1] = useState(blog.description);
  const [flag, setflag] = useState(false);
  if (description1.length > 200 && !flag) {
    setdescription1(description1.slice(0, 200));
    // description1 = "hello";
  }

  const loadmore = () => {
    if (flag) {
      setflag(!flag);
      setdescription1(description1.slice(0, 200));
    } else {
      setdescription1(blog.description);
      setflag(true);
    }
    console.log(blog.description);
  };
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
            <h5 className="card-title">{blog.title}</h5>
            <div>
              <i
                className="fa-solid fa-trash-can mx-2"
                onClick={() => {
                  deleteblog(blog._id)
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
          <p className="card-text">
            {description1}
            <span
              onClick={loadmore}
              className={blog.description.length < 300 ? "d-none" : ""}
              style={{ cursor: "pointer", fontWeight: "700" }}
            >
              {flag ? "   ...Collapse" : " ...Read More"}
              {/* ......ReadMore */}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blogitem;
