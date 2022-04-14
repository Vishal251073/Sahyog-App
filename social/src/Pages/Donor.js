import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Components/Button.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./NGO.css";
import { Navigate } from "react-router-dom";
export default function Donor() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phoneNum: "",
    address: "",
    title: "",
    description: "",
  });
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);

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
      setImageUrl(e.target.files[0])
  }

  function fileUploadHandler(e){
    e.preventDefault();
      // const fd = {
      //     name:info.name,
      //     email:info.email,
      //     phoneNum:info.phoneNum,
      //     address:info.address,
      //     description:info.description,
      //     title:info.title,
      //     imageDonor:'/media/main/static/'+(imageUrl)
      // }

      const fd = new FormData();
      fd.append('name',info.name);
      fd.append('email',info.name);
      fd.append('phoneNum',info.phoneNum);
      fd.append('address',info.phoneNum);
      fd.append('description',info.description);
      fd.append('title',info.title);
      fd.append('imageDonor',imageUrl,imageUrl.name)
      // console.log(fd);
      e.preventDefault()  

      axios.post('http://127.0.0.1:8000/donor/',fd).then(function (response) {
        // console.log(response);
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
        <h1 className="text-center">For Individual Donor</h1>
        <div className="card mx-auto w-75">
          <div className="card-body">
            <form>
              <div className="form-group mt-3">
                <input onChange={handleChange}
                  value={info.name}
                  type="text"
                  name="name"
                  placeholder="Full Name: *"
                  className="input_form"
                  required
                ></input>
              </div>
              <div className="form-group mt-3">
                <input onChange={handleChange}
                  value={info.email}
                  type="email"
                  name="email"
                  placeholder="Email: *"
                  className="input_form"
                  required
                ></input>
              </div>
              <div className="form-group mt-3">
                <input onChange={handleChange}
                  value={info.phoneNum}
                  type="text"
                  name="phoneNum"
                  placeholder="Phone Number: *"
                  className="input_form"
                  required
                ></input>
              </div>
              <div className="form-group mt-3">
                <input onChange={handleChange}
                  value={info.address}
                  type="text"
                  name="address"
                  placeholder="Address: *"
                  className="input_form"
                  required
                ></input>
              </div>
              <div className="form-group mt-3">
                <input onChange={handleChange}
                  value={info.title}
                  type="text"
                  name="title"
                  placeholder="Title of Request: *"
                  className="input_form"
                  required
                ></input>
              </div>
              <div className="form-group mt-3">
                <textarea onChange={handleChange}
                  value={info.description}
                  type="text"
                  name="description"
                  placeholder="Please help us understand your requirements by providing us with the required informations: *
                            1. A breif description about your how you have started such society welfare activities.
                            2. What kind of help do you want?
                            3. Who will be the user of these product and why do they need these product?                    
                            "
                  className="input_form1"
                  required
                ></textarea>
              </div>
              <div className="form-group mt-3">
                <input onChange={imageHandler}
                  type="file"
                  class="form-control-file input_form"
                  name="imageDonor"
                  
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
