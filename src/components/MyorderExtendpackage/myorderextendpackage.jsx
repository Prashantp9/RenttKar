import React from "react";
import { useState } from "react";
import { Calendar } from "react-calendar";
import { MyorderExtendAgreement } from "..";
import { Calender, PriceInfo, SmallCross } from "../../assets";
import "./myorderextendpackage.css";

const Myorderextendpackage = (props) => {
  const [isClick, setIsClick] = useState(false);
  const [isAgreement, setIsAgreement] = useState(false);
  return (
    <>
      <div className="myorder-extend-package-container">
        <div className="myorder-extend-package-content">
          <div className="myorder-extend-package-upperpart">
            <p id="extended-text">
              Extend Package Date{" "}
              <img
                src={SmallCross}
                alt="cross"
                style={{ width: "1.5rem", height: "1.5rem", cursor: "pointer" }}
                onClick={props.onclick}
              />
            </p>
            <p id="extended-desc">We have got surprising offers for you!</p>
            <div className="myorder-extended-offer-card-container">
              <div
                className="myorder-extended-offer-card"
                style={{
                  padding: isClick ? "1px" : "none",
                  border: isClick ? "2px solid #0E9BE1" : "none",
                  userSelect: "none",
                }}
                onClick={() => setIsClick(!isClick)}
              >
                <p id="card-off-percent">
                  20% <span>OFF</span>
                </p>
                <div className="card-offer-desc">
                  <p id="card-cut-price">₹5,000/Mn</p>
                  <p id="card-offer-price">₹2,000/Mn</p>
                  <p
                    id="card-offer-duration"
                    style={{
                      color: isClick ? "#0E9BE1" : "#DFDFDF",
                    }}
                  >
                    For 1 Month
                  </p>
                </div>
              </div>

              <div
                className="myorder-extended-offer-card"
                style={{
                  padding: isClick ? "1px" : "none",
                  border: isClick ? "2px solid #0E9BE1" : "none",
                  userSelect: "none",
                }}
                onClick={() => setIsClick(!isClick)}
              >
                <p id="card-off-percent">
                  20% <span>OFF</span>
                </p>
                <div className="card-offer-desc">
                  <p id="card-cut-price">₹5,000/Mn</p>
                  <p id="card-offer-price">₹2,000/Mn</p>
                  <p
                    id="card-offer-duration"
                    style={{
                      color: isClick ? "#0E9BE1" : "#DFDFDF",
                    }}
                  >
                    For 2 Month
                  </p>
                </div>
              </div>

              <div
                className="myorder-extended-offer-card"
                style={{
                  padding: isClick ? "1px" : "none",
                  border: isClick ? "2px solid #0E9BE1" : "none",
                  userSelect: "none",
                }}
                onClick={() => setIsClick(!isClick)}
              >
                <p id="card-off-percent">
                  20% <span>OFF</span>
                </p>
                <div className="card-offer-desc">
                  <p id="card-cut-price">₹5,000/Mn</p>
                  <p id="card-offer-price">₹2,000/Mn</p>
                  <p
                    id="card-offer-duration"
                    style={{
                      color: isClick ? "#0E9BE1" : "#DFDFDF",
                    }}
                  >
                    For 3 Month
                  </p>
                </div>
              </div>

              <div
                className="myorder-extended-offer-card"
                style={{
                  padding: isClick ? "1px" : "none",
                  border: isClick ? "2px solid #0E9BE1" : "none",
                  userSelect: "none",
                }}
                onClick={() => setIsClick(!isClick)}
              >
                <p id="card-off-percent">
                  20% <span>OFF</span>
                </p>
                <div className="card-offer-desc">
                  <p id="card-cut-price">₹5,000/Mn</p>
                  <p id="card-offer-price">₹2,000/Mn</p>
                  <p
                    id="card-offer-duration"
                    style={{
                      color: isClick ? "#0E9BE1" : "#DFDFDF",
                    }}
                  >
                    For 4 Month
                  </p>
                </div>
              </div>
            </div>

            <div className="myorder-send-request-container">
              <p id="myorder-request-desc">
                Didn’t find your offers? Send us the end date and we will
                provide offers accordingly.{" "}
              </p>
              <div className="myorder-date-extension-container">
                <div className="myorder-calender">
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="Extension Date"
                  />
                  <div className="myorder-calender-img">
                    <img src={Calender} alt="calender" />
                  </div>
                </div>
                <button type="submit">Send Request</button>
              </div>
            </div>
          </div>
          <div className="myorder-extend-package-lowerpart">
            <p>
              New End Date <span>21/09/2022</span>
            </p>
            <p>
              Total cost{" "}
              <span>
                ₹750.00{" "}
                <img
                  src={PriceInfo}
                  alt="info"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                />
              </span>
            </p>
            {isClick ? (
                <>
              <button
                type="submit"
                onClick={() => setIsAgreement(!isAgreement)}
                style={{
                  opacity: "1",
                }}
              >
                Extend Date
              </button>
              {isAgreement && <MyorderExtendAgreement />}
              </>
            ) : (
              <button
                type="submit"
                style={{
                  opacity: "0.5",
                }}
              >
                Extend Date
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorderextendpackage;
