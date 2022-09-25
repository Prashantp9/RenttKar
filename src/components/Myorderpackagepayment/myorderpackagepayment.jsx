import React from "react";
import { useState } from "react";
import { PaymentCard, RightArrow, UpArrow, Upi, Wallet, Mastercard } from "../../assets";
import Orderaccepted from "../Orderaccepted/orderaccepted";
import "./myorderpackagepayment.css";

const Myorderpackagepayment = (props) => {
  const [isClick, setIsClick] = useState(false);
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      <div className="myorder-package-payment-container">
        <div className="myorder-package-payment-content">
          <div className="myorder-package-payment-upperpart">
            <p id="payment-section-text">Payment Section</p>
            <div className="myorder-package-payment-types-container">
              <div className="myorder-package-payment-types-content">
                <div
                  className="package-payment-card"
                  onClick={() => setIsClick(!isClick)}
                >
                  <p>
                    <img
                      src={PaymentCard}
                      alt="paymentcard"
                      style={{
                        width: "1.5rem",
                        height: "1.25rem",
                        marginRight: "1.5rem",
                      }}
                    />
                    Credit/Debit Card
                  </p>
                  {isClick ? (
                    <img src={UpArrow} alt="uparrow" />
                  ) : (
                    <img src={RightArrow} alt="rightarrow" />
                  )}
                </div>
                {isClick && (
                  <>
                    <div className="cards-payment">
                      <div className="payment-card-number">
                        <img src={Mastercard} alt="mastercard" />
                        <input
                          type="text"
                          name="cardnumber"
                          maxLength="16"
                          id=""
                          placeholder="Enter 16-digit card number"
                        />
                      </div>

                      <input
                        className="payment-cards-name"
                        type="text"
                        name=""
                        id=""
                        placeholder="Card Holder's Name"
                      />

                      <div className="payment-card-cvv-container">
                        <div className="payment-card-expiry-container">
                          <select name="" id="" className="expiry-date">
                            <option value="month" selected disabled>
                              month
                            </option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                          /
                          <select name="" id="" className="expiry-year">
                            <option value="year" selected disabled>
                              year
                            </option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                          </select>
                        </div>
                        <input
                          className="payment-cvv-input"
                          type="number"
                          maxLength="3"
                          name="cvvnumber"
                          id=""
                          placeholder="CVV number"
                        />
                      </div>

                      <button type="submit" onClick={() => setIsDone(!isDone)}>
                        Make Payment
                      </button>
                      {isDone && <Orderaccepted onclick={props.onclick} class="order-accept-button" id="myorder-link"/>}
                    </div>
                  </>
                )}

                <div className="package-payment-card">
                  <p>
                    <img
                      src={Upi}
                      alt="Upi"
                      style={{
                        width: "1.125rem",
                        height: "1.875rem",
                        marginRight: "2rem",
                      }}
                    />
                    UPI / QR
                  </p>
                  <img src={RightArrow} alt="rightarrow" />
                </div>

                <div className="package-payment-card">
                  <p>
                    <img
                      src={PaymentCard}
                      alt="paymentcard"
                      style={{
                        width: "1.5rem",
                        height: "1.25rem",
                        marginRight: "1.5rem",
                      }}
                    />
                    Net Banking
                  </p>
                  <img src={RightArrow} alt="rightarrow" />
                </div>

                <div className="package-payment-card">
                  <p>
                    <img
                      src={Wallet}
                      alt="wallet"
                      style={{
                        width: "1.5rem",
                        height: "1.25rem",
                        marginRight: "1.5rem",
                      }}
                    />
                    Wallet
                  </p>
                  <img src={RightArrow} alt="rightarrow" />
                </div>

                <div className="package-payment-card">
                  <p>
                    <img
                      src={PaymentCard}
                      alt="paymentcard"
                      style={{
                        width: "1.5rem",
                        height: "1.25rem",
                        marginRight: "1.5rem",
                      }}
                    />
                    EMI
                  </p>
                  <img src={RightArrow} alt="rightarrow" />
                </div>

                <div className="package-payment-card">
                  <p>
                    <img
                      src={PaymentCard}
                      alt="paymentcard"
                      style={{
                        width: "1.5rem",
                        height: "1.25rem",
                        marginRight: "1.5rem",
                      }}
                    />
                    Pay Later
                  </p>
                  <img src={RightArrow} alt="rightarrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="myorder-package-payment-lowerpart">
            <p>
              <span>To Pay: </span>₹560.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorderpackagepayment;
