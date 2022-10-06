import React,{useState} from 'react'

import './contactbutton.css'

import { InstagramContainer, headfoneInstagram, PhoneContainer, headfoneWhatsapp, headfonePhone, headfoneCircle, headfoneCross, Head} from '../../assets';


const Contactbutton = () => {

    const [showPopUp, setShowPopUp] = useState(false);  

  return (
    <>
        {showPopUp ?(
        <div className="headfoneSocials">
          <div className="headfoneSocialsContent">
              <div className="instagramContainer">
                <img src={InstagramContainer} id="instaContainer" alt="" />
                <a href="https://www.instagram.com/rentkar_app/">@rentkar</a>
              </div>
              <img src={headfoneInstagram} className="headfoneInstagram" style={{width:"3.151rem", height: "3.151rem"}} alt="" />              
          </div>
          <div className="headfoneSocialsContent">
              <div className="phoneContainer1">
                <img src={PhoneContainer} id="phoneContainer" alt="" />
                <a href="https://faq.whatsapp.com/563219570998715/?helpref=uf_share">+91 912648357</a>
              </div>
              <img src={headfoneWhatsapp} className="headfoneWhatsapp" style={{width:"3.151rem", height: "3.151rem"}} alt=""/>
          </div>
          <div className="headfoneSocialsContent">
              <div className="phoneContainer2">
                <img src={PhoneContainer} id="phoneContainer" alt="" />
                <a href="tel:+91912648357">+91 912648357</a>
              </div>
              <img src={headfonePhone} className="headfonePhone" style={{width:"3.151rem", height: "3.151rem"}} alt=""/>
          </div>

          <img src={headfoneCircle} style={{width:"3.151rem", height: "3.151rem"}} alt="" className="headfoneCircleImg"  onClick={(e) => setShowPopUp(!showPopUp)}/>
          <img src={headfoneCross} alt="" id="headfoneCross" onClick={(e) => setShowPopUp(!showPopUp)}/>
        </div>
        ): (
          <div className="headPhone" >
            <img src={Head} style={{width:"3.151rem", height: "3.151rem"}}  alt="" className="headImg" onClick={(e) => setShowPopUp(!showPopUp)}/>
          </div>
        )

      }
    </>
  )
}

export default Contactbutton