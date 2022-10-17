import React, { useEffect } from "react";
import { useState } from "react";
import { MyorderExtendPackage, MyorderPackagePayment, OrderAccepted } from "..";
import { Pc, PriceInfo, SmallCross } from "../../assets";
import "./myorderpackagedetails.css";

const Myorderpackagedetails = (props) => {
  const [isPackage, setIsPackage] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if(isPackage || isPayment || isDone){
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "relative";
    }
  })

  if (window.innerWidth <= 768) {
    return(
      <>
        <div className="tablet-myorder-order-details-container">
          <div className="tablet-myorder-order-details-content">
              <h4>Playstation 4</h4>
              <p>In Package:<span>1 x PS4 | 2 x controller | 3 x Videogame Disc</span></p>
              <p>Start Date:<span>21/02/2022</span></p>
              <p>End Date:<span>21/05/2022</span></p>
              <p>Days Left:<span>24 days</span></p>
              <p>Total Cost:<span>₹7200 <img src={PriceInfo} alt="priceinfo" /></span></p>
              <p>Payment Status:<span>Paid</span></p>
              <button type="submit" onClick={() => setIsDone(!isDone)}>Done</button>
              {isDone && <OrderAccepted onclick={props.onclick} id="tablet-myorder-link" class="tablet-order-accept-button"/>}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-package-details-container">
          <div className="myorder-package-details-content">
            <p id="package-details-text">
              Package Details{" "}
              <img
                src={SmallCross}
                alt="smallcross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                onClick={props.onclick}
              />
            </p>
            <div className="myorder-package-product-desc">
              <div className="package-product-desc-img">
                <img src={Pc} alt="pc" />
              </div>

              <div className="package-product-name">
                <p>
                  MSI Gaming Laptop, 16gb ram, 2.5 gigahertz, 1 Tb Hard disk,
                  256 SSD
                </p>
                <p>
                  <span>Addons: </span> Addon1, Addon2, Addon3.
                </p>
              </div>
            </div>

            <div className="myorder-package-renting-details">
              <div className="package-days-details">
                <p>
                  <span>Start date: </span> 21/02/2022
                </p>
                <p>
                  <span>End date: </span> 21/02/2022
                </p>
                <p>
                  <span>Days left: </span> 45 Days
                </p>
                <button type="submit" onClick={() => setIsPackage(!isPackage)}>
                  Extend Date
                </button>
                {isPackage && (
                  <MyorderExtendPackage
                    onclick={props.onclick}
                  />
                )}
              </div>

              <div className="package-renting-details">
                <p>
                  <span>Monthly Rent: </span> ₹864
                </p>
                <p>
                  <span>Tenure: </span> 3 Month
                </p>
                <p>
                  <span>Remaining Pay: </span> ₹1923
                </p>
                <p>
                  <span>Total Payment: </span> ₹2751
                </p>
              </div>
            </div>

            <div className="myorder-payment-status-details">
              <p>
                Monthly Payment Status: <span id="pending-text">Pending</span>
              </p>
              <p>
                Due Date: <span id="date">21/03/22</span>
              </p>
              <button
                type="submit"
                style={{ alignSelf: "self-start" }}
                onClick={() => setIsPayment(!isPayment)}
              >
                Pay Now
              </button>
              {isPayment && (
                <MyorderPackagePayment
                  onclick={props.onclick}
                />
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Myorderpackagedetails;
