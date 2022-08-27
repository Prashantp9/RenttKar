import React from 'react'
import './mobileredeemcoupon.css'

// images
import { AddonsSearch, Gradientcouppon, SmallCross } from '../../assets'
import { Link } from 'react-router-dom'

const Mobileredeemcoupon = () => {
  return (
    <>
        <div className="mobile-redeemcoupon-heading-container">
          <div className="mobile-redeemcoupon-heading-content">
              <p><img src={Gradientcouppon} alt="couppon" style={{marginRight:"2px"}}/> Coupons</p>
              <Link to="/productdetails">
                <img src={SmallCross} alt="cross"/>
              </Link>
          </div>
        </div>

        <div className="mobile-redeemcode-search-container">
          <div className="mobile-redeemcode-search-content">
              <input type="search" name="" id=""  placeholder='Search coupon'/>
              <img src={AddonsSearch} alt="search" style={{width:"1.3rem", height:"1.3rem"}}/>
          </div>
        </div>

        <div className="mobile-main-redeemcode-container">
          <div className="mobile-main-redeemcode-content">
                <div className="mobile-redeemcode-card">
                  <h3 className="mobile-redeemcode-card-heading">Welcome Coupon</h3>
                  <p className="mobile-redeemcode-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button type="submit" className="mobile-redeemcode-card-btn">Redeem</button>
                </div>

                <div className="mobile-redeemcode-card">
                  <h3 className="mobile-redeemcode-card-heading">Welcome Coupon</h3>
                  <p className="mobile-redeemcode-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button type="submit" className="mobile-redeemcode-card-btn">Redeem</button>
                </div>


                <div className="mobile-redeemcode-card">
                  <h3 className="mobile-redeemcode-card-heading">Welcome Coupon</h3>
                  <p className="mobile-redeemcode-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button type="submit" className="mobile-redeemcode-card-btn">Redeem</button>
                </div>


                <div className="mobile-redeemcode-card">
                  <h3 className="mobile-redeemcode-card-heading">Welcome Coupon</h3>
                  <p className="mobile-redeemcode-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button type="submit" className="mobile-redeemcode-card-btn">Redeem</button>
                </div>


                <div className="mobile-redeemcode-card">
                  <h3 className="mobile-redeemcode-card-heading">Welcome Coupon</h3>
                  <p className="mobile-redeemcode-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button type="submit" className="mobile-redeemcode-card-btn">Redeem</button>
                </div>


                <div className="mobile-redeemcode-card">
                  <h3 className="mobile-redeemcode-card-heading">Welcome Coupon</h3>
                  <p className="mobile-redeemcode-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button type="submit" className="mobile-redeemcode-card-btn">Redeem</button>
                </div>
          </div>
        </div>
    </>
  )
}

export default Mobileredeemcoupon