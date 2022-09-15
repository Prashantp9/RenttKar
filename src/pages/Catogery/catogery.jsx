import React, {useState} from 'react'
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import './catogery.css'
import { Navbar, Catogerycard,Productcard, Sliderproductcard,Scrollerbutton, Contactbutton, Footer, Mobileproductcard} from '../../components'
import { Link } from 'react-router-dom'

import {Left, Right, ExcludeLeft, ExcludeRight,MobileFilterCloseBtn, Learn, Playstation, Pc, Playstn, Laptop, RightArrow, Console, Music, Apple, Camera, Computers, Entertainment, Boxes, Sort, Filter, MobileFilter} from '../../assets'



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
                <a href="" className='subcatogery-links-gradient'>PlayStation & More</a>
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
        <div className="mobile-subcatogery-container">
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
          

        <div className="mobile-subcatogery">
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
          <div className="mobile-subcatogery-links">
            <a href="">PlayStation & More</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mobile-subcatogery-links">
            <a href="">Laptops</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mobile-subcatogery-links">
            <a href="">Displays</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mobile-subcatogery-links">
            <a href="">Games</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mobile-subcatogery-links">
            <a href="">Accessories</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mobile-subcatogery-links">
            <a href="">Phones</a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mobile-subcatogery-links">
            <a href="">Furniture</a>
          </div>
        </SwiperSlide>
        </Swiper>     
        </div>
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
      <Filterproduct />

      <div className="catogery-result-container">
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

export default Catogery