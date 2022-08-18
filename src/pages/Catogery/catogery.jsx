import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import './catogery.css'
import { Navbar, Catogerycard,Productcard, Sliderproductcard, Footer} from '../../components'
import { Link } from 'react-router-dom'

import {GoTop, UpArrow, Learn, Playstation, Pc, Playstn, Laptop, RightArrow, Console, Music, Apple, Camera, Computers, Entertainment, Boxes, Sort, Filter} from '../../assets'



const Catogeriespagecard = () => {
  if(window.innerWidth < 769){
    return(
      <div className="catogery-card-container">
      <div className="catogery-card-content">
          <Swiper
          width={700}
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={true}
          slidesPerGroup={3}
          grabCursor={true}
          loop={true}
          loopFillGroupWithBlank={false}
      >
      <SwiperSlide style={{maxWidth:"7.25rem", maxHeight: "7.25rem"}}>
        <Catogerycard
          imgSrc = {Console}
          className="catImg"
          name = "Gaming"
        />
      </SwiperSlide>

      {/* 2 */}
      <SwiperSlide style={{maxWidth:"7.25rem", maxHeight: "7.25rem"}}>
      <Catogerycard
          imgSrc = {Music}
          className="catImg"
          name = "Music"
        />
      </SwiperSlide>

      {/* 3 */}
      <SwiperSlide style={{maxWidth:"7.25rem", maxHeight: "7.25rem"}}>
      <Catogerycard
          imgSrc = {Camera}
          className="catImg"
          name = "Camera"
        />
      </SwiperSlide>

      {/* 4 */}
      <SwiperSlide style={{maxWidth:"7.25rem", maxHeight: "7.25rem"}}>
      <Catogerycard
          imgSrc = {Apple}
          className="catImg"
          name = "Apple"
        />
      </SwiperSlide>

      {/* 5 */}
      <SwiperSlide style={{maxWidth:"7.25rem", maxHeight: "7.25rem"}}>
      <Catogerycard
          imgSrc = {Entertainment}
          className="catImg"
          name = "Entertainment"
        />
      </SwiperSlide>

      {/* 6 */}
      <SwiperSlide style={{maxWidth:"7.25rem", maxHeight: "7.25rem"}}>
      <Catogerycard
          imgSrc = {Computers}
          className="catImg"
          name = "Computers"
        />
      </SwiperSlide>

      {/* 7 */}
      <SwiperSlide style={{maxWidth:"7.25rem", maxHeight: "7.25rem"}}>
      <Catogerycard
          imgSrc = {Boxes}
          className="catImg"
          name = "Boxes"
        />
      </SwiperSlide>
    </Swiper>
    </div>
    </div>
    )
} else {
    return(
      <div className="catogery-card-container">
      <div className="catogery-card-content">
      {/* 1 */}
      <Catogerycard
          imgSrc = {Console}
          className="catImg"
          name = "Gaming"
        />

      {/* 2 */}
      <Catogerycard
          imgSrc = {Music}
          className="catImg"
          name = "Music"
        />

      {/* 3 */}
      <Catogerycard
          imgSrc = {Camera}
          className="catImg"
          name = "Camera"
        />

      {/* 4 */}
      <Catogerycard
          imgSrc = {Apple}
          className="catImg"
          name = "Apple"
        />

      {/* 5 */}
      <Catogerycard
          imgSrc = {Entertainment}
          className="catImg"
          name = "Entetainment"
        />

      {/* 6 */}
      <Catogerycard
          imgSrc = {Computers}
          className="catImg"
          name = "Computers"
        />

       {/* 7 */}
       <Catogerycard
          imgSrc = {Boxes}
          className="catImg"
          name = "Boxes"
        />
      </div>
    </div>

    )
}
}





const Subcatogery = () => {
  if(window.innerWidth < 769){
    return(
      <div className="subcatogery-container">
        <div className="subcatogery-content">
        <Swiper
          width={800}
          slidesPerView={5}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerGroup={3}
          grabCursor={true}
          loop={true}
          loopFillGroupWithBlank={false}
        >
        <SwiperSlide>
          <div className="subcatogery-links">
            <a href="">PlayStation & More</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="subcatogery-links">
            <a href="">Laptops</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="subcatogery-links">
            <a href="">Displays</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="subcatogery-links">
            <a href="">Games</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="subcatogery-links">
            <a href="">Accessories</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="subcatogery-links">
            <a href="">Phones</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="subcatogery-links">
            <a href="">Furniture</a>
          </div>
        </SwiperSlide>
        </Swiper> 
        </div>
      </div>
    )
  } else {
    return(
    <div className="subcatogery-container">
      <div className="subcatogery-content">
            <div className="subcatogery-links">
                <a href="">PlayStation & More</a>
            </div>
            
            <div className="subcatogery-links">
                <a href="">Laptops</a>
            </div>
            
            <div className="subcatogery-links">
                <a href="">Displays</a>
            </div>
            
            <div className="subcatogery-links">
                <a href="">Games</a>
            </div>

            <div className="subcatogery-links">
                <a href="">Accessories</a>
            </div>

            <div className="subcatogery-links">
                <a href="">Phones</a>
            </div>

            <div className="subcatogery-links end">
                <a href="">Furniture</a>
            </div>    
      </div>
    </div>
    )
  }
}







const Catogery = () => {

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
      <div className="catogery-navigation-container">
        <div className='catogery-navigation-content'>
          <p><Link to="/" >Homepage</Link>  <img src={RightArrow} alt="rigthArrow" style={{marginLeft:"0.594rem", marginRight:"0.594rem"}}/> <Link to="/catogeries">Catogeries</Link> </p>
        </div>
      </div>

      <Catogeriespagecard />
      <Subcatogery />

      <div className="filter-container">
        <div className="filter-content">
            <img src={Sort} alt="sort" />
            <p id='sort'>   Sort:</p>
          <div className="filter-types">
            <div className="filter-price">
              <p>By Price</p>
              <img src={Filter} alt="filter" />
            </div>
            <div className="filter-offer">
              <p>By Offer</p>
              <img src={Filter} alt="filter" />
            </div>
            <div className="filter-popularity">
              <p>Popularity</p>
              <img src={Filter} alt="filter" />
            </div>
          </div>
        </div>
      </div>
      <div className="price-filter-container">
        <div className="price-filter-content">
          <div className="price-filtering">
          <div className="low-to-high">
            <input type="radio" name="lowtohigh" id="ltoh" />
            <label htmlFor="ltoh"> Low to high</label>
          </div>
          <div className="high-to-low">
            <input type="radio" name="hightolow" id="htol" />
            <label htmlFor="htol"> Low to high</label>
          </div>
          </div>
        </div>
      </div>


      <div className="catogery-result-container">
        <div className="catogery-result-content">

              <Productcard
                imgSrc={Playstation}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />

              <Productcard
                imgSrc={Pc}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />

              <Productcard
                imgSrc={Laptop}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />

              <Productcard
                imgSrc={Playstn}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />


              <Productcard
                imgSrc={Pc}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />

              <Productcard
                imgSrc={Playstn}
                name="Playstation 5"
                day="1 day"
                price="500/Month"
              />

        </div>
      </div>



      {/* suggestion card slider */}
      <div className="suggestion-card-slider-container">
        <div className="suggestion-card-slider-content">
            <Sliderproductcard text="Suggestion"/>
        </div>
      </div>


      
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


        <div className="mobileGoTopContainer">
        <div className="mobileGoTopContent" onClick={goToTop}>
          <img src={GoTop} alt="goTop" className="goTop" />
          <img src={UpArrow} alt="upArrow" className="upArrow" />
        </div>
      </div>

        <Footer />

    </>
  )
}

export default Catogery