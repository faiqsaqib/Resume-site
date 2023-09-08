import React from "react";
import "../Template.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Skills() {
  return (
    <>
    <Navbar/>
    <center style={{padding:"50px 0px"}}>
      <section className="right-2">
        <h5>PROFESSIONAL SKILLS</h5>
        <div className="skills">
          <div>
            <h6>HTML</h6>
            <div class="progress" style={{ height: "6px" }}>
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div>
            <h6>CSS</h6>
            <div class="progress" style={{ height: "6px" }}>
              <div className="progress-bar" style={{ width: "99%" }}></div>
            </div>
          </div>
          <div>
            <h6>JAVASCRIPT</h6>
            <div class="progress" style={{ height: "6px" }}>
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div>
            <h6>PHP</h6>
            <div class="progress" style={{ height: "6px" }}>
              <div className="progress-bar" style={{ width: "96%" }}></div>
            </div>
          </div>
          <div>
            <h6>JQUERY</h6>
            <div class="progress" style={{ height: "6px" }}>
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div>
            <h6>MySQL</h6>
            <div class="progress" style={{ height: "6px" }}>
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <Link to="/">
        <button className="btn btn-primary" style={{marginTop:"50px"}}>
          Back
        </button>
      </Link>
    </center>
    </>
  );
}

export default Skills;
