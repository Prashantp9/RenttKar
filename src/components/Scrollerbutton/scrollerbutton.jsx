import React, { useEffect, useState } from "react";

import "./scrollerbutton.css";

import { Scroll, GoTop, UpArrow } from "../../assets";


const Gotopbutton = (props) => {

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  if (window.innerWidth < 576) {
    return (
      <>
        <div className={props.class}>
          <div className="mobileGoTopContent" onClick={goToTop}>
            <img src={GoTop} alt="goTop" className="goTop" />
            <img src={UpArrow} alt="upArrow" className="upArrow" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        {showTopBtn && (
          <div className="reScroll" onClick={goToTop}>
            <img src={Scroll} alt="" className="scrollImg" />
          </div>
        )}
      </>
    );
  }
};

const Scrollerbutton = (props) => {
    return(
      <>
        <Gotopbutton class={props.class}/>
      </>
    )
};

export default Scrollerbutton;
