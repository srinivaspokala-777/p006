import React, { useState } from 'react';
import './App.css';

const App = () => {
  const IMGURL = import.meta.env.BASE_URL;
  const [tooglePassword, setTooglePassword] = useState("password");
  const [toogleConfirmPassword, setToogleConfirmPassword] = useState("password");
 const[isLoginview,setIsLoginview]=useState(true);
 const[formData,setFormData]=useState({email:"",password:"",cpassword:"",mobile:"",fullName:""  });
 const[errorData,setErrorData]=useState({email:"",password:"",cpassword:"",mobile:"",fullName:""});
  function tooglePwd(){
    setTooglePassword(tooglePassword === "password" ? "text" : "password");
  }

  function toogleConfirmPwd(){
    setToogleConfirmPassword(toogleConfirmPassword === "password" ? "text" : "password");
  }
  function switchview(){
    setFormData({fullName:"",email:"",mobile:"",password:"",cpassword:""})
    setIsLoginview(isLoginview==true? false:true);
  }
  function handleInput(e){
    const{name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  function signin(){
    if(validatesignin())
      return;
      alert("Login Successfull");
  }
  function validatesignin(){
    let errors={};
    if (formData.email.trim()===""){
      errors.email=true;
      if(formData.password.trim()===""){
        errors.password=true;
        setErrorData(errors);
        return object.keys(errors).length > 0;
      }
    }
  }
  function signup(){
    if(validatesignup())
      return;
    alert("Registered Successfully");
  }
  function validatesignup(){
    let errors={};
    if (formData.fullName.trim()===""){
      errors.fullName=true;
    }
    if (formData.email.trim()===""){
      errors.email=true;
    }
    if (formData.mobile.trim()===""){
      errors.mobile=true;
    }
    if (formData.password.trim()===""){
      errors.password=true;
    }
    if (formData.cpassword.trim()==="" || formData.cpassword!==formData.password){
      errors.cpassword=true;
    }
    setErrorData(errors);
    return Object.keys(errors).length > 0;
  }
  return (
    <div className='app'>
      {isLoginview ==true &&
      <div className='login-container'>
        <h2>Sign in with email</h2>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "email.png"} alt='' />
          <input type='text' className={errorData.email? "error":" "} placeholder='Enter your email' name='email' value={formData.email} onChange={(e)=>handleInput(e)}/>
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "password.png"} alt='' />
          <input type={tooglePassword} className={errorData.password? "error":" "} placeholder='Enter your password'  name='password'  value={formData.password} onChange={(e)=>handleInput(e)}/>
          <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div>
        <div className='forgot-password'>Forgot <label>Password</label>?</div>
        <button onClick={()=>signin()}>Get Started</button>
        <p>Don't have an account? <label onClick={()=>switchview()}>Sign up</label></p>
      </div>
  }
  {isLoginview==false &&
      <div className='signup-container'>
        <h2>Create Account</h2>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "user.png"} alt='' />
          <input type='text' className={errorData.fullName ? "error":""} placeholder='Full Name' value={formData.fullName} onChange={(e)=>handleInput(e)}/>
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "email.png"} alt='' />
          <input type='text' className={errorData.email ? "error":""} placeholder='Email' value={formData.email} onChange={(e)=>handleInput(e)} />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "telephone.png"} alt='' />
          <input type='text' className={errorData.mobile ? "error":""} placeholder='Mobile Number'  value={formData.mobile} onChange={(e)=>handleInput(e)}/>
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "password.png"} alt='' />
          <input type={tooglePassword} className={errorData.password ? "error":""} placeholder='Password'  value={formData.password} onChange={(e)=>handleInput(e)}/>
          <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "password.png"} alt='' />
          <input type={toogleConfirmPassword} className={errorData.cpassword ? "error":""} placeholder='Confirm Password' value={formData.cpassword} onChange={(e)=>handleInput(e)} />
          <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>toogleConfirmPwd()} />
        </div>
        <button onClick={()=>signup()}>Register</button>
        <p>Already have an account? <label onClick={()=>switchview()}>Login Here</label></p>
      </div>
    }
    </div>
  );
}
export default App;