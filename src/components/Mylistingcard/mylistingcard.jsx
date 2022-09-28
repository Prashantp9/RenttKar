import React, { useState } from "react";
import { Playstn, Threedots } from "../../assets";
import Mylistingcarddropdown from "../Mylistingcarddropdown/mylistingcarddropdown";
import "./mylistingcard.css";

const Mylistingcard = (props) => {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <>
      <div className="mylisting-card">
        <div className="mylisting-card-con">
          <div className="mylisting-card-prod-img-container">
            <img src={Playstn} alt="playstation" />
          </div>

          <div className="mylisting-prod-name-container">
            <p>Playstation 4</p>
            <div className={props.class}>
              <div className={props.dot}></div>
              <p>{props.status}</p>
            </div>
          </div>

          <div className="mylisting-prod-desc-container">
            <p>
              <span>Renting Cost</span> -{" "}
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
          {isDropdown && <Mylistingcarddropdown />}
        </div>
      </div>
    </>
  );
};

export default Mylistingcard;
