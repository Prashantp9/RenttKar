import React from 'react'
import './accessoriescard.css'

// images
import { Playstation,Rupees, } from '../../assets'

const Accessoriescard = (props) => {
  return (
    <>
        <div className="accessories-card">
            <img id='accessories-img' src={props.imgSrc} alt="accessories-image" />
            <p id='accessories-name'>{props.name}</p>
            <p id='accessories-price'><img src={Rupees} alt="rupees" />{props.price}</p>
            <button className="accessories-btn" data="Add +"></button>
        </div>
    </>
  )
}

export default Accessoriescard