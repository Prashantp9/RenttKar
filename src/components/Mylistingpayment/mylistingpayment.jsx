import React, {useState} from 'react'
import "./mylistingpayment.css"


import { SmallCross, PaymentCard, Upi, RightArrow, OrderAccepted } from '../../assets'

const Mylistingpayment = (props) => {
  const [isBank, setIsBank] = useState(false);
  const [isReceived, setIsReceived] = useState(false);
  return (
      <>
        <div className="mylisting-prod-select-payment-container">
          <div className="mylisting-prod-select-payment-content">
            <p id="payment-details-text">
              Payment Details{" "}
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem" }}
                onClick={props.onclick}
              />
            </p>
            <p id="payment-details-desc">
              We require some payment information. Bank details
              are the most preferable due to restrictions on UPI
              transfers.
            </p>
            <div className="mylisting-payment-card-container">
              <div className="mylisting-payment-card-content">
                <div
                  className="mylisting-payment-card"
                  onClick={() => setIsBank(!isBank)}
                  style={{
                      borderRadius: isBank ? "6px 6px 0px 0px": "6px 6px 6px 6px",
                  }}
                >
                  <p>
                    <img
                      src={PaymentCard}
                      alt="paymentcard"
                      style={{
                        marginRight: "1rem",
                        width: "1.688rem",
                        height: "1.25rem",
                      }}
                    />{" "}
                    Bank Details
                  </p>
                  <img src={RightArrow} alt="rightarrow" />
                </div>
                {isBank && (
                  <>
                    <div className="mylisting-payment-bank-container">
                      <input type="text" name="" id="" placeholder="Account Holder Name"/>
                      <input type="text" name="" id="" placeholder="Bank Account Number"/>
                      <input type="text" name="" id="" placeholder="IFSC Code"/>
                      <button type="submit" onClick={() => setIsReceived(!isReceived)}>Submit details</button>
                      {isReceived && (
                        <>
                          <div className="mylisting-payment-details-received-container">
                            <div className="mylisting-payment-details-received-content">
                              <img src={OrderAccepted} alt="orderaccept" />
                              <p id='payment-details-done-text'>Payment Details Received</p>
                              <p id='payment-details-done-desc'>Thank you for submitting your payment details!</p>
                              <button onClick={props.onclick}>Done</button>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}

                <div
                  className="mylisting-payment-card"
                  style={{ marginTop: "2rem" }}
                >
                  <p>
                    <img
                      src={Upi}
                      alt="paymentcard"
                      style={{
                        marginRight: "1.5rem",
                        width: "1.125rem",
                        height: "2rem",
                      }}
                    />{" "}
                    UPI/ID
                  </p>
                  <img src={RightArrow} alt="rightarrow" />
                </div>

                <p id="payment-card-or-text">or</p>

                <div className="mylisting-payment-credit-container">
                  <p id="payment-credit-text">
                    <img
                      src={PaymentCard}
                      alt="paymentcard"
                      style={{
                        width: "1.5rem",
                        height: "1.125rem",
                      }}
                    />{" "}
                    Credit
                  </p>
                  <p id="payment-credit-desc">
                    Get credit up to 25% more than cash! Each 1
                    credit is equal to 1 rupee.
                  </p>
                  <button onClick={() => setIsReceived(!isReceived)}>Get Credit</button>
                  {isReceived && (
                        <>
                          <div className="mylisting-payment-details-received-container">
                            <div className="mylisting-payment-details-received-content">
                              <img src={OrderAccepted} alt="orderaccept" />
                              <p id='payment-details-done-text'>Payment Details Received</p>
                              <p id='payment-details-done-desc'>Thank you for submitting your payment details!</p>
                              <button onClick={props.onclick}>Done</button>
                            </div>
                          </div>
                        </>
                      )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Mylistingpayment