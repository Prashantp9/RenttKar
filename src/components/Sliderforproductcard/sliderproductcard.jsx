import React from 'react'
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import './sliderproductcard.css';


// components
import { Productcard } from "../../components";


// images
import { Playstation, Laptop, Playstn, Pc, Left, Right, ExcludeLeft, ExcludeRight } from '../../assets';



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
                <Productcard
                  imgSrc={Playstation}
                  name="Playstation 5"
                  day="1 day"
                  price="500/Month"
                />
              </SwiperSlide>
    
              <SwiperSlide className="prodCard" >
                <Productcard
                  imgSrc={Pc}
                  name="Playstation 5"
                  day="1 day"
                  price="500/Month"
                />
              </SwiperSlide>
    
              <SwiperSlide className="prodCard">
                <Productcard
                  imgSrc={Laptop}
                  name="Playstation 5"
                  day="1 day"
                  price="500/Month"
                />
              </SwiperSlide>
    
              <SwiperSlide className="prodCard">
                <Productcard
                  imgSrc={Playstn}
                  name="Playstation 5"
                  day="1 day"
                  price="500/Month"
                />
              </SwiperSlide>
              <SwiperSlide className="prodCard">
                <Productcard
                  imgSrc={Pc}
                  name="Playstation 5"
                  day="1 day"
                  price="500/Month"
                />
              </SwiperSlide>
              <SwiperSlide className="prodCard">
                <Productcard
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
            <Productcard
              imgSrc={Playstation}
              name="Playstation 5"
              day="1 day"
              price="500/Month"
            />
          </SwiperSlide>
  
          <SwiperSlide className="prodCard" >
            <Productcard
              imgSrc={Pc}
              name="Playstation 5"
              day="1 day"
              price="500/Month"
            />
          </SwiperSlide>
  
          <SwiperSlide className="prodCard">
            <Productcard
              imgSrc={Laptop}
              name="Playstation 5"
              day="1 day"
              price="500/Month"
            />
          </SwiperSlide>
  
          <SwiperSlide className="prodCard">
            <Productcard
              imgSrc={Playstn}
              name="Playstation 5"
              day="1 day"
              price="500/Month"
            />
          </SwiperSlide>
          <SwiperSlide className="prodCard">
            <Productcard
              imgSrc={Pc}
              name="Playstation 5"
              day="1 day"
              price="500/Month"
            />
          </SwiperSlide>
          <SwiperSlide className="prodCard">
            <Productcard
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


const Sliderproductcard = (props) => {
const swiper = useSwiper();
  return (
    <>
         {/* Trending Now section */}
        <div className="trending-text-container">
          <h1 className="trendText">{props.text}</h1>
          <div className="trendButton">
            <div className="leftButton" onClick={() => swiper.slidePrev()}>
            <img src={Left} onMouseOver={e => (e.currentTarget.src = ExcludeLeft)} onMouseOut={e => (e.currentTarget.src = Left)}  className="leftVector" />
            </div>
            <div className="rightButton" onClick={() => swiper.slideNext()}>
            <img src={Right} onMouseOver={e => (e.currentTarget.src = ExcludeRight)} onMouseOut={e => (e.currentTarget.src = Right)}  className="rightVector" />
            </div>
          </div>
        </div>
        <div className="card-container">
             <ProductCard />
        </div>

    </>
  )
}

export default Sliderproductcard