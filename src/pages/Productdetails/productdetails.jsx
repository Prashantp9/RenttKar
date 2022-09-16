import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./productdetails.css";
import { question } from "./api";

// components
import {
  Navbar,
  Accessoriescard,
  Footer,
  Scrollerbutton,
  Contactbutton,
  Accordian,
  Mobileaddons,
} from "../../components";
import { Link } from "react-router-dom";

// images
import {
  RightArrow,
  ProductHeaderImage,
  Deposit,
  Delivery,
  Union,
  Controller1,
  Controller2,
  Controller3,
  Controller4,
  Playstation,
  Right,
  Left,
  ExcludeLeft,
  ExcludeRight,
  Ask,
  Rupees,
  Calender,
  PriceInfo,
  Ps4cd,
  BattelfieldCD,
  AddAddons,
  Cuppon,
  WhiteCart,
  CardCross,
  SmallCross,
  Search,
  TabletCouppon,
  Cross,
  Gradientcouppon,
  AddCart,
} from "../../assets";

const Coupponbtn = () => {
  const [isCuppon, setIsCuppon] = useState(false);

  if (window.innerWidth > 500 && window.innerWidth <= 768) {
    return (
      <>
        <img
          src={TabletCouppon}
          alt="tabletCuppon"
          className="tablet-cuppon"
          style={{ cursor: "pointer" }}
          onClick={() => setIsCuppon(!isCuppon)}
        />
        {isCuppon && (
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
                    onClick={() => setIsCuppon(!isCuppon)}
                  />
                </div>

                <div className="enter-coupon-code-container">
                  <input type="text" value="" placeholder="Enter coupon code" />
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
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
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => setIsCuppon(!isCuppon)}
          className="apply-coupon-btn"
        >
          <img src={Cuppon} alt="cuppon" style={{ marginRight: "0.299rem" }} />
          Apply Coupon
        </button>
        {isCuppon && (
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
                    onClick={() => setIsCuppon(!isCuppon)}
                  />
                </div>

                <div className="enter-coupon-code-container">
                  <input type="text" value="" placeholder="Enter coupon code" />
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button type="submit" className="coupon-main-content-btn">
                      Redeem
                    </button>
                  </div>

                  <div className="coupon-main-content-two">
                    <h3 className="coupon-main-content-heading">
                      Welcome Coupon
                    </h3>
                    <p className="coupon-main-content-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button type="submit" className="coupon-main-content-btn">
                      Redeem
                    </button>
                  </div>

                  <div className="coupon-main-content-three">
                    <h3 className="coupon-main-content-heading">
                      Welcome Coupon
                    </h3>
                    <p className="coupon-main-content-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <button type="submit" className="coupon-main-content-btn">
                      Redeem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
};

const Productdetails = () => {
  const swiper = useSwiper();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isHovering, setIsHovering] = useState(false);
  const [isFreeaddons, setIsFreeaddons] = useState(false);
  const [isPaidaddons, setIsPaidaddons] = useState(false);
  const [data, setData] = useState(question);
  const [addCart, setAddCart] = useState(false);

  if (window.innerWidth <= 500) {
    return (
      <>
        <Navbar />
        <div className="product-image-container" style={{ zIndex: "-1" }}>
          <div className="product-image-content" style={{ zIndex: "-1" }}>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              style={{ zIndex: "-1" }}
            >
              <div className="carousel-indicators" style={{ zIndex: "0" }}>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active slideIndicator1"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  className="slideIndicator2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  className="slideIndicator3"
                ></button>
              </div>
              <div className="carousel-inner" style={{ zIndex: "-1" }}>
                <div className="carousel-item active" style={{ zIndex: "-1" }}>
                  <img
                    style={{
                      borderRadius: "6px",
                      width: "100%",
                      height: "100%",
                    }}
                    src={ProductHeaderImage}
                    className=" w-100 productImg"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{
                      borderRadius: "6px",
                      width: "100%",
                      height: "100%",
                    }}
                    src={ProductHeaderImage}
                    className="d-block w-100 productImg"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    style={{
                      borderRadius: "6px",
                      width: "100%",
                      height: "100%",
                    }}
                    src={ProductHeaderImage}
                    className="d-block w-100 productImg"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="product-company-features-container">
          <div className="product-company-features-main-container">
            <div className="product-company-quality-content">
              <img src={Deposit} alt="quality-img" />
              <p>No Deposit Charge</p>
            </div>

            <div className="product-company-quality-content">
              <img src={Delivery} alt="quality-img" />
              <p>Delivery within 2 Hour</p>
            </div>

            <div className="product-company-quality-content">
              <img src={Union} alt="quality-img" />
              <p>Quality Assurance</p>
            </div>
          </div>
        </div>

        <div className="product-right-container">
          <div className="product-right-content">
            <p id="product-heading">Playstation 4</p>
            <p id="select-text">Select a Plan</p>
            <div className="select-plan-container">
              <div className="plan">
                <div className="plan-content">
                  <p id="subscription-time">6 Month</p>
                  <p id="subscription-price">
                    <img src={Rupees} alt="rupees" />
                    9,000/6Mn
                  </p>
                </div>
              </div>

              <div className="plan">
                <div className="plan-content">
                  <p id="subscription-time">3 Month</p>
                  <p id="subscription-price">
                    <img src={Rupees} alt="rupees" />
                    4,500/3Mn
                  </p>
                </div>
              </div>

              <div className="plan">
                <div className="plan-content">
                  <p id="subscription-time">1 Month</p>
                  <p id="subscription-price">
                    <img src={Rupees} alt="rupees" />
                    1500/Mn
                  </p>
                </div>
              </div>

              <div className="plan">
                <div className="plan-content">
                  <p id="subscription-time">1 Week</p>
                  <p id="subscription-price">
                    <img src={Rupees} alt="rupees" />
                    450/wk
                  </p>
                </div>
              </div>

              <div className="plan">
                <div className="plan-content">
                  <p id="subscription-time">2 Days</p>
                  <p id="subscription-price">
                    <img src={Rupees} alt="rupees" />
                    100/2Days
                  </p>
                </div>
              </div>

              <div className="plan">
                <div className="plan-content">
                  <p id="subscription-time">1 Day</p>
                  <p id="subscription-price">
                    <img src={Rupees} alt="rupees" />
                    50/Day
                  </p>
                </div>
              </div>
            </div>

            <div className="calender-container">
              <div className="start-date-container">
                <p>Start date</p>
                <span>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                  <div className="start-img-container">
                    <img src={Calender} alt="" />
                  </div>
                </span>
              </div>

              <div className="end-date-container">
                <p>End date</p>
                <span>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                  />
                  <div className="end-img-container">
                    <img src={Calender} alt="" />
                  </div>
                </span>
              </div>
            </div>

            <div className="add-on-container">
              <p id="addons-text">Select AddOns</p>
              <div className="addons-type">
                <div className="free-addons">
                  <p id="free-addons-text">Free AddOns</p>
                  <Link to="/freeaddons" className="free-addons-box">
                    <img src={Ps4cd} alt="ps4cd" />
                    <img src={BattelfieldCD} alt="battelfield" />
                  </Link>
                </div>

                <div className="paid-addons">
                  <p id="paid-addons-text">Paid AddOns</p>
                  <Link to="/paidaddons" className="paid-addons-box">
                    <img src={AddAddons} alt="" />
                    <p>Add Addons</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="cost-container">
              <div className="cost-content">
                <p id="total-cost-heading">Total cost</p>
                <p id="price-text">
                  <img src={Rupees} alt="rupees" /> 750/Mn
                </p>

                <p
                  id="price-details"
                  style={{ cursor: "pointer", marginTop: ".2rem" }}
                  onClick={() => setIsHovering(!isHovering)}
                >
                  <span>View details</span>{" "}
                </p>
                {isHovering && (
                  <div className="mobile-price-breakdown-container">
                    <div className="price-breakdown-container">
                      <div className="price-breakdown-heading">
                        <p>Price Breakdown</p>
                        <img
                          src={SmallCross}
                          alt="cross"
                          onClick={() => setIsHovering(!isHovering)}
                        />
                      </div>
                      <div
                        className="product-prices"
                        style={{ borderBottom: "1px solid #464646" }}
                      >
                        <p style={{ marginTop: "2rem" }} id="product-name">
                          PS4{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            500/day
                          </span>
                        </p>
                        <p id="product-name">
                          Addons1{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            500/day
                          </span>
                        </p>
                        <p id="product-name">
                          Addons2{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            100/day
                          </span>
                        </p>
                        <p id="product-name">
                          Addons3{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            100/day
                          </span>
                        </p>
                        <p id="product-name">
                          Addons4{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            100/day
                          </span>
                        </p>
                        <p
                          id="product-name"
                          style={{
                            paddingBottom: "1.5rem",
                          }}
                        >
                          Addons5{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            100/day
                          </span>
                        </p>
                      </div>

                      <div className="no-of-days">
                        <p style={{ marginTop: ".8rem" }}>
                          <span></span>{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            1000/day
                          </span>
                        </p>
                        <p style={{ marginTop: ".8rem" }}>
                          No of days <span>x 92 days</span>
                        </p>
                      </div>

                      <div className="total-price">
                        <p style={{ marginTop: ".8rem" }}>
                          Sub total{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            92000
                          </span>
                        </p>
                        <p style={{ marginTop: ".8rem" }}>
                          GST{" "}
                          <span>
                            + <img src={Rupees} alt="rupees" />
                            4356
                          </span>
                        </p>
                        <p
                          style={{
                            marginTop: ".8rem",
                            marginBottom: "1rem",
                            color: "#209132",
                          }}
                        >
                          Coupon discount{" "}
                          <span>
                            -{" "}
                            <img src={Rupees} alt="rupees" className="green" />
                            14356
                          </span>
                        </p>
                      </div>

                      <div className="grand-total">
                        <p>
                          {" "}
                          Grand Total{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            82000
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="button-container">
                <Link
                  to="/redeemcoupon"
                  style={{ height: "100%", width: "3.5rem" }}
                >
                  <img
                    src={TabletCouppon}
                    alt="tabletCuppon"
                    className="tablet-cuppon"
                  />
                </Link>

                <button type="submit" className="add-to-cart">
                  <img
                    src={WhiteCart}
                    alt="cart"
                    style={{ marginRight: ".5rem" }}
                  />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="about-item-container">
          <div className="about-item-content">
            <p>About Item</p>
            <p>
              The PS4 console, delivers awesome gaming power, incredible
              entertainment, and vibrant HDR technology. Incredible games like
              God of war, Spiderman, GTA 5, and Uncharted & non-stop
              entertainment. Get the ultimate experience with the Sony
              PlayStation 4.
            </p>
          </div>
        </div>

        <div className="product-specification-container">
          <p id="specification-text">Specification</p>
          <div className="brand-container">
            <p>
              Brand: <span>Sony</span>
            </p>
            <p>
              Release: <span>2013</span>
            </p>
          </div>
          <div className="age-container">
            <p>
              Controller: <span>Wireless</span>
            </p>
            <p>
              Age Group: <span>10 years +</span>
            </p>
          </div>
          <p id="setup-time" style={{ marginBottom: "2rem" }}>
            Set up time: <span>10 minutes</span>
          </p>
        </div>

        <div className="in-the-box-text">
          <p>In The Box</p>
        </div>

        <div className="box-content">
          <div className="box">
            <img src={Controller1} alt="controller" />
            <p>PS4 Controller</p>
          </div>

          <div className="box">
            <img src={Controller2} alt="controller" />
            <p>PS4 Device</p>
          </div>

          <div className="box">
            <img src={Controller3} alt="controller" />
            <p>HDMI Cables</p>
          </div>

          <div className="box">
            <img src={Controller4} alt="controller" />
            <p>USB Cables</p>
          </div>

          <div className="box">
            <img src={Controller1} alt="controller" />
            <p>Power Cord</p>
          </div>

          <div className="box">
            <img src={Controller1} alt="controller" />
            <p>Games</p>
          </div>

          <div className="box">
            <img src={Controller1} alt="controller" />
            <p id="surprise-text">Surprise</p>
          </div>

          <div className="box"></div>
        </div>

        <div className="product-frequently-rented-together">
          <div className="product-frequently-rented-together-text">
            <p>Most Frequently Rented Together</p>
            <div className="product-frequently-rented-together-button">
              <div
                className="rented-together-left-button"
                onClick={() => swiper.slidePrev()}
              >
                <img
                  src={Left}
                  onMouseOver={(e) => (e.currentTarget.src = ExcludeLeft)}
                  onMouseOut={(e) => (e.currentTarget.src = Left)}
                  className="leftVector"
                />
              </div>
              <div
                className="rented-together-right-button"
                onClick={() => swiper.slideNext()}
              >
                <img
                  src={Right}
                  onMouseOver={(e) => (e.currentTarget.src = ExcludeRight)}
                  onMouseOut={(e) => (e.currentTarget.src = Right)}
                  className="rightVector"
                />
              </div>
            </div>
          </div>
          <div className="product-frequently-rented-together-card-container">
            <Swiper
              width={570}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={10}
              slidesPerGroup={3}
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
              style={{ zIndex: "-1" }}
            >
              <SwiperSlide style={{ marginRight: "2rem" }}>
                <Accessoriescard
                  imgSrc={Playstation}
                  name="Projector"
                  price="500/Month"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Accessoriescard
                  imgSrc={Playstation}
                  name="Projector"
                  price="500/Month"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Accessoriescard
                  imgSrc={Playstation}
                  name="Projector"
                  price="500/Month"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Accessoriescard
                  imgSrc={Playstation}
                  name="Projector"
                  price="500/Month"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Accessoriescard
                  imgSrc={Playstation}
                  name="Projector"
                  price="500/Month"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Accessoriescard
                  imgSrc={Playstation}
                  name="Projector"
                  price="500/Month"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="frequently-asked-container">
          <p id="frequently-asked-text">Frequently Asked Question</p>

          {data.map((currentElement) => {
            const { id } = currentElement;
            return <Accordian key={id} {...currentElement} />;
          })}

          <p id="mind-question">Have a question in your mind? Ask us!</p>

          <div className="ask-question">
            <span>
              <input
                type="text"
                name="askQuestion"
                id=""
                placeholder="Ask us"
              />{" "}
              <img src={Ask} alt="" />
            </span>
            <button type="submit">Submit Question</button>
          </div>
        </div>

        <Contactbutton />

        <Scrollerbutton class="catogeryGoTopContainer" />

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="product-container">
          <div className="product-content">
            {/* left-container */}
            <div className="product-left-container">
              <div className="product-navigation-container">
                <div className="product-navigation-content">
                  <p>
                    <Link to="/">Homepage</Link>{" "}
                    <img
                      src={RightArrow}
                      alt="rigthArrow"
                      style={{
                        marginLeft: "0.594rem",
                        marginRight: "0.594rem",
                      }}
                    />{" "}
                    <Link to="/catogeries">Catogeries</Link>{" "}
                    <img
                      src={RightArrow}
                      alt="rigthArrow"
                      style={{
                        marginLeft: "0.594rem",
                        marginRight: "0.594rem",
                      }}
                    />{" "}
                    <Link to="/productdetails">Product Details</Link>
                  </p>
                </div>
              </div>

              <div className="product-image-container" style={{ zIndex: "-1" }}>
                <div className="product-image-content" style={{ zIndex: "-1" }}>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    style={{ zIndex: "-1" }}
                  >
                    <div
                      className="carousel-indicators"
                      style={{ zIndex: "0" }}
                    >
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active slideIndicator1"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className="slideIndicator2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        className="slideIndicator3"
                      ></button>
                    </div>
                    <div className="carousel-inner" style={{ zIndex: "-1" }}>
                      <div
                        className="carousel-item active"
                        style={{ zIndex: "-1" }}
                      >
                        <img
                          style={{
                            borderRadius: "6px",
                            width: "100%",
                            height: "100%",
                          }}
                          src={ProductHeaderImage}
                          className=" w-100 productImg"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          style={{
                            borderRadius: "6px",
                            width: "100%",
                            height: "100%",
                          }}
                          src={ProductHeaderImage}
                          className="d-block w-100 productImg"
                          alt="..."
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          style={{
                            borderRadius: "6px",
                            width: "100%",
                            height: "100%",
                          }}
                          src={ProductHeaderImage}
                          className="d-block w-100 productImg"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-company-features-container">
                <div className="product-company-quality-content">
                  <img src={Deposit} alt="quality-img" />
                  <p>No Deposit Charge</p>
                </div>

                <div className="product-company-quality-content">
                  <img src={Delivery} alt="quality-img" />
                  <p>Delivery within 2 Hour</p>
                </div>

                <div className="product-company-quality-content">
                  <img src={Union} alt="quality-img" />
                  <p>Quality Assurance</p>
                </div>
              </div>

              <div className="about-item-container">
                <div className="about-item-content">
                  <p>About Item</p>
                  <p>
                    The PS4 console, delivers awesome gaming power, incredible
                    entertainment, and vibrant HDR technology. Incredible games
                    like God of war, Spiderman, GTA 5, and Uncharted & non-stop
                    entertainment. Get the ultimate experience with the Sony
                    PlayStation 4.
                  </p>
                </div>
              </div>

              <div className="product-specification-container">
                <p id="specification-text">Specification</p>
                <div className="brand-container">
                  <p>
                    Brand: <span>Sony</span>
                  </p>
                  <p>
                    Release: <span>2013</span>
                  </p>
                </div>
                <div className="age-container">
                  <p>
                    Controller: <span>Wireless</span>
                  </p>
                  <p>
                    Age Group: <span>10 years +</span>
                  </p>
                </div>
                <p id="setup-time" style={{ marginBottom: "2rem" }}>
                  Set up time: <span>10 minutes</span>
                </p>
              </div>

              <div className="in-the-box-text">
                <p>In The Box</p>
              </div>

              <div className="box-content">
                <div className="box">
                  <img src={Controller1} alt="controller" />
                  <p>PS4 Controller</p>
                </div>

                <div className="box">
                  <img src={Controller2} alt="controller" />
                  <p>PS4 Device</p>
                </div>

                <div className="box">
                  <img src={Controller3} alt="controller" />
                  <p>HDMI Cables</p>
                </div>

                <div className="box">
                  <img src={Controller4} alt="controller" />
                  <p>USB Cables</p>
                </div>

                <div className="box">
                  <img src={Controller1} alt="controller" />
                  <p>Power Cord</p>
                </div>

                <div className="box">
                  <img src={Controller1} alt="controller" />
                  <p>Games</p>
                </div>

                <div className="box">
                  <img src={Controller1} alt="controller" />
                  <p id="surprise-text">Surprise</p>
                </div>

                <div className="box"></div>
              </div>

              <div className="product-frequently-rented-together">
                <div className="product-frequently-rented-together-text">
                  <p>Most Frequently Rented Together</p>
                  <div className="product-frequently-rented-together-button">
                    <div
                      className="rented-together-left-button"
                      onClick={() => swiper.slidePrev()}
                    >
                      <img
                        src={Left}
                        onMouseOver={(e) => (e.currentTarget.src = ExcludeLeft)}
                        onMouseOut={(e) => (e.currentTarget.src = Left)}
                        className="leftVector"
                      />
                    </div>
                    <div
                      className="rented-together-right-button"
                      onClick={() => swiper.slideNext()}
                    >
                      <img
                        src={Right}
                        onMouseOver={(e) =>
                          (e.currentTarget.src = ExcludeRight)
                        }
                        onMouseOut={(e) => (e.currentTarget.src = Right)}
                        className="rightVector"
                      />
                    </div>
                  </div>
                </div>
                <div className="product-frequently-rented-together-card-container">
                  <Swiper
                    width={570}
                    slidesPerView={3}
                    centeredSlides={false}
                    spaceBetween={10}
                    slidesPerGroup={3}
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
                    style={{ zIndex: "0" }}
                  >
                    <SwiperSlide style={{ marginRight: "2rem" }}>
                      <Accessoriescard
                        imgSrc={Playstation}
                        name="Projector"
                        price="500/Month"
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Accessoriescard
                        imgSrc={Playstation}
                        name="Projector"
                        price="500/Month"
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Accessoriescard
                        imgSrc={Playstation}
                        name="Projector"
                        price="500/Month"
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Accessoriescard
                        imgSrc={Playstation}
                        name="Projector"
                        price="500/Month"
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Accessoriescard
                        imgSrc={Playstation}
                        name="Projector"
                        price="500/Month"
                      />
                    </SwiperSlide>

                    <SwiperSlide>
                      <Accessoriescard
                        imgSrc={Playstation}
                        name="Projector"
                        price="500/Month"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>

              <div className="frequently-asked-container">
                <p id="frequently-asked-text">Frequently Asked Question</p>

                {data.map((currentElement) => {
                  const { id } = currentElement;
                  return <Accordian key={id} {...currentElement} />;
                })}

                <p id="mind-question">Have a question in your mind? Ask us!</p>

                <div className="ask-question">
                  <span>
                    <input
                      type="text"
                      name="askQuestion"
                      id=""
                      placeholder="Ask us"
                    />{" "}
                    <img src={Ask} alt="" />
                  </span>
                  <button type="submit">Submit Question</button>
                </div>
              </div>
            </div>

            {/* right container */}
            <div className="product-right-container">
              <div className="product-right-content">
                <p id="product-heading">Playstation 4</p>
                <p id="select-text">Select a Plan</p>
                <div className="select-plan-container">
                  <div className="plan">
                    <div className="plan-content">
                      <p id="subscription-time">6 Month</p>
                      <p id="subscription-price">
                        <img src={Rupees} alt="rupees" />
                        9k/6Mn
                      </p>
                    </div>
                  </div>

                  <div className="plan">
                    <div className="plan-content">
                      <p id="subscription-time">3 Month</p>
                      <p id="subscription-price">
                        <img src={Rupees} alt="rupees" />
                        4.5k/3Mn
                      </p>
                    </div>
                  </div>

                  <div className="plan">
                    <div className="plan-content">
                      <p id="subscription-time">1 Month</p>
                      <p id="subscription-price">
                        <img src={Rupees} alt="rupees" />
                        1.5k/Mn
                      </p>
                    </div>
                  </div>

                  <div className="plan">
                    <div className="plan-content">
                      <p id="subscription-time">1 Week</p>
                      <p id="subscription-price">
                        <img src={Rupees} alt="rupees" />
                        450/wk
                      </p>
                    </div>
                  </div>

                  <div className="plan">
                    <div className="plan-content">
                      <p id="subscription-time">2 Days</p>
                      <p id="subscription-price">
                        <img src={Rupees} alt="rupees" />
                        100/2Days
                      </p>
                    </div>
                  </div>

                  <div className="plan">
                    <div className="plan-content">
                      <p id="subscription-time">1 Day</p>
                      <p id="subscription-price">
                        <img src={Rupees} alt="rupees" />
                        50/Day
                      </p>
                    </div>
                  </div>
                </div>

                <div className="calender-container">
                  <div className="start-date-container">
                    <p>Start date</p>
                    <span>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                      />
                      <div className="start-img-container">
                        <img src={Calender} alt="" />
                      </div>
                    </span>
                  </div>

                  <div className="end-date-container">
                    <p>End date</p>
                    <span>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="dd/MM/yyyy"
                      />
                      <div className="end-img-container">
                        <img src={Calender} alt="" />
                      </div>
                    </span>
                  </div>
                </div>

                <div className="add-on-container">
                  <p id="addons-text">Select AddOns</p>
                  <div className="addons-type">
                    <div className="free-addons">
                      <p id="free-addons-text">Free AddOns</p>
                      <div
                        className="free-addons-box"
                        onClick={() => setIsFreeaddons(!isFreeaddons)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={Ps4cd} alt="ps4cd" />
                        <img src={BattelfieldCD} alt="battelfield" />
                      </div>

                      {isFreeaddons && (
                        <div className="free-addons-outer-container">
                        <div className="addons-container">
                          <div className="addons-content">
                            <div className="addons-heading">
                              <p id="addons-heading-text">
                                Free Add Ons{" "}
                                <span>
                                  <img
                                    src={SmallCross}
                                    alt="cross"
                                    id="heading-cross"
                                    onClick={() =>
                                      setIsFreeaddons(!isFreeaddons)
                                    }
                                    style={{ cursor: "pointer" }}
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="cd-container">
                              <div className="cd-left-container">
                                <div className="selected-addons">
                                  <p id="selected-text">
                                    Selected <span>2</span>
                                  </p>
                                  <div className="addons-card">
                                    <div className="addons-one-card">
                                      <img
                                        src={CardCross}
                                        alt="cardcross"
                                        id="card-cross-1"
                                      />
                                      <img
                                        src={BattelfieldCD}
                                        alt="battelfield"
                                      />
                                    </div>

                                    <div className="addons-two-card">
                                      <img
                                        src={CardCross}
                                        alt="cardcross"
                                        id="card-cross-2"
                                      />
                                      <img src={Ps4cd} alt="fifa20" />
                                    </div>
                                  </div>
                                </div>

                                <div className="filter-sort-addons">
                                  <p id="filter-sort-text">Filter & Sort</p>
                                  <div className="filter-catogery">
                                    <p>
                                      <input
                                        type="checkbox"
                                        name="adventure"
                                        id="adventure"
                                      />
                                      <label htmlFor="adventure">
                                        {" "}
                                        Adventure
                                      </label>
                                    </p>
                                    <p>
                                      <input
                                        type="checkbox"
                                        name="action"
                                        id="action"
                                      />
                                      <label htmlFor="action"> Action</label>
                                    </p>
                                    <p>
                                      <input
                                        type="checkbox"
                                        name="sports"
                                        id="sports"
                                      />
                                      <label htmlFor="sports"> Sports</label>
                                    </p>
                                    <p>
                                      <input
                                        type="checkbox"
                                        name="fantasy"
                                        id="fantasy"
                                      />
                                      <label htmlFor="fantasy"> Fantasy</label>
                                    </p>

                                    <p>
                                      <input
                                        type="radio"
                                        name="adventure"
                                        id="adventure"
                                      />
                                      <label htmlFor="adventure">
                                        {" "}
                                        Adventure
                                      </label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="action"
                                        id="action"
                                      />
                                      <label htmlFor="action"> Action</label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="sports"
                                        id="sports"
                                      />
                                      <label htmlFor="sports"> Sports</label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="fantasy"
                                        id="fantasy"
                                      />
                                      <label htmlFor="fantasy"> Fantasy</label>
                                    </p>

                                    <p>
                                      <input
                                        type="radio"
                                        name="adventure"
                                        id="adventure"
                                      />
                                      <label htmlFor="adventure">
                                        {" "}
                                        Adventure
                                      </label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="action"
                                        id="action"
                                      />
                                      <label htmlFor="action"> Action</label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="sports"
                                        id="sports"
                                      />
                                      <label htmlFor="sports"> Sports</label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="fantasy"
                                        id="fantasy"
                                      />
                                      <label htmlFor="fantasy"> Fantasy</label>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="cd-right-container">
                                <div className="addons-search-container">
                                  <div className="addons-search-content">
                                    <input
                                      type="search"
                                      name="addonsSearch"
                                      id="addonsSearch"
                                      placeholder="Search add ons"
                                    />
                                    <img src={Search} alt="search" />
                                  </div>
                                </div>

                                <div className="cd-right-card-addons-container">
                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="note-container">
                              <p>Note: Only 2 free Addons can be selected</p>
                            </div>
                          </div>
                        </div>
                        </div>
                      )}
                    </div>

                    <div className="paid-addons">
                      <p id="paid-addons-text">Paid AddOns</p>
                      <div
                        className="paid-addons-box"
                        onClick={() => setIsPaidaddons(!isPaidaddons)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={AddAddons} alt="" />
                        <p id="paid-add-addons">Add Addons</p>
                      </div>

                      {isPaidaddons && (
                        <div className="free-addons-outer-container">
                        <div className="addons-container">
                          <div className="addons-content">
                            <div className="addons-heading">
                              <p id="addons-heading-text">
                                Paid Add Ons{" "}
                                <span>
                                  <img
                                    src={SmallCross}
                                    alt="cross"
                                    id="heading-cross"
                                    onClick={() =>
                                      setIsPaidaddons(!isPaidaddons)
                                    }
                                    style={{ cursor: "pointer" }}
                                  />
                                </span>
                              </p>
                            </div>
                            <div className="cd-container">
                              <div className="cd-left-container">
                                <div className="selected-addons">
                                  <p id="selected-text">
                                    Selected <span>2</span>
                                  </p>
                                  <div className="addons-card">
                                    <Swiper
                                      width={100}
                                      slidesPerView={1}
                                      centeredSlides={false}
                                      spaceBetween={10}
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
                                      style={{ zIndex: "0", height: "100%" }}
                                    >
                                      <SwiperSlide>
                                        <div className="paid-addons-one-card">
                                          <img
                                            src={CardCross}
                                            alt="cardcross"
                                            id="paid-card-cross-1"
                                          />
                                          <img
                                            src={BattelfieldCD}
                                            alt="battelfield"
                                          />
                                        </div>
                                      </SwiperSlide>

                                      <SwiperSlide>
                                        <div className="paid-addons-two-card">
                                          <img
                                            src={CardCross}
                                            alt="cardcross"
                                            id="paid-card-cross-2"
                                          />
                                          <img src={Ps4cd} alt="fifa20" />
                                        </div>
                                      </SwiperSlide>

                                      <SwiperSlide>
                                        <div className="paid-addons-one-card">
                                          <img
                                            src={CardCross}
                                            alt="cardcross"
                                            id="paid-card-cross-1"
                                          />
                                          <img
                                            src={BattelfieldCD}
                                            alt="battelfield"
                                          />
                                        </div>
                                      </SwiperSlide>

                                      <SwiperSlide>
                                        <div className="paid-addons-two-card">
                                          <img
                                            src={CardCross}
                                            alt="cardcross"
                                            id="paid-card-cross-2"
                                          />
                                          <img src={Ps4cd} alt="fifa20" />
                                        </div>
                                      </SwiperSlide>

                                      <SwiperSlide>
                                        <div className="paid-addons-one-card">
                                          <img
                                            src={CardCross}
                                            alt="cardcross"
                                            id="paid-card-cross-1"
                                          />
                                          <img
                                            src={BattelfieldCD}
                                            alt="battelfield"
                                          />
                                        </div>
                                      </SwiperSlide>

                                      <SwiperSlide>
                                        <div className="paid-addons-two-card">
                                          <img
                                            src={CardCross}
                                            alt="cardcross"
                                            id="paid-card-cross-2"
                                          />
                                          <img src={Ps4cd} alt="fifa20" />
                                        </div>
                                      </SwiperSlide>
                                    </Swiper>
                                  </div>
                                </div>

                                <div className="filter-sort-addons">
                                  <p id="filter-sort-text">Filter & Sort</p>
                                  <div className="filter-catogery">
                                    <p>
                                      <input
                                        type="checkbox"
                                        name="adventure"
                                        id="adventure"
                                      />
                                      <label htmlFor="adventure">
                                        {" "}
                                        Adventure
                                      </label>
                                    </p>
                                    <p>
                                      <input
                                        type="checkbox"
                                        name="action"
                                        id="action"
                                      />
                                      <label htmlFor="action"> Action</label>
                                    </p>
                                    <p>
                                      <input
                                        type="checkbox"
                                        name="sports"
                                        id="sports"
                                      />
                                      <label htmlFor="sports"> Sports</label>
                                    </p>
                                    <p>
                                      <input
                                        type="checkbox"
                                        name="fantasy"
                                        id="fantasy"
                                      />
                                      <label htmlFor="fantasy"> Fantasy</label>
                                    </p>

                                    <p>
                                      <input
                                        type="radio"
                                        name="adventure"
                                        id="adventure"
                                      />
                                      <label htmlFor="adventure">
                                        {" "}
                                        Adventure
                                      </label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="action"
                                        id="action"
                                      />
                                      <label htmlFor="action"> Action</label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="sports"
                                        id="sports"
                                      />
                                      <label htmlFor="sports"> Sports</label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="fantasy"
                                        id="fantasy"
                                      />
                                      <label htmlFor="fantasy"> Fantasy</label>
                                    </p>

                                    <p>
                                      <input
                                        type="radio"
                                        name="adventure"
                                        id="adventure"
                                      />
                                      <label htmlFor="adventure">
                                        {" "}
                                        Adventure
                                      </label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="action"
                                        id="action"
                                      />
                                      <label htmlFor="action"> Action</label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="sports"
                                        id="sports"
                                      />
                                      <label htmlFor="sports"> Sports</label>
                                    </p>
                                    <p>
                                      <input
                                        type="radio"
                                        name="fantasy"
                                        id="fantasy"
                                      />
                                      <label htmlFor="fantasy"> Fantasy</label>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="cd-right-container">
                                <div className="addons-search-container">
                                  <div className="addons-search-content">
                                    <input
                                      type="search"
                                      name="addonsSearch"
                                      id="addonsSearch"
                                      placeholder="Search add ons"
                                    />
                                    <img src={Search} alt="search" />
                                  </div>
                                </div>

                                <div className="cd-right-card-addons-container">
                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={BattelfieldCD} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>

                                  <div className="cd-right-card-addons">
                                    <img src={Ps4cd} alt="ps4cd" />
                                    <button type="submit">Add</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="cost-container">
                  <p id="total-cost-heading">Total cost</p>
                  <p id="price-text">
                    <img src={Rupees} alt="rupees" /> 750/Month
                  </p>

                  <p
                    id="price-details"
                    style={{ cursor: "pointer" }}
                    onClick={() => setIsHovering(!isHovering)}
                  >
                    <img src={PriceInfo} alt="" />{" "}
                    <span>(Pricing details)</span>{" "}
                  </p>
                  {isHovering && (
                    <div className="price-breakdown-container">
                      <div className="price-breakdown-heading">
                        <p>Price Breakdown</p>
                      </div>
                      <div className="product-prices">
                        <p style={{ marginTop: "1.5rem" }} id="product-name">
                          PS4{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            500/day
                          </span>
                        </p>
                        <p id="product-name">
                          Addons1{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            500/day
                          </span>
                        </p>
                        <p id="product-name">
                          Addons2{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            100/day
                          </span>
                        </p>
                        <p id="product-name">
                          Addons3{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            100/day
                          </span>
                        </p>
                        <p id="product-name">
                          Addons4{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            100/day
                          </span>
                        </p>
                        <p
                          id="product-name"
                          style={{
                            borderBottom: "1px solid #464646",
                            paddingBottom: "1rem",
                          }}
                        >
                          Addons5{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            100/day
                          </span>
                        </p>
                      </div>

                      <div className="no-of-days">
                        <p style={{ marginTop: ".8rem" }}>
                          <span></span>{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            1000/day
                          </span>
                        </p>
                        <p style={{ marginTop: ".8rem" }}>
                          No of days <span>x 92 days</span>
                        </p>
                      </div>

                      <div className="total-price">
                        <p style={{ marginTop: ".8rem" }}>
                          Sub total{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            92000
                          </span>
                        </p>
                        <p style={{ marginTop: ".8rem" }}>
                          GST{" "}
                          <span>
                            + <img src={Rupees} alt="rupees" />
                            4356
                          </span>
                        </p>
                        <p
                          style={{
                            marginTop: ".8rem",
                            marginBottom: "1rem",
                            color: "#209132",
                          }}
                        >
                          Coupon discount{" "}
                          <span>
                            -{" "}
                            <img src={Rupees} alt="rupees" className="green" />
                            14356
                          </span>
                        </p>
                      </div>

                      <div className="grand-total">
                        <p>
                          {" "}
                          Grand Total{" "}
                          <span>
                            <img src={Rupees} alt="rupees" />
                            82000
                          </span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="button-container">
                  <div
                    className="addCart-button"
                    onClick={() => setAddCart(!addCart)}
                  >
                    {addCart ? (
                      <button type="submit" className="added-to-cart">
                        <img
                          src={AddCart}
                          alt="cart"
                          style={{ marginRight: ".5rem" }}
                        />
                        Add to Cart
                      </button>
                    ) : (
                      <button type="submit" className="add-to-cart">
                        <img
                          src={WhiteCart}
                          alt="cart"
                          style={{ marginRight: ".5rem" }}
                        />
                        Add to Cart
                      </button>
                    )}
                  </div>
                  <Coupponbtn />
                </div>

                <Contactbutton />

                <Scrollerbutton class="catogeryGoTopContainer" />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default Productdetails;
