import React from 'react'
import './mobileproductcard.css'


// symbol
import { Rupees } from '../../assets'

const Mobileproductcard = (props) => {
  return (
    <>
      <div className="mobile-card">
          <img src={props.imgSrc} alt={props.imgSrc} id="productImg"/>
          <p>{props.productName}</p>
          <div className="mobile-card-pricing">
            <p>Starts at <span><img src={Rupees} alt="rupees" /> 500/Day</span></p>
          </div>
      </div>
    </>
  )
}

export default Mobileproductcard