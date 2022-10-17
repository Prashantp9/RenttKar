import React, { useState } from "react";
import {
  MyordercardDropdown,
  MyorderExtendPackage,
  MyorderProductsupport,
} from "..";
import {
  DownArrow,
  Pc,
  PriceInfo,
  TabletDelete,
  TabletEdit,
  Threedots,
} from "../../assets";
import "./myordercard.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Myordercard = (props) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isProductsupport, setIsProductsupport] = useState(false);
  const [isPackageExtend, setIsPackageExtend] = useState(false);

  useEffect(() => {
    if (isProductsupport || isPackageExtend) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "relative";
    }
  });

  if (window.innerWidth <= 500) {
    return (
      <>
        <div className="mobile-myorder-card">
          <div className="mobile-myorder-upperpart">
            <div className="mobile-myorder-prodimg">
              <img src={Pc} alt="pc" />
            </div>
            <div className="mobile-myorder-prodname">
              <p>Playstation 4</p>
              <button type="submit">
                <Link
                  to="/mobilemyorderextend"
                  style={{ textDecoration: "none", color: "#FFFFFF" }}
                >
                  Extend Date
                </Link>
              </button>
            </div>
            <img
              src={Threedots}
              alt="threedots"
              style={{ width: "0.313rem", height: "1.5rem" }}
              onClick={() => setIsDropdown(!isDropdown)}
            />
            {isDropdown && (
              <MyordercardDropdown onclick={() => setIsDropdown(!isDropdown)} />
            )}
          </div>

          <div className="mobile-myorder-lowerpart">
            <p>
              <span>End date</span>27/02/2022
            </p>
            <p>
              <span>Status</span>Order Incomplete
            </p>
          </div>
        </div>
      </>
    );
  }
  if (window.innerWidth <= 768) {
    return (
      <>
        <div className="tablet-myorder-card">
          <div className="tablet-myorder-card-content">
            <div className="tablet-myorder-card-img">
              <img src={Pc} alt="pc" />
            </div>

            <div className="tablet-myorder-card-product-desc">
              <p>Playstation 4</p>
              <button
                type="submit"
                onClick={() => setIsPackageExtend(!isPackageExtend)}
              >
                Extend Date
              </button>
              {isPackageExtend && (
                <MyorderExtendPackage
                  onclick={() => setIsPackageExtend(!isPackageExtend)}
                />
              )}
            </div>

            <div className="tablet-myorder-card-button">
              <p>
                End date <span>21/05/2022</span>
              </p>
              <p>
                Status <span>Order Incomplete</span>
              </p>
            </div>
            <img
              src={Threedots}
              alt="threedots"
              onClick={() => setIsDropdown(!isDropdown)}
              style={{ width: ".25rem", height: "1.5rem" }}
            />
            {isDropdown && <MyordercardDropdown />}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="myorder-card">
          <div className="myorder-upperpart">
            <div className="myorder-product-img">
              <img src={props.prodImg} alt={props.prodImg} />
            </div>
            <div className="myorder-extended-product-name">
              <p>{props.productname}</p>
              <button
                type="submit"
                onClick={() => setIsPackageExtend(!isPackageExtend)}
              >
                Extend Date
              </button>
              {isPackageExtend && (
                <MyorderExtendPackage
                  onclick={() => setIsPackageExtend(!isPackageExtend)}
                />
              )}
            </div>
            <div className="myorder-product-desc">
              <p>
                {" "}
                Start date <span>21/05/2022</span>
              </p>
              <p>
                {" "}
                Start date <span>21/05/2022</span>
              </p>
              <p>
                {" "}
                Status <span>{props.orderstatus}</span>
              </p>
              <p
                style={{ flexDirection: "row", cursor: "pointer" }}
                onClick={() => setIsProductsupport(!isProductsupport)}
              >
                <img
                  src={props.help}
                  alt={props.help}
                  style={{
                    width: "1rem",
                    height: "1rem",
                    marginRight: ".5rem",
                  }}
                />{" "}
                <span>Help</span>
              </p>
              {isProductsupport && (
                <MyorderProductsupport
                  onclick={() => setIsProductsupport(!isProductsupport)}
                />
              )}
            </div>
            <img
              src={props.threedots}
              alt={props.threedots}
              style={{ width: "0.275rem", height: "1.5rem", cursor: "pointer" }}
              onClick={() => setIsDropdown(!isDropdown)}
            />
            {isDropdown && <MyordercardDropdown />}
          </div>
        </div>
        {props.class && (
          <>
            <div
              className={props.class}
              style={{ cursor: "pointer" }}
              onClick={() => setIsPackageExtend(!isPackageExtend)}
            >
              <p>
                <span style={{ marginRight: ".5rem" }}>Deal Breaker:</span> Get
                20% Off on extending tennure for 2 Months{" "}
              </p>
            </div>
            {isPackageExtend && (
              <MyorderExtendPackage
                onclick={() => setIsPackageExtend(!isPackageExtend)}
              />
            )}
          </>
        )}
      </>
    );
  }
};

export default Myordercard;
