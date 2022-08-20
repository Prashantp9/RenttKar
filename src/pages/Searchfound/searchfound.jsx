import React, {useState} from 'react'
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import './searchfound.css'
import { Navbar,Productcard, Sliderproductcard,Scrollerbutton, Contactbutton, Footer, Mobileproductcard} from '../../components'
import { Link } from 'react-router-dom'

import {Left, Right, ExcludeLeft, ExcludeRight,MobileFilterCloseBtn, Learn, Playstation, Pc, Playstn, Laptop, RightArrow, Console, Music, Apple, Camera, Computers, Entertainment, Boxes, Sort, Filter, MobileFilter} from '../../assets'




const ProductCard = () => {
  if(window.innerWidth < 500){
    return(
      <>
        <Mobileproductcard 
          imgSrc={Playstation}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />
        
        <Mobileproductcard 
          imgSrc={Pc}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />

        <Mobileproductcard 
          imgSrc={Laptop}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />
        
        <Mobileproductcard 
          imgSrc={Playstn}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />
        
        <Mobileproductcard 
          imgSrc={Pc}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />
        
        <Mobileproductcard 
          imgSrc={Laptop}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />
        
        <Mobileproductcard 
          imgSrc={Playstation}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />
        
        <Mobileproductcard 
          imgSrc={Playstn}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />

        <Mobileproductcard 
          imgSrc={Pc}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />

        <Mobileproductcard 
          imgSrc={Laptop}
          productName="Lenovo i3, 4gb, 366 SSD asdax dasdd asd jghjd"
        />
        


      </>


      
    )
  } else {
    return(
      <>
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
      </>

    )
  }
}



const Filterproduct = () => {
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showOfferFilter, setShowOfferFilter] = useState(false);
  const [showPopularityFilter, setShowPopularityFilter] = useState(false);


  if (window.innerWidth <= 500){
    return(
      <>
        <div className="search-mobile-subcatogery-container">
        <div className="mobile-subcatogery-content">
          <div className="filter-btn" onClick={() => setShowPriceFilter(!showPriceFilter)}>
              <img src={MobileFilter} alt="mobile filter" />
          </div>
          {showPriceFilter && (
                <div className="mobile-filter-container">
                <div className="mobile-filter-content">
                    <img src={MobileFilterCloseBtn} alt="mobilefilterclosebtn" id='close-btn' onClick={() => setShowPriceFilter(!showPriceFilter)}/>
                    <div className="mobile-range-filter">
                        <div className="mobile-range-low-to-high">
                              <label>
                                <input type="radio" checked="checked" name="" id="" />
                                <span className='checkmark'></span>
                              </label>
                              <p>Low to high</p>
                        </div>
                        <div className="mobile-range-high-to-low">
                              <label>
                                <input type="radio"  name="" id="" />
                                <span className='checkmark'></span>
                              </label>
                              <p>High to low</p>
                        </div>
                    </div>
                    <div className="mobile-price-filter">
                          <div className="by-price-filtering">
                            <p style={{marginBottom:"1.2rem"}}>By Price</p>
                            <div className="by-price-filtering-content">
                              <div className="price-low-to-high">
                                <label>
                                  <input type="radio" checked="checked" name="" id="" />
                                  <span className='checkmark'></span>
                                </label>
                                <p>Low to high</p>
                              </div>
                              <div className="price-high-to-low">
                                <label>
                                  <input type="radio" name="" id="" />
                                  <span className='checkmark'></span>
                                </label>
                                <p>High to low</p>
                              </div>        
                            </div>
                                    
                                
                          </div>
                          <div className="by-offer-filtering">
                                <p style={{marginBottom:"1.2rem"}}>By Offer</p>
                            <div className="by-offer-filtering-content">
                            <div className="offer-low-to-high">
                              <label>
                                <input type="radio" checked="checked" name="" id="" />
                                <span className='checkmark'></span>
                              </label>
                              <p>Low to high</p>
                            </div>
                            <div className="offer-high-to-low">
                              <label>
                                <input type="radio"  name="" id="" />
                                <span className='checkmark'></span>
                              </label>
                              <p>High to low</p>
                            </div>
                            </div>
                          </div>
                    </div>
                </div>  
            </div>
          )}
          
        </div>
      </div>
      </>
    )
  } else{
    return (
    <>
      <div className="filter-container">
        <div className="filter-content">
            <img src={Sort} alt="sort" />
            <p id='sort'>   Sort:</p>
          <div className="filter-types">
            <div className="filter-price" style={{cursor:"pointer",userSelect:"none"}} onClick={() => setShowPriceFilter(!showPriceFilter)}>
              <p>By Price</p>
              <img src={Filter} alt="filter" />
            </div>
            <div className="filter-offer" style={{cursor:"pointer",userSelect:"none"}} onClick={() => setShowOfferFilter(!showOfferFilter)}>
              <p>By Offer</p>
              <img src={Filter} alt="filter" />
            </div>
            <div className="filter-popularity" style={{cursor:"pointer",userSelect:"none"}} onClick={() => setShowPopularityFilter(!showPopularityFilter)}>
              <p>Popularity</p>
              <img src={Filter} alt="filter" />
            </div>
          </div>
        </div>
      </div>

    {showPriceFilter && (
      <div className="price-filter-container">
        <div className="price-filter-content">
           <div className="price-filtering">
           <div className="low-to-high">
             <input type="radio" name="lowtohigh" id="ltoh" checked="checked"/>
             <label htmlFor="ltoh"> Low to high</label>
           </div>
           <div className="high-to-low">
             <input type="radio" name="hightolow" id="htol" />
             <label htmlFor="htol"> Low to high</label>
           </div>
           </div>
         </div>
        </div>
    )}

    {showOfferFilter && (
      <div className="offer-filter-container">
        <div className="offer-filter-content">
           <div className="offer-filtering">
           <div className="low-to-high">
             <input type="radio" name="lowtohigh" id="ltoh" checked="checked"/>
             <label htmlFor="ltoh"> Low to high</label>
           </div>
           <div className="high-to-low">
             <input type="radio" name="hightolow" id="htol" />
             <label htmlFor="htol"> Low to high</label>
           </div>
           </div>
         </div>
        </div>

    )}

    {showPopularityFilter && (
      <div className="popularity-filter-container">
         <div className="popularity-filter-content">
          <div className="popularity-filtering">
           <div className="low-to-high">
             <input type="radio" name="lowtohigh" id="ltoh" checked="checked"/>
             <label htmlFor="ltoh"> Low to high</label>
           </div>
           <div className="high-to-low">
             <input type="radio" name="hightolow" id="htol" />
             <label htmlFor="htol"> Low to high</label>
           </div>
           </div>
          </div>
      </div>

    )}
     
    </>
    )
  }
}




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







const Searchfound = () => {


  return (
    <>
      <Navbar />
      <div className="search-result-container">
        <div className="search-result-content">
            <p id='search-result'>Search Results <span>"PlayStation"</span></p>
            <div className="also-try">
                    <p>Also try :</p>
                    <p>Laptop </p>
                    <p>Ps4 </p>
                    <p>Piano </p>
                    <p>Guitar </p>
                    <p>Sitar </p>
            </div>
        </div>
      </div>
      <Filterproduct />

      <div className="found-result-container">
        <div className="catogery-result-content">
              <ProductCard />
        </div>
      </div>

      <Contactbutton />



      {/* suggestion card slider */}
      <div className="suggestion-card-slider-container">
        <div className="suggestion-card-slider-content">
              <Productcardslider />
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

        <Scrollerbutton class="catogeryMobileGoTopContainer"/>

        <Footer />

    </>
  )
}

export default Searchfound