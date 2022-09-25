import React from "react";
import { OrderAccepted } from "../../assets";
import "./orderaccepted.css";

import { Link } from "react-router-dom";

const Orderaccepted = (props) => {

  return (
    <>
      <div className="order-accepted-container">
        <div className="order-accepted-content">
          <p id="order-text">Order Accepted</p>
          <img src={OrderAccepted} alt="orderaccept"/>
          <p id="credit-text">Woohoo! 65 Credits Earned</p>
          <p id="order-accept-desc">
            Sit back and relax! Your order has been accepted by us. You can
            check out your order details in <a href="" onClick={props.onclick} id={props.id} style={{textDecoration:"none"}}>My Order</a>.
          </p>
          <button type="submit" id={props.class} onClick={props.onclick}
          >
            Done
          </button>

        </div>
      </div>
    </>
  );
};

export default Orderaccepted;
