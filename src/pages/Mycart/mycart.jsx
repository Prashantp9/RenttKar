import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./mycart.css";
import { Link } from "react-router-dom";

// components
import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
  Sliderproductcard,
  Mobileproductcard,
  Pricebreakdown,
} from "../../components";
import {
  Delete,
  DownArrow,
  Edit,
  Filter,
  Pc,
  Playstation,
  PriceInfo,
  Rupees,
  Sort,
  Laptop,
  Playstn,
  Left,
  Right,
  ExcludeLeft,
  ExcludeRight,
  MobileFilter,
  SmallCross,
} from "../../assets";
import { useState } from "react";

const Mycart = () => {
  const [viewDetails, setViewDetails] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const swiper = useSwiper();

  if (window.innerWidth <= 500) {
    return (
      <>
        <Navbar />
        <div className="mycart-heading-container">
          <div className="mycart-heading-content">
            <p>My Cart</p>
          </div>
        </div>

        <div className="mycart-sorting-container">
          <div className="mycart-sorting-content">
            <img
              src={MobileFilter}
              alt="filter"
              style={{ cursor: "pointer" }}
              onClick={() => setShowFilter(!showFilter)}
            />
            {showFilter && (
              <div className="mobile-mycart-filter">
                <p id="mobile-mycart-filter-content">
                  <img
                    src={SmallCross}
                    alt="smallcross"
                    style={{ width: "1rem", height: "1rem", cursor: "pointer" }}
                    onClick={() => setShowFilter(!showFilter)}
                  />
                  <span>By Price</span>
                  <img src={Filter} alt="filter" />
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mycart-cards-container">
          <div className="mycart-cards-content">
            <div className="mobile-mycart-card" style={{ marginTop: "2.5rem" }}>
              <div className="mobile-mycart-upperpart">
                <div className="mobile-mycart-product-img">
                  <img src={Pc} alt="playstation" />
                </div>

                <div className="mobile-mycart-order-desc-container">
                  <div className="mobile-mycart-order-desc">
                    <p id="mobile-mycart-order-name">Playstation 4</p>
                    <div className="mobile-mycart-order-delivery">
                      <p id="mobile-mycart-tenure">
                        Tennure <span>3 Months</span>
                      </p>
                      <p id="mobile-mycart-delivery">
                        Delivery on{" "}
                        <span>
                          21/02/2022{" "}
                          <img
                            src={DownArrow}
                            alt="downArrow"
                            style={{
                              width: ".5rem",
                              height: ".5rem",
                              marginLeft: ".2rem",
                            }}
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <img
                    src={SmallCross}
                    alt="smallCross"
                    id="mycart-card-cross"
                  />
                </div>
              </div>

              <div className="mobile-mycart-lowerpart">
                <div className="mobile-mycart-priceDetails">
                  <p id="mobile-mycart-price">
                    <img src={Rupees} alt="rupees" />
                    750.00
                  </p>
                  <p
                    id="mobile-mycart-details"
                    onClick={() => setViewDetails(!viewDetails)}
                  >
                    view details
                  </p>
                  {viewDetails && (
                    <div className="mobile-price-breakdown-container">
                      <Pricebreakdown
                        onclick={() => setViewDetails(!viewDetails)}
                      />
                    </div>
                  )}
                </div>

                <button className="mobile-mycart-checkout-btn" type="submit">
                  <Link to="/ordersummary">Checkout →</Link>
                </button>
              </div>
            </div>

            <div className="mobile-mycart-card" style={{ marginTop: "2.5rem" }}>
              <div className="mobile-mycart-upperpart">
                <div className="mobile-mycart-product-img">
                  <img src={Pc} alt="playstation" />
                </div>

                <div className="mobile-mycart-order-desc-container">
                  <div className="mobile-mycart-order-desc">
                    <p id="mobile-mycart-order-name">Playstation 4</p>
                    <div className="mobile-mycart-order-delivery">
                      <p id="mobile-mycart-tenure">
                        Tennure <span>3 Months</span>
                      </p>
                      <p id="mobile-mycart-delivery">
                        Delivery on{" "}
                        <span>
                          21/02/2022{" "}
                          <img
                            src={DownArrow}
                            alt="downArrow"
                            style={{
                              width: ".5rem",
                              height: ".5rem",
                              marginLeft: ".2rem",
                            }}
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <img
                    src={SmallCross}
                    alt="smallCross"
                    id="mycart-card-cross"
                  />
                </div>
              </div>

              <div className="mobile-mycart-lowerpart">
                <div className="mobile-mycart-priceDetails">
                  <p id="mobile-mycart-price">
                    <img src={Rupees} alt="rupees" />
                    750.00
                  </p>
                  <p
                    id="mobile-mycart-details"
                    onClick={() => setViewDetails(!viewDetails)}
                  >
                    view details
                  </p>
                  {viewDetails && (
                    <div className="mobile-price-breakdown-container">
                      <Pricebreakdown
                        onclick={() => setViewDetails(!viewDetails)}
                      />
                    </div>
                  )}
                </div>

                <button className="mobile-mycart-checkout-btn" type="submit">
                  Checkout →
                </button>
              </div>
            </div>

            <div className="mobile-mycart-card" style={{ marginTop: "2.5rem" }}>
              <div className="mobile-mycart-upperpart">
                <div className="mobile-mycart-product-img">
                  <img src={Pc} alt="playstation" />
                </div>

                <div className="mobile-mycart-order-desc-container">
                  <div className="mobile-mycart-order-desc">
                    <p id="mobile-mycart-order-name">Playstation 4</p>
                    <div className="mobile-mycart-order-delivery">
                      <p id="mobile-mycart-tenure">
                        Tennure <span>3 Months</span>
                      </p>
                      <p id="mobile-mycart-delivery">
                        Delivery on{" "}
                        <span>
                          21/02/2022{" "}
                          <img
                            src={DownArrow}
                            alt="downArrow"
                            style={{
                              width: ".5rem",
                              height: ".5rem",
                              marginLeft: ".2rem",
                            }}
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <img
                    src={SmallCross}
                    alt="smallCross"
                    id="mycart-card-cross"
                  />
                </div>
              </div>

              <div className="mobile-mycart-lowerpart">
                <div className="mobile-mycart-priceDetails">
                  <p id="mobile-mycart-price">
                    <img src={Rupees} alt="rupees" />
                    750.00
                  </p>
                  <p
                    id="mobile-mycart-details"
                    onClick={() => setViewDetails(!viewDetails)}
                  >
                    view details
                  </p>
                  {viewDetails && (
                    <div className="mobile-price-breakdown-container">
                      <Pricebreakdown
                        onclick={() => setViewDetails(!viewDetails)}
                      />
                    </div>
                  )}
                </div>

                <button className="mobile-mycart-checkout-btn" type="submit">
                  Checkout →
                </button>
              </div>
            </div>

            <div className="mobile-mycart-card" style={{ marginTop: "2.5rem" }}>
              <div className="mobile-mycart-upperpart">
                <div className="mobile-mycart-product-img">
                  <img src={Pc} alt="playstation" />
                </div>

                <div className="mobile-mycart-order-desc-container">
                  <div className="mobile-mycart-order-desc">
                    <p id="mobile-mycart-order-name">Playstation 4</p>
                    <div className="mobile-mycart-order-delivery">
                      <p id="mobile-mycart-tenure">
                        Tennure <span>3 Months</span>
                      </p>
                      <p id="mobile-mycart-delivery">
                        Delivery on{" "}
                        <span>
                          21/02/2022{" "}
                          <img
                            src={DownArrow}
                            alt="downArrow"
                            style={{
                              width: ".5rem",
                              height: ".5rem",
                              marginLeft: ".2rem",
                            }}
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <img
                    src={SmallCross}
                    alt="smallCross"
                    id="mycart-card-cross"
                  />
                </div>
              </div>

              <div className="mobile-mycart-lowerpart">
                <div className="mobile-mycart-priceDetails">
                  <p id="mobile-mycart-price">
                    <img src={Rupees} alt="rupees" />
                    750.00
                  </p>
                  <p
                    id="mobile-mycart-details"
                    onClick={() => setViewDetails(!viewDetails)}
                  >
                    view details
                  </p>
                  {viewDetails && (
                    <div className="mobile-price-breakdown-container">
                      <Pricebreakdown
                        onclick={() => setViewDetails(!viewDetails)}
                      />
                    </div>
                  )}
                </div>

                <button className="mobile-mycart-checkout-btn" type="submit">
                  Checkout →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mycart-suggestion-container">
          <div className="mycart-suggestion-content">
            <div className="mycart-suggestion-text-container">
              <h1>You Might Also Like</h1>
            </div>
            <Swiper
              width={590}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={20}
              slidesPerGroup={3}
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".suggestion-left-button",
                nextEl: ".suggestion-right-button",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Mobileproductcard
                  imgSrc={Playstation}
                  productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Mobileproductcard
                  imgSrc={Pc}
                  productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Mobileproductcard
                  imgSrc={Laptop}
                  productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Mobileproductcard
                  imgSrc={Playstn}
                  productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Mobileproductcard
                  imgSrc={Pc}
                  productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Mobileproductcard
                  imgSrc={Laptop}
                  productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Mobileproductcard
                  imgSrc={Playstn}
                  productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Mobileproductcard
                  imgSrc={Pc}
                  productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
                />
              </SwiperSlide>
            </Swiper>

            <div
              className="suggestion-button.container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginTop: "2.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <div
                className="suggestion-left-button"
                style={{ marginRight: "2rem", cursor: "pointer" }}
                onClick={() => swiper.slidePrev()}
              >
                <img
                  src={Left}
                  onMouseOver={(e) => (e.currentTarget.src = ExcludeLeft)}
                  onMouseOut={(e) => (e.currentTarget.src = Left)}
                  className="suggestion-left-vector"
                  alt=""
                />
              </div>
              <div
                className="suggestion-right-button"
                style={{ cursor: "pointer" }}
                onClick={() => swiper.slideNext()}
              >
                <img
                  src={Right}
                  onMouseOver={(e) => (e.currentTarget.src = ExcludeRight)}
                  onMouseOut={(e) => (e.currentTarget.src = Right)}
                  className="suggestion-right-vector"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="mycart-heading-container">
          <div className="mycart-heading-content">
            <p>My Cart</p>
          </div>
        </div>

        <div className="mycart-sorting-container">
          <div className="mycart-sorting-content">
            <div className="mycart-sorting-text">
              <img src={Sort} alt="sort" />
              <p>Sort:</p>
            </div>

            <div className="mycart-sorting-filter">
              <p>Recent</p>
              <img src={Filter} alt="filter" />
            </div>
          </div>
        </div>

        <div className="mycart-cards-container">
          <div className="mycart-cards-content">
            <div className="mycart-card" style={{ marginTop: "1.75rem" }}>
              <div className="mycart-card-product-img">
                <img src={Pc} alt="playstation" />
              </div>

              <div className="mycart-card-desc">
                <p id="mycart-order-content">
                  Playstation + 2 Controllers + 2 Addons (Games)
                </p>
                <p id="mycart-order-addons">
                  Add ons:{" "}
                  <span style={{ marginLeft: ".5rem", marginTop: "0.75rem" }}>
                    Game1, Game2
                  </span>
                </p>
                <div className="mycart-card-shipping-details">
                  <p id="mycart-card-pricing">
                    <span id="mycart-card-price">
                      <img src={Rupees} alt="ruppees" />
                      7200/Mn
                    </span>

                    <span id="package-details">
                      <img
                        src={PriceInfo}
                        alt="priceInfo"
                        style={{
                          marginRight: ".5rem",
                          width: "0.938rem",
                          height: "0.938rem",
                        }}
                      />
                      Package details
                    </span>
                  </p>

                  <p id="mycart-card-delivery">
                    Delivery on
                    <span>
                      21/02/2022 <img src={DownArrow} alt="downArrow" />
                    </span>
                  </p>

                  <p id="mycart-card-subscription-enddate">
                    End date
                    <span>21/02/2022</span>
                  </p>

                  <p id="mycart-card-tenure">
                    Tenure
                    <span>3 Months</span>
                  </p>
                </div>
              </div>

              <div className="mycart-checkout-container">
                <div className="mycart-order-edit">
                  <p>
                    <img src={Edit} alt="edit" /> Edit
                    <span>
                      <img src={Delete} alt="delete" /> Delete
                    </span>
                  </p>
                </div>

                <div className="mycart-checkout-btn">
                  <button>
                    <Link to="/deliveryaddress">checkout →</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="mycart-card" style={{ marginTop: "1.75rem" }}>
              <div className="mycart-card-product-img">
                <img src={Pc} alt="playstation" />
              </div>

              <div className="mycart-card-desc">
                <p id="mycart-order-content">
                  Playstation + 2 Controllers + 2 Addons (Games)
                </p>
                <p id="mycart-order-addons">
                  Add ons:{" "}
                  <span style={{ marginLeft: ".5rem", marginTop: "0.75rem" }}>
                    Game1, Game2
                  </span>
                </p>
                <div className="mycart-card-shipping-details">
                  <p id="mycart-card-pricing">
                    <span id="mycart-card-price">
                      <img src={Rupees} alt="ruppees" />
                      7200/Mn
                    </span>

                    <span id="package-details">
                      <img
                        src={PriceInfo}
                        alt="priceInfo"
                        style={{
                          marginRight: ".5rem",
                          width: "0.938rem",
                          height: "0.938rem",
                        }}
                      />
                      Package details
                    </span>
                  </p>

                  <p id="mycart-card-delivery">
                    Delivery on
                    <span>
                      21/02/2022 <img src={DownArrow} alt="downArrow" />
                    </span>
                  </p>

                  <p id="mycart-card-subscription-enddate">
                    End date
                    <span>21/02/2022</span>
                  </p>

                  <p id="mycart-card-tenure">
                    Tenure
                    <span>3 Months</span>
                  </p>
                </div>
              </div>

              <div className="mycart-checkout-container">
                <div className="mycart-order-edit">
                  <p>
                    <img src={Edit} alt="edit" /> Edit
                    <span>
                      <img src={Delete} alt="delete" /> Delete
                    </span>
                  </p>
                </div>

                <div className="mycart-checkout-btn">
                  <button>
                    {" "}
                    <Link to="/deliveryaddress">checkout →</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="mycart-card" style={{ marginTop: "1.75rem" }}>
              <div className="mycart-card-product-img">
                <img src={Pc} alt="playstation" />
              </div>

              <div className="mycart-card-desc">
                <p id="mycart-order-content">
                  Playstation + 2 Controllers + 2 Addons (Games)
                </p>
                <p id="mycart-order-addons">
                  Add ons:{" "}
                  <span style={{ marginLeft: ".5rem", marginTop: "0.75rem" }}>
                    Game1, Game2
                  </span>
                </p>
                <div className="mycart-card-shipping-details">
                  <p id="mycart-card-pricing">
                    <span id="mycart-card-price">
                      <img src={Rupees} alt="ruppees" />
                      7200/Mn
                    </span>

                    <span id="package-details">
                      <img
                        src={PriceInfo}
                        alt="priceInfo"
                        style={{
                          marginRight: ".5rem",
                          width: "0.938rem",
                          height: "0.938rem",
                        }}
                      />
                      Package details
                    </span>
                  </p>

                  <p id="mycart-card-delivery">
                    Delivery on
                    <span>
                      21/02/2022 <img src={DownArrow} alt="downArrow" />
                    </span>
                  </p>

                  <p id="mycart-card-subscription-enddate">
                    End date
                    <span>21/02/2022</span>
                  </p>

                  <p id="mycart-card-tenure">
                    Tenure
                    <span>3 Months</span>
                  </p>
                </div>
              </div>

              <div className="mycart-checkout-container">
                <div className="mycart-order-edit">
                  <p>
                    <img src={Edit} alt="edit" /> Edit
                    <span>
                      <img src={Delete} alt="delete" /> Delete
                    </span>
                  </p>
                </div>

                <div className="mycart-checkout-btn">
                  <button>
                    <Link to="/deliveryaddress">checkout →</Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="mycart-card" style={{ marginTop: "1.75rem" }}>
              <div className="mycart-card-product-img">
                <img src={Pc} alt="playstation" />
              </div>

              <div className="mycart-card-desc">
                <p id="mycart-order-content">
                  Playstation + 2 Controllers + 2 Addons (Games)
                </p>
                <p id="mycart-order-addons">
                  Add ons:{" "}
                  <span style={{ marginLeft: ".5rem", marginTop: "0.75rem" }}>
                    Game1, Game2
                  </span>
                </p>
                <div className="mycart-card-shipping-details">
                  <p id="mycart-card-pricing">
                    <span id="mycart-card-price">
                      <img src={Rupees} alt="ruppees" />
                      7200/Mn
                    </span>

                    <span id="package-details">
                      <img
                        src={PriceInfo}
                        alt="priceInfo"
                        style={{
                          marginRight: ".5rem",
                          width: "0.938rem",
                          height: "0.938rem",
                        }}
                      />
                      Package details
                    </span>
                  </p>

                  <p id="mycart-card-delivery">
                    Delivery on
                    <span>
                      21/02/2022 <img src={DownArrow} alt="downArrow" />
                    </span>
                  </p>

                  <p id="mycart-card-subscription-enddate">
                    End date
                    <span>21/02/2022</span>
                  </p>

                  <p id="mycart-card-tenure">
                    Tenure
                    <span>3 Months</span>
                  </p>
                </div>
              </div>

              <div className="mycart-checkout-container">
                <div className="mycart-order-edit">
                  <p>
                    <img src={Edit} alt="edit" /> Edit
                    <span>
                      <img src={Delete} alt="delete" /> Delete
                    </span>
                  </p>
                </div>

                <div className="mycart-checkout-btn">
                  <button>
                    {" "}
                    <Link to="/deliveryaddress">checkout →</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mycart-suggestion-container">
          <div className="mycart-suggestion-content">
            <Sliderproductcard text="You Might Also Like" />
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  }
};

export default Mycart;
