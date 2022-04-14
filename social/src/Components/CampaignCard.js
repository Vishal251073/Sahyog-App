import React from "react";
import './CampaignCard.css'
export default function CampaignCard({title,name,email,phoneNum,address,description,imageDonor}) {
    const display = description.substring(0,40);
  return (
    <div>
      <div className="card card_body m-2">
        <img
          src={'http://127.0.0.1:8000'+imageDonor+'/'}
          className="card-img-top img_rule"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
          {display+"..."}
          </p>
          <div className="d-flex">
          <button className="btn submitButton me-5">
                Share
            </button>
            <button className="btn submitButton">
                Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
