import React from "react";
import { Calender, DownArrow } from "../../assets";
import { Footer, Navbar } from "../../components";
import "./myprofile.css";

const Myprofile = () => {
  if(window.innerWidth <= 576){
    return (
        <>
          <Navbar />
          <div className="myprofile-personal-details-container">
            <div className="myprofile-personal-details-content">
              <div className="myprofile-personal-details-heading-container">
                <p>Personal Details</p>
              </div>
    
              <div className="myprofile-personal-details-desc-container">
                <div className="myprofile-full-name-container">
                  <p>Full Name</p>
                  <input type="text" name="" id="" placeholder="Enter your name" />
                </div>
    
                <div className="myprofile-gender-container">
                  <p>Gender</p>
                  <select id="cars" name="cars">
                    <option value="select gender">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
    
    
                <div className="myprofile-full-name-container">
                  <p>Date of Birth</p>
                  <div className="myprofile-date-input-container">
                  <input type="date" name="" id="" />
                  <img src={Calender} alt="calender" />
                  </div>
                </div>
    
    
    
                <div className="myprofile-phone-no">
                  <p>Mobile Phone</p>
                  <input type="tel" name="" id="" placeholder="8369745689" minLength={10} maxLength={10}/>
                </div>
    
    
    
                <div className="myprofile-alternate-phone-no">
                  <p>Alternative Contact No.</p>
                  <input type="tel" name="" id="" placeholder="8369745689" minLength={10} maxLength={10}/>
                </div>
    
    
    
                <div className="myprofile-email">
                  <p>Email Id</p>
                  <input type="email" name="" id="" placeholder="ronakkumar@gmail.com" />
                </div>
    
    
                
    
                <button type="submit">Save Changes</button>
              </div>
            </div>
          </div>
        </>
      );
  }

  if(window.innerWidth <= 991){
    return (
        <>
          <Navbar />
          <div className="myprofile-personal-details-container">
            <div className="myprofile-personal-details-content">
              <div className="myprofile-personal-details-heading-container">
                <p>Personal Details</p>
              </div>
    
              <div className="myprofile-personal-details-desc-container">
                <div className="myprofile-full-name-container">
                  <p>Full Name</p>
                  <input type="text" name="" id="" placeholder="Enter your name" />
                </div>
    
                <div className="myprofile-gender-container">
                  <p>Gender</p>
                  <select id="cars" name="cars">
                    <option value="select gender">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
    
    
                <div className="myprofile-full-name-container">
                  <p>Date of Birth</p>
                  <div className="myprofile-date-input-container">
                  <input type="date" name="" id="" />
                  <img src={Calender} alt="calender" />
                  </div>
                </div>
    
    
    
                <div className="myprofile-phone-no">
                  <p>Mobile Phone</p>
                  <input type="tel" name="" id="" placeholder="8369745689" minLength={10} maxLength={10}/>
                </div>
    
    
    
                <div className="myprofile-alternate-phone-no">
                  <p>Alternative Contact No.</p>
                  <input type="tel" name="" id="" placeholder="8369745689" minLength={10} maxLength={10}/>
                </div>
    
    
    
                <div className="myprofile-email">
                  <p>Email Id</p>
                  <input type="email" name="" id="" placeholder="ronakkumar@gmail.com" />
                </div>
    
    
                
    
                <button type="submit">Save Changes</button>
              </div>
            </div>
          </div>

          <Footer />
        </>
      );
  } else {
    return (
        <>
          <Navbar />
          <div className="myprofile-personal-details-container">
            <div className="myprofile-personal-details-content">
              <div className="myprofile-personal-details-heading-container">
                <p>Personal Details</p>
              </div>
    
              <div className="myprofile-personal-details-desc-container">
                <div className="myprofile-full-name-container">
                  <p>Full Name</p>
                  <input type="text" name="" id="" placeholder="Enter your name" />
                </div>
    
                <div className="myprofile-gender-container">
                  <p>Gender</p>
                  <select id="cars" name="cars">
                    <option value="select gender">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
    
    
                <div className="myprofile-full-name-container">
                  <p>Date of Birth</p>
                  <div className="myprofile-date-input-container">
                  <input type="date" name="" id="" />
                  <img src={Calender} alt="calender" />
                  </div>
                </div>
    
    
    
                <div className="myprofile-phone-no">
                  <p>Mobile Phone</p>
                  <input type="tel" name="" id="" placeholder="8369745689" minLength={10} maxLength={10}/>
                </div>
    
    
    
                <div className="myprofile-alternate-phone-no">
                  <p>Alternative Contact No.</p>
                  <input type="tel" name="" id="" placeholder="8369745689" minLength={10} maxLength={10}/>
                </div>
    
    
    
                <div className="myprofile-email">
                  <p>Email Id</p>
                  <input type="email" name="" id="" placeholder="ronakkumar@gmail.com" />
                </div>
    
    
                
    
                <button type="submit">Save Changes</button>
              </div>
            </div>
          </div>
        </>
      );
  }

};

export default Myprofile;
