import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;