import React from "react";
import Navbar from "../../components/Navbar/navbar";
import "./otp.css";

// images
import { LoginImg, Frame } from "../../assets";

const Otp = () => {
  return (
    <>
      <Navbar />
      <div className="otpContainer">
        <div className="otpContent">
          <div className="artWork">
            <img src={LoginImg} alt="image" id="otpImg" />
            <img src={Frame} alt="Frame" id="otpframe" />
          </div>
          <div className="otpDetails">
            <p id="otpText">Enter OTP</p>
            <p id="otpDesc">Enter OTP code sent to +91 8369421326 </p>
            <a href="" id="changeNumber">Change Number</a>
            <div className="otpNumberContainer">
              <input
                name="otp1"
                type="text"
                autoComplete="off"
                className="otpInput"
                tabIndex="1"
                maxLength="1"
                value="2"
              />
              <input
                name="otp2"
                type="text"
                autoComplete="off"
                className="otpInput"
                tabIndex="2"
                maxLength="1"
                value="4"
              />
              <input
                name="otp3"
                type="text"
                autoComplete="off"
                className="otpInput"
                tabIndex="3"
                maxLength="1"
                value="5"
              />
              <input
                name="otp4"
                type="text"
                autoComplete="off"
                className="otpInput"
                tabIndex="4"
                maxLength="1"
                value="7"
              />

              <input
                name="otp5"
                type="text"
                autoComplete="off"
                className="otpInput"
                tabIndex="5"
                maxLength="1"
                value="0"
              />

               <input
                name="otp6"
                type="text"
                autoComplete="off"
                className="otpInput"
                tabIndex="6"
                maxLength="1"
                value="3"
              />
            </div>
            <p id='resend'>Didn’t recieve the OTP? <a href="" style={{textDecoration:"none", color:"#0E9BE1"}}>Resend OTP</a></p>
            <button type="submit" className='otpBtn'> 
                  <a href="#" style={{textDecoration:"none",color:"#fff"}}>Confirm</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
