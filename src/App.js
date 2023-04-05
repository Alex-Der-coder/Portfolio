import React from "react";
import Navbar from "./components/Navbar";
import WhoIAm from "./components/WhoIAm";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WhoIAm />
      <Projects />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
