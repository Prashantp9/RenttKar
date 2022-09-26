import React from "react";
import "./listinghome.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  Navbar,
  Footer,
  Accessoriescard,
  Scrollerbutton,
  Contactbutton,
} from "../../components";
import {
  GirlArt,
  Union,
  Delivery,
  Deposit,
  Light,
  Securitydeposit,
  Shareearn,
  Ellipse,
  Livelighter,
  Samedaydelivery,
  Artwork,
  Playstation,
  Learn,
  Renuka,
  Ammy,
  Aadil,
  DownArrow,
  UpArrow,
  Ask,
} from "../../assets";
import { useState } from "react";

const Listinghome = () => {
  const [isClick, setIsClick] = useState(false);

  if (window.innerWidth <= 500) {
    return (
      <>
        <Navbar />
        <div className="listing-home-header-container">
          <div className="listing-home-header-content">
            <div className="listing-home-header-rightpart">
              <img src={GirlArt} alt="girlart" />
            </div>

            <div className="listing-home-header-leftpart">
              <p id="ecosystem-text">Be a Part of Our Ecosystem</p>
              <p id="ecosystem-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tincidunt proin elit nisi, id{" "}
              </p>
              <button type="submit">List Items</button>
            </div>
          </div>
        </div>

        <div className="listing-home-benefits-container">
          <div className="listing-home-benefits-content">
            <p id="benefits-text">Benefits</p>
            <div className="listing-home-benefits-types-container">
              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Livelighter}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="benefits-desc-container">
                  <p id="benefits-heading">Live Lighter</p>
                  <p id="benefits-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  </div>
              </div>

              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Securitydeposit}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="benefits-desc-container">
                  <p id="benefits-heading">No Security Deposit</p>
                  <p id="benefits-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Shareearn}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="benefits-desc-container">
                  <p id="benefits-heading">Share & Earn</p>
                  <p id="benefits-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "4.5rem",
                      height: "4.5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Samedaydelivery}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <div className="benefits-desc-container">
                  <p id="benefits-heading">Same Day Delivery</p>
                  <p id="benefits-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="listing-home-how-works-container">
          <div className="listing-home-how-works-content">
            <p>How It Works</p>
            <img src={Learn} alt="artwork" style={{ marginTop: "2rem" }} />
          </div>
        </div>

        <div className="listing-home-lend-card-container">
          <div className="listing-home-lend-card-content">
            <p>Do You Have?</p>
            <div className="listing-home-lend-card">
              <Swiper
                width={570}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={10}
                slidesPerGroup={3}
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide style={{ marginRight: "2rem" }}>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
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

        <div className="listing-home-frequently-asked-question-container">
          <div className="listing-home-frequently-asked-question-content">
            <p>Frequently Asked Questions</p>
            <div className="listing-home-question-container">
              <div
                className="listing-home-question-answers"
                onClick={() => setIsClick(!isClick)}
                style={{
                  height: isClick ? "7rem" : "4rem",
                }}
              >
                <p id="freq-asked-que">
                  What are Add Ons?{" "}
                  {isClick ? (
                    <img src={UpArrow} alt="uparrow" />
                  ) : (
                    <img src={DownArrow} alt="downarrow" />
                  )}
                </p>
                {isClick && (
                  <>
                    <p id="freq-ans">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Blandit a, odio nisl est.
                    </p>
                  </>
                )}
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How do I change my account info?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  Is there a lorem ipsum available?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  Can I change my plan later?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  What is your cancelation policy?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How does Agreement works?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How does lorem rantkoi kelpodm auosmmgoui sastuzs?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
            </div>

            <div className="listing-home-submit-question-container">
              <div className="listing-home-submit-question-input">
                <input type="text" name="" id="" placeholder="Ask us" />
                <img src={Ask} alt="ask" />
              </div>

              <button type="submit">Submit Question</button>
            </div>
          </div>
        </div>

        <Scrollerbutton  />

        <Contactbutton />

        <Footer />
      </>
    );
  }



  if (window.innerWidth <= 768) {
    return (
      <>
        <Navbar />
        <div className="listing-home-header-container">
          <div className="listing-home-header-content">
            <div className="listing-home-header-rightpart">
              <img src={GirlArt} alt="girlart" />
            </div>

            <div className="listing-home-header-leftpart">
              <p id="ecosystem-text">Be a Part of Our Ecosystem</p>
              <p id="ecosystem-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tincidunt proin elit nisi, id{" "}
              </p>
              <button type="submit">List Items</button>
            </div>
          </div>
        </div>

        <div className="listing-home-benefits-container">
          <div className="listing-home-benefits-content">
            <p id="benefits-text">Benefits</p>
            <p id="benefits-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              risus aenean lectus.
            </p>
            <div className="listing-home-benefits-types-container">
              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "7.5rem",
                      height: "7.5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Securitydeposit}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                </div>
                <p id="benefits-heading">No Security Deposit</p>
                <p id="benefits-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "7.5rem",
                      height: "7.5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Shareearn}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                </div>
                <p id="benefits-heading">Share & Earn</p>
                <p id="benefits-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "7.5rem",
                      height: "7.5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Samedaydelivery}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                </div>
                <p id="benefits-heading">Same Day Delivery</p>
                <p id="benefits-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="listing-home-how-works-container">
          <div className="listing-home-how-works-content">
            <p>How It Works</p>
            <img src={Learn} alt="artwork" style={{ marginTop: "2rem" }} />
          </div>
        </div>

        <div className="listing-home-lend-card-container">
          <div className="listing-home-lend-card-content">
            <p>Do You Have?</p>
            <div className="listing-home-lend-card">
              <Swiper
                width={570}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={10}
                slidesPerGroup={3}
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide style={{ marginRight: "2rem" }}>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Accessoriescard
                    imgSrc={Playstation}
                    name="Projector"
                    price="500/Month"
                    data="Add +"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
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

        <div className="listing-home-frequently-asked-question-container">
          <div className="listing-home-frequently-asked-question-content">
            <p>Frequently Asked Questions</p>
            <div className="listing-home-question-container">
              <div
                className="listing-home-question-answers"
                onClick={() => setIsClick(!isClick)}
                style={{
                  height: isClick ? "7rem" : "4rem",
                }}
              >
                <p id="freq-asked-que">
                  What are Add Ons?{" "}
                  {isClick ? (
                    <img src={UpArrow} alt="uparrow" />
                  ) : (
                    <img src={DownArrow} alt="downarrow" />
                  )}
                </p>
                {isClick && (
                  <>
                    <p id="freq-ans">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Blandit a, odio nisl est.
                    </p>
                  </>
                )}
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How do I change my account info?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  Is there a lorem ipsum available?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  Can I change my plan later?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  What is your cancelation policy?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How does Agreement works?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How does lorem rantkoi kelpodm auosmmgoui sastuzs?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
            </div>

            <div className="listing-home-submit-question-container">
              <div className="listing-home-submit-question-input">
                <input type="text" name="" id="" placeholder="Ask us" />
                <img src={Ask} alt="ask" />
              </div>

              <button type="submit">Submit Question</button>
            </div>
          </div>
        </div>

        <Scrollerbutton class="mobileGoTopContainer" />

        <Contactbutton />

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="listing-home-header-container">
          <div className="listing-home-header-content">
            <div className="listing-home-header-leftpart">
              <p id="ecosystem-text">Be a Part of Our Ecosystem</p>
              <p id="ecosystem-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tincidunt proin elit nisi, id{" "}
              </p>
              <button type="submit">List Items</button>
            </div>
            <div className="listing-home-header-rightpart">
              <img src={GirlArt} alt="girlart" />
            </div>
          </div>
        </div>

        <div className="listing-home-benefits-container">
          <div className="listing-home-benefits-content">
            <p id="benefits-text">Benefits</p>
            <p id="benefits-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
              risus aenean lectus.
            </p>
            <div className="listing-home-benefits-types-container">
              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Livelighter}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <p id="benefits-heading">Live Lighter</p>
                <p id="benefits-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Securitydeposit}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <p id="benefits-heading">No Security Deposit</p>
                <p id="benefits-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Shareearn}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <p id="benefits-heading">Share & Earn</p>
                <p id="benefits-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              <div className="listing-home-benefits-types-content">
                <div className="listing-home-big-ellipse">
                  <img
                    src={Ellipse}
                    alt="ellipse"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      position: "relative",
                    }}
                  />
                  <img
                    src={Samedaydelivery}
                    alt="light"
                    id="listing-benefits-symbol"
                    style={{ width: "3rem", height: "3rem" }}
                  />
                </div>
                <p id="benefits-heading">Same Day Delivery</p>
                <p id="benefits-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="listing-home-how-works-container">
          <div className="listing-home-how-works-content">
            <p>How It Works</p>
            <img src={Learn} alt="artwork" style={{ marginTop: "2rem" }} />
          </div>
        </div>

        <div className="listing-home-lend-card-container">
          <div className="listing-home-lend-card-content">
            <p>Do You Have?</p>
            <div className="listing-home-lend-card">
              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />

              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />

              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />

              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />

              <Accessoriescard
                imgSrc={Playstation}
                name="Projector"
                price="500/Month"
                data="Lend"
              />
            </div>
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

        <div className="listing-home-frequently-asked-question-container">
          <div className="listing-home-frequently-asked-question-content">
            <p>Frequently Asked Questions</p>
            <div className="listing-home-question-container">
              <div
                className="listing-home-question-answers"
                onClick={() => setIsClick(!isClick)}
                style={{
                  height: isClick ? "7rem" : "4rem",
                }}
              >
                <p id="freq-asked-que">
                  What are Add Ons?{" "}
                  {isClick ? (
                    <img src={UpArrow} alt="uparrow" />
                  ) : (
                    <img src={DownArrow} alt="downarrow" />
                  )}
                </p>
                {isClick && (
                  <>
                    <p id="freq-ans">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Blandit a, odio nisl est.
                    </p>
                  </>
                )}
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How do I change my account info?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  Is there a lorem ipsum available?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  Can I change my plan later?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  What is your cancelation policy?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How does Agreement works?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>

              <div className="listing-home-question-answers">
                <p id="freq-asked-que">
                  How does lorem rantkoi kelpodm auosmmgoui sastuzs?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
            </div>

            <div className="listing-home-submit-question-container">
              <div className="listing-home-submit-question-input">
                <input type="text" name="" id="" placeholder="Ask us" />
                <img src={Ask} alt="ask" />
              </div>

              <button type="submit">Submit Question</button>
            </div>
          </div>
        </div>

        <Scrollerbutton class="mobileGoTopContainer" />

        <Contactbutton />

        <Footer />
      </>
    );
  }
};

export default Listinghome;
