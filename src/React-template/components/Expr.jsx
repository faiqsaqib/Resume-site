import React from "react";
import "../Template.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Expr() {
  return (
    <>
    <Navbar/>

    <center style={{padding:"50px 0px"}}>
      <section className="right-3">
        <h5>EXPERIENCE</h5>
        <div className="EXPERIENCE">
          <div className="month items-center">
            <p>Jan2020 - Mar2021</p>
          </div>
          <div className="dev">
            <h6>WEB DEVELOPER</h6>
            <text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              repudiandae unde eaque necessitatibus repellat? Commodi expedita
              exercitationem iusto maiores, modi dignissimos. Odit assumenda
              accusamus aspernatur{" "}
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              repudiandae unde eaque necessitatibus repellat? Commodi expedita
              exercitationem iusto maiores, modi dignissimos. Odit assumenda
              accusamus aspernatur{" "}
            </text>
          </div>
        </div>
      </section>

      <Link to="/">
        <button className="btn btn-primary" style={{ marginTop:"50px"}}>
          Back
        </button>
      </Link>
      </center>
    </>
  );
}

export default Expr;
