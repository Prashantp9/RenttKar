import React from "react";
import { useState } from "react";
import { MyorderExtendAgreement } from "..";
import { GradientDone, PaymentCard, PriceInfo, RightArrow, Upi, Wallet } from "../../assets";
import "./myorderextendpayment.css";

const Myorderextendpayment = (props) => {
  const[isAgreement, setIsAgreement] = useState(false)
  return (
    <>
      <div className="myorder-extend-payment-container" >
        <div className="myorder-extend-payment-content">
          <div className="myorder-extend-payment-upperpart">
            <p id="payment-extend-text">Extend Package Date</p>
            <div className="myorder-extend-payment-tab-container">
              <div className="myorder-extend-payment-tab">
                <p id="myorder-agree-text" onClick={() => setIsAgreement(!isAgreement)}> <img src={GradientDone} alt="done" />  Agreement</p>
                {isAgreement && <MyorderExtendAgreement />}
                <p id="myorder-pay-text">Payment</p>
              </div>
              <div className="myorder-payment-types-container">
                  <div className="myorder-pay-mode-container">
                    <p><img src={PaymentCard} alt="paymentcard" />Credit/Debit Card</p>
                    <img src={RightArrow} alt="rightarrow" />
                  </div>

                  <div className="myorder-pay-mode-container">
                    <p><img src={Upi} alt="upi" />UPI / QR</p>
                    <img src={RightArrow} alt="rightarrow" />
                  </div>

                  <div className="myorder-pay-mode-container">
                    <p><img src={Wallet} alt="wallet" />Wallet</p>
                    <img src={RightArrow} alt="rightarrow" />
                  </div>

                  <div className="myorder-pay-mode-container">
                    <p><img src={PaymentCard} alt="paymentcard" />EMI</p>
                    <img src={RightArrow} alt="rightarrow" />
                  </div>

                  <div className="myorder-pay-mode-container">
                    <p><img src={PaymentCard} alt="paymentcard" />Credit/Debit Card</p>
                    <img src={RightArrow} alt="rightarrow" />
                  </div>

                  <div className="myorder-pay-mode-container">
                    <p><img src={PaymentCard} alt="paymentcard" />Credit/Debit Card</p>
                    <img src={RightArrow} alt="rightarrow" />
                  </div>
              </div>
            </div>
          </div>

          <div className="myorder-extend-payment-lowerpart">
            <p id="total-cost">Total cost:</p>
            <p id="total-price">₹ 750.00</p>
            <p id="price-info"><img src={PriceInfo} alt="priceinfo" /> (inclusive of all taxes)</p>
          </div>
        </div>
      </div>
    </>
  );
};  

export default Myorderextendpayment;
