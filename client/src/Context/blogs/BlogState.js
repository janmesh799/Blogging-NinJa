import blogContext from "./blogContext";
import { useState } from "react";
const BlogState = (props) => {
  const host = "http://localhost:5000";
  const Blogsinitial = [];
  const [blogs, setblogs] = useState(Blogsinitial);

  //get all blogs
  const getblogs = async () => {
    //  Api call
    const response = await fetch(`${host}/api/blogs/fetchallblogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3MTI5Nzk3MTg4MDQ2ZTk5YmMzOGJmIn0sImlhdCI6MTY1MjA2MjcwNH0.I_vyTVBCvcvDml6jOP-7SEqwzFM-JIz29-iMFam8ey8",
      },
    });
    const json = await response.json();
    setblogs(json);
  };

  //add a blog
  const addblog = async (title, description, tag) => {
    //  Api call

    const response = await fetch(`${host}/api/blogs/addblog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3MTI5Nzk3MTg4MDQ2ZTk5YmMzOGJmIn0sImlhdCI6MTY1MjA2MjcwNH0.I_vyTVBCvcvDml6jOP-7SEqwzFM-JIz29-iMFam8ey8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    const blog = {
      _id: "62788a41ce5a3720c2d6fdfb",
      user: "627129797188046e99bc38bf",
      title: title,
      description: description,
      tag: tag,
      date: "2022-05-09T03:28:01.154Z",
      __v: 0,
    };
    setblogs(blogs.concat(blog));
  };

  //delete a blog
  const deleteblog = async (id) => {
    // TODO api call

    const response = await fetch(`${host}/api/blogs/deleteblog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3MTI5Nzk3MTg4MDQ2ZTk5YmMzOGJmIn0sImlhdCI6MTY1MjA2MjcwNH0.I_vyTVBCvcvDml6jOP-7SEqwzFM-JIz29-iMFam8ey8",
      },
    });
    const json = await response.json();
    console.log(json);
    //logic for front-end
    console.log("deleting the blog with id - " + id);
    const newBlog = blogs.filter((blog) => {
      return blog._id !== id;
    });
    setblogs(newBlog);
  };

  //edit a blog
  const editblog = async (id, title, description, tag) => {
    //api call

    const response = await fetch(`${host}/api/blogs/updateblog/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3MTI5Nzk3MTg4MDQ2ZTk5YmMzOGJmIn0sImlhdCI6MTY1MjA2MjcwNH0.I_vyTVBCvcvDml6jOP-7SEqwzFM-JIz29-iMFam8ey8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    //logic for front-end

    for (let index = 0; index < blogs.length; index++) {
      const element = blogs[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    getblogs();
  };
  return (
    <blogContext.Provider
      value={{ blogs, addblog, deleteblog, editblog, getblogs }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
