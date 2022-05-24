import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import BlogState from "./Context/blogs/BlogState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert/Alert";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useState, useEffect } from "react";
import Profile from "./components/Profile/Profile";
// require('dotenv').config()

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const host = "http://localhost:5000";
  const [user, setuser] = useState({
    _id: "",
    name: "",
    email: "",
  });
  const getuser = async () => {
    //  Api call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setuser({
      _id: json._id,
      name: json.name,
      email: json.email,
    });
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getuser();
    }
  });

  return (
    <>
      <BlogState>
        <BrowserRouter>
          <Navbar name={user.name} email={user.email} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route
                path="/login"
                element={<Login showAlert={showAlert} />}
              ></Route>
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              ></Route>
              <Route
                path="/profile"
                element={<Profile user={user} showAlert={showAlert} />}
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </BlogState>
    </>
  );
}

export default App;
