import React from "react";
import { Cancellation, Download, Help, Packagedetails } from "../../assets";
import "./myordercarddropdown.css";

const Myordercarddropdown = () => {
  return (
    <>
      <div className="myorder-dropdown-container">
        <p><img src={Help} alt="help" style={{width:"1.25rem",height:"1.25rem",marginRight:"0.688rem"}}/> Product Support</p>
        <p><img src={Download} alt="download" style={{width:"0.875rem",height:"1.125rem",marginRight:"1rem"}}/> Download Agreement</p>
        <p><img src={Packagedetails} alt="packagedetails" style={{width:"1.25rem",height:".75rem",marginRight:"0.688rem"}}/> Package Details</p>
        <p><img src={Download} alt="download" style={{width:"0.875rem",height:"1.125rem",marginRight:"1rem"}}/> Download Invoice</p>
        <p><img src={Cancellation} alt="Cancellation" style={{width:"1.25rem",height:"1.25rem",marginRight:"0.688rem"}}/> Request For Cancellation</p>
      </div>
    </>
  );
};

export default Myordercarddropdown;
