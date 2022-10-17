import React from "react";
import { useState } from "react";
import { Calender, OrderAccepted, SmallCross } from "../../assets";
import "./myordercancellation.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Myordercancellation = (props) => {
  const [isCancel, setIsCancel] = useState(false);

  useEffect(() => {
    if(isCancel) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "relative";
    }
  })

  if (window.innerWidth <= 768) {
    return (
      <>
        <div className="myorder-cancellation-container">
          <div className="myorder-cancellation-content">
            <p id="cancellation-text">
              Request a Cancellation{" "}
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                onClick={props.onclick}
              />
            </p>
            <p id="cancellation-desc">
              Did something go wrong? Contact us. We are sorry to hear you
              cancel the product before the tenure. You may be charged for the
              cancellation of the product before your tenure.
            </p>
            <p id="cancellation-reason">Select a reason for cancellation</p>

            <label htmlFor="">
              <input type="radio" name="" id="" />
              <span>Defective product received</span>
            </label>

            <label htmlFor="">
              <input type="radio" name="" id="" />
              <span>Defective product received</span>
            </label>

            <label htmlFor="">
              <input type="radio" name="" id="" />
              <span>The product has been damaged</span>
            </label>

            <label htmlFor="">
              <input type="radio" name="" id="" />
              <span>Others</span>
            </label>

            <input
              type="text"
              name=""
              id=""
              placeholder="Reason for cancellation"
            />

            <div className="myorder-cancellation-calender-container">
              <div className="cancellation-calender-content">
                <input type="date" name="" id="" />
                <div className="calender-img">
                  <img src={Calender} alt="calender" />
                </div>
              </div>
              <button type="submit" onClick={() => setIsCancel(!isCancel)}>
                Confirm Cancellation
              </button>
              {isCancel && (
                <>
                  <div className="myorder-cancellation-submitted-container">
                    <div className="myorder-cancellation-submitted-content">
                      <img src={OrderAccepted} alt="orderaccept" />
                      <p id="cancel-request-text">Cancellation Request Sent</p>
                      <p id="cancel-request-desc">
                        Your cancellation request is being processed. We will
                        get back to you within 24 hours of a working day, for
                        further enquiry{" "}
                        <span style={{ color: "#0E9BE1" }}>Contact us.</span>
                      </p>
                      <button
                        type="submit"
                        id="cancel-request-done-btn"
                        onClick={props.onclick}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-cancellation-container">
          <div className="myorder-cancellation-content">
            <p id="cancellation-text">
              Request a Cancellation{" "}
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                onClick={props.onclick}
              />
            </p>
            <p id="cancellation-desc">
              Did something go wrong? Contact us. We are sorry to hear you
              cancel the product before the tenure. You may be charged for the
              cancellation of the product before your tenure.
            </p>
            <p id="cancellation-reason">Select a reason for cancellation</p>

            <label htmlFor="">
              <input type="radio" name="" id="" />
              <span>Defective product received</span>
            </label>

            <label htmlFor="">
              <input type="radio" name="" id="" />
              <span>Defective product received</span>
            </label>

            <label htmlFor="">
              <input type="radio" name="" id="" />
              <span>The product has been damaged</span>
            </label>

            <label htmlFor="">
              <input type="radio" name="" id="" />
              <span>Others</span>
            </label>

            <input
              type="text"
              name=""
              id=""
              placeholder="Reason for cancellation"
            />

            <div className="myorder-cancellation-calender-container">
              <div className="cancellation-calender-content">
                <input type="date" name="" id="" />
                <div className="calender-img">
                  <img src={Calender} alt="calender" />
                </div>
              </div>
              <button type="submit" onClick={() => setIsCancel(!isCancel)}>
                Request Cancellation
              </button>
              {isCancel && (
                <>
                  <div className="myorder-cancellation-submitted-container">
                    <div className="myorder-cancellation-submitted-content">
                      <img src={OrderAccepted} alt="orderaccept" />
                      <p id="cancel-request-text">Cancellation Request Sent</p>
                      <p id="cancel-request-desc">
                        Your cancellation request is being processed. We will
                        get back to you within 24 hours of a working day, for
                        further enquiry{" "}
                        <span style={{ color: "#0E9BE1" }}>Contact us.</span>
                      </p>
                      <button
                        type="submit"
                        id="cancel-request-done-btn"
                        onClick={props.onclick}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Myordercancellation;
