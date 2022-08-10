import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./home.css";  

// components
import { Navbar, Footer, Card } from "../../components";

// images
import {Console, HeaderImg, ExcludeLeft, ExcludeRight, Left, Right, Playstation, Pc, Playstn, Laptop, Artwork, BigEllipse,  Union,  Delivery, Deposit, Light,  Esport,  Times,  Tech,  Lbb,  Learn,  Aadil,  Renuka,  Ammy,  Music,  Camera,  Apple,  Computers,  Show,  Head,  Scroll,UpArrow,GoTop} from "../../assets";



const CatogeriesCard = () =>{
  if(window.innerWidth > 500 && window.innerWidth < 769){
    return(
      <div className="catogeriesContainer">
      <div className="catogeriesContent">
      <Swiper
          width={700}
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerGroup={2}
          grabCursor={true}
          loop={true}
          loopFillGroupWithBlank={false}
      >
      <SwiperSlide style={{maxWidth:"8rem", maxHeight: "8rem"}}>
      <div className="catogeryCard">
        <img src={Console} className="catImg" alt="Console" />
        <p className="catText">Gaming</p>
      </div>
      </SwiperSlide>

      {/* 2 */}
      <SwiperSlide style={{maxWidth:"8rem", maxHeight: "8rem"}}>
      <div className="catogeryCard">
        <img src={Camera} className="catImg" alt="Console" />
        <p className="catText">Camera</p>
      </div>
      </SwiperSlide>

      {/* 3 */}
      <SwiperSlide style={{maxWidth:"8rem", maxHeight: "8rem"}}>
      <div className="catogeryCard" >
        <img src={Computers} className="catImg" alt="Console" />
        <p className="catText">Computers</p>
      </div>
      </SwiperSlide>

      {/* 4 */}
      <SwiperSlide style={{maxWidth:"8rem", maxHeight: "8rem"}}>
      <div className="catogeryCard Apple">
        <img src={Apple} className="catImg apple" alt="Console"/>
        <p className="catText">Apple</p>
      </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
    )
  } else{
    return(
      <div className="catogeriesContainer">
      <div className="catogeriesContent">
      {/* 1 */}
      <div className="catogeryCard">
        <img src={Console} className="catImg" alt="Console" />
        <p className="catText">Gaming</p>
      </div>

      {/* 2 */}
      <div className="catogeryCard">
        <img src={Music} className="catImg" alt="Console" />
        <p className="catText">Music</p>
      </div>

      {/* 3 */}
      <div className="catogeryCard">
        <img src={Camera} className="catImg" alt="Console" />
        <p className="catText">Camera</p>
      </div>

      {/* 4 */}
      <div className="catogeryCard Apple">
        <img src={Apple} className="catImg apple" alt="Console"/>
        <p className="catText">Apple</p>
      </div>

      {/* 5 */}
      <div className="catogeryCard" >
        <img src={Computers} className="catImg" alt="Console" />
        <p className="catText">Computers</p>
      </div>

      {/* 6 */}
      <div className="catogeryCard showCard" >
        <img src={Show} className="catImg showImg" alt="Console" />
        <p className="showText">ShowAll</p>
      </div>
      </div>
    </div>
    )
  }
}



const ProductCard = () =>{
  if(window.innerWidth < 500){
          return(
            <Swiper
            width={800}
            slidesPerView={3}
            centeredSlides={false}
            slidesPerGroup={2}
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
            <SwiperSlide className="prodCard">
              <Card
                imgSrc={Playstation}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />
            </SwiperSlide>
  
            <SwiperSlide className="prodCard" >
              <Card
                imgSrc={Pc}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />
            </SwiperSlide>
  
            <SwiperSlide className="prodCard">
              <Card
                imgSrc={Laptop}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />
            </SwiperSlide>
  
            <SwiperSlide className="prodCard">
              <Card
                imgSrc={Playstn}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />
            </SwiperSlide>
            <SwiperSlide className="prodCard">
              <Card
                imgSrc={Pc}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />
            </SwiperSlide>
            <SwiperSlide className="prodCard">
              <Card
                imgSrc={Playstn}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />
            </SwiperSlide>
            </Swiper>
          )
  }else{
      return(
        <Swiper
        width={900}
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
        <SwiperSlide className="prodCard">
          <Card
            imgSrc={Playstation}
            name="Playstation 5"
            day="1 day"
            price="500/Month"
          />
        </SwiperSlide>

        <SwiperSlide className="prodCard" >
          <Card
            imgSrc={Pc}
            name="Playstation 5"
            day="1 day"
            price="500/Month"
          />
        </SwiperSlide>

        <SwiperSlide className="prodCard">
          <Card
            imgSrc={Laptop}
            name="Playstation 5"
            day="1 day"
            price="500/Month"
          />
        </SwiperSlide>

        <SwiperSlide className="prodCard">
          <Card
            imgSrc={Playstn}
            name="Playstation 5"
            day="1 day"
            price="500/Month"
          />
        </SwiperSlide>
        <SwiperSlide className="prodCard">
          <Card
            imgSrc={Pc}
            name="Playstation 5"
            day="1 day"
            price="500/Month"
          />
        </SwiperSlide>
        <SwiperSlide className="prodCard">
          <Card
            imgSrc={Playstn}
            name="Playstation 5"
            day="1 day"
            price="500/Month"
          />
        </SwiperSlide>
        </Swiper>
      )
  }
}


const Home = () => {

  const swiper = useSwiper();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  



  return (
    <>
      <Navbar />

      {/* header section  */}
      <div className="headerContainer">
        <div className="headerContent">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators" style={{ marginTop: "70%" }}>
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
                  style={{ borderRadius: "15px" }}
                  src={HeaderImg}
                  className="d-block w-100 headerImg"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ borderRadius: "15px" }}
                  src={HeaderImg}
                  className="d-block w-100 headerImg"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ borderRadius: "15px" }}
                  src={HeaderImg}
                  className="d-block w-100 headerImg"
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

      {/* 
      catogeries section 
      1 */}

      <div className="catogeryHeading">
        <p>Select From Category </p>
      </div>
      <CatogeriesCard />

      {/* head & Scroll Button */}

      {showTopBtn && (
        <div className="reScroll" onClick={goToTop}>
          <img src={Scroll} alt="" className="scrollImg" />
        </div>
      )}

      <div className="headPhone">
        <img src={Head} alt="" className="headImg" />
      </div>

      {/* Trending Now section */}
      <div className="trendingContainer">
        <div className="trendingContent">
          <h1 className="trendText">Trending Now!</h1>
          <div className="trendButton">
            <div className="leftButton" onClick={() => swiper.slidePrev()}>
            <img src={Left} onMouseOver={e => (e.currentTarget.src = ExcludeLeft)} onMouseOut={e => (e.currentTarget.src = Left)}  className="leftVector" />
            </div>
            <div className="rightButton" onClick={() => swiper.slideNext()}>
            <img src={Right} onMouseOver={e => (e.currentTarget.src = ExcludeRight)} onMouseOut={e => (e.currentTarget.src = Right)}  className="rightVector" />
            </div>
          </div>
        </div>
      </div>

      <div className="cardContainer">
        <div className="cardContainerContent">
          <ProductCard />
        </div>
      </div>

      {/* Working */}
      <div className="explainedContainer">
        <div className="explainedContent">
          <h1 className="heading1">How Renting Works</h1>
          <p className="details1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, risus
            aenean lectus at amet,{" "}
          </p>
          <img src={Artwork} alt="" className="artwork" />
        </div>
      </div>

      {/* company features */}
      <div className="companyFeaturesContainer">
        <div className="companyFeaturesContent">
          <div className="featuresHeadingContainer">
            <h1 className="heading2">There's More To Us</h1>
            <p className="details2">
              It's not simply a rental but a mission of exceptional service,
              quality, and variety we bring to you. Keep upgrading, exploring,
              and saving!
            </p>
          </div>

          <div className="qualityContainer">
            <div className="qualityContent">
              <img src={BigEllipse} alt="Ellipse" className="ellipse3" />
              <img src={Union} alt="union" className="deposit" />
              <h1 className="qualityHeading">Quality Products</h1>
              <p className="qualityDetails">
                It's our habit to send each product through a 7-point
                inspection.
              </p>
            </div>

            <div className="qualityContent">
              <img src={BigEllipse} alt="Ellipse" className="ellipse2" />
              <img src={Delivery} alt="union" className="delivery" />
              <h1 className="qualityHeading">Instant Delivery</h1>
              <p className="qualityDetails">
                Products delivered within 2-4 hours.{" "}
              </p>
            </div>

            <div className="qualityContent">
              <img src={BigEllipse} alt="Ellipse" className="ellipse3" />
              <img src={Deposit} alt="union" className="deposit" />
              <h1 className="qualityHeading">Zero Deposit</h1>
              <p className="qualityDetails">
                Experience the new world of renting without a fee.
              </p>
            </div>

            <div className="qualityContent liveLighter">
              <img src={BigEllipse} alt="Ellipse" className="ellipse4" />
              <img src={Light} alt="union" className="light" />
              <h1 className="qualityHeading">Live Light</h1>
              <p className="qualityDetails">
                Naked we came on Earth, Naked we need to go!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* featured container */}
      <div className="featuredContainer">
        <h1 className="featuredHeading">Featured On</h1>
        <div className="featuredContent">
          <img src={Esport} alt="" className="esport" />
          <img src={Times} alt="" className="times" />
          <img src={Tech} alt="" className="tech" />
          <img src={Lbb} alt="" className="lbb" />
        </div>
      </div>

      {/* Part section */}
      <div className="ecosystemContainer">
        <div className="ecosystemContent">
          <div className="blogPart">
            <h1 className="ecoHeading">Be a Part of Our Ecosystem</h1>
            <p className="blogHeading">
              "It takes both sides to build a bridge"
            </p>
            <p className="blogDetails">
              Join our community of lenders sharing their products all around
              the city. We help you with delivery, pick up and total security of
              your products
            </p>

            <div className="buttonPart">
              <button className="learnMore">
                <span className="learnText">Share Your Product</span>
              </button>
              <button className="listItemm">
                <div className="buttonContentt" style={{ background: "#070707" }}>
                  <span className="listTextt">Learn More</span>
                </div>
              </button>
            </div>
          </div>

          <div className="imagePart">
            <img src={Learn} alt="" className="learnArt" />
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

      <div className="mobileGoTopContainer">
        <div className="mobileGoTopContent" onClick={goToTop}>
          <img src={GoTop} alt="goTop" className="goTop" />
          <img src={UpArrow} alt="upArrow" className="upArrow" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
