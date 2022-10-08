import React from 'react';

// css
import './footer.css'

// images
import {Insta,  Facebook,  Youtube,  Twitter,  Phone,  Mail} from "../../assets";

const footer = () => {

  return (
    <div className="footerContainer">
      <div className="footerContent">
        {/* logo */}
        <div className="footerLogo"></div>

        {/* socials */}
        <div className="socials" >
          <div className="socialsContent">
            <p style={{color: "#FFFFFF"}}>Follow us on</p>
            <a href=""><img src={Insta} alt="Instagram"  className='insta'/></a>
            <a href=""><img src={Facebook} alt="Facebook" className='facebook'/></a>
            <a href=""><img src={Youtube} alt="Youtube" className='youtube'/></a>
            <a href="" ><img src={Twitter} alt="Twitter" className='twitter'/></a>
          </div>
        </div>
        <div className="contactInfo">              
              {/* phone */}
              <a href="tel:+917900042875"><img src={Phone} alt="Phone" className='phone'/><span className='number'>7900042875</span></a>
        
              {/* phone */}
              <a href="mailto:"><img src={Mail} alt="Mail" className='mail'/><span className='mailId'>rentkarr@gmail.com</span></a>
        </div>
        {/* description */}
        <p className='description'>Rentkar is a leading rental tech platform based in Mumbai, Pune, and Bengaluru. The mission for us is to create a sustainable sharing culture.We are grateful to have served 30,000+ customers with love and quality service.</p>
        {/* footer links */}
        <div className="footer-links">
          <div className="footer-links-content">
            <a href="" className='otherLink'>About Us</a>
            <a href="/policy" className='otherLink'>Policy</a>
            <a href="" className='otherLink'>Refer</a>
            <a href="/Faqs" className='otherLink'>FAQs</a>
            <a href="/blog" className='otherLink'>Blog</a>
            <a href="/contactus" className='otherLink'>ContactUs</a>
            </div>
        </div>

        <p className='copyRight'>All Copyright reserved to Quantum Rental Solutions Pvt. Ltd.</p>
      </div>
    </div>
  )
}

export default footer;