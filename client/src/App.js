import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import BlogState from "./Context/blogs/BlogState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BlogState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            {/* <About /> */}
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
