import React from "react";
import "./myorderproductsupport.css";

const Myorderproductsupport = () => {
  return (
    <>
      <div className="myorder-productsupport-container">
        <div className="myorder-productsupport-content">
            <p>Product Support</p>
            <p>Are you experiencing turbulence?</p>
            <p>Please give us a detailed synopsis of the issue faced by you below and we will get back to you ASAP!</p>
            <textarea name="productproblem" id="" cols="30" rows="10" placeholder="Mention your problem...."></textarea>
            
        </div>
      </div>
    </>
  );
};

export default Myorderproductsupport;
