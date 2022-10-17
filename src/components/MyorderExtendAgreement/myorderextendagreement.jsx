import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MyorderExtendPayment } from "..";
import { PriceInfo, Rupees, SmallCross } from "../../assets";
import "./myorderextendagreement.css";

const Myorderextendagreement = (props) => {
  const [isPayment, setIsPayment] = useState(false);
  useEffect(() => {
    if(isPayment) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "relative";
    }
  })

  if (window.innerWidth <= 768) {
    return (
      <>
        <div className="myorder-extend-agreement-container">
          <div className="myorder-extend-agreement-content">
            <div className="myorder-extend-agreement-upperpart">
              <p id="extend-agreement-text">Extend Package Date <img src={SmallCross} alt="" style={{width:"1.75rem", height:"1.75rem", cursor:"pointer"}} onClick={props.onclick}/></p>
              <div className="myorder-extend-agreement-tab-container">
                <div className="myorder-extend-agreement-tab">
                  <p id="extend-agreement-active">Agreement</p>
                  <p style={{ cursor: "pointer" }}>
                    Payment
                  </p>
                </div>
                <div className="myorder-extend-termscondition-container">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    diam ut sagittis nunc sodales id cursus nisl integer.
                    Laoreet tortor, nunc, vestibulum id non est a id. Imperdiet
                    ante donec et semper nisi, ut rutrum ut viverra. Tellus a
                    non amet sit nisl lacus laoreet. Donec eu viverra nibh
                    elementum nunc non scelerisque. In turpis a sed volutpat.
                    Eget facilisis condimentum lorem scelerisque. Est egestas
                    condimentum elit blandit libero, sed amet, vel, maecenas.
                    Cras bibendum gravida at quam est praesent turpis a.
                    Consequat purus, eget tellus elit sagittis. Cras dignissim
                    lectus vestibulum quis. Sed massa volutpat volutpat
                    scelerisque lacus, aenean sed. Porttitor auctor consectetur
                    quam pretium ut non, purus. Arcu vitae tortor, feugiat
                    facilisis laoreet praesent. Varius fringilla Eget facilisis
                    condimentum lorem scelerisque. Est egestas condimentum elit
                    blandit libero Laoreet tortor, nunc, vestibulum id non est a
                    id. Imperdiet ansa. get facilisis condimentum lorem
                    scelerisque. Est egestas condimentum elit blandit libero,
                    sed amet, vel, maecenas.
                  </p>
                </div>
                <label htmlFor="extendagreement">
                  <input
                    type="checkbox"
                    name="extendagreement"
                    id=""
                    style={{
                      width: "1rem",
                      height: "1rem",
                      background: "transparent",
                    }}
                  />
                  <span style={{ marginLeft: ".5rem" }}>
                    By selecting this checked box , I agree to the terms and
                    conditions.
                  </span>
                </label>
              </div>
            </div>
            <div className="myorder-extend-agreement-lowerpart">
              <p>New End Date <span>21/09/2022</span></p>
              <p>
                Total cost:{" "}
                <span style={{ marginLeft: "1rem" }}>
                  {" "}
                  <img
                    src={Rupees}
                    alt="rupees"
                    style={{ height: "1.2rem", marginRight: ".2rem" }}
                  />{" "}
                  750.00{" "}
                  <img
                    src={PriceInfo}
                    alt="priceinfo"
                    style={{ marginLeft: ".5rem" }}
                  />
                </span>
              </p>
              <button type="submit" onClick={() => setIsPayment(!isPayment)}>
                I Agree
              </button>
              {isPayment && <MyorderExtendPayment onclick={props.onclick}/>}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-extend-agreement-container">
          <div className="myorder-extend-agreement-content">
            <div className="myorder-extend-agreement-upperpart">
              <p id="extend-agreement-text">Extend Package Date</p>
              <div className="myorder-extend-agreement-tab-container">
                <div className="myorder-extend-agreement-tab">
                  <p id="extend-agreement-active">Agreement</p>
                  <p style={{ cursor: "pointer" }}>
                    Payment
                  </p>
                </div>
                <div className="myorder-extend-termscondition-container">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                    diam ut sagittis nunc sodales id cursus nisl integer.
                    Laoreet tortor, nunc, vestibulum id non est a id. Imperdiet
                    ante donec et semper nisi, ut rutrum ut viverra. Tellus a
                    non amet sit nisl lacus laoreet. Donec eu viverra nibh
                    elementum nunc non scelerisque. In turpis a sed volutpat.
                    Eget facilisis condimentum lorem scelerisque. Est egestas
                    condimentum elit blandit libero, sed amet, vel, maecenas.
                    Cras bibendum gravida at quam est praesent turpis a.
                    Consequat purus, eget tellus elit sagittis. Cras dignissim
                    lectus vestibulum quis. Sed massa volutpat volutpat
                    scelerisque lacus, aenean sed. Porttitor auctor consectetur
                    quam pretium ut non, purus. Arcu vitae tortor, feugiat
                    facilisis laoreet praesent. Varius fringilla Eget facilisis
                    condimentum lorem scelerisque. Est egestas condimentum elit
                    blandit libero Laoreet tortor, nunc, vestibulum id non est a
                    id. Imperdiet ansa. get facilisis condimentum lorem
                    scelerisque. Est egestas condimentum elit blandit libero,
                    sed amet, vel, maecenas.
                  </p>
                </div>
                <label htmlFor="extendagreement">
                  <input
                    type="checkbox"
                    name="extendagreement"
                    id=""
                    style={{
                      width: "1rem",
                      height: "1rem",
                      background: "transparent",
                    }}
                  />
                  <span style={{ marginLeft: ".5rem" }}>
                    By selecting this checked box , I agree to the terms and
                    conditions.
                  </span>
                </label>
              </div>
            </div>
            <div className="myorder-extend-agreement-lowerpart">
              <p>
                Total cost:{" "}
                <span style={{ marginLeft: "1rem" }}>
                  {" "}
                  <img
                    src={Rupees}
                    alt="rupees"
                    style={{ height: "1.2rem", marginRight: ".2rem" }}
                  />{" "}
                  750.00{" "}
                  <img
                    src={PriceInfo}
                    alt="priceinfo"
                    style={{ marginLeft: ".5rem" }}
                  />
                </span>
              </p>
              <button type="submit" onClick={() => setIsPayment(!isPayment)}>
                Proceed
              </button>
              {isPayment && <MyorderExtendPayment onclick={props.onclick}/>}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Myorderextendagreement;
