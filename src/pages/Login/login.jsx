import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Navbar from '../../components/Navbar/navbar'
import './login.css';

import { LoginImg, Frame, MobilePhone} from '../../assets';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [valid, setValidation] = useState(false);
  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="loginContent">
          <div className="loginArtWork">
            <img src={LoginImg} alt="image" id='loginImg'/>
            <img src={Frame} alt="Frame" id='loginframe'/>
          </div>
          <div className="loginDetails">
            <p id='loginText'>Login</p>
            <p id='loginDesc'>Let's start by entering your 10-Digit mobile number.</p>
            <div className="mobileNumber">
              <div className="numberInput">
                <img src={MobilePhone} alt="" />
                <input type="tel" name="number" id="" placeholder='Mobile Number' pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxLength={10} onChange={(e) => {
                  if(e.target.value.length === 10){
                    setValidation(true);
                  }else{
                    setValidation(false);
                  }
                }}/>
                {valid ? <BsFillCheckCircleFill className='checkCircle'/>: ''}
              </div>
              <button type="submit" className='loginBtn'> 
                  <Link to="/otp" style={{textDecoration:"none",color:"#fff"}}>Send OTP</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login