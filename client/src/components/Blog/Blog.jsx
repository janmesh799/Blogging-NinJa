import React, { useEffect, useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import blogContext from "../../Context/blogs/blogContext";
import Blogitem from "../Blogitem/Blogitem";
const Blog = (props) => {
  const context = useContext(blogContext);
  const { blogs, getblogs, editblog } = context;

  const [blog, setblog] = useState({
    eid:"",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const onchangetitle = (e) => {
    setblog({ etitle: e.target.value,edescription:blog.edescription,etag:blog.etag,eid:blog.eid });
  };
  const onchangedesc = (e) => {
    setblog({ edescription: e.target.value,etitle:blog.etitle,etag:blog.etag,eid:blog.eid });
  };
  const onchangetag = (e) => {
    setblog({ etag: e.target.value,etitle:blog.title,edescription:blog.edescription,eid:blog.eid });
  };

  useEffect(() => {
    getblogs();
    // eslint-disable-next-line 
  }, []);

  // const ref = useRef(null);
  const updateblog = (currentblog) => {
    handleShow();
    // ref.current.click();
    setblog({
      eid: currentblog._id,
      etitle: currentblog.title,
      edescription: currentblog.description,
      etag: currentblog.tag,
    });
  };
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handlesubmit =()=>{
  editblog(blog.eid, blog.etitle, blog.edescription, blog.etag);
  handleClose();
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
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
                  onChange={onchangetitle}
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
                <input
                  onChange={onchangedesc}
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
                  onChange={onchangetag}
                  type="text"
                  name="etag"
                  value={blog.etag}
                  className="form-control"
                  id="etag"
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlesubmit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>Your all Blogs</h1>
      <div className="row my-3">
        {blogs.map((blog) => {
          return (
            <Blogitem
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
