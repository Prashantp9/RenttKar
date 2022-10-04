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
  Scrollerbutton,
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
  OrderAccepted,
  Laptop,
  Playstn,
  Macbook,
  Pc,
  GoPro2,
  UploadImg,
  MobileFilter,
} from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Accessoriescardslider = () => {
  if (window.innerWidth <= 320) {
    return (
      <>
        <Swiper
          width={480}
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
      </>
    );
  }
  if (window.innerWidth <= 576) {
    return (
      <>
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
      </>
    );
  }
  if (window.innerWidth <= 991) {
    return (
      <>
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
      </>
    );
  } else {
    return (
      <>
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
      </>
    );
  }
};




const Mylisting = () => {
  const [isListing, setIsListing] = useState(false);
  useEffect(() => {
    if(isListing){
      document.body.style.position = "fixed"
    } else {
      document.body.style.position = "relative"
    }
  })
  const [isDone, setIsDone] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const handlefilterModal = () => {
    setIsFilter((prevState) => !prevState);
  };
  const swiper = useSwiper();

  if (window.innerWidth <= 320) {
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
              <img
                src={MobileFilter}
                alt="Mobilefilter"
                style={{ cursor: "pointer" }}
                onClick={() => setIsFilter(!isFilter)}
              />
              {isFilter && (
                <>
                  <div className="mobile-mylisting-filter-container">
                    <p>
                      <img
                        src={SmallCross}
                        alt="small cross"
                        style={{
                          width: ".75rem",
                          height: ".75rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setIsFilter(!isFilter)}
                      />{" "}
                      By Price <img src={Filter} alt="filter" />{" "}
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="mylisting-btn-container">
              <button id="mylisting-learn-btn">
                <Link
                  to="/listinghome"
                  style={{ textDecoration: "none", color: "#0E9BE1" }}
                >
                  <p> Learn More</p>
                </Link>
              </button>

              <button
                id="mylisting-list-btn"
                onClick={() => setIsListing(!isListing)}
              >
                List Items
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
                        <span>Suggestion: </span>Charger | Controller | Earpiece
                        | Body | Antenna
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
                        <p>Upload Image</p>
                      </div>
                      <div className="mylisting-prod-img-container">
                        <div className="mylisting-prod-img-upload-container">
                          <input type="file" name="" id="" />
                          <img
                            id="prod-img"
                            src={GoPro}
                            alt="gopro"
                            style={{
                              width: "5.438rem",
                              height: "5.438rem",
                              borderRadius: "6px",
                            }}
                          />
                        </div>

                        <div className="mylisting-prod-img-upload-container">
                          <input type="file" name="" id="" />
                          <img
                            id="prod-img"
                            src={UploadImg}
                            alt="uploadimg"
                            style={{
                              width: "5.438rem",
                              height: "5.438rem",
                              borderRadius: "6px",
                            }}
                          />
                        </div>

                        <div className="mylisting-prod-img-upload-container">
                          <input type="file" name="" id="" />
                          <img
                            id="prod-img"
                            src={UploadImg}
                            alt="uploadimg"
                            style={{
                              width: "5.438rem",
                              height: "5.438rem",
                              borderRadius: "6px",
                            }}
                          />
                        </div>

                        <div className="mylisting-prod-img-upload-container">
                          <input type="file" name="" id="" />
                          <img
                            id="prod-img"
                            src={UploadImg}
                            alt="uploadimg"
                            style={{
                              width: "5.438rem",
                              height: "5.438rem",
                              borderRadius: "6px",
                            }}
                          />
                        </div>
                      </div>
                      <button type="submit" onClick={() => setIsDone(!isDone)}>
                        Confirm Details
                      </button>
                      {isDone && (
                        <>
                          <div className="mylisting-congrulation-container">
                            <div className="mylisting-congrulation-content">
                              <div className="mylisting-congrulation-text-container">
                                <img
                                  src={OrderAccepted}
                                  alt="orderaccept"
                                  style={{
                                    width: "7.434rem",
                                    height: "4.063rem",
                                  }}
                                />
                                <div className="mylisting-congrulation-desc">
                                  <p id="congrulation-text">Congrulation</p>
                                  <p id="congrulation-desc">
                                    Your product has been sent on a job
                                    interview for selection. We will notify you
                                    once it has been approved.
                                  </p>
                                </div>
                              </div>

                              <div className="mylisting-suggestion-img-container">
                                <p>See around! Do you also have?</p>
                                <div className="mylisting-suggestion-img-content">
                                  <img src={Playstn} alt="playstation" />
                                  <img src={Laptop} alt="laptop" />
                                  <img src={Playstation} alt="Playstation" />
                                  <img src={GoPro} alt="gopro" />
                                  <img src={Macbook} alt="macbook" />
                                  <img src={Pc} alt="pc" />
                                  <img src={GoPro2} alt="gopro2" />
                                  <img src={Playstn} alt="playstation" />
                                  <img src={Laptop} alt="laptop" />
                                  <img src={Playstation} alt="playstation" />
                                </div>
                                <button
                                  type="submit"
                                  onClick={() => setIsDone(!isDone)}
                                >
                                  Done
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
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

            <Mylistingcard
              class="prod-status-approved"
              status="Approved"
              agreeContainer="mylisting-prod-card-agreement-container"
            />

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
              <Accessoriescardslider />
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Footer />
      </>
    );
  }

  if (window.innerWidth <= 576) {
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
              <img
                src={MobileFilter}
                alt="Mobilefilter"
                style={{ cursor: "pointer" }}
                onClick={() => setIsFilter(!isFilter)}
              />
              {isFilter && (
                <>
                  <div className="mobile-mylisting-filter-container">
                    <p>
                      <img
                        src={SmallCross}
                        alt="small cross"
                        style={{
                          width: ".75rem",
                          height: ".75rem",
                          cursor: "pointer",
                        }}
                        onClick={() => setIsFilter(!isFilter)}
                      />{" "}
                      By Price <img src={Filter} alt="filter" />{" "}
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="mylisting-btn-container">
              <button id="mylisting-learn-btn">
                <Link
                  to="/listinghome"
                  style={{ textDecoration: "none", color: "#0E9BE1" }}
                >
                  <p> Learn More</p>
                </Link>
              </button>

              <button
                id="mylisting-list-btn"
                onClick={() => setIsListing(!isListing)}
              >
                <Link
                  to="/mobilemynewlisting"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  List Items
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="mylisting-card-container">
          <div className="mylisting-card-content">
            <Mylistingcard
              class="prod-status-approval-pending"
              status="Approval Pending"
            />

            <Mylistingcard
              class="prod-status-approval-pending"
              status="Approval Pending"
            />

            <Mylistingcard
              class="prod-status-approval-pending"
              status="Approval Pending"
            />

            <Mylistingcard
              class="prod-status-approval-pending"
              status="Approval Pending"
            />

            <Mylistingcard
              class="prod-status-approval-pending"
              status="Approval Pending"
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
              <Accessoriescardslider />
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Footer />
      </>
    );
  }
  if (window.innerWidth <= 991) {
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
              <div
                className="mylisting-sorting-filter"
                style={{ cursor: "pointer" }}
                onClick={handlefilterModal}
              >
                <p>
                  Recent{" "}
                  <img
                    src={Filter}
                    alt="filter"
                    style={{ userSelect: "none" }}
                  />
                </p>
              </div>
            </div>

            <div className="mylisting-btn-container">
              <button id="mylisting-learn-btn">
                <Link
                  to="/listinghome"
                  style={{ textDecoration: "none", color: "#0E9BE1" }}
                >
                  <p> Learn More</p>
                </Link>
              </button>

              <button
                id="mylisting-list-btn"
                onClick={() => setIsListing(!isListing)}
              >
                List Items
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
                        <span>Suggestion: </span>Charger | Controller | Earpiece
                        | Body | Antenna
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
                        <p>Upload Image</p>
                      </div>
                      <div className="mylisting-prod-img-container">
                        <div className="mylisting-prod-img-upload-container">
                          <input type="file" name="" id="" />
                          <img
                            id="prod-img"
                            src={GoPro}
                            alt="gopro"
                            style={{
                              width: "5.438rem",
                              height: "5.438rem",
                              borderRadius: "6px",
                            }}
                          />
                        </div>

                        <div className="mylisting-prod-img-upload-container">
                          <input type="file" name="" id="" />
                          <img
                            id="prod-img"
                            src={UploadImg}
                            alt="uploadimg"
                            style={{
                              width: "5.438rem",
                              height: "5.438rem",
                              borderRadius: "6px",
                            }}
                          />
                        </div>

                        <div className="mylisting-prod-img-upload-container">
                          <input type="file" name="" id="" />
                          <img
                            id="prod-img"
                            src={UploadImg}
                            alt="uploadimg"
                            style={{
                              width: "5.438rem",
                              height: "5.438rem",
                              borderRadius: "6px",
                            }}
                          />
                        </div>

                        <div className="mylisting-prod-img-upload-container">
                          <input type="file" name="" id="" />
                          <img
                            id="prod-img"
                            src={UploadImg}
                            alt="uploadimg"
                            style={{
                              width: "5.438rem",
                              height: "5.438rem",
                              borderRadius: "6px",
                            }}
                          />
                        </div>
                      </div>
                      <button type="submit" onClick={() => setIsDone(!isDone)}>
                        Confirm Details
                      </button>
                      {isDone && (
                        <>
                          <div className="mylisting-congrulation-container">
                            <div className="mylisting-congrulation-content">
                              <div className="mylisting-congrulation-text-container">
                                <img
                                  src={OrderAccepted}
                                  alt="orderaccept"
                                  style={{
                                    width: "7.434rem",
                                    height: "4.063rem",
                                  }}
                                />
                                <div className="mylisting-congrulation-desc">
                                  <p id="congrulation-text">Congrulation</p>
                                  <p id="congrulation-desc">
                                    Your product has been sent on a job
                                    interview for selection. We will notify you
                                    once it has been approved.
                                  </p>
                                </div>
                              </div>

                              <div className="mylisting-suggestion-img-container">
                                <p>See around! Do you also have?</p>
                                <div className="mylisting-suggestion-img-content">
                                  <img src={Playstn} alt="playstation" />
                                  <img src={Laptop} alt="laptop" />
                                  <img src={Playstation} alt="Playstation" />
                                  <img src={GoPro} alt="gopro" />
                                  <img src={Macbook} alt="macbook" />
                                  <img src={Pc} alt="pc" />
                                  <img src={GoPro2} alt="gopro2" />
                                  <img src={Playstn} alt="playstation" />
                                  <img src={Laptop} alt="laptop" />
                                  <img src={Playstation} alt="playstation" />
                                </div>
                                <button
                                  type="submit"
                                  onClick={() => setIsDone(!isDone)}
                                >
                                  Done
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {isFilter && (
          <>
            <div className="mylisting-filters-container">
              <div className="mylisting-filters-content">
                <div className="mylisting-choose-filters">
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

        <div className="mylisting-card-container">
          <div className="mylisting-card-content">
            <Mylistingcard
              class="prod-status-approval-pending"
              status="Approval Pending"
            />

            <Mylistingcard
              class="prod-status-approved"
              status="Approved"
              agreeContainer="mylisting-prod-card-agreement-container"
            />

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
              <Accessoriescardslider />
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Footer />
      </>
    );
  } 
  if(window.innerWidth <= 1200){
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
                <div
                  className="mylisting-sorting-filter"
                  style={{ cursor: "pointer" }}
                  onClick={handlefilterModal}
                >
                  <p>
                    Recent{" "}
                    <img
                      src={Filter}
                      alt="filter"
                      style={{ userSelect: "none" }}
                    />
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
                              width: "1.5rem",
                              height: "1.5rem",
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
                          <span>Suggestion: </span>Charger | Controller | Earpiece
                          | Body | Antenna
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
                            style={{ width: "3rem", height: "3rem" }}
                          />
                        </div>
                        <button type="submit" onClick={() => setIsDone(!isDone)}>
                          Confirm Details
                        </button>
                        {isDone && (
                          <>
                            <div className="mylisting-congrulation-container">
                              <div className="mylisting-congrulation-content">
                                <div className="mylisting-congrulation-text-container">
                                  <img
                                    src={OrderAccepted}
                                    alt="orderaccept"
                                    style={{
                                      width: "7.434rem",
                                      height: "4.063rem",
                                    }}
                                  />
                                  <div className="mylisting-congrulation-desc">
                                    <p id="congrulation-text">Congrulation</p>
                                    <p id="congrulation-desc">
                                      Your product has been sent on a job
                                      interview for selection. We will notify you
                                      once it has been approved.
                                    </p>
                                  </div>
                                </div>
  
                                <div className="mylisting-suggestion-img-container">
                                  <p>See around! Do you also have?</p>
                                  <div className="mylisting-suggestion-img-content">
                                    <img src={Playstn} alt="playstation" />
                                    <img src={Laptop} alt="laptop" />
                                    <img src={Playstation} alt="Playstation" />
                                    <img src={GoPro} alt="gopro" />
                                    <img src={Macbook} alt="macbook" />
                                    <img src={Pc} alt="pc" />
                                    <img src={GoPro2} alt="gopro2" />
                                    <img src={Playstn} alt="playstation" />
                                    <img src={Laptop} alt="laptop" />
                                    <img src={Playstation} alt="playstation" />
                                  </div>
                                  <button
                                    type="submit"
                                    onClick={() => setIsDone(!isDone)}
                                  >
                                    Done
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {isFilter && (
            <>
              <div className="mylisting-filters-container">
                <div className="mylisting-filters-content">
                  <div className="mylisting-choose-filters">
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
  
          <div className="mylisting-card-container">
            <div className="mylisting-card-content">
              <Mylistingcard
                class="prod-status-approval-pending"
                status="Approval Pending"
              />
  
              <Mylistingcard
                class="prod-status-approved"
                status="Approved"
                agreeContainer="mylisting-prod-card-agreement-container"
              />
  
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
                <Accessoriescardslider />
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
              <div
                className="mylisting-sorting-filter"
                style={{ cursor: "pointer" }}
                onClick={handlefilterModal}
              >
                <p>
                  Recent{" "}
                  <img
                    src={Filter}
                    alt="filter"
                    style={{ userSelect: "none" }}
                  />
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
                        <span>Suggestion: </span>Charger | Controller | Earpiece
                        | Body | Antenna
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
                      <button type="submit" onClick={() => setIsDone(!isDone)}>
                        Confirm Details
                      </button>
                      {isDone && (
                        <>
                          <div className="mylisting-congrulation-container">
                            <div className="mylisting-congrulation-content">
                              <div className="mylisting-congrulation-text-container">
                                <img
                                  src={OrderAccepted}
                                  alt="orderaccept"
                                  style={{
                                    width: "7.434rem",
                                    height: "4.063rem",
                                  }}
                                />
                                <div className="mylisting-congrulation-desc">
                                  <p id="congrulation-text">Congrulation</p>
                                  <p id="congrulation-desc">
                                    Your product has been sent on a job
                                    interview for selection. We will notify you
                                    once it has been approved.
                                  </p>
                                </div>
                              </div>

                              <div className="mylisting-suggestion-img-container">
                                <p>See around! Do you also have?</p>
                                <div className="mylisting-suggestion-img-content">
                                  <img src={Playstn} alt="playstation" />
                                  <img src={Laptop} alt="laptop" />
                                  <img src={Playstation} alt="Playstation" />
                                  <img src={GoPro} alt="gopro" />
                                  <img src={Macbook} alt="macbook" />
                                  <img src={Pc} alt="pc" />
                                  <img src={GoPro2} alt="gopro2" />
                                  <img src={Playstn} alt="playstation" />
                                  <img src={Laptop} alt="laptop" />
                                  <img src={Playstation} alt="playstation" />
                                </div>
                                <button
                                  type="submit"
                                  onClick={() => setIsDone(!isDone)}
                                >
                                  Done
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {isFilter && (
          <>
            <div className="mylisting-filters-container">
              <div className="mylisting-filters-content">
                <div className="mylisting-choose-filters">
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

        <div className="mylisting-card-container">
          <div className="mylisting-card-content">
            <Mylistingcard
              class="prod-status-approval-pending"
              status="Approval Pending"
            />

            <Mylistingcard
              class="prod-status-approved"
              status="Approved"
              agreeContainer="mylisting-prod-card-agreement-container"
            />

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
              <Accessoriescardslider />
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Footer />
      </>
    );
  }
};

export default Mylisting;
