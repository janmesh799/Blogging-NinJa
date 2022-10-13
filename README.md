# Blogging-NinJa

This is the respository for bloggig websigte created by Janmesh Kumar


<h1>Client side</h1>

- User can create an user account on the sign-up page.
- User can Login into their respective account on the login page.
- If user is already logged in, then he/she will be  redirected on Homepage.
- If user is not logged in, then he/she will be redirected on Login Page.
- Without Login, user can only stay on Login Page, Explore Page and About Page.
- On Explore Page, all the <b> public </b> blogs are available from all the users.

<h2> Tech Stack Used </h2>

- ReactJs
- react-router-dom
- SCSS
- Bootstrap


<h1>Server side</h1>

<h2 > APIs </h2>

| API              |    Type                            | Function                      |
| ---------------- | ------------------------------- | ----------------------------- |
| `/api/auth/createuser` | POST             | creates an user with email, password, name, and              |
| `/api/auth/login`           | POST          | Login the user if credentials are correct           |
| `/api/auth/getuser`           | POST | find the user by id Return the Detail about the user  |
| `/api/blogs/fetchallblogs`           | GET | find all the blogs of the user logged in  |
| `/api/blogs/addblog`           | POST | add that specific blog to the collection of user|
| `/api/blogs/updateblog/:id`           | PUT | find the blog by id and update it  |
| `/api/blog/blog/:id`           | GET | find details of that blog uding id  |
| `/api/blog/explore`           | GET | find all the public blogs for explore page |

<h2> Tech Stack Used</h2>

- ExpressJs
- MongoDb
- Mongoose 
- BcryptJs
- JWT Token
