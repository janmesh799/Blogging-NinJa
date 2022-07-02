const express = require("express");
const router = express.Router();
const Blogs = require("../Models/Blogs");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/Fetchuser");
const { ServerHeartbeatFailedEvent } = require("mongodb");
const { NotBeforeError } = require("jsonwebtoken");

//Route 1: for getting the details of one route
router.get("/blog/:id", async (req, res) => {
  try {
    id = req.params.id;
    const blog = await Blogs.findById(id);
    if (!blog) {
      res.status(404).json({ error: "blog not found" });
    } else {
      res.send(blog);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error!!!");
  }
});

//Route 2: finding blogs for explore page
router.get("/explore",async (req, res) => {
  try {
    const blog = await Blogs.find({_private:false});
    if(blog.length!=0){
      res.send(blog);
    }
    else{
      res.status(404).json({error:"no blog found for you :("})
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error !!!");
  }
});
module.exports = router;
