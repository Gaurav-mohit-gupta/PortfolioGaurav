import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home  from "./components/Home/Home";
import Skills  from "./components/Skills/Skills";
import Work  from "./components/work/Work";
import About  from "./components/About/About";
import Contact  from "./components/Contact/Contact";


const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={< Skills />} />
        <Route path="/work" element={< Work />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
       
       <Footer />


    </Router>
  )
}


export default App;
