import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import BlogState from "./Context/blogs/BlogState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert/Alert";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useState } from "react";
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
  return (
    <>
      <BlogState>
        <BrowserRouter>
          <Navbar />
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
            </Routes>
          </div>
        </BrowserRouter>
      </BlogState>
    </>
  );
}

export default App;
