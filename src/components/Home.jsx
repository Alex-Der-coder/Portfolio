// Home.js
import React from "react";
import WhoIAm from "./WhoIAm";
import Techno from "./Techno";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { projectsList } from "../datas/projectsList";


const Home = () => {
  return (
    <div>
          <Navbar />
           <WhoIAm />
           <Techno projects={projectsList} />
          <Footer />
    </div>
  );
}

export default Home;
