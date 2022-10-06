import React from "react";
import { useState } from "react";
import { Ask, DownArrow, faqs, GradientAsk, UpArrow } from "../../assets";
import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
} from "../../components";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./faqs.css";

const Faqs = () => {
  const [isClick, setIsClick] = useState(false);
  if (window.innerWidth <= 500) {
    return (
      <>
        <Navbar />
        <div className="faqs-heading-container">
          <div className="faqs-heading-content">
            <p>
              <img
                src={faqs}
                alt="faqs"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  marginRight: ".5rem",
                }}
              />{" "}
              Frequently Asked Questions
            </p>
          </div>
        </div>

        <div className="faqs-subheading-container">
          <div className="faqs-subheading-content">
          <Swiper
              width={900}
              slidesPerView={3}
              spaceBetween={20}
              centeredSlides={true}
              slidesPerGroup={1}
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
            >
              <SwiperSlide>
                <div id="faqs-cat"><p id="faqs-user-acc">User Account</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Orders</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Delivery & Installation</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Rental, rental payment & Issues</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Service & Maintainance</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div style={{ border: "none" }} id="faqs-cat"><p>Offers & Credits</p></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="faqs-qans-container">
          <div className="faqs-qans-content">
            <div className="faqs-qans-upperpart">
              <div
                onClick={() => setIsClick(!isClick)}
                className="faqs-que-container"
                style={{ height: isClick ? "10rem" : "4rem" }}
              >
                <p id="faqs-que">
                  {" "}
                  What is rentkar?{" "}
                  {isClick ? (
                    <img src={UpArrow} alt="uparrow" />
                  ) : (
                    <img src={DownArrow} alt="downarrow" />
                  )}
                </p>
                {isClick && (
                  <>
                    <p id="faqs-ans">
                      Rentkar is India's leading peer-to-peer equipment sharing
                      ecosystem and platform. One can rent/share almost anything
                      from Musical instruments, Gaming Consoles, Laptops, and
                      more!
                    </p>
                  </>
                )}
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  Which cities does rentkar operate in?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  {" "}
                  How to sign up on rentkar?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  How does renting work? How can I rent?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  How can I start sharing?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  What are the documents required?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  If there is no deposit, how does the security work?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div style={{ border: "none" }} className="faqs-que-container">
                <p id="faqs-que">
                  How do I change my account info?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
            </div>

            <div className="faqs-qans-lowerpart">
              <p>Any Unanswered Question?</p>

              <div className="faqs-unanswered-container">
                <div className="faqs-unanswered-input-container">
                  <input type="text" name="" id="" placeholder="Ask us" />
                  <img src={GradientAsk} alt="ask" style={{width:"1.5rem", height:"1.25rem"}}/>
                </div>
                <button type="submit">Submit Question</button>
              </div>
              <p id="faqs-or-text">or</p>
              <p id="faqs-contact-text">Contact Us</p>
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  }

  if (window.innerWidth <= 768) {
    return (
      <>
        <Navbar />
        <div className="faqs-heading-container">
          <div className="faqs-heading-content">
            <p>
              <img
                src={faqs}
                alt="faqs"
                style={{
                  width: "2rem",
                  height: "2.5rem",
                  marginRight: ".5rem",
                }}
              />{" "}
              Frequently Asked Questions
            </p>
          </div>
        </div>

        <div className="faqs-subheading-container">
          <div className="faqs-subheading-content">
            <Swiper
              width={900}
              slidesPerView={3}
              spaceBetween={20}
              centeredSlides={true}
              slidesPerGroup={3}
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
            >
              <SwiperSlide>
                <div id="faqs-cat"><p id="faqs-user-acc">User Account</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Orders</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Delivery & Installation</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Rental, rental payment & Issues</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Service & Maintainance</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div style={{ border: "none" }} id="faqs-cat"><p>Offers & Credits</p></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="faqs-qans-container">
          <div className="faqs-qans-content">
            <div className="faqs-qans-upperpart">
              <div
                onClick={() => setIsClick(!isClick)}
                className="faqs-que-container"
                style={{ height: isClick ? "12rem" : "4rem" }}
              >
                <p id="faqs-que">
                  {" "}
                  What is rentkar?{" "}
                  {isClick ? (
                    <img src={UpArrow} alt="uparrow" />
                  ) : (
                    <img src={DownArrow} alt="downarrow" />
                  )}
                </p>
                {isClick && (
                  <>
                    <p id="faqs-ans">
                      Rentkar is India's leading peer-to-peer equipment sharing
                      ecosystem and platform. One can rent/share almost anything
                      from Musical instruments, Gaming Consoles, Laptops, and
                      more!
                    </p>
                  </>
                )}
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  Which cities does rentkar operate in?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  {" "}
                  How to sign up on rentkar?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  How does renting work? How can I rent?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  How can I start sharing?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  What are the documents required?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  If there is no deposit, how does the security work?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div style={{ border: "none" }} className="faqs-que-container">
                <p id="faqs-que">
                  How do I change my account info?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
            </div>

            <div className="faqs-qans-lowerpart">
              <p>Any Unanswered Question?</p>

              <div className="faqs-unanswered-container">
                <div className="faqs-unanswered-input-container">
                  <input type="text" name="" id="" placeholder="Ask us" />
                  <img src={GradientAsk} alt="gradientask" style={{width:"1.5rem", height:"1.5rem"}}/>
                </div>
                <button type="submit">Submit Question</button>
              </div>
              <p id="faqs-or-text">or</p>
              <p id="faqs-contact-text">Contact Us</p>
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  }
  
  if (window.innerWidth <= 1200) {
    return (
      <>
        <Navbar />
        <div className="faqs-heading-container">
          <div className="faqs-heading-content">
            <p>
              <img
                src={faqs}
                alt="faqs"
                style={{
                  width: "2rem",
                  height: "2.5rem",
                  marginRight: ".5rem",
                }}
              />{" "}
              Frequently Asked Questions
            </p>
          </div>
        </div>

        <div className="faqs-subheading-container">
          <div className="faqs-subheading-content">
            <Swiper
              width={900}
              slidesPerView={3}
              spaceBetween={20}
              centeredSlides={true}
              slidesPerGroup={3}
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
            >
              <SwiperSlide>
                <div id="faqs-cat"><p id="faqs-user-acc">User Account</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Orders</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Delivery & Installation</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Rental, rental payment & Issues</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div id="faqs-cat"><p>Service & Maintainance</p></div>
              </SwiperSlide>

              <SwiperSlide>
                <div style={{ border: "none" }} id="faqs-cat"><p>Offers & Credits</p></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="faqs-qans-container">
          <div className="faqs-qans-content">
            <div className="faqs-qans-upperpart">
              <div
                onClick={() => setIsClick(!isClick)}
                className="faqs-que-container"
                style={{ height: isClick ? "9rem" : "5.688rem" }}
              >
                <p id="faqs-que">
                  {" "}
                  What is rentkar?{" "}
                  {isClick ? (
                    <img src={UpArrow} alt="uparrow" />
                  ) : (
                    <img src={DownArrow} alt="downarrow" />
                  )}
                </p>
                {isClick && (
                  <>
                    <p id="faqs-ans">
                      Rentkar is India's leading peer-to-peer equipment sharing
                      ecosystem and platform. One can rent/share almost anything
                      from Musical instruments, Gaming Consoles, Laptops, and
                      more!
                    </p>
                  </>
                )}
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  Which cities does rentkar operate in?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  {" "}
                  How to sign up on rentkar?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  How does renting work? How can I rent?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  How can I start sharing?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  What are the documents required?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  If there is no deposit, how does the security work?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div style={{ border: "none" }} className="faqs-que-container">
                <p id="faqs-que">
                  How do I change my account info?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
            </div>

            <div className="faqs-qans-lowerpart">
              <p>Any Unanswered Question?</p>

              <div className="faqs-unanswered-container">
                <div className="faqs-unanswered-input-container">
                  <input type="text" name="" id="" placeholder="Ask us" />
                  <img src={GradientAsk} alt="gradientask" style={{width:"1.5rem", height:"1.5rem"}}/>
                </div>
                <button type="submit">Submit Question</button>
              </div>
              <p id="faqs-or-text">or</p>
              <p id="faqs-contact-text">Contact Us</p>
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
        <div className="faqs-heading-container">
          <div className="faqs-heading-content">
            <p>
              <img
                src={faqs}
                alt="faqs"
                style={{
                  width: "2rem",
                  height: "2.5rem",
                  marginRight: ".5rem",
                }}
              />{" "}
              Frequently Asked Questions
            </p>
          </div>
        </div>

        <div className="faqs-subheading-container">
          <div className="faqs-subheading-content">
            <p id="faqs-user-acc">User Account</p>
            <p>Orders</p>
            <p>Delivery & Installation</p>
            <p>Rental, rental payment & Issues</p>
            <p>Service & Maintainance</p>
            <p style={{ border: "none" }}>Offers & Credits</p>
          </div>
        </div>

        <div className="faqs-qans-container">
          <div className="faqs-qans-content">
            <div className="faqs-qans-upperpart">
              <div
                onClick={() => setIsClick(!isClick)}
                className="faqs-que-container"
                style={{ height: isClick ? "8rem" : "5.688rem" }}
              >
                <p id="faqs-que">
                  {" "}
                  What is rentkar?{" "}
                  {isClick ? (
                    <img src={UpArrow} alt="uparrow" />
                  ) : (
                    <img src={DownArrow} alt="downarrow" />
                  )}
                </p>
                {isClick && (
                  <>
                    <p id="faqs-ans">
                      Rentkar is India's leading peer-to-peer equipment sharing
                      ecosystem and platform. One can rent/share almost anything
                      from Musical instruments, Gaming Consoles, Laptops, and
                      more!
                    </p>
                  </>
                )}
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  Which cities does rentkar operate in?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  {" "}
                  How to sign up on rentkar?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  How does renting work? How can I rent?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  How can I start sharing?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  What are the documents required?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div className="faqs-que-container">
                <p id="faqs-que">
                  If there is no deposit, how does the security work?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
              <div style={{ border: "none" }} className="faqs-que-container">
                <p id="faqs-que">
                  How do I change my account info?{" "}
                  <img src={DownArrow} alt="downarrow" />
                </p>
              </div>
            </div>

            <div className="faqs-qans-lowerpart">
              <p>Any Unanswered Question?</p>

              <div className="faqs-unanswered-container">
                <div className="faqs-unanswered-input-container">
                  <input type="text" name="" id="" placeholder="Ask us" />
                  <img src={Ask} alt="ask" />
                </div>
                <button type="submit">Submit Question</button>
              </div>
              <p id="faqs-or-text">or</p>
              <p id="faqs-contact-text">Contact Us</p>
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  }
};

export default Faqs;
