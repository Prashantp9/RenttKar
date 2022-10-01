import React from "react";
import {
  DownArrow,
  OrderAccepted,
  PaymentCard,
  SmallCross,
  UpArrow,
  Upi,
} from "../../assets";
import "./mobilemynewlistingpayment.css";

import { Link } from "react-router-dom";
import { useState } from "react";

const Mobilemynewlistingpayment = () => {
  const [isClick, setIsClick] = useState(false);
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <div className="mobile-mynewlisting-payment-heading-container">
        <div className="mobile-mynewlisting-payment-heading-content">
          <p>
            Payment Details{" "}
            <Link to="/mylisting">
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>{" "}
          </p>
        </div>
      </div>

      <div
        className="mobile-mynewlisting-payment-desc-container"
        style={{ height: isClick ? "59.125rem" : "49.875rem" }}
      >
        <div className="mobile-mynewlisting-payment-desc-content">
          <p id="mynewlisting-payment-desc">
            We require some payment information. Bank details are the most
            preferable due to restrictions on UPI transfers.
          </p>

          <div
            className="mynewlisting-payment-card"
            onClick={() => setIsClick(!isClick)}
            style={{ borderRadius: isClick ? "6px 6px 0px 0px" : "6px" }}
          >
            <p>
              <span>
                <img
                  src={PaymentCard}
                  alt="paymentcard"
                  style={{
                    width: "1.375rem",
                    height: "1rem",
                    marginRight: "1rem",
                  }}
                />{" "}
                Net Banking
              </span>{" "}
              {isClick ? (
                <img src={UpArrow} alt="uparrow" />
              ) : (
                <img src={DownArrow} alt="downarrow" />
              )}
            </p>
          </div>
          {isClick && (
            <>
              <div className="mylisting-payment-bank-details-card">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Account Holder Name"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Bank Account Number"
                />
                <input type="text" name="" id="" placeholder="IFSC Code" />
                <button onClick={() => setIsDone(!isDone)}>
                  Confirm Details
                </button>
                {isDone && (
                  <>
                    <div className="mynewlisting-payment-done-container">
                      <img src={OrderAccepted} alt="orderaccept" />
                      <p id="payment-details-submit-text">
                        Payment Details Submitted
                      </p>
                      <p id="payment-details-submit-desc">
                        Thank you for submitting your payment details!
                      </p>
                      <button>
                        <Link
                          to="/mylisting"
                          style={{ textDecoration: "none", color: "#FFFFFF" }}
                        >
                          Done
                        </Link>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          )}

          <div className="mynewlisting-payment-card">
            <p>
              <span>
                <img
                  src={Upi}
                  alt="upi"
                  style={{
                    width: "0.938rem",
                    height: "1.5rem",
                    marginRight: "1.8rem",
                  }}
                />
                UPI ID
              </span>{" "}
              <img src={DownArrow} alt="downarrow" />
            </p>
          </div>

          <p id="mynewlisting-or-text">or</p>

          <div className="mynewlisting-payment-credit-card">
            <p id="mynewlisting-credit-text">
              <img
                src={PaymentCard}
                alt="paymentcard"
                style={{
                  width: "1.375rem",
                  height: "1rem",
                  marginRight: "1rem",
                }}
              />{" "}
              Credit
            </p>
            <p id="mynewlisting-credit-desc">
              Get credit up to 25% more than cash! Each 1 credit is equal to 1
              rupee.
            </p>
            <button onClick={() => setIsDone(!isDone)}>Get Credit</button>
            {isDone && (
              <>
                <div className="mynewlisting-payment-done-container">
                  <img src={OrderAccepted} alt="orderaccept" />
                  <p id="payment-details-submit-text">
                    Payment Details Submitted
                  </p>
                  <p id="payment-details-submit-desc">
                    Thank you for submitting your payment details!
                  </p>
                  <button>
                    <Link
                      to="/mylisting"
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                    >
                      Done
                    </Link>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilemynewlistingpayment;
