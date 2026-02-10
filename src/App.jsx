import React, { useState } from 'react';
import './App.css';
import Toast from './Toast';

const App = () => {
  const IMGURL = import.meta.env.BASE_URL;
  const [tooglePassword, setTooglePassword] = useState("password");
  const [toogleConfirmPassword, setToogleConfirmPassword] = useState("password");
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({email: "", password: "", fullname: "", mobile: "", cpassword: ""});
  const [errorData, setErrorData] = useState({});
  const [toast, setToast] = useState({});

  function tooglePwd(){
    setTooglePassword(tooglePassword === "password" ? "text" : "password");
  }

  function toogleConfirmPwd(){
    setToogleConfirmPassword(toogleConfirmPassword === "password" ? "text" : "password");
  }

  function switchView(){
    setErrorData({});
    setFormData({fullname: "", email: "", mobile: "", password: "", cpassword: ""});
    setIsLoginView(isLoginView === true ? false : true);
  }

  function handleInput(e){
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  function signin(){
    if(validatesignin())
      return;

    setToast({type: "success", message: "From Sign In", id: Date.now()});
    //alert("Testing");
  }

  function validatesignin(){
    let errors = {};
    if(formData.email.trim() === "")
      errors.email = true;
    if(formData.password.trim() === "")
      errors.password = true;
    setErrorData(errors);
    return Object.keys(errors).length > 0;
  }

  function signup(){
    if(validatesignup())
      return;

    alert("From Signup");
  }

  function validatesignup(){
    let errors = {};
    if(formData.fullname.trim() === "")
      errors.fullname = true;
    if(formData.email.trim() === "")
      errors.email = true;
    if(formData.mobile.trim() === "")
      errors.mobile = true;
    if(formData.password.trim() === "")
      errors.password = true;
    if(formData.cpassword.trim() === "")
      errors.cpassword = true;
    setErrorData(errors);
    return Object.keys(errors).length > 0;
  }

  return (
    <div className='app'>
      {isLoginView === true && 
        <div className='login-container'>
          <h2>Sign in with email</h2>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "email.png"} alt='' />
            <input type='text' className={errorData.email ? "error" : ""} placeholder='Enter your email' name='email' value={formData.email} onChange={(e)=>handleInput(e)} />
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "password.png"} alt='' />
            <input type={tooglePassword} className={errorData.password ? "error" : ""} placeholder='Enter your password' name='password' value={formData.password} onChange={(e)=>handleInput(e)} />
            <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>tooglePwd()} />
          </div>
          <div className='forgot-password'>Forgot <label>Password</label>?</div>
          <button onClick={()=>signin()}>Get Started</button>
          <p>Don't have an account? <label onClick={()=>switchView()}>Sign up</label></p>
        </div>
      }

      {isLoginView === false &&
        <div className='signup-container'>
          <h2>Create Account</h2>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "user.png"} alt='' />
            <input type='text' className={errorData.fullname ? "error" : ""} placeholder='Full Name' name='fullname' value={formData.fullname} onChange={(e)=>handleInput(e)} />
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "email.png"} alt='' />
            <input type='text' className={errorData.email ? "error" : ""} placeholder='Email' name='email' value={formData.email} onChange={(e)=>handleInput(e)} />
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "telephone.png"} alt='' />
            <input type='text' className={errorData.mobile ? "error" : ""} placeholder='Mobile Number' name='mobile' value={formData.mobile} onChange={(e)=>handleInput(e)} />
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "password.png"} alt='' />
            <input type={tooglePassword} className={errorData.password ? "error" : ""} placeholder='Password' name='password' value={formData.password} onChange={(e)=>handleInput(e)} />
            <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>tooglePwd()} />
          </div>
          <div className='input-group'>
            <img className='left-icon' src={IMGURL + "password.png"} alt='' />
            <input type={toogleConfirmPassword} className={errorData.cpassword ? "error" : ""} placeholder='Confirm Password' name='cpassword' value={formData.cpassword} onChange={(e)=>handleInput(e)} />
            <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>toogleConfirmPwd()} />
          </div>
          <button onClick={()=>signup()}>Register</button>
          <p>Already have an account? <label onClick={()=>switchView()}>Login Here</label></p>
        </div>
      }

      <Toast toastData={toast} />
    </div>
  );
}

export default App;