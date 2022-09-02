import React, {useState} from "react";
import "./pricebreakdown.css";

// images
import { SmallCross, Rupees } from "../../assets";

const Pricebreakdown = (props) => {

  return (
    <>
      <div className="price-breakdown-container">
        <div className="price-breakdown-heading">
          <p>Price Breakdown</p>
          <img
            src={SmallCross}
            alt="cross"
            onClick={props.onclick}
          />
        </div>
        <div
          className="product-prices"
          style={{ borderBottom: "1px solid #464646" }}
        >
          <p style={{ marginTop: "2rem" }} id="product-name">
            PS4{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              500/day
            </span>
          </p>
          <p id="product-name">
            Addons1{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              500/day
            </span>
          </p>
          <p id="product-name">
            Addons2{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              100/day
            </span>
          </p>
          <p id="product-name">
            Addons3{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              100/day
            </span>
          </p>
          <p id="product-name">
            Addons4{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              100/day
            </span>
          </p>
          <p
            id="product-name"
            style={{
              paddingBottom: "1.5rem",
            }}
          >
            Addons5{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              100/day
            </span>
          </p>
        </div>

        <div className="no-of-days">
          <p style={{ marginTop: ".8rem" }}>
            <span></span>{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              1000/day
            </span>
          </p>
          <p style={{ marginTop: ".8rem" }}>
            No of days <span>x 92 days</span>
          </p>
        </div>

        <div className="total-price">
          <p style={{ marginTop: ".8rem" }}>
            Sub total{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              92000
            </span>
          </p>
          <p style={{ marginTop: ".8rem" }}>
            GST{" "}
            <span>
              + <img src={Rupees} alt="rupees" />
              4356
            </span>
          </p>
          <p
            style={{
              marginTop: ".8rem",
              marginBottom: "1rem",
              color: "#209132",
            }}
          >
            Coupon discount{" "}
            <span>
              - <img src={Rupees} alt="rupees" className="green" />
              14356
            </span>
          </p>
        </div>

        <div className="grand-total">
          <p>
            {" "}
            Grand Total{" "}
            <span>
              <img src={Rupees} alt="rupees" />
              82000
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Pricebreakdown;
