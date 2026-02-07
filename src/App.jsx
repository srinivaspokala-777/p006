import React, { useState } from 'react';
import './App.css';

const App = () => {
  const IMGURL = import.meta.env.BASE_URL;
  const [tooglePassword, setTooglePassword] = useState("password");
  const [toogleConfirmPassword, setToogleConfirmPassword] = useState("password");
 const[isLoginview,setIsLoginview]=useState(true);
  function tooglePwd(){
    setTooglePassword(tooglePassword === "password" ? "text" : "password");
  }

  function toogleConfirmPwd(){
    setToogleConfirmPassword(toogleConfirmPassword === "password" ? "text" : "password");
  }
  function switchview(){
    setIsLoginview(isLoginview==true? false:true);
  }

  return (
    <div className='app'>
      {isLoginview ==true &&
      <div className='login-container'>
        <h2>Sign in with email</h2>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "email.png"} alt='' />
          <input type='text' placeholder='Enter your email' />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "password.png"} alt='' />
          <input type={tooglePassword} placeholder='Enter your password' />
          <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div>
        <div className='forgot-password'>Forgot <label>Password</label>?</div>
        <button>Get Started</button>
        <p>Don't have an account? <label onClick={()=>switchview()}>Sign up</label></p>
      </div>
  }
  {isLoginview==false &&
      <div className='signup-container'>
        <h2>Create Account</h2>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "user.png"} alt='' />
          <input type='text' placeholder='Full Name' />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "email.png"} alt='' />
          <input type='text' placeholder='Email' />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "telephone.png"} alt='' />
          <input type='text' placeholder='Mobile Number' />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "password.png"} alt='' />
          <input type={tooglePassword} placeholder='Password' />
          <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>tooglePwd()} />
        </div>
        <div className='input-group'>
          <img className='left-icon' src={IMGURL + "password.png"} alt='' />
          <input type={toogleConfirmPassword} placeholder='Confirm Password' />
          <img className='right-icon' src={IMGURL + "eye.png"} alt='' onClick={()=>toogleConfirmPwd()} />
        </div>
        <button>Register</button>
        <p>Already have an account? <label onClick={()=>switchview()}>Login Here</label></p>
      </div>
}
    </div>
  
  );
}

export default App;