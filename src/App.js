import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhoIAm from "./components/WhoIAm";
import Techno from "./components/Techno";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import "./style.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">
          <Home />
        </div>} />
        <Route path="/about" element={<div className="App">
          <Navbar />
          <About />
          <WhoIAm />
          <Techno />
          <Contact />
          <Footer />
        </div>} />
        <Route path="/skills" element={<div className="App">
        <Skills />
        </div>} />
      </Routes>
    </Router>
  );
}

export default App;
