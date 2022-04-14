import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Login.css';
export default function Login() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        password:"",
        password2:""
      });

      const navigate = useNavigate();
    function handleChange(event){
        const {name,value} = event.target;
        
        setContact(prevValue => {
            
            return {
              ...prevValue,
              [name]: value
            };
          });
    }
    
    function formSubmitHandler(e){
        e.preventDefault();
        console.log(contact);
        axios.post('http://127.0.0.1:8000/user/',contact).then(function (response) {
            // console.log(response);
            navigate('/');
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    
  return (
    <>
    <Navbar/>
    <section className="login-block">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12">
                <form className="md-float-material form-material" action="#" method="POST">
                    <div className="auth-box card">
                        <div className="card-block">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649315522/Sahyog__2_-removebg-preview_hp3d2v.png' alt='...' className='logo'></img>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                <h3 className="text-center heading">Register Here</h3>
                                </div>
                            </div>
                            <div className="form-group form-primary"> <input type="text" className="form-control" onChange = {handleChange} name="name" value={contact.name}  placeholder="Name" id="first_name"></input> </div>
                            <div className="form-group form-primary"> <input type="text" className="form-control" onChange = {handleChange} name="email" value={contact.email}  placeholder="Email" id="email"></input> </div>
                            <div className="form-group form-primary"> <input type="password" className="form-control" onChange = {handleChange} name="password" placeholder="Password" value={contact.password}  id="password"></input> </div>
                            <div className="form-group form-primary"> <input type="password" className="form-control" onChange = {handleChange} name="password2" placeholder="Repeat password" value={contact.password2} id="password_confirm"></input> </div>
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center"> <input type="submit" onClick={formSubmitHandler} className="btn btn-md btn-block waves-effect text-center m-b-20 submitButton" name="submit" value="Signup Now"></input> 
                                </div>
                            </div>
                            <div className="or-container">
                                <div className="line-separator"></div>
                                <div className="or-label">or</div>
                                <div className="line-separator"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center"> <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt='...'></img> Signup Using Google</a> </div>
                            </div> <br></br>
                            <p className="text-inverse text-center">Already have an account? <Link to='/signin' className='nav-link active'>LogIn</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    <Footer />
    </>
      )
}
