import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassowrd]=useState("");
  const navigate=useNavigate();
  const userLogin=async(e)=>{
    e.preventDefault();
    const res = await fetch("/signin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data= await res.json();
    if(data===400 || !data){
      window.alert("invalid details")
    }else{
      window.alert("user login successful")
    }
    navigate("/");
  }
  return (
    <>
<section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form method='POST'>

          {/* email input */}
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              placeholder="Enter a valid email address" />
            <label className="form-label" for="form3Example3">Email address</label>
          </div>

          {/* input password */}
          <div className="form-outline mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              value={password}
              onChange={(e)=>{setPassowrd(e.target.value)}}
              placeholder="Enter password" />
            <label className="form-label" for="form3Example4">Password</label>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" onClick={userLogin} className="btn btn-primary btn-lg"
              style={{paddingLeft:"2.5rem", paddingRight:"2.5rem"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <button onClick={()=>{navigate("/signup")}}
                className="link-danger">Register</button></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* <!-- Copyright --> */}
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2023 . All rights reserved.
    </div>
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </div>
</section>
    </>
  )
}

export default Login
