import React from "react";
import { useState } from "react";
import { MyorderExtendAgreement } from "..";
import { BattelfieldCD, Calender, PriceInfo, SmallCross } from "../../assets";
import "./myorderextendpackage.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect } from "react";

const Myorderextendpackage = (props) => {
  const [isClick, setIsClick] = useState(false);
  const [isAgreement, setIsAgreement] = useState(false);

  useEffect(() => {
    if(isClick || isAgreement){
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "relative";
    }
  })

  if (window.innerWidth <= 768) {
    return (
      <>
        <div className="tablet-myorder-extend-package-container">
          <div className="tablet-myorder-extend-package-content">
            <div className="tablet-myorder-extend-package-upperpart">
              <p>
                Extend Package Date <img src={SmallCross} alt="smallcross" onClick={props.onclick} style={{width:"1.75rem", height:"1.75rem", cursor:"pointer"}}/>
              </p>

              <p id="tablet-offers-text">Offers For You</p>
              <div className="tablet-extend-package-offer-card">
                <div className="tablet-offer-card">
                  <div className="tablet-off-percent-container">
                    <p>
                      20%<span>OFF</span>
                    </p>
                  </div>

                  <p id="tablet-cut-offer">₹5,000/Mn</p>
                  <p id="tablet-offer-mth">₹2,000/Mn</p>
                  <p id="tablet-month-container">For 1 Month</p>
                </div>

                <div className="tablet-offer-card">
                  <div className="tablet-off-percent-container">
                    <p>
                      20%<span>OFF</span>
                    </p>
                  </div>

                  <p id="tablet-cut-offer">₹5,000/Mn</p>
                  <p id="tablet-offer-mth">₹2,000/Mn</p>
                  <p id="tablet-month-container">For 1 Month</p>
                </div>

                <div className="tablet-offer-card">
                  <div className="tablet-off-percent-container">
                    <p>
                      20%<span>OFF</span>
                    </p>
                  </div>

                  <p id="tablet-cut-offer">₹5,000/Mn</p>
                  <p id="tablet-offer-mth">₹2,000/Mn</p>
                  <p id="tablet-month-container">For 1 Month</p>
                </div>

                <div className="tablet-offer-card">
                  <div className="tablet-off-percent-container">
                    <p>
                      20%<span>OFF</span>
                    </p>
                  </div>

                  <p id="tablet-cut-offer">₹5,000/Mn</p>
                  <p id="tablet-offer-mth">₹2,000/Mn</p>
                  <p id="tablet-month-container">For 1 Month</p>
                </div>
              </div>

              <div className="tablet-myorder-extend-addons-container">
                <div className="tablet-owned-container">
                  <p>
                    Owned <span>5</span>
                  </p>
                  <div className="tablet-addons-card-slider">
                    <Swiper
                      width={111}
                      slidesPerView={1}
                      centeredSlides={false}
                      spaceBetween={10}
                      slidesPerGroup={1}
                      grabCursor={true}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="tablet-addons-card">
                          <img src={BattelfieldCD} alt="battelcd" />
                          <button type="submit">Return</button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tablet-addons-card">
                          <img src={BattelfieldCD} alt="battelcd" />
                          <button type="submit">Return</button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tablet-addons-card">
                          <img src={BattelfieldCD} alt="battelcd" />
                          <button type="submit">Return</button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tablet-addons-card">
                          <img src={BattelfieldCD} alt="battelcd" />
                          <button type="submit">Return</button>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>

                <div className="tablet-recommended-addons">
                  <p>Recommended Addons</p>
                  <div className="tablet-addons-card-slider">
                    <Swiper
                      width={111}
                      slidesPerView={1}
                      centeredSlides={false}
                      spaceBetween={10}
                      slidesPerGroup={1}
                      grabCursor={true}
                      loop={true}
                      loopFillGroupWithBlank={true}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="tablet-addons-card">
                          <img src={BattelfieldCD} alt="battelcd" />
                          <button type="submit">Add</button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tablet-addons-card">
                          <img src={BattelfieldCD} alt="battelcd" />
                          <button type="submit">Add</button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tablet-addons-card">
                          <img src={BattelfieldCD} alt="battelcd" />
                          <button type="submit">Add</button>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="tablet-addons-card">
                          <img src={BattelfieldCD} alt="battelcd" />
                          <button type="submit">Add</button>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>

            <div className="tablet-myorder-extend-package-lowerpart">
              <p>
                New End Date<span>21/09/2022</span>
              </p>
              <p>
                Total cost
                <span>
                  ₹750.00 <img src={PriceInfo} alt="priceinfo" />
                </span>
              </p>

              <button type="submit" onClick={() => setIsAgreement(!isAgreement)}>Extend Date</button>
              {isAgreement && <MyorderExtendAgreement onclick={props.onclick}/>}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-extend-package-container">
          <div className="myorder-extend-package-content">
            <div className="myorder-extend-package-upperpart">
              <p id="extended-text">
                Extend Package Date{" "}
                <img
                  src={SmallCross}
                  alt="cross"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={props.onclick}
                />
              </p>
              <p id="extended-desc">We have got surprising offers for you!</p>
              <div className="myorder-extended-offer-card-container">
                <div
                  className="myorder-extended-offer-card"
                  style={{
                    padding: isClick ? "1px" : "none",
                    border: isClick ? "2px solid #0E9BE1" : "none",
                    userSelect: "none",
                  }}
                  onClick={() => setIsClick(!isClick)}
                >
                  <p id="card-off-percent">
                    20% <span>OFF</span>
                  </p>
                  <div className="card-offer-desc">
                    <p id="card-cut-price">₹5,000/Mn</p>
                    <p id="card-offer-price">₹2,000/Mn</p>
                    <p
                      id="card-offer-duration"
                      style={{
                        color: isClick ? "#0E9BE1" : "#DFDFDF",
                      }}
                    >
                      For 1 Month
                    </p>
                  </div>
                </div>

                <div
                  className="myorder-extended-offer-card"
                  style={{
                    padding: isClick ? "1px" : "none",
                    border: isClick ? "2px solid #0E9BE1" : "none",
                    userSelect: "none",
                  }}
                  onClick={() => setIsClick(!isClick)}
                >
                  <p id="card-off-percent">
                    20% <span>OFF</span>
                  </p>
                  <div className="card-offer-desc">
                    <p id="card-cut-price">₹5,000/Mn</p>
                    <p id="card-offer-price">₹2,000/Mn</p>
                    <p
                      id="card-offer-duration"
                      style={{
                        color: isClick ? "#0E9BE1" : "#DFDFDF",
                      }}
                    >
                      For 2 Month
                    </p>
                  </div>
                </div>

                <div
                  className="myorder-extended-offer-card"
                  style={{
                    padding: isClick ? "1px" : "none",
                    border: isClick ? "2px solid #0E9BE1" : "none",
                    userSelect: "none",
                  }}
                  onClick={() => setIsClick(!isClick)}
                >
                  <p id="card-off-percent">
                    20% <span>OFF</span>
                  </p>
                  <div className="card-offer-desc">
                    <p id="card-cut-price">₹5,000/Mn</p>
                    <p id="card-offer-price">₹2,000/Mn</p>
                    <p
                      id="card-offer-duration"
                      style={{
                        color: isClick ? "#0E9BE1" : "#DFDFDF",
                      }}
                    >
                      For 3 Month
                    </p>
                  </div>
                </div>

                <div
                  className="myorder-extended-offer-card"
                  style={{
                    padding: isClick ? "1px" : "none",
                    border: isClick ? "2px solid #0E9BE1" : "none",
                    userSelect: "none",
                  }}
                  onClick={() => setIsClick(!isClick)}
                >
                  <p id="card-off-percent">
                    20% <span>OFF</span>
                  </p>
                  <div className="card-offer-desc">
                    <p id="card-cut-price">₹5,000/Mn</p>
                    <p id="card-offer-price">₹2,000/Mn</p>
                    <p
                      id="card-offer-duration"
                      style={{
                        color: isClick ? "#0E9BE1" : "#DFDFDF",
                      }}
                    >
                      For 4 Month
                    </p>
                  </div>
                </div>
              </div>

              <div className="myorder-send-request-container">
                <p id="myorder-request-desc">
                  Didn’t find your offers? Send us the end date and we will
                  provide offers accordingly.
                </p>
                <div className="myorder-date-extension-container">
                  <div className="myorder-calender">
                    <input
                      type="date"
                      name=""
                      id=""
                      placeholder="Extension Date"
                    />
                    <div className="myorder-calender-img">
                      <img src={Calender} alt="calender" />
                    </div>
                  </div>
                  <button type="submit">Send Request</button>
                </div>
              </div>
            </div>
            <div className="myorder-extend-package-lowerpart">
              <p>
                New End Date <span>21/09/2022</span>
              </p>
              <p>
                Total cost{" "}
                <span>
                  ₹750.00{" "}
                  <img
                    src={PriceInfo}
                    alt="info"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                </span>
              </p>
              {isClick ? (
                <>
                  <button
                    type="submit"
                    onClick={() => setIsAgreement(!isAgreement)}
                    style={{
                      opacity: "1",
                    }}
                  >
                    Extend Date
                  </button>
                  {isAgreement && <MyorderExtendAgreement onclick={props.onclick}/>}
                </>
              ) : (
                <button
                  type="submit"
                  style={{
                    opacity: "0.5",
                  }}
                >
                  Extend Date
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Myorderextendpackage;
