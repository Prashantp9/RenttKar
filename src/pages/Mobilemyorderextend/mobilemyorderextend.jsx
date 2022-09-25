import React from "react";
import "./mobilemyorderextend.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  Call,
  DownArrow,
  GradientDone,
  PaymentCard,
  PriceInfo,
  Rupees,
  SmallCross,
  UpArrow,
  Amex,
  Mastercard,
} from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MyorderTennureExtend } from "../../components";

const Mobilemyorderextend = (props) => {
  const [isAgreement, setIsAgreement] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      <div className="mobile-myorder-extend-package-heading-container">
        <div className="mobile-myorder-extend-package-heading-content">
          <p>
            Extend Package Date
            <Link to="/myorder">
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </p>
        </div>
      </div>

      <div className="mobile-myorder-package-extend-container">
        <div className="mobile-myorder-package-extend-content">
          <p id="mobile-offer-text">Offers For You</p>
          <div className="mobile-package-extend-offer-card-container">
            <div className="mobile-package-extend-offer-card">
              <div className="mobile-extend-offer-text-container">
                <p>
                  20% <span>OFF</span>
                </p>
              </div>
              <div className="mobile-extend-offer-desc-container">
                <p id="cut-offer">₹5,000/Mn</p>
                <p id="offer-price">₹2,000/Mn</p>
                <p id="month-text">For 1 Month</p>
              </div>
            </div>

            <div className="mobile-package-extend-offer-card">
              <div className="mobile-extend-offer-text-container">
                <p>
                  20% <span>OFF</span>
                </p>
              </div>
              <div className="mobile-extend-offer-desc-container">
                <p id="cut-offer">₹5,000/Mn</p>
                <p id="offer-price">₹2,000/Mn</p>
                <p id="month-text">For 1 Month</p>
              </div>
            </div>

            <div className="mobile-package-extend-offer-card">
              <div className="mobile-extend-offer-text-container">
                <p>
                  20% <span>OFF</span>
                </p>
              </div>
              <div className="mobile-extend-offer-desc-container">
                <p id="cut-offer">₹5,000/Mn</p>
                <p id="offer-price">₹2,000/Mn</p>
                <p id="month-text">For 1 Month</p>
              </div>
            </div>

            <div className="mobile-package-extend-offer-card">
              <div className="mobile-extend-offer-text-container">
                <p>
                  20% <span>OFF</span>
                </p>
              </div>
              <div className="mobile-extend-offer-desc-container">
                <p id="cut-offer">₹5,000/Mn</p>
                <p id="offer-price">₹2,000/Mn</p>
                <p id="month-text">For 1 Month</p>
              </div>
            </div>

            <div className="mobile-package-extend-offer-card">
              <div className="mobile-extend-offer-text-container">
                <p>
                  20% <span>OFF</span>
                </p>
              </div>
              <div className="mobile-extend-offer-desc-container">
                <p id="cut-offer">₹5,000/Mn</p>
                <p id="offer-price">₹2,000/Mn</p>
                <p id="month-text">For 1 Month</p>
              </div>
            </div>
          </div>

          <div className="mobile-myorder-extend-contact-container">
            <p id="contact-text">For further assistance contact us</p>
            <p id="contact-no">
              {" "}
              <img src={Call} alt="call" /> 18000 26597 / 18000 23567
            </p>
          </div>

          <div className="mobile-myorder-extend-totalcost-container">
            <p id="date-text">
              New End Date<span>21/09/2022</span>
            </p>
            <p id="total-text">
              Total Cost
              <span>
                {" "}
                <img src={Rupees} alt="rupees" />
                750.00 <img src={PriceInfo} alt="priceinfo" />
              </span>
            </p>
          </div>

          <button type="submit" onClick={() => setIsAgreement(!isAgreement)}>
            Extend Date
          </button>
          {isAgreement && (
            <>
              <div className="mobile-myorder-extend-agreement-container">
                <div className="mobile-myorder-extend-agreement-content">
                  <div className="mobile-extend-agreement-tab-container">
                    <div className="mobile-extend-agreement-tab">
                      <p>Agreement</p>
                    </div>
                    <div className="mobile-extend-payment-tab">
                      <p>Payment</p>
                    </div>
                  </div>

                  <div className="mobile-agreement-termscondition-container">
                    <div className="mobile-agreement-termscondition">
                      <div className="mobile-agreement-termscondition-heading">
                        <p>Terms & Conditions</p>
                      </div>
                      <div className="mobile-agreement-termscondition-desc">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. At diam ut sagittis nunc sodales id cursus nisl
                          integer. Laoreet tortor, nunc, vestibulum id non est a
                          id. Imperdiet ante donec et semper nisi, ut rutrum ut
                          viverra. Tellus a non amet sit nisl lacus laoreet.
                          Donec eu viverra nibh elementum nunc non scelerisque.
                          In turpis a sed volutpat. Eget facilisis condimentum
                          lorem scelerisque. Est egestas condimentum elit
                          blandit libero, sed amet, vel, maecenas. Cras bibendum
                          gravida at quam est praesent turpis a. Consequat
                          purus, eget tellus elit sagittis. Cras dignissim
                          lectus vestibulum quis. Sed massa volutpat volutpat
                          scelerisque lacus, aenean sed. Porttitor auctor
                          consectetur quam pretium ut non, purus. Arcu vitae
                          tortor, feugiat facilisis laoreet praesent. Varius
                          fringilla dictum amet sit
                        </p>
                      </div>
                    </div>

                    <div className="mobile-myorder-accept-termscondition">
                      <label htmlFor="accept">
                        <input
                          type="checkbox"
                          name="accept"
                          id=""
                          style={{ width: "0.938rem", height: "0.938rem" }}
                        />
                        <span>
                          I agree dolor sit amet, consectetur adipiscing elit.
                          Quam in senectus turpis.
                        </span>
                      </label>
                    </div>

                    <div className="mobile-myorder-agreement-totalcost-container">
                      <p>
                        New End Date <span>21/09/2022</span>
                      </p>
                      <p>
                        Total Cost{" "}
                        <span>
                          ₹750.00 <img src={PriceInfo} alt="priceinfo" />
                        </span>
                      </p>
                    </div>

                    <button
                      type="submit"
                      onClick={() => setIsPayment(!isPayment)}
                    >
                      I Agree
                    </button>
                    {isPayment && (
                      <>
                        <div
                          className="mobile-myorder-package-extend-payment-container"
                          style={{
                            height: isClick ? "80rem" : "55rem",
                          }}
                        >
                          <div className="mobile-myorder-extend-payment-tab-container">
                            <div className="mobile-myorder-extend-payment-tab-content">
                              <div className="mobile-myorder-extend-agreement-tab">
                                <p>
                                  {" "}
                                  <img
                                    src={GradientDone}
                                    alt="gradientdone"
                                  />{" "}
                                  Agreement
                                </p>
                              </div>

                              <div className="mobile-myorder-extend-payment-tab">
                                <p>Payment</p>
                              </div>
                            </div>
                          </div>

                          <div
                            className="mobile-myorder-extend-payment-desc-container"
                            style={{
                              height: isClick ? "80rem" : "45rem",
                            }}
                          >
                            <div className="mobile-myorder-extend-payment-desc-content">
                              <div className="mobile-myorder-payment-totalcost-container">
                                <p>
                                  New End Date <span>21/09/2022</span>
                                </p>
                                <p>
                                  Total Cost{" "}
                                  <span>
                                    {" "}
                                    <img src={Rupees} alt="rupees" />
                                    750.00{" "}
                                    <img
                                      src={PriceInfo}
                                      alt="priceinfo"
                                      style={{
                                        width: ".875rem",
                                        height: ".875rem",
                                      }}
                                    />
                                  </span>
                                </p>
                              </div>

                              <div
                                className="mobile-myorder-payment-mode-container"
                                onClick={() => setIsClick(!isClick)}
                              >
                                <p>
                                  <span>
                                    <img
                                      src={PaymentCard}
                                      alt="paymentcard"
                                      style={{
                                        width: "1.25rem",
                                        height: "1rem",
                                        marginRight: "1.5rem",
                                      }}
                                    />{" "}
                                    Card
                                  </span>
                                  {isClick ? (
                                    <img src={UpArrow} alt="uparrow" />
                                  ) : (
                                    <img src={DownArrow} alt="downArrow" />
                                  )}
                                </p>
                              </div>
                              {isClick && (
                                <>
                                  <div className="cards-payment">
                                    <p id="saved-text">Saved:</p>
                                    <div className="saved-card-container">
                                      <Swiper
                                        width={460}
                                        slidesPerView={2}
                                        centeredSlides={false}
                                        spaceBetween={30}
                                        slidesPerGroup={1}
                                        grabCursor={true}
                                        loop={true}
                                        loopFillGroupWithBlank={true}
                                        pagination={{
                                          clickable: true,
                                        }}
                                        navigation={{
                                          prevEl:
                                            ".rented-together-left-button",
                                          nextEl:
                                            ".rented-together-right-button",
                                        }}
                                        modules={[Navigation]}
                                        className="mySwiper"
                                      >
                                        <SwiperSlide>
                                          <div className="saved-card-one-container">
                                            <div
                                              className="saved-card-details"
                                              style={{ marginRight: ".5rem" }}
                                            >
                                              <p id="card-ending-text">
                                                Ending in: ...4562
                                              </p>
                                              <p id="card-last-used-text">
                                                Last used: Mar 18 2021
                                              </p>
                                            </div>
                                            <img
                                              src={Mastercard}
                                              alt="mastercard"
                                            />
                                          </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                          <div
                                            className="saved-card-two-container"
                                            style={{ marginLeft: "1rem" }}
                                          >
                                            <div
                                              className="saved-card-details"
                                              style={{ marginRight: ".5rem" }}
                                            >
                                              <p id="card-ending-text">
                                                Ending in: ...4562
                                              </p>
                                              <p id="card-last-used-text">
                                                Last used: Mar 18 2021
                                              </p>
                                            </div>
                                            <div className="saved-card-img">
                                              <img
                                                src={Amex}
                                                alt="mastercard"
                                              />
                                            </div>
                                          </div>
                                        </SwiperSlide>
                                      </Swiper>
                                    </div>
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
                                        <select
                                          name=""
                                          id=""
                                          className="expiry-date"
                                        >
                                          <option
                                            value="month"
                                            selected
                                            disabled
                                          >
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
                                        <select
                                          name=""
                                          id=""
                                          className="expiry-year"
                                        >
                                          <option
                                            value="year"
                                            selected
                                            disabled
                                          >
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
                                    {isDone && <MyorderTennureExtend onclick={props.onclick}/>}
                                  </div>
                                </>
                              )}

                              <div className="mobile-myorder-payment-mode-container">
                                <p>
                                  <span>
                                    <img
                                      src={PaymentCard}
                                      alt="paymentcard"
                                      style={{
                                        width: "1.25rem",
                                        height: "1rem",
                                        marginRight: "1.5rem",
                                      }}
                                    />{" "}
                                    UPI / QR
                                  </span>
                                  <img src={DownArrow} alt="downArrow" />
                                </p>
                              </div>

                              <div className="mobile-myorder-payment-mode-container">
                                <p>
                                  <span>
                                    <img
                                      src={PaymentCard}
                                      alt="paymentcard"
                                      style={{
                                        width: "1.25rem",
                                        height: "1rem",
                                        marginRight: "1.5rem",
                                      }}
                                    />{" "}
                                    NetBanking
                                  </span>
                                  <img src={DownArrow} alt="downArrow" />
                                </p>
                              </div>

                              <div className="mobile-myorder-payment-mode-container">
                                <p>
                                  <span>
                                    <img
                                      src={PaymentCard}
                                      alt="paymentcard"
                                      style={{
                                        width: "1.25rem",
                                        height: "1rem",
                                        marginRight: "1.5rem",
                                      }}
                                    />{" "}
                                    Wallet
                                  </span>
                                  <img src={DownArrow} alt="downArrow" />
                                </p>
                              </div>

                              <div className="mobile-myorder-payment-mode-container">
                                <p>
                                  <span>
                                    <img
                                      src={PaymentCard}
                                      alt="paymentcard"
                                      style={{
                                        width: "1.25rem",
                                        height: "1rem",
                                        marginRight: "1.5rem",
                                      }}
                                    />{" "}
                                    EMI
                                  </span>
                                  <img src={DownArrow} alt="downArrow" />
                                </p>
                              </div>

                              <div className="mobile-myorder-payment-mode-container">
                                <p>
                                  <span>
                                    <img
                                      src={PaymentCard}
                                      alt="paymentcard"
                                      style={{
                                        width: "1.25rem",
                                        height: "1rem",
                                        marginRight: "1.5rem",
                                      }}
                                    />{" "}
                                    Pay Later
                                  </span>
                                  <img src={DownArrow} alt="downArrow" />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mobilemyorderextend;
