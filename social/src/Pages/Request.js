import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import './Request.css'
import './NGO.css'
export default function Request() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <h1 className="my-5">Request a Campaign as </h1>
        <div className="row mx-auto">
          <div className="col-md-6 col-sm-12">
            <div className="card card_use1 mx-auto">
            <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649912116/ngo_tnsn7s.png' alt='...'></img>
            <div className="card-body">
              <h5>NGO</h5>
              <p className="card-text">
              Click if you are an NGO Or Social Group and wish to support or seeking help.
              </p>
              <Link to="/ngo" className="btn submitButton">For NGO</Link>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
          <div className="card card_use2 mx-auto">
            <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649912231/community_q6lcdl.png' alt='...'></img>
            <div className="card-body">
              <h5>Donor</h5>
              <p className="card-text">
              Click it if you are creating a Support campaign to an NGO Or Group of individuals Or Medical campaign
              </p>
              <Link to="/donor" className="btn submitButton">For Donor</Link>
              
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
