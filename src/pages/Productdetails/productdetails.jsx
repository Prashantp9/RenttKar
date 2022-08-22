import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./productdetails.css";

// components
import { Navbar, Accessoriescard, Footer } from "../../components";
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
  DownArrow,
  UpArrow,
  Ask,
} from "../../assets";

const Productdetails = () => {
  const swiper = useSwiper();
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
                    style={{ marginLeft: "0.594rem", marginRight: "0.594rem" }}
                  />{" "}
                  <Link to="/catogeries">Catogeries</Link>{" "}
                  <img
                    src={RightArrow}
                    alt="rigthArrow"
                    style={{ marginLeft: "0.594rem", marginRight: "0.594rem" }}
                  />{" "}
                  <Link to="/productdetails">Product Details</Link>
                </p>
              </div>
            </div>

            <div className="product-image-container">
              <div className="product-image-content">
                <div
                  id="carouselExampleIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
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
                  <div className="carousel-inner">
                    <div className="carousel-item active">
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
                >
                  <SwiperSlide style={{marginRight:"2rem"}}>
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
                <div className="frequently-asked-question" style={{marginTop:"2.5rem"}}>
                    <p id="p1">How many games come with the standard packages? <img src={UpArrow} alt="upArrow" /></p>
                    <p id="p2">Two free games are included in your package.</p>
                </div>

                <div className="frequently-asked-question" style={{marginTop:"1.5rem"}}>
                        <p id="p1">Do the controllers come charged? <img src={DownArrow} alt="" /></p>
                </div>

                <div className="frequently-asked-question" style={{marginTop:"1.5rem"}}>
                    <p id="p1">Are the controllers sanitized? <img src={DownArrow} alt="" /></p>
                </div>

                <div className="frequently-asked-question" style={{marginTop:"1.5rem", border:"none"}}>
                    <p id="p1">Do we get to choose the games? <img src={DownArrow} alt="" /></p>
                </div>


                <p id="mind-question">Have a question in your mind? Ask us!</p>
        
              <div className="ask-question">
                    <span><input type="text" name="askQuestion" id=""  placeholder='Ask us'/> <img src={Ask} alt="" /></span>
                  <button type="submit">Submit Question</button>
              </div>
            </div>
        
        </div>

          {/* right container */}
          <div className="product-right-container">
            <div className="product-right-content">

            </div>
          </div>
        </div>
      </div>

      
      <Footer/>
    </>
  );
};

export default Productdetails;