import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import './catogery.css'
import { Navbar, Catogerycard } from '../../components'
import { Link } from 'react-router-dom'

import { RightArrow, Console, Music, Apple, Camera, Computers, Entertainment, Boxes, Sort, Filter} from '../../assets'


const Catogeriespagecard = () => {
  if(window.innerWidth < 769){
    return(
      <div className="catogery-card-container">
      <div className="catogery-card-content">
          <Swiper
          width={700}
          slidesPerView={4}
          spaceBetween={25}
          centeredSlides={true}
          slidesPerGroup={2}
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
          width={700}
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          slidesPerGroup={2}
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
    </>
  )
}

export default Catogery