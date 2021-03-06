import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import blogContext from "../../Context/blogs/blogContext";
import Blogitem from "../Blogitem/Blogitem";
const Blog = (props) => {
  const navigate = useNavigate();
  const context = useContext(blogContext);
  const { blogs, getblogs, editblog } = context;

  const [blog, setblog] = useState({
    eid: "",
    etitle: "",
    edescription: "",
    etag: "",
    e_private: false,
  });
  const onchange = (e) => {
    setblog({ ...blog, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getblogs();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  // const ref = useRef(null);
  const updateblog = (currentblog) => {
    handleShow();
    const s = currentblog.tag;
    let p = "";
    for (let index = 0; index < s.length; index++) {
      const element = s[index];
      p += element + ", ";
    }
    setblog({
      eid: currentblog._id,
      etitle: currentblog.title,
      edescription: currentblog.description,
      etag: p,
      e_private: false,
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlesubmit = () => {
    console.log(blog);

    editblog(
      blog.eid,
      blog.etitle,
      blog.edescription,
      blog.etag.split(", "),
      blog.e_private
    );
    handleClose();

    props.showAlert("Blog edited successfully", "success");
  };
  return (
    <>
      <Button className="d-none" variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container my-3">
            <form>
              <div className="mb-3">
                <label htmlFor="etitle" className="form-label">
                  Title
                </label>
                <input
                  onChange={onchange}
                  type="text"
                  name="etitle"
                  value={blog.etitle}
                  className="form-control"
                  id="etitle"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Enter blog text
                </label>
                <textarea
                  onChange={onchange}
                  type="text"
                  name="edescription"
                  value={blog.edescription}
                  className="form-control"
                  id="edescription"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                  Enter blog tags
                </label>
                <input
                  onChange={onchange}
                  type="text"
                  name="etag"
                  value={blog.etag}
                  className="form-control"
                  id="etag"
                />
              </div>
              <div className="mb-3">
                <label className="form-check-label" htmlFor="_private">
                  Private
                </label>
                <input
                  onChange={() => {
                    setblog({ ...blog, e_private: !blog.e_private });
                  }}
                  style={{ marginLeft: "1em" }}
                  name="_private"
                  type="checkbox"
                  className="form-check-input"
                  id="_private"
                />
                <br />
                <span className="text-muted">
                  &nbsp;&nbsp;&nbsp;&nbsp; **to make blogs private
                </span>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            disabled={blog.etitle.length < 5 || blog.edescription.length < 5}
            variant="primary"
            onClick={handlesubmit}
          >
            Edit
          </Button>
          <p
            className={
              blog.etitle.length < 5 || blog.edescription.length < 5
                ? ""
                : "d-none"
            }
          >
            **Title and Description should be atleast 5 characters long
          </p>
        </Modal.Footer>
      </Modal>
      <h1>Your all Blogs</h1>
      <div className="row my-3">
        <h3
          className="mx-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {blogs.length === 0 && "no blogs to show"}
        </h3>
        {blogs.map((blog) => {
          return (
            <Blogitem
              control={true}
              key={blog._id}
              updateblog={() => {
                updateblog(blog);
              }}
              blog={blog}
            />
          );
        })}
      </div>
    </>
  );
};

export default Blog;
