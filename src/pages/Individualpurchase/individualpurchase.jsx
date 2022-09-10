import React, { useState } from "react";
import "./individualpurchase.css";
import { Navbar } from "../../components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// images
import {
  GradientDone,
  TabletStep1gradient,
  TabletStep3gradient,
  RightNavigation,
  Gradientcouppon,
  SmallCross,
  PriceInfo,
  Note,
  UploadSelfie,
  UploadFile,
  TabletRightNavigation,
  UploadFileGradient,
  OrderAccepted,
} from "../../assets";
import { Link } from "react-router-dom";

const Individualpurchase = () => {
  const [isGstdetails, setIsGstdetails] = useState(false);
  const [isCoupon, setIsCoupon] = useState(false);
  const [isorderConfirm, setIsOrderconfirm] = useState(false);

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

        <div className="mobile-individual-container">
          <div className="mobile-individual-content">
            <div className="mobile-company-link-container">
              <p>Not an individual purchase?</p>
              <Link to="/companypurchase">Company Purchase</Link>
            </div>

            <div className="mobile-individual-upload-container">
              <div className="mobile-individual-upload">
                <img
                  src={UploadSelfie}
                  alt="uploadselfie"
                  style={{ cursor: "pointer" }}
                />
                <input type="file" name="selfie" id="file" accept="image/*" />
              </div>

              <div className="mobile-individual-upload-desc">
                <p id="mobile-individual-upload-text">Upload a Selfie</p>
                <p id="mobile-individual-upload-desc">
                  Please upload a real-time selfie. This step is very important
                  to us so that no documents are misused.
                </p>
                <p id="mobile-individual-selfie-reupload">
                  <img
                    src={UploadFileGradient}
                    alt="uploadfile"
                    style={{ marginRight: ".5rem" }}
                  />
                  <input type="file" name="selfie" id="file" accept="image/*" />
                  Re-Upload file
                </p>
              </div>
            </div>

            <div className="mobile-individual-upload-container">
              <div className="mobile-individual-upload">
                <img
                  src={UploadFile}
                  alt="uploadidentity"
                  style={{ cursor: "pointer" }}
                />
                <input
                  type="file"
                  name="identity"
                  id="file"
                  accept=".jpg/*,.png/*,.doc/*"
                />
              </div>

              <div className="mobile-individual-upload-desc">
                <p id="mobile-individual-upload-text">Identity Verification</p>
                <p id="mobile-individual-upload-desc">
                  You can upload documents like Aadhar Card, Driving Licenses,
                  and Passport. College Ids do not work for us!
                </p>
              </div>
            </div>

            <div className="mobile-individual-upload-container">
              <div className="mobile-individual-upload">
                <img
                  src={UploadFile}
                  alt="uploadidentity"
                  style={{ cursor: "pointer" }}
                />
                <input
                  type="file"
                  name="identity"
                  id="file"
                  accept=".jpg/*,.png/*,.doc/*"
                />
              </div>

              <div className="mobile-individual-upload-desc">
                <p id="mobile-individual-upload-text">Address Verification</p>
                <p id="mobile-individual-upload-desc">
                  Upload an address proof from your Aadhar card, broadband bill,
                  Electricity bill, and Rental agreement for your Product
                  delivery address.
                </p>
                <Link to="/deliveryaddress">Change Address</Link>
              </div>
            </div>

            <div className="mobile-individual-termsconditions-container">
              <div className="mobile-individual-termsconditions-content">
                <p className="mobile-individual-termscondition-text">
                  Terms & Conditions
                </p>
                <div className="mobile-individual-termscondition">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    diam ut sagittis nunc sodales id cursus nisl integer.
                    Laoreet tortor, nunc, vestibulum id non est a id. Imperdiet
                    ante donec et semper nisi, ut rutrum ut viverra. Tellus a
                    non amet sit nisl lacus laoreet. Donec eu viverra nibh
                    elementum nunc non scelerisque. In turpis a sed volutpat.
                    Eget facilisis condimentum lorem scelerisque. Est egestas
                    condimentum elit blandit libero, sed amet, vel, maecenas.
                    Cras bibendum gravida at quam est praesent turpis a.
                    Consequat purus, eget tellus elit sagittis. Cras dignissim
                    lectus vestibulum quis. Sed massa volutpat volutpat
                    scelerisque lacus, aenean sed. Porttitor auctor consectetur
                    quam pretium ut non, purus. Arcu vitae tortor, feugiat
                    facilisis laoreet praesent. Varius fringilla dictum amet sit
                  </p>
                </div>
              </div>
            </div>

            <div className="mobile-individual-accept-termscondition">
              <label htmlFor="terms">
                <input type="checkbox" name="terms" id="checkbox" />
                <p>
                  By agreeing to this checked box, I agree to the terms and
                  conditions.
                </p>
              </label>
            </div>

            <div className="mobile-individual-agreebtn-container">
              <button type="submit" onClick={() => setIsOrderconfirm(!isorderConfirm)}>I Agree</button>
              {isorderConfirm && (
                  <div className="order-confirm-container">
                    <div className="order-confirm-content">
                      <img src={OrderAccepted} alt="orderaccepted"  style={{marginTop:"1rem"}}/>
                      <p id="order-text">Order Accepted</p>
                      <p id="credit-text">Woohoo! 65 Credits Earned</p>
                      <p id="order-desc">
                        Sit back and relax! Your order has been accepted by us.
                        You can check out your order details in <Link to="">My Orders</Link>.
                      </p>
                      <button type="submit">
                        <Link to="/">Done</Link>
                      </button>
                    </div>
                  </div>
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
                      <img src={GradientDone} alt="gradientdone" /> Paym..
                    </Link>
                  </p>
                </div>
                <img src={TabletRightNavigation} alt="navigation" />
                <div className="tablet-agreement-agreement">
                  <p>Agreement</p>
                </div>
              </div>

              <p id="individual-text">
                Not an individual purchase?{" "}
                <Link to="/companypurchase">Company Purchase</Link>
              </p>

              <div className="individual-verification-container">
                <div className="individual-upload-container">
                  <div className="individual-upload">
                    <input
                      type="file"
                      name="selfie"
                      id="file"
                      accept="image/*"
                    />
                    <img src={UploadSelfie} alt="uploadselfie" />
                  </div>
                  <div className="individual-upload-desc">
                    <p id="upload-text">Upload a Selfie</p>
                    <p id="upload-desc">
                      Please upload a real-time selfie. This step is very
                      important to us so that no documents are misused.
                    </p>
                  </div>
                </div>

                <div className="individual-upload-container">
                  <div className="individual-upload">
                    <img src={UploadFile} alt="uploaddocs" />
                    <p id="individual-upload-text">Upload</p>
                    <input
                      type="file"
                      name="docs"
                      id="file"
                      accept=".jpg/*, .png/*, .doc/*"
                    />
                  </div>
                  <div className="individual-upload-desc">
                    <p id="upload-text">Identity Verification</p>
                    <p id="upload-desc">
                      You can upload documents like Aadhar Card, Driving
                      Licenses, and Passport. College Ids do not work for us!
                    </p>
                  </div>
                </div>

                <div className="individual-upload-container">
                  <div className="individual-upload">
                    <img src={UploadFile} alt="uploaddocs" />
                    <p id="individual-upload-text">Upload</p>
                    <input
                      type="file"
                      name="docs"
                      id="file"
                      accept=".jpg/*, .png/*, .doc/*"
                    />
                  </div>
                  <div className="individual-upload-desc">
                    <p id="upload-text">Address Verification</p>
                    <p id="upload-desc">
                      Upload an address proof from your Aadhar card, broadband
                      bill, Electricity bill, and Rental agreement for your
                      Product delivery address.{" "}
                      <Link
                        to="/deliveryaddress"
                        style={{ textDecoration: "none", color: "#0E9BE1" }}
                      >
                        Change address
                      </Link>{" "}
                    </p>
                  </div>
                </div>

                <div className="individual-termscondition-container">
                  <p id="individual-termscondition-text">Terms & Conditions</p>
                  <div className="individual-termscondition-desc-container">
                    <p id="individual-termscondition-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At diam ut sagittis nunc sodales id cursus nisl integer.
                      Laoreet tortor, nunc, vestibulum id non est a id.
                      Imperdiet ante donec et semper nisi, ut rutrum ut viverra.
                      Tellus a non amet sit nisl lacus laoreet. Donec eu viverra
                      nibh elementum nunc non scelerisque. In turpis a sed
                      volutpat. Eget facilisis condimentum lorem scelerisque.
                      Est egestas condimentum elit blandit libero, sed amet,
                      vel, maecenas. Cras bibendum gravida at quam est praesent
                      turpis a. Consequat purus, eget tellus elit sagittis. Cras
                      dignissim lectus vestibulum quis. Sed massa volutpat
                      volutpat scelerisque lacus, aenean sed. Porttitor auctor
                      consectetur quam pretium ut non, purus. Arcu vitae tortor,
                      feugiat facilisis laoreet praesent. Varius fringilla
                      dictum amet sit fames. In porttitor ullamcorper nibh hac
                      risus. Risus urna aliquam nascetur amet varius nunc. Cras
                      dignissim lectus vestibulum quis. Sed
                    </p>
                  </div>
                </div>

                <label
                  htmlFor="terms"
                  className="individual-accept-terms-and-condition"
                >
                  <input
                    type="checkbox"
                    name="terms"
                    id=""
                    style={{
                      marginLeft: "1rem",
                      border: "2px solid #FFFFFF",
                      background: "#141414",
                      borderRadius: "1px",
                    }}
                  />
                  <span style={{ marginLeft: "1rem" }}>
                    By agreeing to this checked box, I agree to the terms and
                    conditions.
                  </span>
                </label>

                <button type="submit" className="individual-agree-button" onClick={() => setIsOrderconfirm(!isorderConfirm)}>
                  I Agree
                </button>
                {isorderConfirm && (
                  <div className="order-confirm-container">
                    <div className="order-confirm-content">
                      <p id="order-text">Order Accepted</p>
                      <img src={OrderAccepted} alt="orderaccepted"  style={{marginTop:"2rem"}}/>
                      <p id="credit-text">Woohoo! 65 Credits Earned</p>
                      <p id="order-desc">
                        Sit back and relax! Your order has been accepted by us.
                        You can check out your order details in <Link to="">My Orders</Link>.
                      </p>
                      <button type="submit">
                        <Link to="/">Done</Link>
                      </button>
                    </div>
                  </div>
                )}
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
                  + ₹4356
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
                <div className="agreement-delivery-add">
                  <p>
                    <Link
                      to="/deliveryaddress"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={GradientDone} alt="gradientdone" /> Delivery
                      Address
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

              <p id="individual-text">
                Not an individual purchase?{" "}
                <Link to="/companypurchase">Company Purchase</Link>
              </p>

              <div className="individual-verification-container">
                <div className="individual-upload-container">
                  <div className="individual-upload">
                    <img src={UploadSelfie} alt="uploadselfie" />
                    <input
                      type="file"
                      name="selfie"
                      id="file"
                      accept="image/*"
                    />
                  </div>
                  <div className="individual-upload-desc">
                    <p id="upload-text">Upload a Selfie</p>
                    <p id="upload-desc">
                      Please upload a real-time selfie. This step is very
                      important to us so that no documents are misused.
                    </p>
                  </div>
                </div>

                <div className="individual-upload-container">
                  <div className="individual-upload">
                    <img src={UploadFile} alt="uploaddocs" />
                    <p id="individual-upload-text">Upload</p>
                    <input
                      type="file"
                      name="docs"
                      id="file"
                      accept=".jpg/*, .png/*, .doc/*"
                    />
                  </div>
                  <div className="individual-upload-desc">
                    <p id="upload-text">Identity Verification</p>
                    <p id="upload-desc">
                      You can upload documents like Aadhar Card, Driving
                      Licenses, and Passport. College Ids do not work for us!
                    </p>
                  </div>
                </div>

                <div className="individual-upload-container">
                  <div className="individual-upload">
                    <img src={UploadFile} alt="uploaddocs" />
                    <p id="individual-upload-text">Upload</p>
                    <input
                      type="file"
                      name="docs"
                      id="file"
                      accept=".jpg/*, .png/*, .doc/*"
                    />
                  </div>
                  <div className="individual-upload-desc">
                    <p id="upload-text">Address Verification</p>
                    <p id="upload-desc">
                      Upload an address proof from your Aadhar card, broadband
                      bill, Electricity bill, and Rental agreement for your
                      Product delivery address.{" "}
                      <Link
                        to="/deliveryaddress"
                        style={{ textDecoration: "none", color: "#0E9BE1" }}
                      >
                        Change address
                      </Link>{" "}
                    </p>
                  </div>
                </div>

                <div className="individual-termscondition-container">
                  <p id="individual-termscondition-text">Terms & Conditions</p>
                  <div className="individual-termscondition-desc-container">
                    <p id="individual-termscondition-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At diam ut sagittis nunc sodales id cursus nisl integer.
                      Laoreet tortor, nunc, vestibulum id non est a id.
                      Imperdiet ante donec et semper nisi, ut rutrum ut viverra.
                      Tellus a non amet sit nisl lacus laoreet. Donec eu viverra
                      nibh elementum nunc non scelerisque. In turpis a sed
                      volutpat. Eget facilisis condimentum lorem scelerisque.
                      Est egestas condimentum elit blandit libero, sed amet,
                      vel, maecenas. Cras bibendum gravida at quam est praesent
                      turpis a. Consequat purus, eget tellus elit sagittis. Cras
                      dignissim lectus vestibulum quis. Sed massa volutpat
                      volutpat scelerisque lacus, aenean sed. Porttitor auctor
                      consectetur quam pretium ut non, purus. Arcu vitae tortor,
                      feugiat facilisis laoreet praesent. Varius fringilla Eget
                      facilisis condimentum lorem scelerisque. Est egestas
                      condimentum elit blandit libero Laoreet tortor, nunc,
                      vestibulum id non est a id. Imperdiet ansa. get facilisis
                      condimentum lorem scelerisque. Est egestas condimentum
                      elit blandit libero, sed amet, vel, maecenas. eget tellus
                      elit sagittis. Cras dignissim lectus vestibulum quis. Sed
                      massa volutpat volutpat scelerisque lacus, aenean sed.
                      Porttitor auctor consectetur quam pretium ut non, .
                    </p>
                  </div>
                </div>

                <label
                  htmlFor="terms"
                  className="individual-accept-terms-and-condition"
                >
                  <input
                    type="checkbox"
                    name="terms"
                    id=""
                    style={{
                      marginLeft: "1rem",
                      border: "2px solid #FFFFFF",
                      background: "#141414",
                      borderRadius: "1px",
                    }}
                  />
                  <span style={{ marginLeft: "1rem" }}>
                    By agreeing to this checked box, I agree to the terms and
                    conditions.
                  </span>
                </label>

                <button
                  type="submit"
                  className="individual-agree-button"
                  onClick={() => setIsOrderconfirm(!isorderConfirm)}
                >
                  I Agree
                </button>
                {isorderConfirm && (
                  <div className="order-confirm-container">
                    <div className="order-confirm-content">
                      <p id="order-text">Order Accepted</p>
                      <img src={OrderAccepted} alt="orderaccepted"  style={{marginTop:"1rem"}}/>
                      <p id="credit-text">Woohoo! 65 Credits Earned</p>
                      <p id="order-desc">
                        Sit back and relax! Your order has been accepted by us.
                        You can check out your order details in <Link to="">My Orders</Link>.
                      </p>
                      <button type="submit">
                        <Link to="/">Done</Link>
                      </button>
                    </div>
                  </div>
                )}
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
                  <button type="submit" onClick={() => setIsCoupon(!isCoupon)}>
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
      </>
    );
  }
};

export default Individualpurchase;
