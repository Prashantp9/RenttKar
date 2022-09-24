import React from "react";
import { GoPro, GradientCamera, OrderAccepted, SmallCross } from "../../assets";
import "./mobilemyorderproductsupp.css";

import { Link } from "react-router-dom";
import { useState } from "react";

const Mobilemyorderproductsupp = () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      <div className="mobile-myorder-productsupp-heading-container">
        <div className="mobile-myorder-productsupp-heading-content">
          <p>Product Support</p>
          <Link to="/myorder">
            <img
              src={SmallCross}
              alt="smallcross"
              style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>

      <div className="mobile-myorder-productsupp-desc-container">
        <div className="mobile-myorder-productsupp-desc-content">
          <p id="turbulence-text">Are you experiencing turbulence?</p>
          <p id="turbulence-desc">
            Please give us a detailed synopsis of the issue faced by you below
            and we will get back to you ASAP!
          </p>
          <textarea
            name="productproblem"
            id=""
            cols="30"
            rows="10"
            placeholder="Mention your problem..."
          ></textarea>
          <div className="mobile-myorder-productsupp-productissue-popup">
            <img
              src={GoPro}
              alt="gopro"
              style={{ width: "2.5rem", height: "2.5rem", borderRadius: "6px" }}
            />
            <p>Image 1</p>
            <img
              src={SmallCross}
              alt="smallcross"
              style={{ width: "1.5rem", height: "1.5rem" }}
            />
          </div>

          <label htmlFor="">
            <input type="file" name="" id="" />
            <span>
              <img
                src={GradientCamera}
                alt="camera"
                style={{ marginRight: ".5rem" }}
              />{" "}
              Upload Image of the Issue +
            </span>
          </label>

          <button type="submit" onClick={() => setIsDone(!isDone)}>
            Submit Issue
          </button>
          {isDone && (
            <>
              <div className="mobile-productissue-submitted-container">
                <img src={OrderAccepted} alt="orderaccepted" />
                <p id="mobile-submitted-text">Submitted</p>
                <p id="mobile-submitted-desc">
                  Your problem have been successfully recieved. We will get back
                  to you within 24hrs, or you can call us on 18000 25641.
                </p>
                <button type="submit">
                    <Link to="/myorder" style={{textDecoration:"none", color:"#FFFFFF", cursor:"pointer"}}>Done</Link>  
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Mobilemyorderproductsupp;
