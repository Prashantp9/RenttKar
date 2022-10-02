import React from "react";
import { Calender, OrderAccepted, SmallCross } from "../../assets";
import "./mobilemylistingcancellation.css";

import { Link } from "react-router-dom";
import { useState } from "react";

const Mobilemylistingcancellation = () => {
  const [isCancel, setIsCancel] = useState(false);
  return (
    <>
      <div className="mobile-mynewlisting-cancellation-heading-container">
        <div className="mobile-mynewlisting-cancellation-heading-content">
          <p>
            Cancel Lending{" "}
            <Link to="/mylisting">
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </p>
        </div>
      </div>

      <div className="mobile-mynewlisting-cancellation-desc-container">
        <div className="mobile-mynewlisting-cancellation-desc-content">
          <p id="mynewlisting-cancellation-reason-heading-desc">
            Lorem Ipsum you will be charged for cancelling the product before
            the tennure period. Cancellation request may take 24hr.
          </p>

          <p id="mynewlisting-cancellation-reason-heading">
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

          <div className="mobile-mylisting-cancellation-calender-container">
            <input type="date" name="" id="" />
            <div className="mobile-mylisting-cancellation-calender-img-container">
              <img src={Calender} alt="calender" />
            </div>
          </div>

          <button type="submit" onClick={() => setIsCancel(!isCancel)}>
            Cancel Lending
          </button>
          {isCancel && (
            <>
              <div className="mobile-mylisting-cancellation-done-container">
                <img src={OrderAccepted} alt="orderaccept" />
                <p id="mobile-cancellation-done-text">Cancellation Request Sent</p>
                <p id="mobile-cancellation-done-desc">
                  Your order cancellation request is being processed. We will
                  get back to you within 24hrs, for further inquiry Contact Us.
                </p>
                <button>
                    <Link to="/mylisting" style={{textDecoration:"none", color:"#FFFFFF"}}>Done</Link>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mobilemylistingcancellation;
