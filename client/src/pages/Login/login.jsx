import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import './login.css';

import { LoginImg, Frame, MobilePhone} from '../../assets';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="loginContainer">
        <div className="loginContent">
          <div className="artWork">
            <img src={LoginImg} alt="image" id='loginImg'/>
            <img src={Frame} alt="Frame" id='loginframe'/>
          </div>
          <div className="loginDetails">
            <p id='loginText'>Login</p>
            <p id='loginDesc'>Let's start by entering your 10-Digit mobile number.</p>
            <div className="mobileNumber">
              <div className="numberInput">
                <img src={MobilePhone} alt="" />
                <input type="tel" name="" id="" placeholder='Mobile Number' maxLength={10}/>
              </div>
              <button type="submit" className='loginBtn'>Send OTP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login