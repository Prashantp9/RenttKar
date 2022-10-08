import React from 'react'
import { Blog1 } from '../../assets'
import './blogcard.css'

const Blogcard = (props) => {
  return (
    <>
        <div className="blog-card">
            <div className="blog-card-img">
                <img src={props.img} alt="blog" />
            </div>

            <p id='blog-card-heading'>{props.heading}</p>
            <div className="blog-card-catogery-container">
                <p><span>Catogery 1</span></p>
                <p><span>Catogery 2</span></p>
            </div>

            <div className="blog-card-date-time-container">
                <p>By Rentkar</p>
                <p>1 week ago</p>
            </div>
        </div>
    </>
  )
}

export default Blogcard