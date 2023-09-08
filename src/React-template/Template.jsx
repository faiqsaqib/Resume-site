import React from "react";
import "./Template.css";
import "./images/react.js-img.png"
// import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function Template() {
  return (
    <>
      <Navbar/>
      <main>
        <section className="left">
          <div className="react-card">
            <img src="./images/react.js-img.png" alt="" />
            <div>
              <h4>React Developer</h4>
              <p>Full stack web developer</p>
            </div>
          </div>
        </section>
        <section className="right">
          <div className="about">
            <h5>About me</h5>
            <p style={{ fontSize: "small" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              aliquid incidunt aliquam, exercitationem cupiditate error
              reprehenderit nesciunt enim, ratione aperiam veritatis sit amet
              consectetur adipisicing elit exercitationem.
            </p>

            <hr className="mt-4" />

            <h5>Personal Info</h5>
            <div className="info">
              <div className="info-left">
                <p>Address: 123 Lorem</p>
                <p>Email: test@gmail.com</p>
                <p>Phone number: 123 456 7896</p>
              </div>
              <div className="info-right">
                <p>Main language - English</p>
                <p>Second language - Chinese</p>
                <p>Third language - Spanish</p>
              </div>
            </div>
          </div>

          {/* ----------SKILLS---------- */}

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

          {/* ----------EXPERIENCE---------- */}

          <section className="right-3">
            <h5>EXPERIENCE</h5>
            <div className="EXPERIENCE">
              <div className="month items-center">
                <p>Jan2020 - Mar2021</p>
              </div>
              <div className="dev">
                <h6>WEB DEVELOPER</h6>
                <text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit repudiandae unde eaque necessitatibus repellat? Commodi
                  expedita exercitationem iusto maiores, modi dignissimos. Odit
                  assumenda accusamus aspernatur{" "}
                </text>
              </div>
            </div>
            <div className="EXPERIENCE mt-4">
              <div className="month items-center">
                <p>Jan2020 - Mar2021</p>
              </div>
              <div className="dev">
                <h6>WEB DEVELOPER</h6>
                <text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit repudiandae unde eaque necessitatibus repellat? Commodi
                  expedita exercitationem iusto maiores, modi dignissimos. Odit
                  assumenda accusamus aspernatur{" "}
                </text>
              </div>
            </div>
          </section>

          {/* ----------EDUCATION---------- */}

          <section className="right-4">
            <h5>EDUCATION</h5>
            <div className="certificate">
              <h6>Certificate</h6>
              <h6>Date</h6>
            </div>
            <div className="education">
              <p>Web Development</p>
              <p>Jan 2020</p>
              <button
                type="button"
                class="btn btn-primary"
                style={{ width: "70px", height: "40px" }}
              >
                View
              </button>
            </div>
            <div className="education bg-body-secondary">
              <p>Graphic Design</p>
              <p>May 2020</p>
              <button
                type="button"
                class="btn btn-primary"
                style={{ width: "70px", height: "40px" }}
              >
                View
              </button>
            </div>
            <div className="education">
              <p>Tech Gadgets</p>
              <p>June 2020</p>
              <button
                type="button"
                class="btn btn-primary"
                style={{ width: "70px", height: "40px" }}
              >
                View
              </button>
            </div>
            <div className="education bg-body-secondary">
              <p>Others</p>
              <p>Dec2020</p>
              <button
                type="button"
                class="btn btn-primary"
                style={{ width: "70px", height: "40px" }}
              >
                View
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Template;
