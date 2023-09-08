import React from 'react'
import "../Template.css"
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
    <nav>
        <h3>My Resume</h3>
        <ul classNameName="navbar">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>
              <i className="bi bi-house-door-fill"></i>Home
            </li>
          </Link>
          <Link to="/skills" style={{ textDecoration: "none", color: "white" }}>
            <li>
              <i className="bi bi-file-earmark-fill"></i>Skills
            </li>
          </Link>
          <Link to="/exp" style={{ textDecoration: "none", color: "white" }}>
            <li>
              <i className="bi bi-file-earmark-arrow-down"></i>Experiences
            </li>
          </Link>
          <Link to="/edu" style={{ textDecoration: "none", color: "white" }}>
            <li>
              <i className="bi bi-mortarboard-fill"></i>Educations
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <li>
              <i className="bi bi-file-earmark-person-fill"></i>Portfolios
            </li>
          </Link>
        </ul>
      </nav>
      
    </>
  )
}

export default Navbar
