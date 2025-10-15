import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";

function App() {

  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar/>
        <main className="pt-16">
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App
