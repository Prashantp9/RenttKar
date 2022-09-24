import React from "react";
import "./mobilemyorderproductcancel.css";

import {
  Calender,
  GoPro,
  GradientCamera,
  OrderAccepted,
  SmallCross,
} from "../../assets";

import { Link } from "react-router-dom";
import { useState } from "react";

const Mobilemyorderproductcancel = () => {
  const [isCancel, setIsCancel] = useState(false);
  return (
    <>
      <div className="mobile-myorder-product-cancel-heading-container">
        <div className="mobile-myorder-product-cancel-heading-content">
          <p>Rent Cancellation</p>
          <Link
            to="/myorder"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            <img
              src={SmallCross}
              alt="smallcross"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </Link>
        </div>
      </div>

      <div className="mobile-myorder-product-cancel-desc-container">
        <div className="mobile-myorder-product-cancel-desc-content">
          <p id="product-cancel-info">
            Did something go wrong? Contact us. We are sorry to hear you cancel
            the product before the tenure. You may be charged for the
            cancellation of the product before your tenure.
          </p>

          <p id="product-cancel-reason-heading">
            Reason for ending subscription
          </p>

          <label htmlFor="">
            <input type="radio" name="" id="" />
            <span>Product not required</span>
          </label>

          <label htmlFor="">
            <input type="radio" name="" id="" />
            <span>Product not required</span>
          </label>

          <label htmlFor="">
            <input type="radio" name="" id="" />
            <span>Product not required</span>
          </label>

          <label htmlFor="">
            <input type="radio" name="" id="" />
            <span>Other reason please specify</span>
          </label>

          <input
            type="text"
            name=""
            id=""
            placeholder="Reason for cancellation"
          />

          <div className="mobile-myorder-product-cancel-calender-container">
            <input type="date" name="" id="" />
            <div className="mobile-calender-img-container">
              <img src={Calender} alt="calender" />
            </div>
          </div>

          <button type="submit" onClick={() => setIsCancel(!isCancel)}>
            Confirm Cancellation
          </button>
          {isCancel && (
            <>
              <div className="mobile-myorder-product-cancel-done-container">
                  <img src={OrderAccepted} alt="orderaccepted" />
                  <p id="mobile-myorder-cancel-text">Cancellation Request Sent</p>
                  <p id="mobile-myorder-cancel-desc">
                    Your cancellation request is being processed. We will get
                    back to you within 24 hours of a working day, for further
                    enquiry Contact us.
                  </p>
                 <button type="submit">
                    <Link to="/myorder" style={{textDecoration:"none",color:"#FFFFFF"}}>Done</Link>
                 </button>
                </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mobilemyorderproductcancel;
