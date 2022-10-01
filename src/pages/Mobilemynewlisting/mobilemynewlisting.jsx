import React from "react";
import "./mobilemynewlisting.css";

import {
  GoPro,
  GoPro2,
  Laptop,
  Macbook,
  OrderAccepted,
  Pc,
  Playstation,
  Playstn,
  SmallCross,
  UploadImg,
} from "../../assets";
import { Link } from "react-router-dom";
import { useState } from "react";

const Mobilemynewlisting = () => {
  const [isDone, setIsDone] = useState(false);

  return (
    <>
      <div className="mobile-mynewlisting-prod-heading-container">
        <div className="mobile-mynewlisting-prod-heading-content">
          <p>
            New Listing
            <Link to="/mylisting" style={{ textDecoration: "none" }}>
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
              />
            </Link>
          </p>
        </div>
      </div>

      <div className="mobile-mynewlisting-prod-desc-container">
        <div className="mobile-mynewlisting-prod-desc-content">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your product name"
          />
          <div className="mobile-mylisting-accessories-desc-container">
            <p>
              Charger{" "}
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: ".5rem", height: ".5rem", cursor: "pointer" }}
              />
            </p>
            <p>
              Lorem Cabel{" "}
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: ".5rem", height: ".5rem", cursor: "pointer" }}
              />
            </p>
            <p>Add Accessories/Additional info</p>
          </div>
          <p id="mobile-mynewlisting-newproduct">
            <span style={{ color: "#9B9B9B" }}>Suggestion:</span> Charger |
            Controller | Earpiece | Body{" "}
          </p>
          <div className="mobile-mynewlisting-warranty-container">
            <input type="text" name="" id="" placeholder="Warranty if any.." />
            <input type="text" name="" id="" placeholder="Area pincode" />
          </div>

          <p id="mobile-mynewlisting-upload-text">Upload Image</p>

          <div className="mobile-mynewlisting-upload-img-container">
            <div className="mobile-mynewlisting-upload-img">
              <input type="file" name="" id="" />
              <img src={GoPro2} alt="gopro" />
            </div>

            <div className="mobile-mynewlisting-upload-img">
              <input type="file" name="" id="" />
              <img src={UploadImg} alt="gopro" />
            </div>

            <div className="mobile-mynewlisting-upload-img">
              <input type="file" name="" id="" />
              <img src={UploadImg} alt="gopro" />
            </div>
          </div>

          <button type="submit" onClick={() => setIsDone(!isDone)}>
            Confirm Details
          </button>
          {isDone && (
            <>
              <div className="mobile-mynewlisting-prodlisted-done-container">
                <img src={OrderAccepted} alt="orderaccept" />
                <p id="product-listed-text">Product Listed</p>
                <p id="product-listed-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tellus euismod sit
                </p>
                <div className="mobile-mynewlisting-prod-suggestion-container">
                  <p id="do-you-text">Do you have?</p>
                  <div className="mobile-mynewlisting-suggested-prod-img-container">
                    <img src={Playstn} alt="playstation" />
                    <img src={Laptop} alt="laptop" />
                    <img src={Playstation} alt="playstation" />
                    <img src={GoPro} alt="playstation" />
                    <img src={Macbook} alt="playstation" />

                    <img src={Pc} alt="pc" />
                    <img src={GoPro2} alt="laptop" />
                    <img src={Playstn} alt="playstation" />
                    <img src={Laptop} alt="playstation" />
                    <img src={Playstation} alt="playstation" />
                  </div>

                  <button>
                    <Link to="/mylisting" style={{textDecoration:"none", color:"#FFFFFF"}}>Done</Link>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mobilemynewlisting;
