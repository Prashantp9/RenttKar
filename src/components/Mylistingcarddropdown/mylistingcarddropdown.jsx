import React from "react";
import { useState } from "react";
import {
  MyorderCancellation,
  MyorderPackageDetails,
  MyorderProductsupport,
} from "..";
import { Link } from "react-router-dom";
import {
  Cancellation,
  Download,
  Help,
  Packagedetails,
  PriceInfo,
  OrderAccepted
} from "../../assets";
import "./mylistingcarddropdown.css";

const Mylistingcarddropdown = (props) => {
  const [isProduct, setIsProduct] = useState(false);
  const [isPackage, setIsPackage] = useState(false);
  const [isCancellation, setIsCancellation] = useState(false);
  const [isOrderconfirm , setIsOrderConfirm] = useState(false);
  if (window.innerWidth <= 500) {
    return (
      <>
        <div className="myorder-dropdown-container">
          <p
            onClick={() => setIsProduct(!isProduct)}
            style={{ cursor: "pointer" }}
          >
            <Link
              to="/mobilemyorderproductsupp"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              <img
                src={Help}
                alt="help"
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  marginRight: "0.688rem",
                  cursor: "pointer",
                }}
              />{" "}
              Product Support
            </Link>
          </p>

          <p>
            <img
              src={Download}
              alt="download"
              style={{
                width: "0.875rem",
                height: "1.125rem",
                marginRight: "1rem",
              }}
            />{" "}
            Download Agreement
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setIsPackage(!isPackage)}
          >
            <img
              src={Packagedetails}
              alt="packagedetails"
              style={{
                width: "1.25rem",
                height: ".75rem",
                marginRight: "0.688rem",
              }}
            />{" "}
            Package Details
          </p>
          {isPackage && (
            <>
              <div className="mobile-myorder-order-details-container">
                <div className="mobile-myorder-order-details-content">
                  <h4>Playstation 4</h4>
                  <p>
                    InPackage:
                    <span>1 x PS4 | 2 x controller | 3 x Videogame Disc</span>
                  </p>
                  <p>
                    Start Date:<span>21/02/2022</span>
                  </p>
                  <p>
                    End Date:<span>21/05/2022</span>
                  </p>
                  <p>
                    Days Left:<span>24 days</span>
                  </p>
                  <p>
                    Total Cost:
                    <span>
                      ₹7200 <img src={PriceInfo} alt="" />
                    </span>
                  </p>
                  <p>
                    Payment Status:
                    <span>Paid</span>
                  </p>

                  <button type="submit" onClick={() => setIsOrderConfirm(!isOrderconfirm)}>Done</button>
                  {isOrderconfirm && (
                    <>
                    <div className="order-confirm-container">
                      <div className="order-confirm-content">
                        <img
                          src={OrderAccepted}
                          alt="orderaccepted"
                          style={{ marginTop: "1rem" }}
                        />
                        <p id="order-text">Order Accepted</p>
                        <p id="credit-text">Woohoo! 65 Credits Earned</p>
                        <p id="order-desc">
                          Sit back and relax! Your order has been accepted by
                          us. You can check out your order details in{" "}
                          <Link to="">My Orders</Link>.
                        </p>
                        <button type="submit" onClick={props.onclick}>
                          Done
                        </button>
                      </div>
                    </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
          <p>
            <img
              src={Download}
              alt="download"
              style={{
                width: "0.875rem",
                height: "1.125rem",
                marginRight: "1rem",
              }}
            />{" "}
            Download Invoice
          </p>
          <p
            style={{ cursor: "pointer" }}
          >
            <Link to="/mobilemyorderproductcancel" style={{textDecoration:"none", color:"#DFDFDF", cursor:"pointer"}}>
            <img
              src={Cancellation}
              alt="Cancellation"
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginRight: "0.688rem",
              }}
            />{" "}
            Request For Cancellation
            </Link>
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-dropdown-container">
          <p
            onClick={() => setIsProduct(!isProduct)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={Help}
              alt="help"
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginRight: "0.688rem",
                cursor: "pointer",
              }}
            />{" "}
            Product Support
          </p>
          {isProduct && (
            <MyorderProductsupport onclick={() => setIsProduct(!isProduct)} />
          )}
          <p>
            <img
              src={Download}
              alt="download"
              style={{
                width: "0.875rem",
                height: "1.125rem",
                marginRight: "1rem",
              }}
            />{" "}
            Download Agreement
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setIsPackage(!isPackage)}
          >
            <img
              src={Packagedetails}
              alt="packagedetails"
              style={{
                width: "1.25rem",
                height: ".75rem",
                marginRight: "0.688rem",
              }}
            />{" "}
            Package Details
          </p>
          {isPackage && (
            <MyorderPackageDetails onclick={() => setIsPackage(!isPackage)} />
          )}
          <p>
            <img
              src={Download}
              alt="download"
              style={{
                width: "0.875rem",
                height: "1.125rem",
                marginRight: "1rem",
              }}
            />{" "}
            Download Invoice
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => setIsCancellation(!isCancellation)}
          >
            <img
              src={Cancellation}
              alt="Cancellation"
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginRight: "0.688rem",
              }}
            />{" "}
            Request For Cancellation
          </p>
          {isCancellation && (
            <MyorderCancellation
              onclick={() => setIsCancellation(!isCancellation)}
            />
          )}
        </div>
      </>
    );
  }
};

export default Mylistingcarddropdown;
