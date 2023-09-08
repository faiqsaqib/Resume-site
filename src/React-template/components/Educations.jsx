import React from 'react'
import "../Template.css"
import { Link } from "react-router-dom";
import Navbar from './Navbar';



function Educations() {
  return (
    <>
    <Navbar/>

    <center style={{padding:"50px 0px"}}>
    <section className="right-4">
                <h5>EDUCATION</h5>
                <div className="certificate">
                    <h6>Certificate</h6>
                    <h6>Date</h6>
                </div>
                <div className="education">
                    <p>Web Development</p>
                    <p>Jan 2020</p>
                    <button type="button" class="btn btn-primary" style={{width:"70px", height:"40px"}}>View</button>
                </div>
                <div className="education bg-body-secondary">
                    <p>Graphic Design</p>
                    <p>May 2020</p>
                    <button type="button" class="btn btn-primary" style={{width:"70px", height:"40px"}}>View</button>
                </div>
                <div className="education">
                    <p>Tech Gadgets</p>
                    <p>June 2020</p>
                    <button type="button" class="btn btn-primary" style={{width:"70px", height:"40px"}}>View</button>
                </div>
                <div className="education bg-body-secondary">
                    <p>Others</p>
                    <p>Dec2020</p>
                    <button type="button" class="btn btn-primary" style={{width:"70px", height:"40px"}}>View</button>
                </div>
               

            </section>

    <Link to="/">
        <button className="btn btn-primary" style={{ marginTop:"50px"}}>
          Back
        </button>
    </Link>
    </center>
      
    </>
  )
}

export default Educations
