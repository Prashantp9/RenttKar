import React from 'react'
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import './searchnotfound.css'
import { Navbar,Sliderproductcard,Scrollerbutton, Contactbutton, Footer, Mobileproductcard} from '../../components'

import {Left, Right, ExcludeLeft, ExcludeRight, Learn, Playstation, Pc, Playstn, Laptop} from '../../assets'





const Productcardslider = () => {
  const swiper = useSwiper();
  if (window.innerWidth <= 500){
    return(
      <>
        <div className="suggestion-text-container">
          <h1 className="suggestion-text">Suggestion</h1>
        </div>
        <div className="suggestion-card-container">
        <Swiper
          width={500}
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
            prevEl: ".suggestion-left-button",
            nextEl: ".suggestion-right-button",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Mobileproductcard 
              imgSrc={Playstation}
              productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
            />
          </SwiperSlide>
  
          <SwiperSlide >
            <Mobileproductcard 
              imgSrc={Pc}
              productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
            />
          </SwiperSlide>
  
          <SwiperSlide>
            <Mobileproductcard 
              imgSrc={Laptop}
              productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
            />
          </SwiperSlide>
  
          <SwiperSlide>
            <Mobileproductcard 
              imgSrc={Playstn}
              productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Mobileproductcard 
              imgSrc={Pc}
              productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Mobileproductcard 
              imgSrc={Laptop}
              productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Mobileproductcard 
              imgSrc={Playstn}
              productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Mobileproductcard 
              imgSrc={Pc}
              productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
            />            
          </SwiperSlide>

          </Swiper>
        </div>
        <div className="suggestion-button.container" style={{display:"flex", justifyContent:"center",alignItems:"center", width:"100%",marginTop:"1rem", marginBottom:"2.5rem"}}>
            <div className="suggestion-left-button" style={{marginRight:"2rem", cursor:"pointer"}} onClick={() => swiper.slidePrev()}>
              <img src={Left} onMouseOver={e => (e.currentTarget.src = ExcludeLeft)} onMouseOut={e => (e.currentTarget.src = Left)}  className="suggestion-left-vector" alt=''/>
            </div>
            <div className="suggestion-right-button" style={{cursor:"pointer"}} onClick={() => swiper.slideNext()}>
              <img src={Right} onMouseOver={e => (e.currentTarget.src = ExcludeRight)} onMouseOut={e => (e.currentTarget.src = Right)}  className="suggestion-right-vector" alt=''/>
            </div>
        </div>
      </>
    )
  } else {
    return(
      <>
          <Sliderproductcard text="Suggestion"/>
      </>
    )
  }
}







const Searchnotfound = () => {


  return (
    <>
      <Navbar />
      <div className="search-result-container">
        <div className="search-result-content">
            <p id='search-result'>No Match Found For <span>"Havells"</span></p>
            <div className="also-try">
                    <p>Try :</p>
                    <p id='also-try-p'>Laptop </p>
                    <p id='also-try-p'>Ps4 </p>
                    <p id='also-try-p'>Piano </p>
                    <p id='also-try-p'>Guitar </p>
                    <p id='also-try-p'>Sitar </p>
            </div>
        </div>
      </div>

      <Contactbutton />


      <div className="suggest-item-container">
          <div className="suggest-item-content">
              <img src={Learn} alt="" />
              <p>Didn't find what you are looking for? Let us know!</p>
              <div className="submit-suggestion">
                  <input type="text" name="suggestion" id=""  placeholder='Suggest Items'/>
                  <button type="submit">Submit Suggestion</button>
              </div>
          </div>
        </div>



      {/* suggestion card slider */}
      <div className="suggestion-card-slider-container">
        <div className="suggestion-card-slider-content">
              <Productcardslider />
        </div>
      </div>


        <Scrollerbutton class="mobileGoTopContainer"/>

        <Footer />

    </>
  )
}

export default Searchnotfound