import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./NGO.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function NGO() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    org: "",
    title: "",
    address: "",
    description: "",
  });
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    event.preventDefault();
    
    setInfo((prevValue) => {
      // console.log(prevValue);
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function imageHandler(e){
    console.log(e.target.files[0])
    e.preventDefault()
    setImgUrl(e.target.files[0])
}

function fileUploadHandler(e){
    e.preventDefault();
      
      const fd = new FormData();
      fd.append('name',info.name);
      fd.append('email',info.name);
      fd.append('org',info.org);
      fd.append('title',info.title);
      fd.append('address',info.address);
      fd.append('description',info.description);
      fd.append('imageNGO',imgUrl,imgUrl.name)
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/ngo/',fd).then(function (response) {
        console.log(response);
        navigate('/campaign')
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div>
      <Navbar />
      <div className="row mt-5">
        <h1 className="text-center">For NGO</h1>
        <div className="card mx-auto w-75">
          <div className="card-body">
            <form>
              <div className="form-group mt-3">
                <input 
                  type="text"
                  name="name"
                  placeholder="Full Name: *"
                  className="input_form"
                  value = {info.name}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email: *"
                  className="input_form"
                  value={info.email}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="org"
                  placeholder="Organization Name: *"
                  className="input_form"
                  value={info.org}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Title of Request: *"
                  className="input_form"
                  value={info.title}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="address"
                  placeholder="Address: *"
                  className="input_form"
                  value={info.address}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group mt-3">
                <textarea
                  type="text"
                  name="description"
                  placeholder="Please help us understand your requirements by providing us with the required informations: *
                                1. A breif description about your NGO
                                2. What kind of help do you want?
                                3. Who will be the user of these product and why do they need these product?                    
                                "
                  className="input_form1"
                  value={info.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group mt-3">
                <input
                  type="file"
                  class="form-control-file input_form"
                  name="imageNGO"
                  onChange={imageHandler}
                ></input>
              </div>
              <button className="btn submitButton" onClick={fileUploadHandler}>Request a Campaign</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
