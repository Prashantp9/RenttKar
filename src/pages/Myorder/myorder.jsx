import React from "react";
import { useState } from "react";
import { Filter, Help, Playstn, Sort, Threedots } from "../../assets";
import { Footer, MyorderCard, Navbar, Sliderproductcard } from "../../components";
import "./myorder.css";

const Myorder = () => {
  const [isFilter, setIsFilter] = useState(false);
  const handlefilterModal = () => {
    setIsFilter((prevState) => !prevState);
  };

  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  if (window.innerWidth <= 500) {
    return <></>;
  } else {
    return (
      <>
        <Navbar />
        <div className="myorder-text-container">
          <div className="myorder-text-content">
            <p>My Orders</p>
          </div>
        </div>

        <div className="myorder-type-container">
          <div className="myorder-type-content">
            <p
              style={{
                background: isActive ? "var(--btn-border-gradient)" : "",
                backgroundClip: isActive ? "text" : "",
                WebkitBackgroundClip: isActive ? "text" : "",
                WebkitTextFillColor: isActive ? "transparent" : "",
                backgroundClip: isActive ? "text" : "",
              }}
              onClick={handleClick}
            >
              All Order
            </p>
            <p
              onClick={handleClick}
            >
              Live Order
            </p>
            <p
              onClick={handleClick}
            >
              Subscriptions
            </p>
            <p
              onClick={handleClick}
            >
              Completed Order
            </p>
          </div>
        </div>

        <div className="myorder-sort-container">
          <div className="myorder-sort-content">
            <p>
              <img src={Sort} alt="sort" /> Sort:
            </p>
            <div className="myorder-recent-filter" onClick={handlefilterModal}>
              <p>
                Recent <img src={Filter} alt="filter" />
              </p>
            </div>
          </div>
        </div>

        {isFilter && (
          <>
            <div className="myorder-filter-container">
              <div className="myorder-filter-content">
                <div className="myorder-choose-filter">
                  <label htmlFor="recent" onClick={handlefilterModal}>
                    <input type="radio" name="recent" id="" />
                    <span style={{ marginLeft: ".5rem" }}>Recent</span>
                  </label>

                  <label htmlFor="old" onClick={handlefilterModal}>
                    <input type="radio" name="old" id="" />
                    <span style={{ marginLeft: ".5rem" }}>Old</span>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="myorder-extended-card-container">
          <div className="myorder-extended-card-content">
            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
              class="myorder-dealbreaker"
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />

            <MyorderCard
              prodImg={Playstn}
              productname="Playstation 4"
              orderstatus="Order Incomplete"
              help={Help}
              threedots={Threedots}
            />
          </div>
        </div>

        <div className="mycart-suggestion-container">
          <div className="mycart-suggestion-content">
            <Sliderproductcard text="You Might Also Like" />
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default Myorder;
