import React from 'react'
import './catogerycard.css'
import { Link } from 'react-router-dom'

const Catogerycard = (props) => {
  return (
    <>
        <div className="catogeryCard">
            <Link to="/catogeries">
                <img src={props.imgSrc}  alt="Console" />
                <p className="catText">{props.name}</p>
            </Link>
        </div>
    </>
  )
}

export default Catogerycard