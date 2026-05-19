import { Route, Routes } from "react-router-dom";
import Chatbot from "./components/Chatbot.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import BookShoot from "./pages/BookShoot.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookShoot />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
