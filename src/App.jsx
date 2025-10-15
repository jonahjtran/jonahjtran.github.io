import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Professional from "./pages/Professional";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
