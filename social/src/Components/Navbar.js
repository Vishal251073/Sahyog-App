import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Button from "./Button";
export default function Navbar() {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/iit-bhu/image/upload/v1649315522/Sahyog__2_-removebg-preview_hp3d2v.png"
            className="logo"
          ></img>
        </Link>
        <Link className="navbar-brand h4" to="/">
          Sahyog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <Link to="/campaign" className="nav-link active">
                OnGoing Campaigns
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/request" className="nav-link active">
                Request a Campaign
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About Us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/howitworks" className="nav-link active">
                How it Works
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/login" className="nav-link active">
                Join Us/Login
              </Link>
            </li>
          </ul>
          <Link to="/donate">
            <button className="btn submitButton">Donate</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
