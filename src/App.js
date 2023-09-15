// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects"; // Змінив імпорт на правильний
import Skills from "./components/Skills/Skills";
import Jobs from "./components/Jobs/Jobs";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />{" "}
        <Route path="/skills" element={<Skills />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
        <footer className="footer">
          <p>&copy; 2023 CoreSloe</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
