import React,{useState} from "react";
import { MyordercardDropdown, MyorderExtendPackage, MyorderProductsupport } from "..";
import "./myordercard.css";

const Myordercard = (props) => {
    const[isDropdown, setIsDropdown] = useState(false);
    const[isProductsupport, setIsProductsupport] = useState(false)
    const[isPackageExtend, setIsPackageExtend] = useState(false)
  return (
    <>
      <div className="myorder-card">
        <div className="myorder-upperpart">
          <div className="myorder-product-img">
            <img src={props.prodImg} alt={props.prodImg} />
          </div>
          <div className="myorder-extended-product-name">
            <p>{props.productname}</p>
            <button type="submit" onClick={() => setIsPackageExtend(!isPackageExtend)}>Extend Date</button>
            {isPackageExtend && 
              <MyorderExtendPackage onclick={() => setIsPackageExtend(!isPackageExtend)}/>
            }
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
            <p style={{ flexDirection: "row", cursor:"pointer" }} onClick={() => setIsProductsupport(!isProductsupport)}>
              <img src={props.help} alt={props.help} style={{width:"1rem", height:"1rem", marginRight:".5rem"}}/> <span>Help</span>
            </p>
            {isProductsupport && (
                <MyorderProductsupport onclick={() => setIsProductsupport(!isProductsupport)}/>
            )}
          </div>
          <img src={props.threedots} alt={props.threedots} style={{width:"0.275rem", height:"1.5rem", cursor:"pointer"}} onClick={() => setIsDropdown(!isDropdown)}/>
          {isDropdown && (
                <MyordercardDropdown />
          )}
        </div>
      </div>
      {props.class && (
        <>
          <div className={props.class}>
            <p>
              <span style={{ marginRight: ".5rem" }}>Deal Breaker:</span> Get
              20% Off on extending tennure for 2 Months{" "}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Myordercard;
