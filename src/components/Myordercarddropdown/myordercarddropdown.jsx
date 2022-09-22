import React from "react";
import { useState } from "react";
import { MyorderCancellation, MyorderPackageDetails, MyorderProductsupport } from "..";
import { Cancellation, Download, Help, Packagedetails } from "../../assets";
import "./myordercarddropdown.css";

const Myordercarddropdown = () => {
  const [isProduct, setIsProduct] = useState(false);
  const [isPackage, setIsPackage] = useState(false);
  const [isCancellation, setIsCancellation] = useState(false);
  return (
    <>
      <div className="myorder-dropdown-container">
        <p onClick={() => setIsProduct(!isProduct)} style={{cursor:"pointer"}}><img src={Help} alt="help" style={{width:"1.25rem",height:"1.25rem",marginRight:"0.688rem", cursor:"pointer"}}/> Product Support</p>
        {isProduct && <MyorderProductsupport onclick={() => setIsProduct(!isProduct)}/>}
        <p><img src={Download} alt="download" style={{width:"0.875rem",height:"1.125rem",marginRight:"1rem"}}/> Download Agreement</p>
        <p style={{cursor:"pointer"}} onClick={() => setIsPackage(!isPackage)}><img src={Packagedetails} alt="packagedetails" style={{width:"1.25rem",height:".75rem",marginRight:"0.688rem"}}/> Package Details</p>
        {isPackage && <MyorderPackageDetails onclick={() => setIsPackage(!isPackage)}/>}
        <p><img src={Download} alt="download" style={{width:"0.875rem",height:"1.125rem",marginRight:"1rem"}}/> Download Invoice</p>
        <p style={{cursor:"pointer"}} onClick={() => setIsCancellation(!isCancellation)}><img src={Cancellation} alt="Cancellation" style={{width:"1.25rem",height:"1.25rem",marginRight:"0.688rem"}}/> Request For Cancellation</p>
        {isCancellation && <MyorderCancellation onclick={() => setIsCancellation(!isCancellation)}/>}
      </div>
    </>
  );
};

export default Myordercarddropdown;
