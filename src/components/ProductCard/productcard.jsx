import React from "react";
import './productcard.css';

import {Gaadi, Hot, Rupees} from '../../assets';

import { Link } from 'react-router-dom'

 

function Productcard(props){
  return (
    <div className="card">
      <img src={props.imgSrc} alt="Playstation" className="cardImg" />
      <div className="tag">
        <img src={Hot} alt="" />
        <p>HOT</p>
      </div>
      <p className="prodName">{props.name}</p>
      <p className="day">{props.day}</p>
      <img src={Gaadi} alt="" className="gaadi" />
      <p className="start">Starts at</p>
      <p className="price"><img src={Rupees} alt=""/>{props.price}</p>
      <Link to="/productdetails" className="btn" data="Rent Now"></Link>
    </div>
  );
};

export default Productcard;
