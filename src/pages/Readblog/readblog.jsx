import React from "react";
import { Blogcard, Footer, Navbar, Scrollerbutton } from "../../components";
import "./readblog.css";

import { Link } from "react-router-dom";
import {
  Comment,
  DownArrow,
  RightArrow,
  Share,
  TabletBlog,
  Left,
  Right,
  ExcludeLeft,
  ExcludeRight,
  Blog1,
  Blog2,
  Blog3,
} from "../../assets";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Readblog = () => {
  const swiper = useSwiper();

  if (window.innerWidth <= 320) {
    return (
      <>
        <Navbar />
        <div className="readblog-img-container">
          <div className="readblog-img-content">
            <img src={TabletBlog} alt="tabletblog" />
          </div>
        </div>

        <div className="readblog-heading-container">
          <div className="readblog-heading-content">
            <p>Resources for creating your own reading app</p>
          </div>
        </div>

        <div className="readblog-datetime-container">
          <div className="readblog-datetime-content">
            <p>
              <span>
                By <span>Rentkar</span>
              </span>
            </p>
            <p>
              <span id="readblog-share">
                Share{" "}
                <img
                  src={Share}
                  alt="share"
                  style={{ width: "1.438rem", height: "1rem" }}
                />
              </span>
            </p>
            <p>
              <span>February 16, 2022</span>
            </p>
          </div>
        </div>

        <div className="readblog-first-para-container">
          <div className="readblog-first-para-content">
            <p id="first-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              dignissim diam metus aliquam maecenas in. Rutrum magna sapien, ac
              eu aliquam scelerisque sed. Ut nec ac nunc, sit velit vulputate
              nulla. Convallis imperdiet aliquam aliquam in. Viverra ullamcorper
              ultricies massa arcu.
            </p>

            <p id="first-para-p2">
              Auctor congue volutpat id nulla nunc tristique ullamcorper
              interdum. Bibendum pulvinar laoreet nibh ultricies quisque ut
              neque augue consectetur. Scelerisque sapien, velit egestas libero
              pulvinar nunc tempor facilisis nullam. Iaculis sit quis eget arcu
              nisi morbi ultrices ut elit. Pharetra gravida quis adipiscing
              gravida tincidunt eu aliquam enim, gravida.
            </p>
          </div>
        </div>

        <div className="readblog-second-para-container">
          <div className="readblog-second-para-content">
            <p id="second-para-heading">
              Resources for creating your own reading app
            </p>

            <p id="second-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              potenti vulputate lacus, duis tristique et ut suscipit. Lorem quam
              tristique vestibulum, mattis etiam quam lectus. Aliquet aliquam
              egestas mauris rhoncus. Faucibus adipiscing arcu sit ullamcorper
              duis libero, orci. Sodales pellentesque amet non, nulla id gravida
            </p>

            <p id="second-para-p2">
              Luctus cursus viverra tortor sagittis nisi. Metus, lorem nulla
              neque netus commodo.
            </p>
          </div>
        </div>

        <div className="readblog-third-para-container">
          <div className="readblog-third-para-content">
            <p id="third-para-heading">
              Resources for creating your own reading app
            </p>

            <p id="third-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              pulvinar ut feugiat lobortis sagittis eget. Ac vitae gravida
              placerat sapien. Faucibus fusce tincidunt magna justo ut duis.
              Blandit mollis nisi, justo, cras neque.
            </p>

            <p id="third-para-p2">
              Iaculis nunc consequat, dolor vitae, magna accumsan, nulla
              praesent fames. Lacus massa id enim, nulla elementum. Elementum,
              nisi odio natoque mauris consectetur magna amet et morbi. Luctus
              turpis arcu egestas duis.
            </p>
          </div>
        </div>

        <div className="readblog-comment-container">
          <div className="readblog-comment-content">
            <div className="readblog-comment-heading-container">
              <img src={Comment} alt="comment" />
              <p>
                Comment <span>(13)</span>
              </p>
            </div>

            <div className="readblog-comment-content-container">
              <div className="readblog-first-comment">
                <p id="comment-p1">
                  Condimentum pellentesque malesuada malesuada nullam ac.
                </p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Imperdiet dolor vel quam tincidunt.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Ultricies cursus id tristique porttitor.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Sed placerat amet elementum porta ligula.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>
              <div className="readblog-first-comment">
                <p id="comment-p1">
                  Condimentum pellentesque malesuada malesuada nullam ac.
                </p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Imperdiet dolor vel quam tincidunt.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Ultricies cursus id tristique porttitor.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Sed placerat amet elementum porta ligula.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>
            </div>

            <button>
              <img src={DownArrow} alt="downarrow" />
            </button>
          </div>
        </div>

        <div className="readblog-submit-comment-container">
          <div className="readblog-submit-comment-content">
            <input type="text" name="" id="" placeholder="Your Comment" />
            <button type="submit">Submit Comment</button>
          </div>
        </div>

        <div className="readblog-related-container">
          <div className="readblog-related-content">
            <p>Related Blog</p>
          </div>
        </div>

        <div className="readblog-related-card-container">
          <div className="readblog-related-card-content">
            <div
              className="readblog-left-button"
              onClick={() => swiper.slidePrev()}
            >
              <img
                src={Left}
                onMouseOver={(e) => (e.currentTarget.src = ExcludeLeft)}
                onMouseOut={(e) => (e.currentTarget.src = Left)}
                className="leftVector"
              />
            </div>

            <div className="readblog-card-container">
              <Swiper
                width={850}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={16}
                slidesPerGroup={3}
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: ".readblog-left-button",
                  nextEl: ".readblog-right-button",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog1}
                    heading="Resources for creating your own reading app"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog2}
                    heading="Surround yourself with nature with Rentkar"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog3}
                    heading="Turning suastainability into a great user experience"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard img={Blog1} heading="The Best Reading Apps" />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog1}
                    heading="Resources for creating your own reading app"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog2}
                    heading="Surround yourself with nature with Rentkar"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div
              className="readblog-right-button"
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

        <Scrollerbutton />

        <Footer />
      </>
    );
  }
  if (window.innerWidth <= 576) {
    return (
      <>
        <Navbar />
        <div className="readblog-img-container">
          <div className="readblog-img-content">
            <img src={TabletBlog} alt="tabletblog" />
          </div>
        </div>

        <div className="readblog-heading-container">
          <div className="readblog-heading-content">
            <p>Resources for creating your own reading app</p>
          </div>
        </div>

        <div className="readblog-datetime-container">
          <div className="readblog-datetime-content">
            <p>
              <span>
                By <span>Rentkar</span>
              </span>
            </p>
            <p>
              <span>February 16, 2022</span>
            </p>
            <p>
              <span id="readblog-share">
                Share{" "}
                <img
                  src={Share}
                  alt="share"
                  style={{ width: "1.438rem", height: "1rem" }}
                />
              </span>
            </p>
          </div>
        </div>

        <div className="readblog-first-para-container">
          <div className="readblog-first-para-content">
            <p id="first-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              dignissim diam metus aliquam maecenas in. Rutrum magna sapien, ac
              eu aliquam scelerisque sed. Ut nec ac nunc, sit velit vulputate
              nulla. Convallis imperdiet aliquam aliquam in. Viverra ullamcorper
              ultricies massa arcu.
            </p>

            <p id="first-para-p2">
              Auctor congue volutpat id nulla nunc tristique ullamcorper
              interdum. Bibendum pulvinar laoreet nibh ultricies quisque ut
              neque augue consectetur. Scelerisque sapien, velit egestas libero
              pulvinar nunc tempor facilisis nullam. Iaculis sit quis eget arcu
              nisi morbi ultrices ut elit. Pharetra gravida quis adipiscing
              gravida tincidunt eu aliquam enim, gravida.
            </p>
          </div>
        </div>

        <div className="readblog-second-para-container">
          <div className="readblog-second-para-content">
            <p id="second-para-heading">
              Resources for creating your own reading app
            </p>

            <p id="second-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              potenti vulputate lacus, duis tristique et ut suscipit. Lorem quam
              tristique vestibulum, mattis etiam quam lectus. Aliquet aliquam
              egestas mauris rhoncus. Faucibus adipiscing arcu sit ullamcorper
              duis libero, orci. Sodales pellentesque amet non, nulla id gravida
            </p>

            <p id="second-para-p2">
              Luctus cursus viverra tortor sagittis nisi. Metus, lorem nulla
              neque netus commodo.
            </p>
          </div>
        </div>

        <div className="readblog-third-para-container">
          <div className="readblog-third-para-content">
            <p id="third-para-heading">
              Resources for creating your own reading app
            </p>

            <p id="third-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              pulvinar ut feugiat lobortis sagittis eget. Ac vitae gravida
              placerat sapien. Faucibus fusce tincidunt magna justo ut duis.
              Blandit mollis nisi, justo, cras neque.
            </p>

            <p id="third-para-p2">
              Iaculis nunc consequat, dolor vitae, magna accumsan, nulla
              praesent fames. Lacus massa id enim, nulla elementum. Elementum,
              nisi odio natoque mauris consectetur magna amet et morbi. Luctus
              turpis arcu egestas duis.
            </p>
          </div>
        </div>

        <div className="readblog-comment-container">
          <div className="readblog-comment-content">
            <div className="readblog-comment-heading-container">
              <img src={Comment} alt="comment" />
              <p>
                Comment <span>(13)</span>
              </p>
            </div>

            <div className="readblog-comment-content-container">
              <div className="readblog-first-comment">
                <p id="comment-p1">
                  Condimentum pellentesque malesuada malesuada nullam ac.
                </p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Imperdiet dolor vel quam tincidunt.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Ultricies cursus id tristique porttitor.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Sed placerat amet elementum porta ligula.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>
              <div className="readblog-first-comment">
                <p id="comment-p1">
                  Condimentum pellentesque malesuada malesuada nullam ac.
                </p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Imperdiet dolor vel quam tincidunt.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Ultricies cursus id tristique porttitor.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Sed placerat amet elementum porta ligula.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>
            </div>

            <button>
              <img src={DownArrow} alt="downarrow" />
            </button>
          </div>
        </div>

        <div className="readblog-submit-comment-container">
          <div className="readblog-submit-comment-content">
            <input type="text" name="" id="" placeholder="Your Comment" />
            <button type="submit">Submit Comment</button>
          </div>
        </div>

        <div className="readblog-related-container">
          <div className="readblog-related-content">
            <p>Related Blog</p>
          </div>
        </div>

        <div className="readblog-related-card-container">
          <div className="readblog-related-card-content">
            <div
              className="readblog-left-button"
              onClick={() => swiper.slidePrev()}
            >
              <img
                src={Left}
                onMouseOver={(e) => (e.currentTarget.src = ExcludeLeft)}
                onMouseOut={(e) => (e.currentTarget.src = Left)}
                className="leftVector"
              />
            </div>

            <div className="readblog-card-container">
              <Swiper
                width={850}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={16}
                slidesPerGroup={3}
                grabCursor={true}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: ".readblog-left-button",
                  nextEl: ".readblog-right-button",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog1}
                    heading="Resources for creating your own reading app"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog2}
                    heading="Surround yourself with nature with Rentkar"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog3}
                    heading="Turning suastainability into a great user experience"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard img={Blog1} heading="The Best Reading Apps" />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog1}
                    heading="Resources for creating your own reading app"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog2}
                    heading="Surround yourself with nature with Rentkar"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div
              className="readblog-right-button"
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

        <Scrollerbutton />

        <Footer />
      </>
    );
  }
  if (window.innerWidth <= 991) {
    return (
      <>
        <Navbar />

        <div className="readblog-img-container">
          <div className="readblog-img-content">
            <img src={TabletBlog} alt="tabletblog" />
          </div>
        </div>

        <div className="readblog-heading-container">
          <div className="readblog-heading-content">
            <p>Resources for creating your own reading app</p>
          </div>
        </div>

        <div className="readblog-datetime-container">
          <div className="readblog-datetime-content">
            <p>
              <span>
                By <span>Rentkar</span>
              </span>
            </p>
            <p>
              <span>February 16, 2022</span>
            </p>
            <p>
              <span id="readblog-share">
                Share{" "}
                <img
                  src={Share}
                  alt="share"
                  style={{ width: "1.438rem", height: "1rem" }}
                />
              </span>
            </p>
          </div>
        </div>

        <div className="readblog-first-para-container">
          <div className="readblog-first-para-content">
            <p id="first-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              dignissim diam metus aliquam maecenas in. Rutrum magna sapien, ac
              eu aliquam scelerisque sed. Ut nec ac nunc, sit velit vulputate
              nulla. Convallis imperdiet aliquam aliquam in. Viverra ullamcorper
              ultricies massa arcu.
            </p>

            <p id="first-para-p2">
              Auctor congue volutpat id nulla nunc tristique ullamcorper
              interdum. Bibendum pulvinar laoreet nibh ultricies quisque ut
              neque augue consectetur. Scelerisque sapien, velit egestas libero
              pulvinar nunc tempor facilisis nullam. Iaculis sit quis eget arcu
              nisi morbi ultrices ut elit. Pharetra gravida quis adipiscing
              gravida tincidunt eu aliquam enim, gravida.
            </p>
          </div>
        </div>

        <div className="readblog-second-para-container">
          <div className="readblog-second-para-content">
            <p id="second-para-heading">
              Resources for creating your own reading app
            </p>

            <p id="second-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              potenti vulputate lacus, duis tristique et ut suscipit. Lorem quam
              tristique vestibulum, mattis etiam quam lectus. Aliquet aliquam
              egestas mauris rhoncus. Faucibus adipiscing arcu sit ullamcorper
              duis libero, orci. Sodales pellentesque amet non, nulla id gravida
            </p>

            <p id="second-para-p2">
              Luctus cursus viverra tortor sagittis nisi. Metus, lorem nulla
              neque netus commodo.
            </p>
          </div>
        </div>

        <div className="readblog-third-para-container">
          <div className="readblog-third-para-content">
            <p id="third-para-heading">
              Resources for creating your own reading app
            </p>

            <p id="third-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              pulvinar ut feugiat lobortis sagittis eget. Ac vitae gravida
              placerat sapien. Faucibus fusce tincidunt magna justo ut duis.
              Blandit mollis nisi, justo, cras neque.
            </p>

            <p id="third-para-p2">
              Iaculis nunc consequat, dolor vitae, magna accumsan, nulla
              praesent fames. Lacus massa id enim, nulla elementum. Elementum,
              nisi odio natoque mauris consectetur magna amet et morbi. Luctus
              turpis arcu egestas duis.
            </p>
          </div>
        </div>

        <div className="readblog-comment-container">
          <div className="readblog-comment-content">
            <div className="readblog-comment-heading-container">
              <img src={Comment} alt="comment" />
              <p>
                Comment <span>(13)</span>
              </p>
            </div>

            <div className="readblog-comment-content-container">
              <div className="readblog-first-comment">
                <p id="comment-p1">
                  Condimentum pellentesque malesuada malesuada nullam ac.
                </p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Imperdiet dolor vel quam tincidunt.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Ultricies cursus id tristique porttitor.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Sed placerat amet elementum porta ligula.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>
              <div className="readblog-first-comment">
                <p id="comment-p1">
                  Condimentum pellentesque malesuada malesuada nullam ac.
                </p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Imperdiet dolor vel quam tincidunt.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Ultricies cursus id tristique porttitor.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Sed placerat amet elementum porta ligula.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>
            </div>

            <button>
              <img src={DownArrow} alt="downarrow" />
            </button>
          </div>
        </div>

        <div className="readblog-submit-comment-container">
          <div className="readblog-submit-comment-content">
            <input type="text" name="" id="" placeholder="Your Comment" />
            <button type="submit">Submit Comment</button>
          </div>
        </div>

        <div className="readblog-related-container">
          <div className="readblog-related-content">
            <p>Related Blog</p>
          </div>
        </div>

        <div className="readblog-related-card-container">
          <div className="readblog-related-card-content">
            <div className="readblog-card-container">
              <Swiper
                width={870}
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
                  prevEl: ".readblog-left-button",
                  nextEl: ".readblog-right-button",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog1}
                    heading="Resources for creating your own reading app"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog2}
                    heading="Surround yourself with nature with Rentkar"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog3}
                    heading="Turning suastainability into a great user experience"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard img={Blog1} heading="The Best Reading Apps" />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog1}
                    heading="Resources for creating your own reading app"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog2}
                    heading="Surround yourself with nature with Rentkar"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="readblog-heading-link-container">
          <div className="readblog-heading-link-content">
            <p>
              <Link
                to="/blog"
                style={{
                  textDecoration: "none",
                  marginRight: "1rem",
                  color: "#DFDFDF",
                }}
              >
                Blog
              </Link>{" "}
              <img
                src={RightArrow}
                alt="right arrow"
                style={{ marginRight: "1rem" }}
              />{" "}
              Resources for creating y..
            </p>
          </div>
        </div>

        <div className="readblog-img-container">
          <div className="readblog-img-content">
            <img src={TabletBlog} alt="tabletblog" />
          </div>
        </div>

        <div className="readblog-heading-container">
          <div className="readblog-heading-content">
            <p>Resources for creating your own reading app</p>
          </div>
        </div>

        <div className="readblog-datetime-container">
          <div className="readblog-datetime-content">
            <p>
              <span>
                By <span>Rentkar</span>
              </span>
            </p>
            <p>
              <span>February 16, 2022</span>
            </p>
            <p>
              <span id="readblog-share">
                Share{" "}
                <img
                  src={Share}
                  alt="share"
                  style={{ width: "1.438rem", height: "1rem" }}
                />
              </span>
            </p>
          </div>
        </div>

        <div className="readblog-first-para-container">
          <div className="readblog-first-para-content">
            <p id="first-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              dignissim diam metus aliquam maecenas in. Rutrum magna sapien, ac
              eu aliquam scelerisque sed. Ut nec ac nunc, sit velit vulputate
              nulla. Convallis imperdiet aliquam aliquam in. Viverra ullamcorper
              ultricies massa arcu.
            </p>

            <p id="first-para-p2">
              Auctor congue volutpat id nulla nunc tristique ullamcorper
              interdum. Bibendum pulvinar laoreet nibh ultricies quisque ut
              neque augue consectetur. Scelerisque sapien, velit egestas libero
              pulvinar nunc tempor facilisis nullam. Iaculis sit quis eget arcu
              nisi morbi ultrices ut elit. Pharetra gravida quis adipiscing
              gravida tincidunt eu aliquam enim, gravida.
            </p>
          </div>
        </div>

        <div className="readblog-second-para-container">
          <div className="readblog-second-para-content">
            <p id="second-para-heading">
              Resources for creating your own reading app
            </p>

            <p id="second-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nascetur
              potenti vulputate lacus, duis tristique et ut suscipit. Lorem quam
              tristique vestibulum, mattis etiam quam lectus. Aliquet aliquam
              egestas mauris rhoncus. Faucibus adipiscing arcu sit ullamcorper
              duis libero, orci. Sodales pellentesque amet non, nulla id gravida
            </p>

            <p id="second-para-p2">
              Luctus cursus viverra tortor sagittis nisi. Metus, lorem nulla
              neque netus commodo.
            </p>
          </div>
        </div>

        <div className="readblog-third-para-container">
          <div className="readblog-third-para-content">
            <p id="third-para-heading">
              Resources for creating your own reading app
            </p>

            <p id="third-para-p1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              pulvinar ut feugiat lobortis sagittis eget. Ac vitae gravida
              placerat sapien. Faucibus fusce tincidunt magna justo ut duis.
              Blandit mollis nisi, justo, cras neque.
            </p>

            <p id="third-para-p2">
              Iaculis nunc consequat, dolor vitae, magna accumsan, nulla
              praesent fames. Lacus massa id enim, nulla elementum. Elementum,
              nisi odio natoque mauris consectetur magna amet et morbi. Luctus
              turpis arcu egestas duis.
            </p>
          </div>
        </div>

        <div className="readblog-comment-container">
          <div className="readblog-comment-content">
            <div className="readblog-comment-heading-container">
              <img src={Comment} alt="comment" />
              <p>
                Comment <span>(13)</span>
              </p>
            </div>

            <div className="readblog-comment-content-container">
              <div className="readblog-first-comment">
                <p id="comment-p1">
                  Condimentum pellentesque malesuada malesuada nullam ac.
                </p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Imperdiet dolor vel quam tincidunt.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Ultricies cursus id tristique porttitor.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Sed placerat amet elementum porta ligula.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>
              <div className="readblog-first-comment">
                <p id="comment-p1">
                  Condimentum pellentesque malesuada malesuada nullam ac.
                </p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Imperdiet dolor vel quam tincidunt.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Ultricies cursus id tristique porttitor.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>

              <div className="readblog-first-comment">
                <p id="comment-p1">Sed placerat amet elementum porta ligula.</p>
                <p id="comment-p2">- Meena Dwivedi</p>
              </div>
            </div>

            <button>
              <img src={DownArrow} alt="downarrow" />
            </button>
          </div>
        </div>

        <div className="readblog-submit-comment-container">
          <div className="readblog-submit-comment-content">
            <input type="text" name="" id="" placeholder="Your Comment" />
            <button type="submit">Submit Comment</button>
          </div>
        </div>

        <div className="readblog-related-container">
          <div className="readblog-related-content">
            <p>Related Blog</p>
          </div>
        </div>

        <div className="readblog-related-card-container">
          <div className="readblog-related-card-content">
            <div
              className="readblog-left-button"
              onClick={() => swiper.slidePrev()}
            >
              <img
                src={Left}
                onMouseOver={(e) => (e.currentTarget.src = ExcludeLeft)}
                onMouseOut={(e) => (e.currentTarget.src = Left)}
                className="leftVector"
              />
            </div>

            <div className="readblog-card-container">
              <Swiper
                width={850}
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
                  prevEl: ".readblog-left-button",
                  nextEl: ".readblog-right-button",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog1}
                    heading="Resources for creating your own reading app"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog2}
                    heading="Surround yourself with nature with Rentkar"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog3}
                    heading="Turning suastainability into a great user experience"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard img={Blog1} heading="The Best Reading Apps" />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog1}
                    heading="Resources for creating your own reading app"
                  />
                </SwiperSlide>

                <SwiperSlide className="prodCard">
                  <Blogcard
                    img={Blog2}
                    heading="Surround yourself with nature with Rentkar"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div
              className="readblog-right-button"
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

        <Footer />
      </>
    );
  }
};

export default Readblog;
