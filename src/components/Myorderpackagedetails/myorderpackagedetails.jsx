import React from "react";
import { useState } from "react";
import { MyorderExtendPackage, MyorderPackagePayment } from "..";
import { Pc, SmallCross } from "../../assets";
import "./myorderpackagedetails.css";

const Myorderpackagedetails = (props) => {
    const[isPackage, setIsPackage] = useState(false);
    const[isPayment, setIsPayment] = useState(false);
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
                MSI Gaming Laptop, 16gb ram, 2.5 gigahertz, 1 Tb Hard disk, 256
                SSD
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
              <button type="submit" onClick={() => setIsPackage(!isPackage)}>Extend Date</button>
              {isPackage && <MyorderExtendPackage onclick={() => setIsPackage(!isPackage)}/>}
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
            <p>Monthly Payment Status: <span id="pending-text">Pending</span></p>
            <p>Due Date: <span id="date">21/03/22</span></p>
            <button type="submit" style={{alignSelf:"self-start"}} onClick={() => setIsPayment(!isPayment)}>Pay Now</button>
            {isPayment && <MyorderPackagePayment onclick={() => setIsPayment(!isPayment)}/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorderpackagedetails;
