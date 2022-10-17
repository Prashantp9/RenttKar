import React from "react";
import "./mobilepaidaddons.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import {
  AddonsBattelfield,
  AddonsPs4,
  AddonsSearch,
  BattelfieldCD,
  CardCross,
  MobileFilter,
  MobileSearch,
  Ps4cd,
  Search,
  SmallCross,
} from "../../assets";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";

const Mobilepaidaddons = () => {
  return (
    <>
      <div className="mobile-freeaddons-container">
        <div className="mobile-freeaddons-heading-container">
          <div className="mobile-freeaddons-heading-content">
            <p>Paid addons</p>
            <Link to="/productdetails">
              <img src={SmallCross} alt="" />
            </Link>
          </div>
        </div>

        <div className="mobile-freeaddons-selected-content">
          <div className="freeaddons-selected-heading">
            <p>Selected</p>
            <p>2</p>
          </div>

          <div className="freeaddons-selected-cards">
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
                <div className="freeaddons-selected-cards-one">
                  <img
                    src={CardCross}
                    alt="cardcross"
                    className="freeaddons-cards-cross"
                  />
                  <img src={Ps4cd} alt="ps4" className="selected-cards" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="freeaddons-selected-cards-two">
                  <img
                    src={CardCross}
                    alt="cardcross"
                    className="freeaddons-cards-cross"
                  />
                  <img
                    src={BattelfieldCD}
                    alt="ps4"
                    className="selected-cards"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="mobile-freeaddons-search-container">
          <div className="mobile-freeaddons-search-content">
            <div className="mobile-freeaddons-search">
              <input
                type="search"
                name="addonsSearch"
                id=""
                placeholder="Search addons"
              />
              <img src={AddonsSearch} alt="search" style={{width:"1.5rem", height:"1.5rem"}}/>
            </div>

            <img src={MobileFilter} alt="filter" />
          </div>

          <div className="mobile-freeaddons-cards-container">
            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsBattelfield} alt="ps4" />
              <button type="submit">Add</button>
            </div>

            <div className="mobile-freeaddons-cards">
              <img src={AddonsPs4} alt="ps4" />
              <button type="submit">Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilepaidaddons;
