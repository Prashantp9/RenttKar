import React from 'react'
import './deliveryaddress.css'

import { Navbar } from '../../components'
import { Delete, Edit, MobilePriceinfo, Note, Pc, PickupLocation, PriceInfo, RightNavigation, ShowinMap, TabletDelete, TabletEdit, TabletStep1, TabletStep1gradient, TabletStep2, TabletStep3 } from '../../assets'

const Deliveryaddress = () => {
    if(window.innerWidth <= 500){
      return(
        <>
          <Navbar />
          <div className="delivery-mobile-product-name">
            <div className="delivery-mobile-product-name-content">
            <div className="delivery-mobile-product-img">
                <img src={Pc} alt="pc" />
            </div>
  
            <div className="delivery-mobile-product-desc">
              <p>MSI Gaming Laptop, 16gb ram, 2.5 gigahertz..</p>
            </div>
            </div>
          </div>

          <div className="delivery-mobile-subscription-price">
            <div className="delivery-mobile-subscription-price-content">
              <div className="delivery-mobile-monthly-rent">
                  <p>Monthly Rent <span>₹864</span></p>
                  <p>GST <span>₹53</span></p>
              </div>
              <p style={{marginTop:"1.5rem",marginBottom:"1.5rem"}}>Total Monthly Payment <span>₹917</span></p>
            </div>
          </div>


          
          <div className="delivery-mobile-subscription-price">
            <div className="delivery-mobile-subscription-price-content">
              <div className="delivery-mobile-monthly-rent">
                  <p>Monthly Rent <span>₹864</span></p>
                  <p>GST <span>₹53</span></p>
              </div>
              <p style={{marginTop:"1.5rem",marginBottom:"1.5rem"}}>Total Monthly Payment <span>₹917</span></p>
            </div>
          </div>


          <div className="delivery-mobile-claim-gst-container">
            <div className="delivery-mobile-claim-gst-content">
                <div className="mobile-claim-gst-btn">
                  <button type="submit">Claim GST</button>
                  <button type="submit">Apply Coupon</button>
                </div>

                <label htmlFor="damage" style={{marginTop:"2rem"}}>
                  <input type="checkbox" name="damage" id="damage" />
                  <span>Damage Wavier <img src={MobilePriceinfo} alt="priceinfo" style={{marginLeft:".5rem"}}/></span>
                </label>

                <label htmlFor="credit" style={{marginTop:"1.5rem"}}>
                  <input type="checkbox" name="credit" id="credit" />
                  <span>Use Credit <img src={MobilePriceinfo} alt="priceinfo" style={{marginLeft:".5rem"}}/></span>
                </label>
            </div>
          </div>

          <div className="mobile-price-to-pay-container">
            <div className="mobile-price-to-pay-content">
            <div className="mobile-price-to-pay-left-part">
                <p id='to-pay'>To Pay</p>
                <p id='to-pay-price'>₹750.00</p>
                <p id='to-pay-details'>view details</p>
            </div>
            <div className="mobile-price-to-pay-right-part">
              <button type='submit'>Proceed</button>
            </div>
            </div>
          </div>
  
        </>
      )
    }
    if(window.innerWidth <= 768){
      return (
        <>
            <Navbar />
            <div className="delivery-container">
                <div className="delivery-content">
                  <div className="delivery-left-container">
                    <div className="delivery-step-container">
                        <p><img src={TabletStep1gradient} alt="tabletStep1" /> <span>Step1</span></p>
                        <p><img src={TabletStep2} alt="tabletStep2" /> <span>Step2</span> </p>
                        <p><img src={TabletStep3} alt="tabletStep3" /> <span>Step3</span> </p>
                    </div>
                      <div className="delivery-left-heading-container">
                          <div className="delivery-add">
                            <p>Delivery Address</p>
                          </div>
                          <img src={RightNavigation} alt="navigation" />
                          <div className="payment">
                            <p>Paym..</p>
                          </div>
                          <img src={RightNavigation} alt="navigation" />
                          <div className="agreement">
                            <p>Agree..</p>
                          </div>
                      </div>
    
                      
                    <div className="delivery-add-container">
                        <button className='delivery-add-address-btn'>Add Address  +</button>
    
                        <div className="delivery-address-one-container">
                              <div className="delivery-address-one-container-left-part">
                                <p id='address-one-heading'>Delivery Address 1</p>
                                <p id='address-one-phoneno'>9820049359 | 9820049359</p>
                                <p id='address-one-address'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet et lorem imperdiet fringilla egestas quis at. Urna aliquam, neque, mauris neque, mauris, est.</p>
                              </div>
    
                              <div className="delivery-address-one-container-right-part">
                              <p className='edit-delete-img'><span><img src={TabletEdit} alt="edit" /></span> <span><img src={TabletDelete} alt="delete" /></span></p>                                <button id='delivery-select-btn'>Select Address</button>
                              </div>
                        </div>
    
                        <div className="delivery-address-one-container">
                              <div className="delivery-address-one-container-left-part">
                                <p id='address-one-heading'>Delivery Address 1</p>
                                <p id='address-one-phoneno'>9820049359 | 9820049359</p>
                                <p id='address-one-address'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet et lorem imperdiet fringilla egestas quis at. Urna aliquam, neque, mauris neque, mauris, est.</p>
                              </div>
    
                              <div className="delivery-address-one-container-right-part">
                                <p className='edit-delete-img'><span><img src={TabletEdit} alt="edit" /></span> <span><img src={TabletDelete} alt="delete" /></span></p>
                                <button id='delivery-select-btn'>Select Address</button>
                              </div>
                        </div>
    
                        <p id='delivery-or'>or</p>
    
                        <div className="delivery-self-location">
                            <div className="delivery-self-location-left-part">
                                <p id='pickupLocation-text'><img src={PickupLocation} alt="pickuplocation" style={{marginRight:".5rem"}}/> Self Pickup Location</p>               
                                <p id='cmp-address'>303, 304 Royal Enclave Parsi Panchayat Road, Old Nagardas Rd, Mumbai 400069</p>
                                <a id='show-in-map' href="https://www.google.com/maps/dir/19.0676992,72.9939968/rentKar/@19.0866537,72.7896212,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7c94a1a2fb789:0x4f31e332a3917456!2m2!1d72.852397!2d19.1256041"><img src={ShowinMap} alt="pickuplocation" /> Show in map</a>
                            </div>
                            <div className="delivery-self-location-right-part">
                                  <button id='proceed-btn'>Proceed</button>
                            </div>
                        </div>
    
                    </div>
                  </div>
    
                  <div className="delivery-right-container">
                      <p id='product-text'>Playstation 4</p>
                      <div className="delivery-tablet-tenure">
                        <p>Delivery By<span>27/02/2022</span></p>
                        <p>Tenure <span>3 Months</span></p>
                      </div>

                      <div className="delivery-tablet-price-list">
                        <p>PS4 <span>₹500/day</span></p>
                        <p>Addons 1 <span>₹500/day</span></p>
                        <p>Addons 1 <span>₹500/day</span></p>
                        <p>Addons 1 <span>₹500/day</span></p>
                        <p>Addons 1 <span>₹500/day</span></p>
                        <p>Addons 1 <span>₹500/day</span></p>
                      </div>

                      <div className="delivery-tablet-noofdays">
                        <p> <span></span> ₹1000/day</p>
                        <p>No of days <span>x 92 days</span> </p>
                      </div>

                      <div className="delivery-tablet-total-price">
                        <p><span>Sub total</span> ₹92000</p>
                        <p><span>Gst <button><p>Add +</p></button></span> + ₹4356</p>
                        <p><span>Coupon <button><p>Edit</p></button></span> + ₹4356</p>
                      </div>

                      <div className="delivery-tablet-grand-total">
                        <p><span>Grand Total</span> <span>₹7200</span></p>
                      </div>


                      <div className="delivery-tablet-lorem">
                        <p> Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Ultrices sagittis nisi, in
adipiscing interdum.</p>
                      </div>
                  </div>
                </div>
            </div>
        </>
      )
    } else {
      return (
        <>
            <Navbar />
            <div className="delivery-container">
                <div className="delivery-content">
                  <div className="delivery-left-container">
                      <div className="delivery-left-heading-container">
                          <div className="delivery-add">
                            <p>Delivery Address</p>
                          </div>
                          <img src={RightNavigation} alt="navigation" />
                          <div className="payment">
                            <p>Payment</p>
                          </div>
                          <img src={RightNavigation} alt="navigation" />
                          <div className="agreement">
                            <p>Agreement</p>
                          </div>
                      </div>
    
                      
                    <div className="delivery-add-container">
                        <button className='delivery-add-address-btn'>Add Address  +</button>
    
                        <div className="delivery-address-one-container">
                              <div className="delivery-address-one-container-left-part">
                                <p id='address-one-heading'>Delivery Address 1</p>
                                <p id='address-one-phoneno'>9820049359 | 9820049359</p>
                                <p id='address-one-address'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet et lorem imperdiet fringilla egestas quis at. Urna aliquam, neque, mauris neque, mauris, est.</p>
                              </div>
    
                              <div className="delivery-address-one-container-right-part">
                                <p><img src={Edit} alt="edit" /> <img src={Delete} alt="delete" /></p>
                                <button id='delivery-select-btn'>Select Address</button>
                              </div>
                        </div>
    
                        <div className="delivery-address-one-container">
                              <div className="delivery-address-one-container-left-part">
                                <p id='address-one-heading'>Delivery Address 1</p>
                                <p id='address-one-phoneno'>9820049359 | 9820049359</p>
                                <p id='address-one-address'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet et lorem imperdiet fringilla egestas quis at. Urna aliquam, neque, mauris neque, mauris, est.</p>
                              </div>
    
                              <div className="delivery-address-one-container-right-part">
                                <p><img src={Edit} alt="edit" /> <img src={Delete} alt="delete" /></p>
                                <button id='delivery-select-btn'>Select Address</button>
                              </div>
                        </div>
    
                        <p id='delivery-or'>or</p>
    
                        <div className="delivery-self-location">
                            <div className="delivery-self-location-left-part">
                                <p id='pickupLocation-text'><img src={PickupLocation} alt="pickuplocation" style={{marginRight:".5rem"}}/> Self Pickup Location</p>               
                                <p id='cmp-address'>303, 304 Royal Enclave Parsi Panchayat Road, Old Nagardas Rd, Mumbai 400069</p>
                                <a id='show-in-map' href="https://www.google.com/maps/dir/19.0676992,72.9939968/rentKar/@19.0866537,72.7896212,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3be7c94a1a2fb789:0x4f31e332a3917456!2m2!1d72.852397!2d19.1256041"><img src={ShowinMap} alt="pickuplocation" /> Show in map</a>
                            </div>
                            <div className="delivery-self-location-right-part">
                                  <button id='proceed-btn'>Proceed</button>
                            </div>
                        </div>
    
                    </div>
                  </div>
    
                  <div className="delivery-right-container">
                          <div className="delivery-product-name-container">
                              <p>Playstation 4 + 2 Controller</p>
                              <p>Add ons: Game1, Game2 </p>
                              <p id='delivery-date-container'>27 Feb, 2022 - 27 May, 2022</p>
                          </div>
    
                          <div className="delivery-priceInfo-container">
                              <div className="monthly-rent">
                                <p><span>Monthly Rent <img src={PriceInfo} alt="priceInfo" style={{width:"0.688rem", height:"0.688rem", marginLeft:".5rem"}}/></span> <span>₹917</span></p>
                                <p><span>Tenure</span> <span>3 Months</span></p>
                              </div>
                              <div className="sub-total">
                                  <p><span>Sub Total</span> <span>Sub Total</span></p>
                                  <p><span>GST</span> <span>+₹321</span></p>
                                  <p><span>Coupon</span> <span>- ₹120</span></p>
                              </div>
                              <p id='delivery-total-payment'><span>Total Payment</span> <span>₹2952</span></p>
                          </div>
    
                          <div className="delivery-gst-btn-container">
                              <div className="gst-btn">
                                  <button type='submit'>Claim GST +</button>
                                  <button type='submit'>Apply Coupon</button>
                              </div>
                              <label htmlFor="damage">
                                <input type="checkbox" name="damage" id="damage" />
                                <span style={{marginLeft:".5rem"}}>Damage Waiver <img src={PriceInfo} alt="priceInfo" style={{width:"0.688rem", height:"0.688rem", marginLeft:".5rem"}} /></span>
                              </label>
    
                              <label htmlFor="credit" style={{marginTop:"1rem"}}>
                                <input type="checkbox" name="credit" id="credit" />
                                <span style={{marginLeft:".5rem"}}>Use Credit <img src={PriceInfo} alt="priceInfo" style={{width:"0.688rem", height:"0.688rem", marginLeft:".5rem"}} /></span>
                                </label>
                              
                          </div>
    
                          <div className="delivery-note-container">
                              <div className="note">
                                  <p><img src={Note} alt="note" /> Note: </p>
                              </div>
                              <div className="note-desc">
                                  <p>You can choose to either complete agreement or the payment to quickly reserve your order. However, both need to be completed for us to dispatch your order.</p>
                              </div>
                          </div>
                  </div>
                </div>
            </div>
        </>
      )
    }


}

export default Deliveryaddress