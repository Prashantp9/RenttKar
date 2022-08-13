import React from 'react'
import Navbar from "../../components/Navbar/navbar";
import { BsFillCheckCircleFill } from 'react-icons/bs';


import './registeration.css';



// images
import { LoginImg, Frame, Person, Email, Referal, MobilePhone } from '../../assets';
import { useState } from 'react';

const Registeration = () => {

    const [valid, setValidation] = useState(false);

  return (
    <>
        <Navbar />
        <div className="registerContainer">
            <div className="registerContent">
                <div className="registerArtWork">
                    <img src={LoginImg} alt="image" id="registerImg" />
                    <img src={Frame} alt="Frame" id="registerframe" />
                </div>
                <div className="registerDetails">
                    <p id="registerText">We Need Some Info!</p>
                    <p id="registerDesc">Enter your details to proceed further.</p>
                    <div className="registerPersonDetails">
                        <div className="personName">
                            <img src={Person} alt="" />
                            <input style={{marginLeft:".5rem"}} type="text" name="name" id="" placeholder='Enter your name'/>
                        </div>
                        <div className="personEmail">
                            <img src={Email} alt="" />
                            <input style={{marginLeft:".3rem"}} type="email" name="email" id="" placeholder='Email address'/>
                        </div>
                        <div className="personNumber">
                            <img src={MobilePhone} alt="" />
                            <input style={{marginLeft:".7rem"}} type="tel" name="phone" id="" placeholder='Phone number' pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxLength={10} onChange={(e) => {
                                if(e.target.value.length === 10){
                                    setValidation(true);
                                }else{
                                    setValidation(false);
                                }
                            }}/>
                            {valid ? <BsFillCheckCircleFill className='checkCircle'/>: ''}
                        </div>
                        <div className="referal">
                            <img src={Referal} alt="" />
                            <input style={{marginLeft:".2rem"}} type="text" name="referal" id="" placeholder='Referal code if any' />
                        </div>
                    </div>
                    <button type="submit" className='registerBtn'> 
                        Submit
                    </button>
                </div>
             </div>
        </div>
    </>
  )
}

export default Registeration