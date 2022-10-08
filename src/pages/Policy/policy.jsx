import React from "react";
import "./policy.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
} from "../../components";
import { Privacy } from "../../assets";

const Policy = () => {
  if (window.innerWidth <= 576) {
    return (
      <>
        <Navbar />
        <div className="privacy-header-container">
          <div className="privacy-header-content">
            <p>
              <img
                src={Privacy}
                alt="privacy"
                style={{
                  width: "1.25rem",
                  height: "1.5rem",
                  marginRight: "1.5rem",
                }}
              />{" "}
              Privacy & Policy
            </p>
          </div>
        </div>

        <div className="privacy-subheading-container">
          <div className="privacy-subheading-content">
            <Swiper
              width={500}
              slidesPerView={3}
              spaceBetween={20}
              centeredSlides={false}
              slidesPerGroup={3}
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
            >
              <SwiperSlide>
                <p id="privacy-subheading">lorem1</p>
              </SwiperSlide>

              <SwiperSlide>
                <p id="privacy-subheading">Ipsum1</p>
              </SwiperSlide>

              <SwiperSlide>
                <p id="privacy-subheading">contract1</p>
              </SwiperSlide>

              <SwiperSlide>
                <p id="privacy-subheading">respendit2</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="privacy-desc-container">
          <div className="privacy-desc-content">
            <p id="privacy-heading">
              Resources for creating your own reading app
            </p>

            <p id="privacy-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              potenti vulputate lacus, duis tristique et ut suscipit. Lorem quam
              tristique vestibulum, mattis etiam quam lectus. Aliquet aliquam
              egestas mauris rhoncus. Faucibus adipiscing arcu sit ullamcorper
              duis libero, orci. Sodales pellentesque amet non, nulla id gravida
            </p>

            <p id="privacy-desc">
              Luctus cursus viverra tortor sagittis nisi. Metus, lorem nulla
              neque netus commodo.
            </p>

            <p id="privacy-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              potenti vulputate lacus, duis tristique et ut suscipit. Lorem quam
              tristique vestibulum, mattis etiam quam lectus. Aliquet aliquam
              egestas mauris rhoncus. Faucibus adipiscing arcu sit ullamcorper
              duis libero, orci. Sodales pellentesque amet non, nulla id gravida
            </p>

            <p id="privacy-desc">
              Luctus cursus viverra tortor sagittis nisi. Metus, lorem nulla
              neque netus commodo.
            </p>
          </div>
        </div>

        <Contactbutton />

        <Scrollerbutton />

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="privacy-header-container">
          <div className="privacy-header-content">
            <p>
              <img
                src={Privacy}
                alt="privacy"
                style={{ marginRight: "1.5rem" }}
              />{" "}
              Privacy & Policy
            </p>
          </div>
        </div>

        <div className="privacy-subheading-container">
          <div className="privacy-subheading-content">
            <p>lorem1</p>
            <p>Ipsum1</p>
            <p>contract1</p>
            <p style={{ border: "none" }}>respendit2</p>
          </div>
        </div>

        <div className="privacy-desc-container">
          <div className="privacy-desc-content">
            <p id="privacy-heading">
              Resources for creating your own reading app
            </p>

            <p id="privacy-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              dignissim diam metus aliquam maecenas in. Rutrum magna sapien, ac
              eu aliquam scelerisque sed. Ut nec ac nunc, sit velit vulputate
              nulla. Convallis imperdiet aliquam aliquam in. Viverra ullamcorper
              ultricies massa arcu.{" "}
            </p>

            <p id="privacy-desc">
              Auctor congue volutpat id nulla nunc tristique ullamcorper
              interdum. Bibendum pulvinar laoreet nibh ultricies quisque ut
              neque augue consectetur. Scelerisque sapien, velit egestas libero
              pulvinar nunc tempor facilisis nullam. Iaculis sit quis eget arcu
              nisi morbi ultrices ut elit. Pharetra gravida quis adipiscing
              gravida tincidunt eu aliquam enim, gravida.
            </p>

            <p id="privacy-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              dignissim diam metus aliquam maecenas in. Rutrum magna sapien, ac
              eu aliquam scelerisque sed. Ut nec ac nunc, sit velit vulputate
              nulla. Convallis imperdiet aliquam aliquam in. Viverra ullamcorper
              ultricies massa arcu.
            </p>

            <p id="privacy-desc">
              Auctor congue volutpat id nulla nunc tristique ullamcorper
              interdum. Bibendum pulvinar laoreet nibh ultricies quisque ut
              neque augue consectetur. Scelerisque sapien, velit egestas libero
              pulvinar nunc tempor facilisis nullam. Iaculis sit quis eget arcu
              nisi morbi ultrices ut elit. Pharetra gravida quis adipiscing
              gravida tincidunt eu aliquam enim, gravida.{" "}
            </p>
          </div>
        </div>

        <Contactbutton />

        <Scrollerbutton />

        <Footer />
      </>
    );
  }
};

export default Policy;
