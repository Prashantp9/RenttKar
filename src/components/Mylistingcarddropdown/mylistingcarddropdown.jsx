import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Cancellation,
  Download,
  Help,
  Packagedetails,
  PriceInfo,
  OrderAccepted
} from "../../assets";
import Mylistinglendingcancelation from "../Mylistinglendingcancelation/mylistinglendingcancelation";
import "./mylistingcarddropdown.css";

const Mylistingcarddropdown = (props) => {
  const[isCancel, setIsCancel] = useState(false);

  if(window.innerWidth <= 576){
    return(
      <>
         <div className="mylisting-card-dropdown-container">
          <div className="mylisting-card-dropdown-content">
            <p><Link to="/mobilemynewlistingcancellation" style={{textDecoration:"none", color:"#FFFFFF"}}><img src={Cancellation} alt="cancellation" style={{width:"1rem",height:"1rem",marginRight:".5rem"}}/> Cancel Lending </Link></p>
            <p><img src={Download} alt="download" style={{marginRight:".6rem"}}/> Download Agreement</p>
            <p><img src={Download} alt="download" style={{marginRight:".6rem"}}/> Download Invoice</p>
            <p><img src={PriceInfo} alt="priceinfo" style={{marginRight:".6rem"}}/> Product Support</p>
          </div>  
        </div> 
      </>
    );
  }else {
    return(
      <>
         <div className="mylisting-card-dropdown-container">
          <div className="mylisting-card-dropdown-content">
            <p onClick={() => setIsCancel(!isCancel)}><img src={Cancellation} alt="cancellation" style={{width:"1rem",height:"1rem",marginRight:".5rem"}}/> Cancel Lending</p>
            {isCancel && <Mylistinglendingcancelation onclick={props.onclick}/>}
            <p><img src={Download} alt="download" style={{marginRight:".6rem"}}/> Download Agreement</p>
            <p><img src={Download} alt="download" style={{marginRight:".6rem"}}/> Download Invoice</p>
            <p><img src={PriceInfo} alt="priceinfo" style={{marginRight:".6rem"}}/> Product Support</p>
          </div>  
        </div> 
      </>
    );
  }
};

export default Mylistingcarddropdown;
