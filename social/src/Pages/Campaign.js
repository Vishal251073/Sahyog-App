import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CampaignCard from "../Components/CampaignCard";
import "./Campaign.css";
const axios = require("axios").default;

export default function Campaign() {
  const [posts, setPosts] = useState([]);
  const [ngoposts,setNgoPosts] = useState([])
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/donor/")
      .then((response) => {
        console.log(response.data[0].imageDonor);
        setPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/ngo/")
      .then((response) => {
        console.log(response.data[0].imageDonor);
        setNgoPosts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-75 mx-auto col-md-3">
        <div className="well text-center align_card">
          {posts.map((data) => {
            return (
              <CampaignCard
                key={data.id}
                title={data.title}
                name={data.name}
                email={data.email}
                phoneNum={data.phoneNum}
                address={data.address}
                description={data.description}
                imageDonor={data.imageDonor}
              />
            );
          })}
          {ngoposts.map((data) => {
            return (
              <CampaignCard
                key={data.id}
                title={data.title}
                name={data.name}
                email={data.email}
                phoneNum={data.phoneNum}
                address={data.address}
                description={data.description}
                imageDonor={data.imageNGO}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
