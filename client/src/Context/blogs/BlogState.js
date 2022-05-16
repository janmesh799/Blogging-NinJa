import blogContext from "./blogContext";
import { useState } from "react";
const BlogState = (props) => {
  const Blogsinitial = [
    {
      "_id": "6278894cce5a3720c2d6fdf6",
      "user": "627129797188046e99bc38bf",
      "title": "first blog",
      "description": "best website i have ever seen",
      "tag": "awesome",
      "date": "2022-05-09T03:23:56.968Z",
      "__v": 0
    },
    {
      "_id": "62788a39ce5a3720c2d6fdf9",
      "user": "627129797188046e99bc38bf",
      "title": "second blog",
      "description": "best website i have ever seen",
      "tag": "awesome",
      "date": "2022-05-09T03:27:53.685Z",
      "__v": 0
    },
    {
      "_id": "62788a41ce5a3720c2d6fdfb",
      "user": "627129797188046e99bc38bf",
      "title": "third blog",
      "description": "best website i have ever seen",
      "tag": "awesome",
      "date": "2022-05-09T03:28:01.154Z",
      "__v": 0
    }
  ]
  const [blogs, setblogs] = useState(Blogsinitial)
  return (
    <blogContext.Provider value={{blogs, setblogs}}>{props.children}</blogContext.Provider>
  );
};

export default BlogState;
