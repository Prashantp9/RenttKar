import React, { useState } from "react";
import { Navbar } from "../../components";
import "./agreement.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// image
import {
  GradientDone,
  RightNavigation,
  PriceInfo,
  SmallCross,
  Gradientcouppon,
  Note,
  TabletStep1gradient,
  TabletStep3gradient,
  Individualpurchase,
  Companypurchase,
  TabletRightNavigation,
} from "../../assets";
import { Link } from "react-router-dom";

const Agreement = () => {
  const [isGstdetails, setIsGstdetails] = useState(false);
  const [isCoupon, setIsCoupon] = useState(false);
  const [isProductdetails, setIsProductdetails] = useState(false);

  if (window.innerWidth <= 500) {
    return (
      <>
        <Navbar />
        <div className="mobile-payment-tab-container">
          <div className="mobile-payment-tab-content">
            <div className="mobile-agreement-delivery-tab">
              <p>
                <img src={GradientDone} alt="gradientdone" /> Delive..
              </p>
            </div>

            <div className="mobile-agreement-payment-tab">
              <p>
                {" "}
                <img src={GradientDone} alt="gradientdone" /> Pay..
              </p>
            </div>

            <div className="mobile-agreement-tab">
              <p>Agreement</p>
            </div>
          </div>
        </div>

        <div className="agreement-purchase-container">
          <div className="agreement-purchase-type-container">
            <div className="agreement-individual-purchase">
              <Link to="/individualpurchase">
                <img
                  src={Individualpurchase}
                  alt="individualpurchase"
                  style={{ width: "2.313rem", height: "3.025rem" }}
                />
                <div className="agreement-purchase-container-info">
                  <p id="agreement-individual-text">Individual Purchase</p>
                  <p id="agreement-individual-desc">
                    For Individual purchases, please select this.
                  </p>
                </div>
              </Link>
            </div>

            <p id="agreement-or">Or</p>

            <div className="agreement-company-purchase">
              <Link to="/companypurchase">
                <img
                  src={Companypurchase}
                  alt="companypurchase"
                  style={{ width: "2.313rem", height: "2.302rem" }}
                />
                <div className="agreement-purchase-container-info">
                  <p id="agreement-company-text">Company Purchase</p>
                  <p id="agreement-company-desc">
                    For company purchases, please select this.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mobile-delivery-view-details-container">
          <div className="mobile-delivery-view-details-content">
            <div className="mobile-delivery-viewdetails-leftpart">
              <p id="mobile-to-pay">To Pay</p>
              <p id="mobile-to-pay-price">???917</p>
              <p
                id="mobile-to-pay-view"
                style={{ cursor: "pointer" }}
                onClick={() => setIsProductdetails(!isProductdetails)}
              >
                view details
              </p>
              {isProductdetails && (
                <>
                  <div className="mobile-delivery-productdetails-page">
                    <div className="mobile-delivery-proddetails-heading-container">
                      <div className="mobile-delivery-proddetails-heading-content">
                        <p>
                          Product Details{" "}
                          <img
                            src={SmallCross}
                            alt="cross"
                            onClick={() =>
                              setIsProductdetails(!isProductdetails)
                            }
                            style={{
                              cursor: "pointer",
                              width: "1.875rem",
                              height: "1.5rem",
                            }}
                          />
                        </p>
                      </div>
                    </div>

                    <div className="mobile-delivery-pricedetails-container">
                      <div className="mobile-delivery-pricedetails-content">
                        <p id="prod-details-text">Playstation 4</p>

                        <div className="mobile-delivery-tennure-container">
                          <p>
                            Delivery By <span>21/09/2022</span>
                          </p>
                          <p>
                            Tennure <span>3 Months</span>
                          </p>
                        </div>

                        <div className="mobile-delivery-product-list">
                          <p>
                            Ps4 <span>???500/day</span>
                          </p>
                          <p>
                            Addons1 <span>???100/day</span>
                          </p>
                          <p>
                            Addons1 <span>???100/day</span>
                          </p>
                          <p>
                            Addons1 <span>???100/day</span>
                          </p>
                          <p>
                            Addons1 <span>???100/day</span>
                          </p>
                          <p>
                            Addons1 <span>???100/day</span>
                          </p>
                        </div>

                        <div className="mobile-delivery-subscription-days">
                          <p>
                            {" "}
                            <span></span> ???1000/day
                          </p>
                          <p>
                            No of days <span>x 92 days</span>
                          </p>
                        </div>

                        <div className="mobile-delivery-subtotal-container">
                          <p>
                            Sub total <span>???92000</span>
                          </p>
                          <p>
                            <span id="mobile-gst-span">
                              Gst
                              <button
                                onClick={() => setIsGstdetails(!isGstdetails)}
                                type="submit"
                                id="mobile-delivery-gst-btn"
                              >
                                <p>Add +</p>
                              </button>
                              {isGstdetails && (
                                <>
                                  <div className="mobile-delivery-gst-details-container">
                                    <div className="mobile-delivery-gst-details-content">
                                      <p>
                                        GST Details{" "}
                                        <img
                                          src={SmallCross}
                                          alt="cross"
                                          style={{
                                            cursor: "pointer",
                                            width: "1.531rem",
                                            height: "2rem",
                                          }}
                                          onClick={() =>
                                            setIsGstdetails(!isGstdetails)
                                          }
                                        />
                                      </p>

                                      <input
                                        type="text"
                                        name="cname"
                                        id=""
                                        placeholder="Company name"
                                      />

                                      <input
                                        type="text"
                                        name="gstnumber"
                                        id=""
                                        placeholder="GST number"
                                      />

                                      <input
                                        type="text"
                                        name="gstaddress"
                                        id=""
                                        placeholder="GST address"
                                      />

                                      <button type="submit">Claim GST</button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </span>

                            <span>+ ???4356</span>
                          </p>

                          <p>
                            <span id="mobile-coupon-span">
                              Coupon
                              <button
                                onClick={() => setIsCoupon(!isCoupon)}
                                type="submit"
                                id="mobile-delivery-edit-btn"
                              >
                                <p>Edit</p>
                              </button>
                              {isCoupon && (
                                <>
                                  <div className="mobile-coupon-container">
                                    <div className="mobile-coupon-content">
                                      <p id="mobile-coupon-heading">
                                        <span>
                                          <img
                                            src={Gradientcouppon}
                                            alt="couppon"
                                            style={{
                                              width: "1.531rem",
                                              height: "1.531rem",
                                              marginRight: ".5rem",
                                            }}
                                          />{" "}
                                          Coupon
                                        </span>{" "}
                                        <img
                                          onClick={() => setIsCoupon(!isCoupon)}
                                          src={SmallCross}
                                          alt="cross"
                                          style={{
                                            width: "1.531rem",
                                            height: "2rem",
                                            cursor: "pointer",
                                          }}
                                        />
                                      </p>

                                      <input
                                        type="text"
                                        name="couponcode"
                                        id=""
                                        placeholder="Enter coupon code"
                                      />

                                      <p id="mobile-available">3 Available</p>

                                      <div className="mobile-coupon-slider-container">
                                        <Swiper
                                          width={500}
                                          slidesPerView={2}
                                          centeredSlides={false}
                                          spaceBetween={15}
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
                                            <div className="mobile-coupon-slider-one">
                                              <p id="mobile-coupon-slider-heading">
                                                Welcome Coupon
                                              </p>
                                              <p id="mobile-coupon-slider-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                              </p>
                                              <button type="submit">
                                                Redeem
                                              </button>
                                            </div>
                                          </SwiperSlide>

                                          <SwiperSlide>
                                            <div className="mobile-coupon-slider-one">
                                              <p id="mobile-coupon-slider-heading">
                                                Welcome Coupon
                                              </p>
                                              <p id="mobile-coupon-slider-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                              </p>
                                              <button type="submit">
                                                Redeem
                                              </button>
                                            </div>
                                          </SwiperSlide>

                                          <SwiperSlide>
                                            <div className="mobile-coupon-slider-one">
                                              <p id="mobile-coupon-slider-heading">
                                                Welcome Coupon
                                              </p>
                                              <p id="mobile-coupon-slider-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                              </p>
                                              <button type="submit">
                                                Redeem
                                              </button>
                                            </div>
                                          </SwiperSlide>

                                          <SwiperSlide>
                                            <div className="mobile-coupon-slider-one">
                                              <p id="mobile-coupon-slider-heading">
                                                Welcome Coupon
                                              </p>
                                              <p id="mobile-coupon-slider-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                              </p>
                                              <button type="submit">
                                                Redeem
                                              </button>
                                            </div>
                                          </SwiperSlide>

                                          <SwiperSlide>
                                            <div className="mobile-coupon-slider-one">
                                              <p id="mobile-coupon-slider-heading">
                                                Welcome Coupon
                                              </p>
                                              <p id="mobile-coupon-slider-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                              </p>
                                              <button type="submit">
                                                Redeem
                                              </button>
                                            </div>
                                          </SwiperSlide>

                                          <SwiperSlide>
                                            <div className="mobile-coupon-slider-one">
                                              <p id="mobile-coupon-slider-heading">
                                                Welcome Coupon
                                              </p>
                                              <p id="mobile-coupon-slider-desc">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                              </p>
                                              <button type="submit">
                                                Redeem
                                              </button>
                                            </div>
                                          </SwiperSlide>
                                        </Swiper>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </span>

                            <span>- ???14356</span>
                          </p>
                        </div>

                        <div className="mobile-delivery-grandtotal-container">
                          <p>
                            Grand Total <span>???7200</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="mobile-delivery-viewdetails-rightpart">
              <button
                type="submit"
                id="mobile-proceed-btn"
                disabled
                style={{ opacity: "0.5" }}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (window.innerWidth <= 768) {
    return (
      <>
        <Navbar />
        <div className="delivery-container">
          <div className="delivery-content">
            <div className="delivery-left-container">
              <div className="delivery-step-container">
                <p>
                  <img src={TabletStep1gradient} alt="tabletStep1" />{" "}
                  <span>Step1</span>
                </p>
                <p>
                  <img src={TabletStep1gradient} alt="tabletStep2" />{" "}
                  <span>Step2</span>{" "}
                </p>
                <p>
                  <img src={TabletStep3gradient} alt="tabletStep3" />
                  <span>Step3</span>{" "}
                </p>
              </div>
              <div className="delivery-left-heading-container">
                <div className="tablet-agreement-delivery-add">
                  <p>
                    <Link
                      to="/deliveryaddress"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={GradientDone} alt="gradientdone" /> Deliv..
                    </Link>
                  </p>
                </div>
                <img src={TabletRightNavigation} alt="navigation" />
                <div className="tablet-agreement-payment">
                  <p>
                    <Link to="/payment" style={{ textDecoration: "none" }}>
                      <img
                        src={GradientDone}
                        alt="gradientdone"
                        style={{ marginRight: ".5rem" }}
                      />
                      Paym..
                    </Link>
                  </p>
                </div>
                <img src={TabletRightNavigation} alt="navigation" />
                <div className="tablet-agreement-agreement">
                  <p>Agreement</p>
                </div>
              </div>

              <p id="agreement-select-text">Select Lorem Ipsum lorem Ipsum </p>

              <div className="agreement-purchase-type-container">
                <div className="agreement-individual-purchase">
                  <Link to="/individualpurchase">
                    <img src={Individualpurchase} alt="individualpurchase" />
                    <p id="agreement-individual-text">Individual Purchase</p>
                    <p id="agreement-individual-desc">
                      For Individual purchases, please select this.
                    </p>
                  </Link>
                </div>

                <p id="agreement-or">or</p>

                <div className="agreement-company-purchase">
                  <Link to="/companypurchase">
                    <img src={Companypurchase} alt="companypurchase" />
                    <p id="agreement-company-text">Company Purchase</p>
                    <p id="agreement-company-desc">
                      For company purchases, please select this.
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="delivery-right-container">
              <p id="product-text">Playstation 4</p>
              <div className="delivery-tablet-tenure">
                <p>
                  Delivery By<span>27/02/2022</span>
                </p>
                <p>
                  Tenure <span>3 Months</span>
                </p>
              </div>

              <div className="delivery-tablet-price-list">
                <p>
                  PS4 <span>???500/day</span>
                </p>
                <p>
                  Addons 1 <span>???500/day</span>
                </p>
                <p>
                  Addons 1 <span>???500/day</span>
                </p>
                <p>
                  Addons 1 <span>???500/day</span>
                </p>
                <p>
                  Addons 1 <span>???500/day</span>
                </p>
                <p>
                  Addons 1 <span>???500/day</span>
                </p>
              </div>

              <div className="delivery-tablet-noofdays">
                <p>
                  {" "}
                  <span></span> ???1000/day
                </p>
                <p>
                  No of days <span>x 92 days</span>{" "}
                </p>
              </div>

              <div className="delivery-tablet-total-price">
                <p>
                  <span>Sub total</span> ???92000
                </p>
                <p>
                  <span id="tablet-gst-span">
                    Gst{" "}
                    <button
                      id="tablet-add-gst-btn"
                      onClick={() => setIsGstdetails(!isGstdetails)}
                    >
                      <p>Add +</p>
                    </button>
                    {isGstdetails && (
                      <>
                        <div className="tablet-gst-details-container">
                          <div className="tablet-gst-details-content">
                            <p>
                              GST Details{" "}
                              <img
                                src={SmallCross}
                                alt="cross"
                                style={{
                                  width: "1.75rem",
                                  height: "1.75rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => setIsGstdetails(!isGstdetails)}
                              />
                            </p>

                            <input
                              type="text"
                              name="cname"
                              id=""
                              placeholder="Company name"
                            />

                            <input
                              type="text"
                              name="gstnumber"
                              id=""
                              placeholder="GST number"
                            />

                            <button type="submit">Claim GST</button>
                          </div>
                        </div>
                      </>
                    )}
                  </span>{" "}
                  + ???4356
                </p>
                <p>
                  <span id="tablet-gst-span">
                    Coupon{" "}
                    <button
                      id="tablet-add-gst-btn"
                      onClick={() => setIsCoupon(!isCoupon)}
                    >
                      <p>Edit</p>
                    </button>
                    {isCoupon && (
                      <>
                        <div className="coupon-popup-full-container">
                          <div className="coupon-popup-main-container">
                            <div className="coupon-popup-heading-content">
                              <p>
                                <span>
                                  <img
                                    src={Gradientcouppon}
                                    alt="couppon"
                                    style={{ marginRight: "2px" }}
                                  />{" "}
                                  Coupons
                                </span>
                                <img
                                  src={SmallCross}
                                  alt="cross"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => setIsCoupon(!isCoupon)}
                                />
                              </p>
                            </div>

                            <div className="enter-coupon-code-container">
                              <input
                                type="text"
                                value=""
                                placeholder="Enter coupon code"
                              />
                              <button
                                type="submit"
                                className="enter-coupon-btn"
                                style={{ marginLeft: "2rem" }}
                              >
                                Apply Code
                              </button>
                            </div>

                            <div className="redeem-coupon-container">
                              <Swiper
                                width={600}
                                slidesPerView={2}
                                centeredSlides={false}
                                spaceBetween={15}
                                slidesPerGroup={1}
                                grabCursor={true}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                pagination={{
                                  clickable: true,
                                }}
                                navigation={{
                                  prevEl: ".rented-together-left-button",
                                  nextEl: ".rented-together-right-button",
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                              >
                                <SwiperSlide>
                                  <div className="coupon-main-content-one">
                                    <h3 className="coupon-main-content-heading">
                                      Welcome Coupon
                                    </h3>
                                    <p className="coupon-main-content-desc">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit.
                                    </p>
                                    <button
                                      type="submit"
                                      className="coupon-main-content-btn"
                                    >
                                      Redeem
                                    </button>
                                  </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                  <div className="coupon-main-content-two">
                                    <h3 className="coupon-main-content-heading">
                                      Welcome Coupon
                                    </h3>
                                    <p className="coupon-main-content-desc">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit.
                                    </p>
                                    <button
                                      type="submit"
                                      className="coupon-main-content-btn"
                                    >
                                      Redeem
                                    </button>
                                  </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                  <div className="coupon-main-content-three">
                                    <h3 className="coupon-main-content-heading">
                                      Welcome Coupon
                                    </h3>
                                    <p className="coupon-main-content-desc">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit.
                                    </p>
                                    <button
                                      type="submit"
                                      className="coupon-main-content-btn"
                                    >
                                      Redeem
                                    </button>
                                  </div>
                                </SwiperSlide>
                              </Swiper>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </span>{" "}
                  + ???4356
                </p>
              </div>

              <div className="delivery-tablet-grand-total">
                <p>
                  <span>Grand Total</span> <span>???7200</span>
                </p>
              </div>

              <div className="delivery-tablet-lorem">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ultrices sagittis nisi, in adipiscing interdum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="agreement-container">
          <div className="delivery-container">
            <div className="delivery-content">
              <div className="delivery-left-container">
                <div className="delivery-left-heading-container">
                  <div className="agreement-delivery-add">
                    <p>
                      <Link
                        to="/deliveryaddress"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src={GradientDone}
                          alt="gradientdone"
                          style={{ marginRight: ".5rem" }}
                        />
                        Delivery Address
                      </Link>
                    </p>
                  </div>
                  <img src={RightNavigation} alt="navigation" />
                  <div className="agreement-payment">
                    <p>
                      <Link to="/payment" style={{ textDecoration: "none" }}>
                        <img
                          src={GradientDone}
                          alt="gradientdone"
                          style={{ marginRight: ".5rem" }}
                        />
                        Payment
                      </Link>
                    </p>
                  </div>
                  <img src={RightNavigation} alt="navigation" />
                  <div className="agreement-agreement">
                    <p>Agreement</p>
                  </div>
                </div>

                <div className="agreement-purchase-type-container">
                  <div
                    className="agreement-individual-purchase"
                    style={{ marginRight: "2rem" }}
                  >
                    <Link to="/individualpurchase">
                      <img src={Individualpurchase} alt="individualpurchase" />
                      <p id="agreement-individual-text">Individual Purchase</p>
                      <p id="agreement-individual-desc">
                        For Individual purchases, please select this.
                      </p>
                    </Link>
                  </div>

                  <p id="agreement-or">Or</p>

                  <div
                    className="agreement-company-purchase"
                    style={{ marginLeft: "2rem" }}
                  >
                    <Link to="/companypurchase">
                      <img src={Companypurchase} alt="companypurchase" />
                      <p id="agreement-company-text">Company Purchase</p>
                      <p id="agreement-company-desc">
                        For company purchases, please select this.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="delivery-right-container">
                <div className="delivery-product-name-container">
                  <p>Playstation 4 + 2 Controller</p>
                  <p>Add ons: Game1, Game2 </p>
                  <p id="delivery-date-container">
                    27 Feb, 2022 - 27 May, 2022
                  </p>
                </div>

                <div className="delivery-priceInfo-container">
                  <div className="monthly-rent">
                    <p>
                      <span>
                        Monthly Rent{" "}
                        <img
                          src={PriceInfo}
                          alt="priceInfo"
                          style={{
                            width: "0.688rem",
                            height: "0.688rem",
                            marginLeft: ".5rem",
                          }}
                        />
                      </span>{" "}
                      <span>???917</span>
                    </p>
                    <p>
                      <span>Tenure</span> <span>3 Months</span>
                    </p>
                  </div>
                  <div className="sub-total">
                    <p>
                      <span>Sub Total</span> <span>Sub Total</span>
                    </p>
                    <p>
                      <span>GST</span> <span>+???321</span>
                    </p>
                    <p>
                      <span>Coupon</span> <span>- ???120</span>
                    </p>
                  </div>
                  <p id="delivery-total-payment">
                    <span>Total Payment</span> <span>???2952</span>
                  </p>
                </div>

                <div className="delivery-gst-btn-container">
                  <div className="gst-btn">
                    <button
                      type="submit"
                      onClick={() => setIsGstdetails(!isGstdetails)}
                    >
                      Claim GST +
                    </button>
                    {isGstdetails && (
                      <>
                        <div className="delivery-gst-details-container">
                          <div className="delivery-gst-details-content">
                            <p>
                              GST Details{" "}
                              <img
                                src={SmallCross}
                                alt="cross"
                                style={{
                                  width: "2rem",
                                  height: "2rem",
                                  cursor: "pointer",
                                }}
                                onClick={() => setIsGstdetails(!isGstdetails)}
                              />
                            </p>

                            <div className="delivery-gst-no-container">
                              <input
                                type="text"
                                name="cname"
                                id=""
                                placeholder="Company name"
                              />
                              <input
                                type="text"
                                name="gno"
                                id=""
                                placeholder="GST number"
                              />
                            </div>

                            <input
                              className="gstadd-input"
                              type="text"
                              name="gadd"
                              id="gadd"
                              placeholder="GST Address"
                            />

                            <button type="submit">Claim GST</button>
                          </div>
                        </div>
                      </>
                    )}
                    <button
                      type="submit"
                      onClick={() => setIsCoupon(!isCoupon)}
                    >
                      Apply Coupon
                    </button>
                    {isCoupon && (
                      <>
                        <div className="coupon-popup-full-container">
                          <div className="coupon-popup-main-container">
                            <div className="coupon-popup-heading-content">
                              <p>
                                <img
                                  src={Gradientcouppon}
                                  alt="couppon"
                                  style={{ marginRight: "2px" }}
                                />{" "}
                                Coupons
                              </p>
                              <img
                                src={SmallCross}
                                alt="cross"
                                style={{ cursor: "pointer" }}
                                onClick={() => setIsCoupon(!isCoupon)}
                              />
                            </div>

                            <div className="enter-coupon-code-container">
                              <input
                                type="text"
                                value=""
                                placeholder="Enter coupon code"
                              />
                              <button
                                type="submit"
                                className="enter-coupon-btn"
                                style={{ marginLeft: "2rem" }}
                              >
                                Apply Code
                              </button>
                            </div>

                            <div className="redeem-coupon-container">
                              <div className="coupon-main-content-one">
                                <h3 className="coupon-main-content-heading">
                                  Welcome Coupon
                                </h3>
                                <p className="coupon-main-content-desc">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                                <button
                                  type="submit"
                                  className="coupon-main-content-btn"
                                >
                                  Redeem
                                </button>
                              </div>

                              <div className="coupon-main-content-two">
                                <h3 className="coupon-main-content-heading">
                                  Welcome Coupon
                                </h3>
                                <p className="coupon-main-content-desc">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                                <button
                                  type="submit"
                                  className="coupon-main-content-btn"
                                >
                                  Redeem
                                </button>
                              </div>

                              <div className="coupon-main-content-three">
                                <h3 className="coupon-main-content-heading">
                                  Welcome Coupon
                                </h3>
                                <p className="coupon-main-content-desc">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                                <button
                                  type="submit"
                                  className="coupon-main-content-btn"
                                >
                                  Redeem
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <label htmlFor="damage">
                    <input type="checkbox" name="damage" id="damage" />
                    <span style={{ marginLeft: ".5rem" }}>
                      Damage Waiver{" "}
                      <img
                        src={PriceInfo}
                        alt="priceInfo"
                        style={{
                          width: "0.688rem",
                          height: "0.688rem",
                          marginLeft: ".5rem",
                        }}
                      />
                    </span>
                  </label>

                  <label htmlFor="credit" style={{ marginTop: "1rem" }}>
                    <input type="checkbox" name="credit" id="credit" />
                    <span style={{ marginLeft: ".5rem" }}>
                      Use Credit{" "}
                      <img
                        src={PriceInfo}
                        alt="priceInfo"
                        style={{
                          width: "0.688rem",
                          height: "0.688rem",
                          marginLeft: ".5rem",
                        }}
                      />
                    </span>
                  </label>
                </div>

                <div className="delivery-note-container">
                  <div className="note">
                    <p>
                      <img src={Note} alt="note" /> Note:{" "}
                    </p>
                  </div>
                  <div className="note-desc">
                    <p>
                      You can choose to either complete agreement or the payment
                      to quickly reserve your order. However, both need to be
                      completed for us to dispatch your order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Agreement;
