import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
      <>
      <Navbar/>
        <main className="pt-16">
          <Home />
        </main>
        <Footer/>
      </>
  );
}

export default App
