import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About"
import Request from "./Pages/Request";
import Campaign from "./Pages/Campaign";
import SignIn from "./Pages/SignIn";
import HowitWorks from "./Pages/HowitWorks";
import NGO from "./Pages/NGO";
import Donor from "./Pages/Donor";
import { useEffect, useState } from "react";
import DonatePage from "./Pages/DonatePage";
const PageNotFound = () => {
  return (
    <div id="main">
      <div class="fof">
        <h1>Error 404</h1>
        <br></br>
        <h1>Sorry, The page doesn't Exists</h1>
      </div>
    </div>
  );
};

function App() {
  const [isAuth,setIsAuth] = useState(false);
  useEffect(()=>{
    const userLoggedIn = localStorage.getItem('login');
    console.log(userLoggedIn)
    if(userLoggedIn!==null)
    {
      setIsAuth(true);
    }
  },[]);

  
  return (
    <BrowserRouter>  
        <Routes>
          <Route path='/' element={<Home/>} exact={true} ></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/request' element={!isAuth?(<SignIn state = {setIsAuth}/>):(<Request/>)} ></Route>
          <Route path='/campaign' element={<Campaign/>} ></Route>
          <Route path='/howitworks' element={<HowitWorks/>} ></Route>
          <Route path='/ngo' element={<NGO/>} ></Route>
          <Route path='/donor' element={<Donor/>} ></Route>
          <Route path='/donate' element={<DonatePage/>} ></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
