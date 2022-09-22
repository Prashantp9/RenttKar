import React from "react";
import { OrderAccepted } from "../../assets";
import "./orderaccepted.css";

import { Link } from "react-router-dom";

const Orderaccepted = () => {

  return (
    <>
      <div className="order-accepted-container">
        <div className="order-accepted-content">
          <p id="order-text">Order Accepted</p>
          <img src={OrderAccepted} alt="orderaccept"/>
          <p id="credit-text">Woohoo! 65 Credits Earned</p>
          <p id="order-accept-desc">
            Sit back and relax! Your order has been accepted by us. You can
            check out your order details in <Link to="/myorder" style={{textDecoration:"none", color:"#0E9BE1"}}>My Order</Link>.
          </p>
          <button type="submit" id="order-accept-button" >
            <Link to="/" style={{textDecoration:"none", color:"#FFFFFF"}}>Done</Link>
          </button>

        </div>
      </div>
    </>
  );
};

export default Orderaccepted;
