import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });
  const navigate = useNavigate();
  let name;
  let value;
  const userInput =(event)=>{
    name=event.target.name;
    value=event.target.value;
    setUser({...user,[name]:value})
  }

  const postdata=async(e)=>{
    e.preventDefault();
    const{name,email,phone,work,password,cpassword}=user;
    const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });
    const data = await res.json();
    if(data === 422 ||!data){
      window.alert("invalid credentials");
    }else{
      window.alert("user registered succesfully");
    }
    navigate("/login")
  }
  return (
    <>
 <div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>Responsive Registration Form</h2>
    </div>
    <div className="row clearfix">
      <div className="">
        <form method='POST'>
        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="text" name="name" placeholder="Enter Your Name" 
            value={user.name} 
            onChange={userInput} required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="email" name="email" placeholder="Email" 
            value={user.email} 
            onChange={userInput} required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="text" name="phone" placeholder="Mobile Number" 
            value={user.phone} 
            onChange={userInput} required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
            <input type="text" name="work" placeholder="Profesion" 
            value={user.work} 
            onChange={userInput} required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
            <input type="password" name="password" placeholder="Password" 
            value={user.password} 
            onChange={userInput} required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
            <input type="password" name="cpassword" placeholder="Confirm Password" 
            value={user.cpassword} 
            onChange={userInput} required />
          </div>
  
          <input className="button" onClick={postdata} type="submit" value="Register" />
        </form>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Signup