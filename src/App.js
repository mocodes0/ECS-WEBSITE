import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Platform from "./pages/Platform";
import Work from "./pages/Work";
import Media from "./pages/Media";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/platform" element={<Platform />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/media" element={<Media />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
