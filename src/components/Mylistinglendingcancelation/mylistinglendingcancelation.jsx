import React from "react";
import { useState } from "react";
import { Calender, OrderAccepted, SmallCross } from "../../assets";
import "./mylistinglendingcancelation.css";

const Mylistinglendingcancelation = (props) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <div className="mylisting-lending-cancelation-container">
        <div className="mylisting-lending-cancelation-content">
          <p id="mylisting-cancel-text">
            Cancel Lending{" "}
            <img
              src={SmallCross}
              alt="smallcross"
              style={{ width: "1.5rem", height: "1.5rem", cursor:"pointer"}}
              onClick={props.onclick}
            />
          </p>
          <p id="mylisting-cancel-desc">
            Lorem Ipsum you will be charged for cancelling the product before
            the tennure period. Cancellation request may take 24hr.
          </p>
          <p id="mylisting-select-cancel-reason-heading">
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
            <span>Product not required</span>
          </label>

          <label htmlFor="">
            <input type="radio" name="" id="" />
            <span>
              Others reason please specify to improve our service and products
            </span>
          </label>

          <input
            type="text"
            name=""
            id=""
            placeholder="Reason for cancellation"
          />
          <div className="mylisting-cancellation-button-container">
            <div className="mylisting-cancellation-calender">
              <input type="date" name="" id="" />
              <div className="mylisting-cancellation-calender-logo">
                <img src={Calender} alt="calender" />
              </div>
            </div>
            <button type="submit" onClick={() => setIsDone(!isDone)}>
              Cancel Lending
            </button>
            {isDone && (
              <>
                <div className="mylisting-cancel-done-container">
                  <div className="mylisting-cancel-done-content">
                    <img src={OrderAccepted} alt="orderaccept" />
                    <p id="cancellation-request-text">Cancellation Request Sent</p>
                    <p id="cancellation-request-desc">
                      Your order cancellation request is being processed. We
                      will get back to you within 24hrs, for further inquiry
                    </p>
                    <p id="cancellation-contact-text">Contact Us.</p>
                    <button onClick={props.onclick}>Done</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mylistinglendingcancelation;
