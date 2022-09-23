import React from "react";
import { useState } from "react";
import {
  Filter,
  Help,
  MobileFilter,
  Playstn,
  SmallCross,
  Sort,
  Threedots,
  Playstation,
  Pc,
  Laptop,
  Right,
  Left,
  ExcludeLeft,
  ExcludeRight
} from "../../assets";
import {
  Footer,
  MyorderCard,
  Navbar,
  Sliderproductcard,
  Mobileproductcard,
  Scrollerbutton
} from "../../components";
import "./myorder.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Myorder = () => {
  const [isFilter, setIsFilter] = useState(false);
  const handlefilterModal = () => {
    setIsFilter((prevState) => !prevState);
  };

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const swiper = useSwiper();

  if (window.innerWidth <= 500) {
    return (
      <>
        <Navbar />
        <div className="myorder-text-container">
          <div className="myorder-text-content">
            <p>My Orders</p>
          </div>
        </div>

        <div className="myorder-type-container">
          <div className="myorder-type-content">
            <Swiper
              width={450}
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides={false}
              slidesPerGroup={3}
              grabCursor={true}
              loop={false}
              loopFillGroupWithBlank={false}
            >
              <SwiperSlide
                style={{
                  width: "5rem",
                }}
              >
                <p
                  className="myorder-text-heading myorder-text-gradient-heading"
                  style={{
                    background: isActive ? "var(--btn-border-gradient)" : "",
                    backgroundClip: isActive ? "text" : "",
                    WebkitBackgroundClip: isActive ? "text" : "",
                    WebkitTextFillColor: isActive ? "transparent" : "",
                    backgroundClip: isActive ? "text" : "",
                  }}
                  onClick={handleClick}
                >
                  All Order
                </p>
              </SwiperSlide>

              <SwiperSlide
                style={{
                  width: "5rem",
                }}
              >
                <p className="myorder-text-heading" onClick={handleClick}>
                  Live Order
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "6rem",
                }}
              >
                <p className="myorder-text-heading" onClick={handleClick}>
                  Subscriptions
                </p>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "7rem",
                }}
              >
                <p className="myorder-text-heading" onClick={handleClick}>
                  Completed Order
                </p>
              </SwiperSlide>

              <SwiperSlide></SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="myorder-sort-container">
          <div className="myorder-sort-content">
            <img
              src={MobileFilter}
              alt="filter"
              style={{ position: "relative" }}
              onClick={() => setIsFilter(!isFilter)}
            />
            {isFilter && (
              <>
                <div className="myorder-filter-container">
                  <div className="myorder-filter-content">
                    <img
                      src={SmallCross}
                      alt="smallcross"
                      style={{
                        width: "1rem",
                        height: "1rem",
                        cursor: "pointer",
                      }}
                      onClick={() => setIsFilter(!isFilter)}
                    />
                    <p>By Price</p>
                    <img src={Filter} alt="filter" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="myorder-extended-card-container">
          <div className="myorder-extended-card-content">
            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
              class="myorder-dealbreaker"
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />
          </div>
        </div>

        <div className="mycart-suggestion-container" style={{background:"#070707"}}>
          <div className="mycart-suggestion-content">
            <div className="mycart-suggestion-text-container">
              <h1>You Might Also Like</h1>
            </div>
            <Swiper
              width={530}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={30}
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

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="myorder-text-container">
          <div className="myorder-text-content">
            <p>My Orders</p>
          </div>
        </div>

        <div className="myorder-type-container">
          <div className="myorder-type-content">
            <p
              style={{
                background: isActive ? "var(--btn-border-gradient)" : "",
                backgroundClip: isActive ? "text" : "",
                WebkitBackgroundClip: isActive ? "text" : "",
                WebkitTextFillColor: isActive ? "transparent" : "",
                backgroundClip: isActive ? "text" : "",
              }}
              onClick={handleClick}
            >
              All Order
            </p>
            <p onClick={handleClick}>Live Order</p>
            <p onClick={handleClick}>Subscriptions</p>
            <p onClick={handleClick}>Completed Order</p>
          </div>
        </div>

        <div className="myorder-sort-container">
          <div className="myorder-sort-content">
            <p>
              <img src={Sort} alt="sort" /> Sort:
            </p>
            <div className="myorder-recent-filter" onClick={handlefilterModal}>
              <p>
                Recent <img src={Filter} alt="filter" />
              </p>
            </div>
          </div>
        </div>

        {isFilter && (
          <>
            <div className="myorder-filter-container">
              <div className="myorder-filter-content">
                <div className="myorder-choose-filter">
                  <label htmlFor="recent" onClick={handlefilterModal}>
                    <input type="radio" name="recent" id="" />
                    <span style={{ marginLeft: ".5rem" }}>Recent</span>
                  </label>

                  <label htmlFor="old" onClick={handlefilterModal}>
                    <input type="radio" name="old" id="" />
                    <span style={{ marginLeft: ".5rem" }}>Old</span>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="myorder-extended-card-container">
          <div className="myorder-extended-card-content">
            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
              class="myorder-dealbreaker"
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />
          </div>
        </div>

        <div className="mycart-suggestion-container">
          <div className="mycart-suggestion-content">
            <Sliderproductcard text="You Might Also Like" />
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default Myorder;
