import React from "react";
import "./businesspage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
  Sliderproductcard,
} from "../../components";
import {
  Delivery,
  Deposit,
  GoPro2,
  Grow,
  Laptop,
  Light,
  Pc,
  Playstation,
  Playstn,
  Quality,
  Union,
  Esport,
  Tech,
  Times,
  Lbb,
  Aadil,
  Renuka,
  Ammy,
} from "../../assets";

const Businesspage = () => {
  return (
    <>
      <Navbar />
      <div className="business-grow-with-us-container">
        <div className="business-grow-with-us-content">
          <div className="business-grow-with-us-left-container">
            <p id="grow-text">Grow With Us</p>
            <p id="grow-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              tincidunt proin elit nisi, id{" "}
            </p>
            <div className="grow-with-us-statics">
              <div className="grow-with-us-statics-first">
                <p id="statics-no">42K+</p>
                <p id="statics-text">Active Users</p>
              </div>
              <div className="grow-with-us-statics-first">
                <p id="statics-no">4K+</p>
                <p id="statics-text">Products</p>
              </div>
              <div className="grow-with-us-statics-first">
                <p id="statics-no">16K+</p>
                <p id="statics-text">Random</p>
              </div>
            </div>
          </div>
          <div className="business-grow-with-us-right-container">
            <input type="text" name="" id="" placeholder="Your Name" />
            <input type="text" name="" id="" placeholder="Company Name" />
            <input type="text" name="" id="" placeholder="Mobile-Number" />
            <input type="text" name="" id="" placeholder="Email Id" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Name of Products Required"
            ></textarea>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </div>

      <div className="business-company-features-container">
        <div className="business-company-features-content">
          <div className="business-company-features-quality-container">
            <div className="business-features-img-container">
              <img src={Union} alt="union" />
            </div>

            <p id="business-features-heading">Quality Products</p>

            <p id="business-features-desc">
              It's our habit to send each product through a 7-point inspection.
            </p>
          </div>

          <div className="business-company-features-quality-container">
            <div className="business-features-img-container">
              <img src={Deposit} alt="deposit" />
            </div>

            <p id="business-features-heading">Zero Deposit</p>

            <p id="business-features-desc">
              Experience the new world of renting without a fee.{" "}
            </p>
          </div>

          <div className="business-company-features-quality-container">
            <div className="business-features-img-container">
              <img src={Delivery} alt="delivery" />
            </div>

            <p id="business-features-heading">Instant Delivery</p>

            <p id="business-features-desc">
              Products delivered within 2-4 hours.{" "}
            </p>
          </div>

          <div className="business-company-features-quality-container">
            <div className="business-features-img-container">
              <img src={Light} alt="light" />
            </div>

            <p id="business-features-heading">Live Light</p>

            <p id="business-features-desc">
              Naked we came on Earth, Naked we need to go!{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="business-catogeries-container">
        <div className="business-catogeries-content">
          <p>Categories We Provide</p>
          <div className="business-catogeries-card-container">
            <div className="business-catogeries-card">
              <img src={Playstn} alt="playstation" />
              <p>
                <span>Gaming</span>
              </p>
            </div>

            <div className="business-catogeries-card">
              <img src={Playstation} alt="playstation" />
              <p>
                <span>Musical</span>
              </p>
            </div>

            <div className="business-catogeries-card">
              <img src={GoPro2} alt="camera" />
              <p>
                <span>Cameras</span>
              </p>
            </div>

            <div className="business-catogeries-card">
              <img src={Laptop} alt="laptop" />
              <p>
                <span>Laptops</span>
              </p>
            </div>

            <div className="business-catogeries-card">
              <img src={Pc} alt="pc" />
              <p>
                <span>Computers</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="product-help-business-container">
        <div className="product-help-business-content">
          <Sliderproductcard text="Products To help Your Business Grow" />
        </div>
      </div>

      {/* featured container */}
      <div className="featuredContainer" style={{background:"transparent", marginBottom:"7rem"}}>
        <h1 className="featuredHeading">Featured On</h1>
        <div className="featuredContent">
          <img src={Esport} alt="" className="esport" />
          <img src={Times} alt="" className="times" />
          <img src={Tech} alt="" className="tech" />
          <img src={Lbb} alt="" className="lbb" />
        </div>
      </div>

      {/* People Said container */}
      <div className="peopleContainer">
        <div className="peopleContent">
          <div className="headerPart">
            <h1 className="peopleHeading">People Said</h1>
            <p className="peopleDetails">
              Your feedback gives us a better sense of purpose.
            </p>
          </div>

          <div className="sliderContent">
            <Swiper
              width={1530}
              slidesPerView={3}
              centeredSlides={true}
              slidesPerGroup={1}
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="testimonialSwiper"
              breakpoints={{
                500: {
                  height: "37rem",
                },
                height: "45rem",
              }}
            >
              {/* 1 */}
              <SwiperSlide className="peopleSwiper">
                <div className="cardContent">
                  <div className="peopleCard">
                    <p className="colan">“</p>
                    <p className="cardDesc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit at quis enim porta egestas in pellentesque. Donec
                      porta egestas in pellentesque. Donec arcu sit aliquam
                      sodales.
                    </p>
                    <div className="peopleImg">
                      <img src={Aadil} alt="" className="peopleEllipse" />
                    </div>
                  </div>
                  <h1 className="peopleName">Aadil Singh</h1>
                  <p className="peopleDesc">Lorem Ipsum</p>
                </div>
              </SwiperSlide>

              {/* 2 */}
              <SwiperSlide className="peopleSwiper">
                <div className="cardContent">
                  <div className="peopleCard">
                    <p className="colan">“</p>
                    <p className="cardDesc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit at quis enim porta egestas in pellentesque. Donec
                      porta egestas in pellentesque. Donec arcu sit aliquam
                      sodales.
                    </p>
                    <div className="peopleImg">
                      <img src={Ammy} alt="" className="peopleEllipse" />
                    </div>
                  </div>
                  <h1 className="peopleName ammyName">Ammy Hansley</h1>
                  <p className="peopleDesc ammyDesc">Lorem Ipsum</p>
                </div>
              </SwiperSlide>

              {/* 3 */}
              <SwiperSlide className="peopleSwiper">
                <div className="cardContent">
                  <div className="peopleCard">
                    <p className="colan">“</p>
                    <p className="cardDesc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sit at quis enim porta egestas in pellentesque. Donec
                      porta egestas in pellentesque. Donec arcu sit aliquam
                      sodales.
                    </p>
                    <div className="peopleImg">
                      <img src={Renuka} alt="" className="peopleEllipse" />
                    </div>
                  </div>
                  <h1 className="peopleName renukaName">Renuka Patle</h1>
                  <p className="peopleDesc renukaDesc">Lorem Ipsum</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <Scrollerbutton />

      <Contactbutton />

      <Footer />
    </>
  );
};

export default Businesspage;
