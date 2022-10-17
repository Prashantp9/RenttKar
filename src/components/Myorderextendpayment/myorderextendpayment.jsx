import React from "react";
import { useState } from "react";
import { MyorderExtendAgreement, MyorderTennureExtend } from "..";
import {
  GradientDone,
  PaymentCard,
  PriceInfo,
  RightArrow,
  UpArrow,
  Upi,
  Wallet,
  Mastercard,
} from "../../assets";
import "./myorderextendpayment.css";

const Myorderextendpayment = (props) => {
  const [isAgreement, setIsAgreement] = useState(false);
  const [isCredit, setIsCredit] = useState(false);
  const [isDone, setIsDone] = useState(false);

  if(isCredit || isDone) {
    document.body.style.position = "fixed";
  } else {
    document.body.style.position = "relative";
  }

  if (window.innerWidth <= 768) {
    return (
      <>
        <div className="myorder-extend-payment-container">
          <div className="myorder-extend-payment-content">
            <div className="myorder-extend-payment-upperpart">
              <p id="payment-extend-text">Extend Package Date</p>
              <div className="myorder-extend-payment-tab-container">
                <div className="myorder-extend-payment-tab">
                  <p
                    id="myorder-agree-text"
                    onClick={() => setIsAgreement(!isAgreement)}
                  >
                    {" "}
                    <img src={GradientDone} alt="done" /> Agreement
                  </p>
                  {isAgreement && <MyorderExtendAgreement onclick={props.onclick}/>}
                  <p id="myorder-pay-text">Payment</p>
                </div>
                <div className="myorder-payment-types-container">
                  <div
                    className="myorder-payment-types-content"
                    style={{
                      marginTop: isCredit ? "12rem" : "0rem",
                    }}
                  >
                    <div
                      className="myorder-pay-mode-container"
                      onClick={() => setIsCredit(!isCredit)}
                    >
                      <p>
                        <img
                          src={PaymentCard}
                          alt="paymentcard"
                          style={{ width: "1.688rem", height: "1.25rem" }}
                        />
                        Credit/Debit Card
                      </p>
                      {isCredit ? (
                        <img src={UpArrow} alt="uparrow" />
                      ) : (
                        <img src={RightArrow} alt="rightarrow" />
                      )}
                    </div>
                    {isCredit && (
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

                          <button
                            type="submit"
                            onClick={() => setIsDone(!isDone)}
                          >
                            Make Payment
                          </button>
                          {isDone && (
                            <MyorderTennureExtend onclick={props.onclick} />
                          )}
                        </div>
                      </>
                    )}

                    <div className="myorder-pay-mode-container">
                      <p>
                        <img
                          src={Upi}
                          alt="upi"
                          style={{
                            width: "1.125rem",
                            height: "1.949rem",
                            marginRight: ".6rem",
                          }}
                        />
                        UPI / QR
                      </p>
                      <img src={RightArrow} alt="rightarrow" />
                    </div>

                    <div className="myorder-pay-mode-container">
                      <p>
                        <img
                          src={PaymentCard}
                          alt="paymentcard"
                          style={{ width: "1.688rem", height: "1.25rem" }}
                        />
                        Net Banking
                      </p>
                      <img src={RightArrow} alt="rightarrow" />
                    </div>

                    <div className="myorder-pay-mode-container">
                      <p>
                        <img
                          src={Wallet}
                          alt="wallet"
                          style={{ width: "1.5rem", height: "1.25rem" }}
                        />
                        Wallet
                      </p>
                      <img src={RightArrow} alt="rightarrow" />
                    </div>

                    <div className="myorder-pay-mode-container">
                      <p>
                        <img
                          src={PaymentCard}
                          alt="paymentcard"
                          style={{ width: "1.688rem", height: "1.25rem" }}
                        />
                        EMI
                      </p>
                      <img src={RightArrow} alt="rightarrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="myorder-extend-payment-lowerpart">
              <p>New End Date <span>21/09/2022</span></p>
              <p>Total cost <span>₹750.00 <img src={PriceInfo} alt="priceinfo" /></span></p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-extend-payment-container">
          <div className="myorder-extend-payment-content">
            <div className="myorder-extend-payment-upperpart">
              <p id="payment-extend-text">Extend Package Date</p>
              <div className="myorder-extend-payment-tab-container">
                <div className="myorder-extend-payment-tab">
                  <p
                    id="myorder-agree-text"
                    onClick={() => setIsAgreement(!isAgreement)}
                  >
                    {" "}
                    <img src={GradientDone} alt="done" /> Agreement
                  </p>
                  {isAgreement && <MyorderExtendAgreement onclick={props.onclick}/>}
                  <p id="myorder-pay-text">Payment</p>
                </div>
                <div className="myorder-payment-types-container">
                  <div
                    className="myorder-payment-types-content"
                    style={{
                      marginTop: isCredit ? "18rem" : "0rem",
                    }}
                  >
                    <div
                      className="myorder-pay-mode-container"
                      onClick={() => setIsCredit(!isCredit)}
                    >
                      <p>
                        <img
                          src={PaymentCard}
                          alt="paymentcard"
                          style={{ width: "1.688rem", height: "1.25rem" }}
                        />
                        Credit/Debit Card
                      </p>
                      {isCredit ? (
                        <img src={UpArrow} alt="uparrow" />
                      ) : (
                        <img src={RightArrow} alt="rightarrow" />
                      )}
                    </div>
                    {isCredit && (
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

                          <button
                            type="submit"
                            onClick={() => setIsDone(!isDone)}
                          >
                            Make Payment
                          </button>
                          {isDone && (
                            <MyorderTennureExtend onclick={props.onclick} />
                          )}
                        </div>
                      </>
                    )}

                    <div className="myorder-pay-mode-container">
                      <p>
                        <img
                          src={Upi}
                          alt="upi"
                          style={{
                            width: "1.125rem",
                            height: "1.949rem",
                            marginRight: ".6rem",
                          }}
                        />
                        UPI / QR
                      </p>
                      <img src={RightArrow} alt="rightarrow" />
                    </div>

                    <div className="myorder-pay-mode-container">
                      <p>
                        <img
                          src={PaymentCard}
                          alt="paymentcard"
                          style={{ width: "1.688rem", height: "1.25rem" }}
                        />
                        Net Banking
                      </p>
                      <img src={RightArrow} alt="rightarrow" />
                    </div>

                    <div className="myorder-pay-mode-container">
                      <p>
                        <img
                          src={Wallet}
                          alt="wallet"
                          style={{ width: "1.5rem", height: "1.25rem" }}
                        />
                        Wallet
                      </p>
                      <img src={RightArrow} alt="rightarrow" />
                    </div>

                    <div className="myorder-pay-mode-container">
                      <p>
                        <img
                          src={PaymentCard}
                          alt="paymentcard"
                          style={{ width: "1.688rem", height: "1.25rem" }}
                        />
                        EMI
                      </p>
                      <img src={RightArrow} alt="rightarrow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="myorder-extend-payment-lowerpart">
              <p id="total-cost">Total cost:</p>
              <p id="total-price">₹ 750.00</p>
              <p id="price-info">
                <img src={PriceInfo} alt="priceinfo" /> (inclusive of all taxes)
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Myorderextendpayment;
