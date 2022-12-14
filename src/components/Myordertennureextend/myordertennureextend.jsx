import React from "react";
import { OrderAccepted } from "../../assets";
import "./myordertennureextend.css";
import { Link } from "react-router-dom";

const Myordertennureextend = (props) => {
  if (window.innerWidth <= 500) {
    return (
      <>
        <div className="myorder-tennure-extend-container">
          <div className="myorder-tennure-extend-content">
            <img src={OrderAccepted} alt="orderaccepted" />
            <p id="tennure-extended-text">Tenure Extended</p>
            <p id="tennure-extended-desc">
              Thank you! Your extension has been accepted by us. You can check
              out your order details in <span>My Orders.</span>
            </p>
            <button
              type="submit"
              id="tennure-extended-done-button"
            >
              <Link to="/myorder" style={{textDecoration:"none", color:"#FFFFFF"}}>Done</Link>
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-tennure-extend-container">
          <div className="myorder-tennure-extend-content">
            <img src={OrderAccepted} alt="orderaccepted" />
            <p id="tennure-extended-text">Tenure Extended</p>
            <p id="tennure-extended-desc">
              Thank you! Your extension has been accepted by us. You can check
              out your order details in <span>My Orders.</span>
            </p>
            <button
              type="submit"
              id="tennure-extended-done-button"
              onClick={props.onclick}
            >
              Done
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Myordertennureextend;
