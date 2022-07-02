const express = require("express");
const router = express.Router();
const Blogs = require("../Models/Blogs");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/Fetchuser");
const { ServerHeartbeatFailedEvent } = require("mongodb");
const { NotBeforeError } = require("jsonwebtoken");

//ROUTE 1: Get all the blogs using GET : "/api/auth/fetchallblogs"
router.get("/fetchallblogs", fetchuser, async (req, res) => {
  try {
    const blogs = await Blogs.find({ user: req.user.id });
    res.json(blogs);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error!!!");
  }
});

//ROUTE 2: Add a new blog using POST : "/api/auth/addblog"
router.post(
  "/addblog",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "password must be of minimum 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      const { title, description, tag,_private } = req.body;
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const blog = new Blogs({
        title,
        description,
        tag,
        _private,
        user: req.user.id,
      });
      const savedBlog = await blog.save();
      res.json(savedBlog);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error!!!");
    }
  }
);
//ROUTE 3: update an existing blog using PUT : "/api/blogs/updateblog"
router.put("/updateblog/:id", fetchuser, async (req, res) => {
  try {
    //creating a new blog object
    const { title, description, tag } = req.body;
    const newblog = {};
    if (title) {
      newblog.title = title;
    }
    if (description) {
      newblog.description = description;
    }
    if (tag) {
      newblog.tag = tag;
    }

    //find the blog to be updated and updating
    let blog = await Blogs.findById(req.params.id);
    if (!blog) {
      res.send(404).send("Not found");
    }
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    blog = await Blogs.findByIdAndUpdate(
      req.params.id,
      { $set: newblog },
      { new: true }
    );
    res.json({ blog });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error!!!");
  }
});
//ROUTE 4: Delete an existing blog using DELETE : "/api/blogs/deleteblog"
router.delete("/deleteblog/:id", fetchuser, async (req, res) => {
  try {
    //creating a new blog object
    const { title, description, tag } = req.body;
    const newblog = {};
    if (title) {
      newblog.title = title;
    }
    if (description) {
      newblog.description = description;
    }
    if (tag) {
      newblog.tag = tag;
    }

    //find the blog to be deleted and delete it
    let blog = await Blogs.findById(req.params.id);
    if (!blog) {
      res.send(404).send("Not found");
    }
    //
    if (blog.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    blog = await Blogs.findByIdAndDelete(req.params.id);
    res.json({ success: "Blog has been deleted!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error!!!");
  }
});

module.exports = router;
