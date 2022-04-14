import React,{useState} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function SignIn({state}) {
    
    const [fd,setfd] = useState({
        email:"",
        password:""
    });

    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        event.preventDefault();
        
        setfd((prevValue) => {
          // console.log(prevValue);
          return {
            ...prevValue,
            [name]: value,
          };
        });
      }
  

    function loginUser(e){
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/login/',fd).then(function (response) {
            // console.log(response.data.token);
            localStorage.setItem('login',JSON.stringify({
                login:true,
                token:response.data.token.access
            }))            
            {window. location. reload()}
            navigate('/');
            
          })
          .catch(function (error) {
            alert("Incorrect Email or Password. Please Make sure you are registered");
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
                <form className="md-float-material form-material">
                    <div className="auth-box card">
                        <div className="card-block">
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center">
                                <img src='https://res.cloudinary.com/iit-bhu/image/upload/v1649315522/Sahyog__2_-removebg-preview_hp3d2v.png' alt='..' className='logo'></img>
                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                <h3 className="text-center heading">LogIn Here</h3>
                                </div>
                            </div>
                            <div className="form-group form-primary"> <input onChange={handleChange} type="text" className="form-control"  name="email" value={fd.email} placeholder="Email" id="email"></input> </div>
                            <div className="form-group form-primary"> <input onChange={handleChange} type="password" className="form-control"  name="password" value={fd.password} placeholder="Password" id="password"></input> </div>
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center"> <input onClick={loginUser} type="submit" className="btn btn-md btn-block waves-effect text-center m-b-20 submitButton" name="submit" value="LogIn"></input> 
                                </div>
                            </div>
                            <div className="or-container">
                                <div className="line-separator"></div>
                                <div className="or-label">or</div>
                                <div className="line-separator"></div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 d-flex justify-content-center"> <a className="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" alt='..'></img> SignIn Using Google</a> </div>
                            </div> <br></br>                            
                            <p className="text-inverse text-center">Don't have an account? <Link to='/login' className='nav-link active'>LogIn</Link> </p>
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
