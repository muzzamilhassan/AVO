import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Work from "./work/Work";
import About from "./about/About";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
