import React, {useState} from 'react'
import './mobileordersummary.css'


import { Navbar } from '../../components'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


import {
    Gradientcouppon,
    MobilePriceinfo,
    Pc,
    SmallCross,
  } from "../../assets";
  import { Link } from "react-router-dom";

const Mobileordersummary = () => {
    const [showAddpage, setShowaddpage] = useState(false);
    const [viewDetails, setViewdetails] = useState(false);
    const [isGstdetails, setIsGstdetails] = useState(false);
    const [isCoupon, setIsCoupon] = useState(false);
  return (
    <>
        <Navbar />
        <div className="delivery-mobile-product-name">
          <div className="delivery-mobile-product-name-content">
            <div className="delivery-mobile-product-img">
              <img src={Pc} alt="pc" />
            </div>

            <div className="delivery-mobile-product-desc">
              <p>MSI Gaming Laptop, 16gb ram, 2.5 gigahertz..</p>
            </div>
          </div>
        </div>

        <div className="delivery-mobile-subscription-price">
          <div className="delivery-mobile-subscription-price-content">
            <div className="delivery-mobile-monthly-rent">
              <p>
                Monthly Rent <span>₹864</span>
              </p>
              <p>
                GST <span>₹53</span>
              </p>
            </div>
            <p style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
              <span>
                Total Payment{" "}
                <img
                  src={MobilePriceinfo}
                  alt="priceinfo"
                  style={{ marginLeft: ".5rem" }}
                />
              </span>{" "}
              <span>₹917</span>
            </p>
          </div>
        </div>

        <div className="delivery-mobile-subscription-price">
          <div className="delivery-mobile-subscription-price-content">
            <div className="delivery-mobile-monthly-rent">
              <p>
                Monthly Rent <span>₹864</span>
              </p>
              <p>
                GST <span>₹53</span>
              </p>
            </div>
            <p style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}>
              <span>
                Total Payment{" "}
                <img
                  src={MobilePriceinfo}
                  alt="priceinfo"
                  style={{ marginLeft: ".5rem" }}
                />
              </span>{" "}
              <span>₹917</span>
            </p>
          </div>
        </div>

        <div className="delivery-mobile-claim-gst-container">
          <div className="delivery-mobile-claim-gst-content">
            <div className="mobile-claim-gst-btn">
              <button type="submit">Claim GST</button>
              <button type="submit">Apply Coupon</button>
            </div>

            <label htmlFor="damage" style={{ marginTop: "2rem" }}>
              <input type="checkbox" name="damage" id="damage" />
              <span>
                Damage Wavier{" "}
                <img
                  src={MobilePriceinfo}
                  alt="priceinfo"
                  style={{ marginLeft: ".5rem" }}
                />
              </span>
            </label>

            <label htmlFor="credit" style={{ marginTop: "1.5rem" }}>
              <input type="checkbox" name="credit" id="credit" />
              <span>
                Use Credit{" "}
                <img
                  src={MobilePriceinfo}
                  alt="priceinfo"
                  style={{ marginLeft: ".5rem" }}
                />
              </span>
            </label>
          </div>
        </div>




        <div className="mobile-price-to-pay-container">
          <div className="mobile-price-to-pay-content">
            <div className="mobile-price-to-pay-left-part">
              <p id="to-pay">To Pay</p>
              <p id="to-pay-price">₹750.00</p>
              <p
                id="to-pay-details"
                onClick={() => setViewdetails(!viewDetails)}
                style={{ cursor: "pointer" }}
              >
                view details
              </p>


              {viewDetails && (
                <>
                  <div className="mobile-delivery-productdetails-page">
                    <div className="mobile-delivery-proddetails-heading-container">
                      <div className="mobile-delivery-proddetails-heading-content">
                        <p>
                          Product Details{" "}
                          <img
                            src={SmallCross}
                            alt="cross"
                            onClick={() => setViewdetails(!viewDetails)}
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
                            Ps4 <span>₹500/day</span>
                          </p>
                          <p>
                            Addons1 <span>₹100/day</span>
                          </p>
                          <p>
                            Addons1 <span>₹100/day</span>
                          </p>
                          <p>
                            Addons1 <span>₹100/day</span>
                          </p>
                          <p>
                            Addons1 <span>₹100/day</span>
                          </p>
                          <p>
                            Addons1 <span>₹100/day</span>
                          </p>
                        </div>

                        <div className="mobile-delivery-subscription-days">
                          <p>
                            {" "}
                            <span></span> ₹1000/day
                          </p>
                          <p>
                            No of days <span>x 92 days</span>
                          </p>
                        </div>

                        <div className="mobile-delivery-subtotal-container">
                          <p>
                            Sub total <span>₹92000</span>
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

                            <span>+ ₹4356</span>
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

                            <span>- ₹14356</span>
                          </p>
                        </div>

                        <div className="mobile-delivery-grandtotal-container">
                          <p>
                            Grand Total <span>₹7200</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>


            <div className="mobile-price-to-pay-right-part">
              <button
                type="submit"
                className="mobile-proceed-btn"
                onClick={() => setShowaddpage(!showAddpage)}
              >
                <Link to="/deliveryaddress" style={{textDecoration:"none", color:"#FFFFFF"}}>
                Proceed
                </Link>
              </button>
            </div>
          </div>
        </div>
    </>
  )
}

export default Mobileordersummary