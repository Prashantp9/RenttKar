import React from "react";
import { useState } from "react";
import { GoPro, GradientCamera, OrderAccepted, SmallCross } from "../../assets";
import "./myorderproductsupport.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Myorderproductsupport = (props) => {
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    if(isSubmit) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "relative" ;
    }
  })

  if (window.innerWidth <= 768) {
    return (
      <>
        <div className="myorder-productsupport-container">
          <div className="myorder-productsupport-content">
            <p id="support-text">
              Product Support{" "}
              <img
                src={SmallCross}
                alt="cross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                onClick={props.onclick}
              />
            </p>
            <p id="exp-heading">Are you experiencing turbulence?</p>
            <p id="support-desc">
              Please give us a detailed synopsis of the issue faced by you below
              and we will get back to you ASAP!
            </p>
            <textarea
              name="productproblem"
              id=""
              cols="30"
              rows="10"
              placeholder="Mention your problem...."
            ></textarea>
            <div className="myorder-product-issue-img">
              <img
                src={GoPro}
                alt="gopro"
                style={{ width: "2rem", height: "2rem", borderRadius: "6px" }}
              />
              <p>Image1</p>
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1rem", height: "1rem", cursor: "pointer" }}
              />
            </div>

            <div className="myorder-upload-img-container">
              <img
                src={GradientCamera}
                alt="camera"
                style={{
                  width: "1.25rem",
                  height: "1.125rem",
                  marginRight: ".5rem",
                }}
              />
              <p>Upload Image of the Issue +</p>
              <input type="file" name="productissueimg" accept="image/*" />
            </div>

            <button type="submit" onClick={() => setIsSubmit(!isSubmit)}>
              Submit Issue
            </button>
            {isSubmit && (
              <>
                <div className="myorder-submit-container">
                  <div className="myorder-submit-content">
                    <img src={OrderAccepted} alt="orderaccept" />
                    <p id="submitted-text">Submitted</p>
                    <p id="submitted-desc">
                      Sorry for the inconvenience caused. We are working to get
                      your problem resolved ASAP! For further query you can call
                      us on{" "}
                      <span>+91 79000 42875</span>
                    </p>
                    <button
                      type="submit"
                      id="submitted-btn"
                      onClick={props.onclick}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-productsupport-container">
          <div className="myorder-productsupport-content">
            <p id="support-text">
              Product Support{" "}
              <img
                src={SmallCross}
                alt="cross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                onClick={props.onclick}
              />
            </p>
            <p id="exp-heading">Are you experiencing turbulence?</p>
            <p id="support-desc">
              Please give us a detailed synopsis of the issue faced by you below
              and we will get back to you ASAP!
            </p>
            <textarea
              name="productproblem"
              id=""
              cols="30"
              rows="10"
              placeholder="Mention your problem...."
            ></textarea>
            <div className="myorder-product-issue-img">
              <img
                src={GoPro}
                alt="gopro"
                style={{ width: "2rem", height: "2rem", borderRadius: "6px" }}
              />
              <p>Image1</p>
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1rem", height: "1rem", cursor: "pointer" }}
              />
            </div>

            <div className="myorder-upload-img-container">
              <img
                src={GradientCamera}
                alt="camera"
                style={{
                  width: "1.25rem",
                  height: "1.125rem",
                  marginRight: ".5rem",
                }}
              />
              <p>Upload Image of the Issue +</p>
              <input type="file" name="productissueimg" accept="image/*" />
            </div>

            <button type="submit" onClick={() => setIsSubmit(!isSubmit)}>
              Submit Issue
            </button>
            {isSubmit && (
              <>
                <div className="myorder-submit-container">
                  <div className="myorder-submit-content">
                    <img src={OrderAccepted} alt="orderaccept" />
                    <p id="submitted-text">Submitted</p>
                    <p id="submitted-desc">
                      Sorry for the inconvenience caused. We are working to get
                      your problem resolved ASAP! For further query you can call
                      us on{" "}
                      <span style={{ color: "#0E9BE1" }}>+91 79000 42875</span>
                    </p>
                    <button
                      type="submit"
                      id="submitted-btn"
                      onClick={props.onclick}
                    >
                      Done
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Myorderproductsupport;
