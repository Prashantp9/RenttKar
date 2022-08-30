import React from 'react'
import './deliveryaddress.css'

import { Navbar } from '../../components'
import { Delete, Edit, PickupLocation, RightNavigation } from '../../assets'

const Deliveryaddress = () => {
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
                            <p><img src={PickupLocation} alt="pickuplocation" /> Self Pickup Location</p>               
                        </div>
                        <div className="delivery-self-location-right-part">

                        </div>
                    </div>

                </div>
              </div>

              <div className="delivery-right-container">

              </div>
            </div>
        </div>
    </>
  )
}

export default Deliveryaddress