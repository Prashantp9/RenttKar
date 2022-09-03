import React from "react";
import "./deliveryaddress.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navbar } from "../../components";
import {
  Delete,
  Edit,
  Gradientcouppon,
  LeftArrow,
  Location,
  MobilePriceinfo,
  MobileSearch,
  Note,
  Pc,
  PickupLocation,
  PriceInfo,
  RightNavigation,
  ShowinMap,
  SmallCross,
  TabletDelete,
  TabletEdit,
  TabletStep1gradient,
  TabletStep2,
  TabletStep3,
} from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const Deliveryaddress = () => {
  const [showAddpage, setShowaddpage] = useState(false);
  const [viewDetails, setViewdetails] = useState(false);
  const [isAddone, setIsAddone] = useState(false);
  const [isAddtwo, setIsAddtwo] = useState(false);
  const [isSelfpickup, setIsSelfpickup] = useState(false);
  const [isProductdetails, setIsProductdetails] = useState(false);
  const [isAddaddress, setIsAddaddress] = useState(false);
  const [isGstdetails, setIsGstdetails] = useState(false);
  const [isCoupon, setIsCoupon] = useState(false);

  if (window.innerWidth <= 500) {
    return (
      <>
        <div className="mobile-order-summary-container">
          <div className="mobile-order-summary-content">
            <Link to="/mycart">
              <p>
                {" "}
                <img
                  src={LeftArrow}
                  alt=""
                  style={{ marginRight: "1rem", marginLeft: ".5rem" }}
                />{" "}
                Order Summary
              </p>
            </Link>
          </div>
        </div>
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
                                onClick={() => setIsCoupon(!isCoupon())}
                                type="submit"
                                id="mobile-delivery-edit-btn"
                              >
                                <p>Edit</p>
                              </button>
                              {!isCoupon && (
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
                                            cursor:"pointer"
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
                Proceed
              </button>
              {showAddpage && (
                <>
                  <div className="mobile-delivery-page-container">
                    <div className="mobile-delivery-checkout-container">
                      <div className="mobile-delivery-checkout-content">
                        <Link
                          to=""
                          onClick={() => setShowaddpage(!showAddpage)}
                        >
                          <p>
                            {" "}
                            <img
                              src={LeftArrow}
                              alt=""
                              style={{
                                marginRight: "1rem",
                                marginLeft: ".5rem",
                                marginBottom: ".2rem",
                              }}
                            />{" "}
                            Checkout
                          </p>
                        </Link>
                      </div>
                    </div>

                    <div className="mobile-delivery-tab-container">
                      <div className="mobile-delivery-tab-content">
                        <div className="mobile-delivery-add-tab">
                          <p>Delivery Address</p>
                        </div>
                        <div className="mobile-delivery-pay-tab">
                          <p>Paymen..</p>
                        </div>
                        <div className="mobile-delivery-agreement-tab">
                          <p>Agree..</p>
                        </div>
                      </div>
                    </div>

                    <div className="mobile-delivery-select-address-container">
                      <div className="mobile-delivery-select-address-content">
                        <div className="mobile-delivery-address-btn-container">
                          <button
                            onClick={() => setIsAddaddress(!isAddaddress)}
                            type="submit"
                            className="mobile-delivery-add-addr-btn"
                          >
                            <p>Add Address +</p>
                          </button>
                          {isAddaddress && (
                            <>
                              <div className="mobile-delivery-addaddress-container">
                                <div className="mobile-new-address-text-container">
                                  <div className="mobile-new-address-text-content">
                                    <p>
                                      New Address{" "}
                                      <img
                                        src={SmallCross}
                                        alt="cross"
                                        style={{
                                          cursor: "pointer",
                                          width: "1.875rem",
                                          height: "1.5rem",
                                        }}
                                        onClick={() =>
                                          setIsAddaddress(!isAddaddress)
                                        }
                                      />
                                    </p>
                                  </div>
                                </div>

                                <div className="mobile-new-address-container">
                                  <div className="mobile-new-address-content">
                                    <div className="mobile-new-address-location-container">
                                      <img src={Location} alt="location" />
                                      <p style={{ marginLeft: ".5rem" }}>
                                        Mumbai
                                      </p>
                                    </div>

                                    <input
                                      type="text"
                                      name="pincode"
                                      id=""
                                      placeholder="400017"
                                    />

                                    <div className="mobile-search-address">
                                      <img
                                        src={MobileSearch}
                                        alt="search"
                                        style={{
                                          width: "0.875rem",
                                          height: "0.875rem",
                                        }}
                                      />
                                      <input
                                        type="search"
                                        name="searchAddress"
                                        id=""
                                        placeholder="Search your Address"
                                      />
                                    </div>

                                    <input
                                      type="text"
                                      name="address"
                                      id=""
                                      placeholder="Room no, building name, street name.."
                                    />

                                    <input
                                      type="tel"
                                      name="phone"
                                      id=""
                                      minLength={10}
                                      maxLength={10}
                                      placeholder="Mobile number"
                                    />

                                    <input
                                      type="tel"
                                      name="telephone"
                                      id=""
                                      placeholder="Telephone number"
                                    />

                                    <button type="submit">Add Address</button>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        {isAddone ? (
                          <div className="mobile-delivery-address-container">
                            <div className="mobile-delivery-address-active-one-container">
                              <div className="mobile-delivery-upper-part">
                                <p>Delivery Address 1</p>

                                <p
                                  style={{
                                    marginTop: "1.5rem",
                                  }}
                                >
                                  Ronak Kumar | 8369648935
                                </p>
                                <p
                                  style={{
                                    marginTop: "1.25rem",
                                  }}
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquet et lorem imperdiet
                                  fringilla egestas quis at. Urna aliquam,
                                  neque, mauris neque, mauris, est.
                                </p>
                              </div>
                              <div className="mobile-delivery-add-edit-delete-btn">
                                <div className="mobile-delivery-btn-left-part">
                                  <button
                                    type="submit"
                                    className="mobile-delivery-delete-btn"
                                  >
                                    <img src={TabletDelete} alt="delete" />
                                  </button>

                                  <button
                                    type="submit"
                                    className="mobile-delivery-edit-btn"
                                  >
                                    <img src={TabletEdit} alt="edit" />
                                  </button>
                                </div>

                                <div className="mobile-delivery-btn-right-active-part">
                                  <button
                                    type="submit"
                                    className="mobile-delivery-select-active-btn"
                                    onClick={() => setIsAddone(!isAddone)}
                                  >
                                    <p>Selected</p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="mobile-delivery-address-one-container">
                            <div className="mobile-delivery-upper-part">
                              <p>Delivery Address 1</p>

                              <p
                                style={{
                                  marginTop: "1.5rem",
                                }}
                              >
                                Ronak Kumar | 8369648935
                              </p>
                              <p
                                style={{
                                  marginTop: "1.25rem",
                                }}
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquet et lorem imperdiet
                                fringilla egestas quis at. Urna aliquam, neque,
                                mauris neque, mauris, est.
                              </p>
                            </div>
                            <div className="mobile-delivery-add-edit-delete-btn">
                              <div className="mobile-delivery-btn-left-part">
                                <button
                                  type="submit"
                                  className="mobile-delivery-delete-btn"
                                >
                                  <img src={TabletDelete} alt="delete" />
                                </button>

                                <button
                                  type="submit"
                                  className="mobile-delivery-edit-btn"
                                >
                                  <img src={TabletEdit} alt="edit" />
                                </button>
                              </div>

                              <div className="mobile-delivery-btn-right-part">
                                <button
                                  type="submit"
                                  className="mobile-delivery-select-btn"
                                  onClick={() => setIsAddone(!isAddone)}
                                >
                                  SelectAddress
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {isAddtwo ? (
                          <div className="mobile-delivery-address-container">
                            <div className="mobile-delivery-address-active-one-container">
                              <div className="mobile-delivery-upper-part">
                                <p>Delivery Address 1</p>

                                <p
                                  style={{
                                    marginTop: "1.5rem",
                                  }}
                                >
                                  Ronak Kumar | 8369648935
                                </p>
                                <p
                                  style={{
                                    marginTop: "1.25rem",
                                  }}
                                >
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Aliquet et lorem imperdiet
                                  fringilla egestas quis at. Urna aliquam,
                                  neque, mauris neque, mauris, est.
                                </p>
                              </div>
                              <div className="mobile-delivery-add-edit-delete-btn">
                                <div className="mobile-delivery-btn-left-part">
                                  <button
                                    type="submit"
                                    className="mobile-delivery-delete-btn"
                                  >
                                    <img src={TabletDelete} alt="delete" />
                                  </button>

                                  <button
                                    type="submit"
                                    className="mobile-delivery-edit-btn"
                                  >
                                    <img src={TabletEdit} alt="edit" />
                                  </button>
                                </div>

                                <div className="mobile-delivery-btn-right-active-part">
                                  <button
                                    type="submit"
                                    className="mobile-delivery-select-active-btn"
                                    onClick={() => setIsAddtwo(!isAddtwo)}
                                  >
                                    <p>Selected</p>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="mobile-delivery-address-one-container">
                            <div className="mobile-delivery-upper-part">
                              <p>Delivery Address 1</p>

                              <p
                                style={{
                                  marginTop: "1.5rem",
                                }}
                              >
                                Ronak Kumar | 8369648935
                              </p>
                              <p
                                style={{
                                  marginTop: "1.25rem",
                                }}
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Aliquet et lorem imperdiet
                                fringilla egestas quis at. Urna aliquam, neque,
                                mauris neque, mauris, est.
                              </p>
                            </div>
                            <div className="mobile-delivery-add-edit-delete-btn">
                              <div className="mobile-delivery-btn-left-part">
                                <button
                                  type="submit"
                                  className="mobile-delivery-delete-btn"
                                >
                                  <img src={TabletDelete} alt="delete" />
                                </button>

                                <button
                                  type="submit"
                                  className="mobile-delivery-edit-btn"
                                >
                                  <img src={TabletEdit} alt="edit" />
                                </button>
                              </div>

                              <div className="mobile-delivery-btn-right-part">
                                <button
                                  type="submit"
                                  className="mobile-delivery-select-btn"
                                  onClick={() => setIsAddtwo(!isAddtwo)}
                                >
                                  SelectAddress
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        {isSelfpickup ? (
                          <div className="mobile-delivery-active-pickup-location-container">
                            <div className="mobile-delivery-active-pickup-location-content">
                              <p id="mobile-self-pickup-text">
                                <img src={PickupLocation} alt="pickup" /> Self
                                pickup Location
                              </p>
                              <p
                                id="mobile-self-pickup-address"
                                style={{
                                  marginTop: "1rem",
                                }}
                              >
                                303, 304 Royal Enclave Parsi Panchayat Road, Old
                                Nagardas Rd, Mumbai 400069
                              </p>

                              <button
                                type="submit"
                                id="mobile-active-self-pickup-btn"
                                onClick={() => setIsSelfpickup(!isSelfpickup)}
                              >
                                <p>Self Picked</p>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="mobile-delivery-pickup-location-container">
                            <p id="mobile-self-pickup-text">
                              <img src={PickupLocation} alt="pickup" /> Self
                              pickup Location
                            </p>
                            <p
                              id="mobile-self-pickup-address"
                              style={{
                                marginTop: "1rem",
                              }}
                            >
                              303, 304 Royal Enclave Parsi Panchayat Road, Old
                              Nagardas Rd, Mumbai 400069
                            </p>

                            <button
                              type="submit"
                              id="mobile-self-pickup-btn"
                              onClick={() => setIsSelfpickup(!isSelfpickup)}
                            >
                              Self Pickup
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mobile-delivery-view-details-container">
                      <div className="mobile-delivery-view-details-content">
                        <div className="mobile-delivery-viewdetails-leftpart">
                          <p id="mobile-to-pay">To Pay</p>
                          <p id="mobile-to-pay-price">₹917</p>
                          <p
                            id="mobile-to-pay-view"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              setIsProductdetails(!isProductdetails)
                            }
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
                                            onClick={() =>
                                              setIsGstdetails(!isGstdetails)
                                            }
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
                                                        setIsGstdetails(
                                                          !isGstdetails
                                                        )
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

                                                  <button type="submit">
                                                    Claim GST
                                                  </button>
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
                                            onClick={() =>
                                              setIsCoupon(!isCoupon)
                                            }
                                            type="submit"
                                            id="mobile-delivery-edit-btn"
                                          >
                                            <p>Edit</p>
                                          </button>
                                          {!isCoupon && (
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
                                                      onClick={() =>
                                                        setIsCoupon(!isCoupon)
                                                      }
                                                      src={SmallCross}
                                                      alt="cross"
                                                      style={{
                                                        width: "1.531rem",
                                                        height: "2rem",
                                                        cursor:"pointer"
                                                      }}
                                                    />
                                                  </p>

                                                  <input
                                                    type="text"
                                                    name="couponcode"
                                                    id=""
                                                    placeholder="Enter coupon code"
                                                  />

                                                  <p id="mobile-available">
                                                    3 Available
                                                  </p>

                                                  <div className="mobile-coupon-slider-container">
                                                    <Swiper
                                                      width={500}
                                                      slidesPerView={2}
                                                      centeredSlides={false}
                                                      spaceBetween={15}
                                                      slidesPerGroup={1}
                                                      grabCursor={true}
                                                      loop={true}
                                                      loopFillGroupWithBlank={
                                                        true
                                                      }
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
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
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
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
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
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
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
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
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
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
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
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
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
                        <div className="mobile-delivery-viewdetails-rightpart">
                          <button type="submit" id="mobile-proceed-btn">
                            Proceed
                          </button>
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
                  <img src={TabletStep2} alt="tabletStep2" /> <span>Step2</span>{" "}
                </p>
                <p>
                  <img src={TabletStep3} alt="tabletStep3" /> <span>Step3</span>{" "}
                </p>
              </div>
              <div className="delivery-left-heading-container">
                <div className="delivery-add">
                  <p>Delivery Address</p>
                </div>
                <img src={RightNavigation} alt="navigation" />
                <div className="payment">
                  <p>Paym..</p>
                </div>
                <img src={RightNavigation} alt="navigation" />
                <div className="agreement">
                  <p>Agree..</p>
                </div>
              </div>

              <div className="delivery-add-container">
                <button className="delivery-add-address-btn">
                  Add Address +
                </button>

                <div className="delivery-address-one-container">
                  <div className="delivery-address-one-container-left-part">
                    <p id="address-one-heading">Delivery Address 1</p>
                    <p id="address-one-phoneno">9820049359 | 9820049359</p>
                    <p id="address-one-address">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquet et lorem imperdiet fringilla egestas quis at. Urna
                      aliquam, neque, mauris neque, mauris, est.
                    </p>
                  </div>

                  <div className="delivery-address-one-container-right-part">
                    <p className="edit-delete-img">
                      <span>
                        <img src={TabletEdit} alt="edit" />
                      </span>{" "}
                      <span>
                        <img src={TabletDelete} alt="delete" />
                      </span>
                    </p>{" "}
                    <button id="delivery-select-btn">Select Address</button>
                  </div>
                </div>

                <div className="delivery-address-one-container">
                  <div className="delivery-address-one-container-left-part">
                    <p id="address-one-heading">Delivery Address 1</p>
                    <p id="address-one-phoneno">9820049359 | 9820049359</p>
                    <p id="address-one-address">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquet et lorem imperdiet fringilla egestas quis at. Urna
                      aliquam, neque, mauris neque, mauris, est.
                    </p>
                  </div>

                  <div className="delivery-address-one-container-right-part">
                    <p className="edit-delete-img">
                      <span>
                        <img src={TabletEdit} alt="edit" />
                      </span>{" "}
                      <span>
                        <img src={TabletDelete} alt="delete" />
                      </span>
                    </p>
                    <button id="delivery-select-btn">Select Address</button>
                  </div>
                </div>

                <p id="delivery-or">or</p>

                <div className="delivery-self-location">
                  <div className="delivery-self-location-left-part">
                    <p id="pickupLocation-text">
                      <img
                        src={PickupLocation}
                        alt="pickuplocation"
                        style={{ marginRight: ".5rem" }}
                      />{" "}
                      Self Pickup Location
                    </p>
                    <p id="cmp-address">
                      303, 304 Royal Enclave Parsi Panchayat Road, Old Nagardas
                      Rd, Mumbai 400069
                    </p>
                    <a
                      id="show-in-map"
                      href="https://www.google.com/maps/dir/19.0676992,72.9939968/rentKar/@19.0866537,72.7896212,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7c94a1a2fb789:0x4f31e332a3917456!2m2!1d72.852397!2d19.1256041"
                    >
                      <img src={ShowinMap} alt="pickuplocation" /> Show in map
                    </a>
                  </div>
                  <div className="delivery-self-location-right-part">
                    <button id="proceed-btn">Proceed</button>
                  </div>
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
                  PS4 <span>₹500/day</span>
                </p>
                <p>
                  Addons 1 <span>₹500/day</span>
                </p>
                <p>
                  Addons 1 <span>₹500/day</span>
                </p>
                <p>
                  Addons 1 <span>₹500/day</span>
                </p>
                <p>
                  Addons 1 <span>₹500/day</span>
                </p>
                <p>
                  Addons 1 <span>₹500/day</span>
                </p>
              </div>

              <div className="delivery-tablet-noofdays">
                <p>
                  {" "}
                  <span></span> ₹1000/day
                </p>
                <p>
                  No of days <span>x 92 days</span>{" "}
                </p>
              </div>

              <div className="delivery-tablet-total-price">
                <p>
                  <span>Sub total</span> ₹92000
                </p>
                <p>
                  <span>
                    Gst{" "}
                    <button>
                      <p>Add +</p>
                    </button>
                  </span>{" "}
                  + ₹4356
                </p>
                <p>
                  <span>
                    Coupon{" "}
                    <button>
                      <p>Edit</p>
                    </button>
                  </span>{" "}
                  + ₹4356
                </p>
              </div>

              <div className="delivery-tablet-grand-total">
                <p>
                  <span>Grand Total</span> <span>₹7200</span>
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
        <div className="delivery-container">
          <div className="delivery-content">
            <div className="delivery-left-container">
              <div className="delivery-left-heading-container">
                <div className="delivery-add">
                  <p>Delivery Address</p>
                </div>
                <img src={RightNavigation} alt="navigation" />
                <div className="payment">
                  <p>Payment</p>
                </div>
                <img src={RightNavigation} alt="navigation" />
                <div className="agreement">
                  <p>Agreement</p>
                </div>
              </div>

              <div className="delivery-add-container">
                <button className="delivery-add-address-btn">
                  Add Address +
                </button>

                <div className="delivery-address-one-container">
                  <div className="delivery-address-one-container-left-part">
                    <p id="address-one-heading">Delivery Address 1</p>
                    <p id="address-one-phoneno">9820049359 | 9820049359</p>
                    <p id="address-one-address">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquet et lorem imperdiet fringilla egestas quis at. Urna
                      aliquam, neque, mauris neque, mauris, est.
                    </p>
                  </div>

                  <div className="delivery-address-one-container-right-part">
                    <p>
                      <img src={Edit} alt="edit" />{" "}
                      <img src={Delete} alt="delete" />
                    </p>
                    <button id="delivery-select-btn">Select Address</button>
                  </div>
                </div>

                <div className="delivery-address-one-container">
                  <div className="delivery-address-one-container-left-part">
                    <p id="address-one-heading">Delivery Address 1</p>
                    <p id="address-one-phoneno">9820049359 | 9820049359</p>
                    <p id="address-one-address">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquet et lorem imperdiet fringilla egestas quis at. Urna
                      aliquam, neque, mauris neque, mauris, est.
                    </p>
                  </div>

                  <div className="delivery-address-one-container-right-part">
                    <p>
                      <img src={Edit} alt="edit" />{" "}
                      <img src={Delete} alt="delete" />
                    </p>
                    <button id="delivery-select-btn">Select Address</button>
                  </div>
                </div>

                <p id="delivery-or">or</p>

                <div className="delivery-self-location">
                  <div className="delivery-self-location-left-part">
                    <p id="pickupLocation-text">
                      <img
                        src={PickupLocation}
                        alt="pickuplocation"
                        style={{ marginRight: ".5rem" }}
                      />{" "}
                      Self Pickup Location
                    </p>
                    <p id="cmp-address">
                      303, 304 Royal Enclave Parsi Panchayat Road, Old Nagardas
                      Rd, Mumbai 400069
                    </p>
                    <a
                      id="show-in-map"
                      href="https://www.google.com/maps/dir/19.0676992,72.9939968/rentKar/@19.0866537,72.7896212,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7c94a1a2fb789:0x4f31e332a3917456!2m2!1d72.852397!2d19.1256041"
                    >
                      <img src={ShowinMap} alt="pickuplocation" /> Show in map
                    </a>
                  </div>
                  <div className="delivery-self-location-right-part">
                    <button id="proceed-btn">Proceed</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="delivery-right-container">
              <div className="delivery-product-name-container">
                <p>Playstation 4 + 2 Controller</p>
                <p>Add ons: Game1, Game2 </p>
                <p id="delivery-date-container">27 Feb, 2022 - 27 May, 2022</p>
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
                    <span>₹917</span>
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
                    <span>GST</span> <span>+₹321</span>
                  </p>
                  <p>
                    <span>Coupon</span> <span>- ₹120</span>
                  </p>
                </div>
                <p id="delivery-total-payment">
                  <span>Total Payment</span> <span>₹2952</span>
                </p>
              </div>

              <div className="delivery-gst-btn-container">
                <div className="gst-btn">
                  <button type="submit">Claim GST +</button>
                  <button type="submit">Apply Coupon</button>
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
      </>
    );
  }
};

export default Deliveryaddress;
