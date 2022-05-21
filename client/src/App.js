import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import BlogState from "./Context/blogs/BlogState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert/Alert";
function App() {
  return (
    <>
      <BlogState>
        <BrowserRouter>
          <Navbar />
          <Alert message="this is working" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </BlogState>
    </>
  );
}

export default App;
