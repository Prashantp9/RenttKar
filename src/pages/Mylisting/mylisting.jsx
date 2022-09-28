import React from "react";
import "./mylisting.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  Accessoriescard,
  Footer,
  Mylistingcard,
  Navbar,
  Sliderproductcard,
} from "../../components";
import {
  Cross,
  Filter,
  GoPro,
  Playstation,
  PhotoCross,
  SmallCross,
  Sort,
  Left,
  Right,
  ExcludeLeft,
  ExcludeRight,
} from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Mylisting = () => {
  const [isListing, setIsListing] = useState(false);
  const swiper = useSwiper();

  return (
    <>
      <Navbar />
      <div className="mylisting-heading-container">
        <div className="mylisting-heading-content">
          <p>My Listing</p>
        </div>
      </div>

      <div className="mylisting-sorting-container">
        <div className="mylisting-sorting-content">
          <div className="mylisting-filter-container">
            <p>
              <img src={Sort} alt="sort" /> Sort:
            </p>
            <div className="mylisting-sorting-filter">
              <p>
                Recent <img src={Filter} alt="filter" />
              </p>
            </div>
          </div>

          <div className="mylisting-btn-container">
            <button id="mylisting-learn-btn">
              <Link
                to="/listinghome"
                style={{ textDecoration: "none", color: "#0E9BE1" }}
              >
                Learn More
              </Link>
            </button>

            <button
              id="mylisting-list-btn"
              onClick={() => setIsListing(!isListing)}
            >
              List Product +
            </button>
            {isListing && (
              <>
                <div className="mylisting-newproduct-list-container">
                  <div
                    className="mylisting-newproduct-list-content"
                    id={isListing.visible ? "fade-out" : "fade-in"}
                  >
                    <p>
                      New Listing{" "}
                      <img
                        src={SmallCross}
                        alt="smallcross"
                        onClick={() => setIsListing(!isListing)}
                        style={{
                          width: "2rem",
                          height: "2rem",
                          cursor: "pointer",
                        }}
                      />
                    </p>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your product name"
                    />
                    <div className="mylisting-product-accessories-container">
                      <p id="add-accessories">
                        Add Accessories/Additional Info
                      </p>
                      <p>
                        Charger{" "}
                        <img
                          src={SmallCross}
                          alt="smallcross"
                          style={{ width: "1rem", height: "1rem" }}
                        />
                      </p>
                      <p>
                        Lorem Cable{" "}
                        <img
                          src={SmallCross}
                          alt="smallcross"
                          style={{ width: "1rem", height: "1rem" }}
                        />
                      </p>
                    </div>
                    <p id="suggestion-text">
                      <span>Suggestion: </span>Charger | Controller | Earpiece |
                      Body | Antenna
                    </p>
                    <div className="mylisting-pincode-warrenty-container">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Area pincode"
                      />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Warranty if any"
                      />
                    </div>
                    <div className="mylisting-upload-img-container">
                      <input type="file" name="" id="" />
                      <p>Upload Image</p>
                    </div>
                    <div className="mylisting-prod-img-container">
                      <img
                        id="photo-cross-img"
                        src={PhotoCross}
                        alt="photocros"
                        style={{ width: "1rem", height: "1rem" }}
                      />
                      <img
                        id="prod-img"
                        src={GoPro}
                        alt="gopro"
                        style={{ width: "4rem", height: "4rem" }}
                      />
                    </div>
                    <button type="submit">Confirm Details</button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="mylisting-card-container">
        <div className="mylisting-card-content">
          <Mylistingcard
            class="prod-status-approval-pending"
            status="Approval Pending"
          />

          <Mylistingcard class="prod-status-approved" status="Approved" />

          <Mylistingcard
            class="prod-status-active"
            status="Active"
            dot="green-dot"
          />

          <Mylistingcard
            class="prod-status-on-hold"
            status="On Hold"
            dot="yellow-dot"
          />

          <Mylistingcard
            class="prod-status-inactive"
            status="Inactive"
            dot="red-dot"
          />
        </div>
      </div>

      <div className="mylisting-accessories-card-container">
        <div className="mylisting-accessories-card-content">
          <div className="trending-text-container">
            <h1 className="trendText">Lend And Get</h1>
            <div className="trendButton">
              <div className="leftButton" onClick={() => swiper.slidePrev()}>
                <img
                  src={Left}
                  onMouseOver={(e) => (e.currentTarget.src = ExcludeLeft)}
                  onMouseOut={(e) => (e.currentTarget.src = Left)}
                  className="leftVector"
                />
              </div>
              <div className="rightButton" onClick={() => swiper.slideNext()}>
                <img
                  src={Right}
                  onMouseOver={(e) => (e.currentTarget.src = ExcludeRight)}
                  onMouseOut={(e) => (e.currentTarget.src = Right)}
                  className="rightVector"
                />
              </div>
            </div>
          </div>
          <div className="mylisting-card-slider-container">
          <Swiper
            width={580}
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={40}
            slidesPerGroup={3}
            grabCursor={true}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".leftButton",
              nextEl: ".rightButton",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide style={{ marginRight: "0rem" }}>
              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />
            </SwiperSlide>

            <SwiperSlide>
              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Mylisting;
