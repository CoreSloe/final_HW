// src/components/Navigation/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navbar">
      {" "}
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>{" "}
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>{" "}
        </li>
        <li>
          <Link to="/skills" className="nav-link">
            Мy skills
          </Link>{" "}
        </li>
        <li>
          <Link to="/jobs" className="nav-link">
            Мy jobs
          </Link>{" "}
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            About me
          </Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
