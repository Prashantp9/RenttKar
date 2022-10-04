import React, { useState } from "react";
import {
  OrderAccepted,
  PaymentCard,
  Pc,
  Playstn,
  RightArrow,
  SmallCross,
  Threedots,
  Upi,
} from "../../assets";
import Mylistingagreement from "../Mylistingagreement/mylistingagreement";
import Mylistingcarddropdown from "../Mylistingcarddropdown/mylistingcarddropdown";
import "./mylistingcard.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";

function Productconfirm(props) {
  const [isClick, setIsClick] = useState(false);
  const status = props.status;
  if (status === "Approval Pending") {
    return (
      <>
        <div className="mylisting-prod-confirm-container">
          <div className="mylisting-prod-confirm-content">
            <p id="cross-img">
              <img
                src={SmallCross}
                alt="smallcross"
                onClick={props.onclick}
                style={{ cursor: "pointer", width:"1.5rem", height:"1.5rem" }}
              />
            </p>
            <img
              src={OrderAccepted}
              alt="orderaccept"
            />
            <p id="prod-select-text">Product Selected</p>
            <p id="prod-select-desc">
              Hooray! Yout Product has been selected for Lending. Please fill
              the agreement and payment details to proceed.
            </p>
            <button onClick={() => setIsClick(!isClick)}>Proceed</button>
            {isClick && <Mylistingagreement onclick={props.onclick} />}
          </div>
        </div>
      </>
    );
  }
}

const Mylistingcard = (props) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    if(isClick){
      document.body.style.position = 'fixed'
    } else {
      document.body.style.position = 'relative'
    }
  })

  if (window.innerWidth <= 320) {
    return (
      <>
        <div className="mobile-mylisting-card">
          <div className="mobile-mylisting-upperpart-container">
            <div className="mobile-mylisting-prod-img-container">
              <img src={Playstn} alt="playstation" />
            </div>

            <div className="mobile-mylisting-prod-desc-container">
              <p>Playstation 4</p>
              <div className="mobile-mylisting-prod-status-container">
                <p>Approval Pending</p>
              </div>
            </div>

            <img
              src={Threedots}
              alt="threedots"
              style={{ width: ".25rem", height: "1.5rem" }}
              onClick = {() => setIsDropdown(!isDropdown)}
            />
            {isDropdown && (
              <Mylistingcarddropdown
                onclick={() => setIsDropdown(!isDropdown)}
              />
            )}
          </div>
          <div className="mobile-mylisting-lowerpart-container">
            <p>
              <span>Start date</span>27/02/2022
            </p>
            <p>
              <span>End date</span>27/02/2022
            </p>
          </div>
        </div>
      </>
    );
  }

  if (window.innerWidth <= 576) {
    return (
      <>
        <div className="mobile-mylisting-card">
          <div className="mobile-mylisting-upperpart-container">
            <div className="mobile-mylisting-prod-img-container">
              <img src={Playstn} alt="playstation" />
            </div>

            <div className="mobile-mylisting-prod-desc-container">
              <p>Playstation 4</p>
              <div className="mobile-mylisting-prod-status-container">
                <p><Link to="/mobilemynewlistingagreement" style={{textDecoration:"none", color:"#DFDFDF"}}>{props.status}</Link></p>
              </div>
            </div>

            <img
              src={Threedots}
              alt="threedots"
              style={{ width: ".25rem", height: "1.5rem", position:"absolute", right:"0"}}
              onClick = {() => setIsDropdown(!isDropdown)}
            />
            {isDropdown && (
              <Mylistingcarddropdown
                onclick={() => setIsDropdown(!isDropdown)}
              />
            )}
          </div>
          <div className="mobile-mylisting-lowerpart-container">
            <p>
              <span>Start date</span>27/02/2022
            </p>
            <p>
              <span>End date</span>27/02/2022
            </p>
          </div>
        </div>
      </>
    );
  }

  if (window.innerWidth <= 991) {
    return (
      <>
        <div className="mylisting-card">
          <div className="mylisting-card-con">
            <div className="mylisting-card-prod-img-container">
              <img src={Playstn} alt="playstation" />
            </div>

            <div className="mylisting-prod-name-container">
              <p>Playstation 4</p>
              <div
                className={props.class}
                style={{ cursor: "pointer" }}
                onClick={() => setIsClick(!isClick)}
              >
                <div className={props.dot}></div>
                <p>{props.status}</p>
              </div>
              {isClick && (
                <Productconfirm
                  status="Approval Pending"
                  onclick={() => setIsClick(!isClick)}
                />
              )}
            </div>

            <div className="mylisting-prod-desc-container">
              <p>
                <span>Renting Cost</span> -{" "}
              </p>
              <div className="mylisting-prod-subs-date">
                <p>
                  <span>Start Date</span>21/02/2022
                </p>
                <p>
                  <span>End Date</span>21/06/2022
                </p>
              </div>
            </div>
            <img
              src={Threedots}
              alt="threedots"
              style={{ width: ".25rem", height: "1.5rem" }}
              onClick={() => setIsDropdown(!isDropdown)}
            />
            {isDropdown && (
              <Mylistingcarddropdown
                onclick={() => setIsDropdown(!isDropdown)}
              />
            )}
          </div>
        </div>
        {props.agreeContainer && (
          <>
            <div
              className={props.agreeContainer}
              onClick={() => setIsClick(!isClick)}
              style={{ cursor: "pointer" }}
            >
              <p>
                Enter your bank details and fill the agreement to proceed or{" "}
                <span>Contact Us</span>
              </p>
            </div>
            {isClick && (
              <Mylistingagreement onclick={() => setIsClick(!isClick)} />
            )}
          </>
        )}
      </>
    );
  } 
  if(window.innerWidth <= 1200){
    return (
      <>
        <div className="mylisting-card" >
          <div className="mylisting-card-con">
            <div className="mylisting-card-prod-img-container">
              <img src={Playstn} alt="playstation" />
            </div>

            <div className="mylisting-prod-name-container">
              <p>Playstation 4</p>
              <div
                className={props.class}
                style={{ cursor: "pointer" }}
                onClick={() => setIsClick(!isClick)}
              >
                <div className={props.dot}></div>
                <p>{props.status}</p>
              </div>
              {isClick && (
                <Productconfirm
                  status="Approval Pending"
                  onclick={() => setIsClick(!isClick)}
                />
              )}
            </div>

            <div className="mylisting-prod-desc-container">
              <p>
                <span>Renting Cost</span> - {" "}
              </p>
              <p>
                <span>Start Date</span>21/02/2022
              </p>
              <p>
                <span>End Date</span>21/06/2022
              </p>
            </div>
            <img
              src={Threedots}
              alt="threedots"
              style={{ width: ".25rem", height: "1.5rem" }}
              onClick={() => setIsDropdown(!isDropdown)}
            />
            {isDropdown && (
              <Mylistingcarddropdown
                onclick={() => setIsDropdown(!isDropdown)}
              />
            )}
          </div>
        </div>
        {props.agreeContainer && (
          <>
            <div
              className={props.agreeContainer}
              onClick={() => setIsClick(!isClick)}
              style={{ cursor: "pointer" }}
            >
              <p>
                Enter your bank details and fill the agreement to proceed or{" "}
                <span>Contact Us</span>
              </p>
            </div>
            {isClick && (
              <Mylistingagreement onclick={() => setIsClick(!isClick)} />
            )}
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        <div className="mylisting-card" >
          <div className="mylisting-card-con">
            <div className="mylisting-card-prod-img-container">
              <img src={Playstn} alt="playstation" />
            </div>

            <div className="mylisting-prod-name-container">
              <p>Playstation 4</p>
              <div
                className={props.class}
                style={{ cursor: "pointer" }}
                onClick={() => setIsClick(!isClick)}
              >
                <div className={props.dot}></div>
                <p>{props.status}</p>
              </div>
              {isClick && (
                <Productconfirm
                  status="Approval Pending"
                  onclick={() => setIsClick(!isClick)}
                />
              )}
            </div>

            <div className="mylisting-prod-desc-container">
              <p>
                <span>Renting Cost</span> - {" "}
              </p>
              <p>
                <span>Start Date</span>21/02/2022
              </p>
              <p>
                <span>End Date</span>21/06/2022
              </p>
            </div>
            <img
              src={Threedots}
              alt="threedots"
              style={{ width: ".25rem", height: "1.5rem" }}
              onClick={() => setIsDropdown(!isDropdown)}
            />
            {isDropdown && (
              <Mylistingcarddropdown
                onclick={() => setIsDropdown(!isDropdown)}
              />
            )}
          </div>
        </div>
        {props.agreeContainer && (
          <>
            <div
              className={props.agreeContainer}
              onClick={() => setIsClick(!isClick)}
              style={{ cursor: "pointer" }}
            >
              <p>
                Enter your bank details and fill the agreement to proceed or{" "}
                <span>Contact Us</span>
              </p>
            </div>
            {isClick && (
              <Mylistingagreement onclick={() => setIsClick(!isClick)} />
            )}
          </>
        )}
      </>
    );
  }
};

export default Mylistingcard;
