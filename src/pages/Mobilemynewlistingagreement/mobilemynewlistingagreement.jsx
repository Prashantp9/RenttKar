import React from "react";
import { SmallCross } from "../../assets";
import "./mobilemynewlistingagreement.css";

import { Link } from "react-router-dom";

const Mobilemynewlistingagreement = () => {
  return (
    <>
      <div className="mobile-mynewlisting-agreement-heading-container">
        <div className="mobile-mynewlisting-agreement-heading-content">
          <p>
            Agreement{" "}
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

      <div className="mobile-mynewlisting-agreement-desc-container">
        <div className="mobile-mynewlisting-agreement-desc-content">
          <div className="mobile-mynewlisting-termscondition-container">
            <p id="terms-text">Terms & Conditions</p>
            <div className="mobile-mynewlisting-termscondition-desc-container">
              <p id="terms-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                diam ut sagittis nunc sodales id cursus nisl integer. Laoreet
                tortor, nunc, vestibulum id non est a id. Imperdiet ante donec
                et semper nisi, ut rutrum ut viverra. Tellus a non amet sit nisl
                lacus laoreet. Donec eu viverra nibh elementum nunc non
                scelerisque. In turpis a sed volutpat. Eget facilisis
                condimentum lorem scelerisque. Est egestas condimentum elit
                blandit libero, sed amet, vel, maecenas. Cras bibendum gravida
                at quam est praesent turpis a. Consequat purus, eget tellus elit
                sagittis. Cras dignissim lectus vestibulum quis. Sed massa
                volutpat volutpat scelerisque lacus, aenean sed. Porttitor
                auctor consectetur quam pretium ut non, purus. Arcu vitae
                tortor, feugiat facilisis laoreet praesent. Varius fringilla
                dictum amet sit Consequat purus, eget tellus elit sagittis. Cras
                dignissim lectus vestibulum quis. Sed massa volutpat volutpat
                scelerisque lacus, aenean sed. Porttitor auctor consectetur
                pretium
              </p>
            </div>
          </div>

          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            <span>By selecting this checked box, I agree to the terms and conditions. </span>
          </label>

          <button>
            <Link to="/mobilemynewlistingpayment" style={{textDecoration:"none", color:"#FFFFFF"}}>I Agree</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Mobilemynewlistingagreement;
