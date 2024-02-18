import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <About />
        </div>} />
        <Route path="/skills" element={<div className="App">
        <Skills />
        </div>} />
      </Routes>
    </Router>
  );
}

export default App;
