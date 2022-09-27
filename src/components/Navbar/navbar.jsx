import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import "./navbar.css";

// images
import {
  HeaderLogo,
  Location,
  Search,
  MobileSearch,
  Cart,
  Ham,
  Cross,
  Recent,
  DownArrow,
  Banglore,
  Mumbai,
  Pune,
  Delhi,
  SmallCross,
  UpArrow,
  GradientUpArrow,
  GradientDownArrow,
} from "../../assets";

// ========================== Searchsuggestion components============================
const Searchsuggestion = () => (
  <>
    <div className="searchSuggestionContainer">
      <div className="searchSuggestion">
        <li className="item1" style={{ borderBottom: "1px solid #242424" }}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">
            <Link to="/searchresultfound" style={{ textDecoration: "none" }}>
              Playstation
            </Link>
          </span>
        </li>
        <li className="item2" style={{ borderBottom: "1px solid #242424" }}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Ps4</span>
        </li>
        <li className="item3" style={{ borderBottom: "1px solid #242424" }}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">
            <Link to="/searchresultnotfound" style={{ textDecoration: "none" }}>
              Havells
            </Link>
          </span>
        </li>
        <li className="item4" style={{ borderBottom: "1px solid #242424" }}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Laptop</span>
        </li>
        <li className="item5" style={{ borderBottom: "1px solid #242424" }}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Gopro9</span>
        </li>
        <li className="item6" style={{ borderBottom: "1px solid #242424" }}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Playstation 5</span>
        </li>
      </div>
    </div>
  </>
);

// ========================== Dropdown components============================
const Dropdown = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("Mumbai");
  const [cityState, changeCityState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  });

  const toggleActive = (index) => {
    changeCityState({ ...cityState, activeObject: cityState.objects[index] });
  };

  function toggleActiveStyles(index) {
    if (cityState.objects[index] === cityState.activeObject) {
      return "city active";
    } else {
      return "city ";
    }
  }

  if (window.innerWidth <= 320) {
    return (
      <div className="dropdownContainer"
      style={{
        height: isLogin ? "30rem" : "22rem",
      }}
      >
        <div className="dropdownContent">
          <div className="Content"></div>
          <div
            className="dropDown"
            style={{
              height: isLogin ? "30rem" : "22rem",
            }}
          >
            <ul>
              <li onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? (
                  <p className="menu6">
                    <Link to="/login">Ronak Kumar <img src={GradientUpArrow} alt="uparrow" /></Link>
                  </p>
                ) : (
                  <p className="menu6">
                    Login/Sign-up{" "}
                    <img src={GradientDownArrow} alt="downarrow" />
                  </p>
                )}
              </li>
              {isLogin && (
                <>
                  <li className="menu10">My Profile</li>
                  <li className="menu11">
                    <Link to="/myorder" style={{textDecoration:"none", color:"#FFFFFF"}}>My Order</Link>
                  </li>
                  <li className="menu12">My Listing</li>
                  <li className="menu13">My Credit</li>
                </>
              )}

              <div
                className="dropDown-section"
                style={{
                  top: isLogin ? "11rem" : "3rem",
                }}
              >
                <li style={{ cursor: "pointer" }}>
                  <a
                    href={() => setIsOpen(!isOpen)}
                    className="menu7"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {city} <img src={DownArrow} alt="downArrow" />
                  </a>
                  {isOpen && (
                    <div className="container">
                      <div
                        className="containerContent"
                        style={{ opacity: "1" }}
                      >
                        <div
                          className="locationContainer"
                          style={{ opacity: "1" }}
                        >
                          <h1 className="selectCity">Select your City</h1>
                          <img
                            src={Cross}
                            alt="close"
                            className="close"
                            onClick={() => setIsOpen(!isOpen)}
                          />
                          <div className="cityContainer">
                            <div
                              className={toggleActiveStyles(0)}
                              onClick={function () {
                                setCity("Banglore");
                                toggleActive(0);
                              }}
                            >
                              <img src={Banglore} alt="" className="cityImg" />
                              <p className="cityName bangloreCity">Banglore</p>
                            </div>
                            <div
                              className={toggleActiveStyles(1)}
                              onClick={function () {
                                setCity("Mumbai");
                                toggleActive(1);
                              }}
                            >
                              <img src={Mumbai} alt="" className="cityImg" />
                              <p className="cityName mumbaiCity">Mumbai</p>
                            </div>
                            <div
                              className={toggleActiveStyles(2)}
                              onClick={function () {
                                setCity("Pune");
                                toggleActive(2);
                              }}
                            >
                              <img src={Pune} alt="" className="cityImg" />
                              <p className="cityName puneCity">Pune</p>
                            </div>
                            <div
                              className={toggleActiveStyles(3)}
                              onClick={function () {
                                setCity("Delhi");
                                toggleActive(3);
                              }}
                            >
                              <img src={Delhi} alt="" className="cityImg" />
                              <p className="cityName delhiCity">Delhi</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <Link to="/mycart" className="menu8">
                    My Cart
                  </Link>
                </li>

                <li>
                  <a href="" className="menu9">
                    Catogeries
                  </a>
                </li>
              </div>

              <li>
                <a
                  href=""
                  className="menu1"
                  style={{
                    color: "#ffffff",
                    top: isLogin ? "19.5rem" : "12rem",
                  }}
                >
                  List Items
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="menu2"
                  style={{
                    top: isLogin ? "21.5rem" : "14rem",
                  }}
                >
                  How Renting Works
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="menu3"
                  style={{
                    top: isLogin ? "23.5rem" : "16rem",
                  }}
                >
                  Rentkar for Business
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="menu4"
                  style={{
                    top: isLogin ? "25.5rem" : "18rem",
                  }}
                >
                  Rentkar for Events
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="menu5"
                  style={{
                    top: isLogin ? "27.5rem" : "20rem",
                  }}
                >
                  Invest in Ecosystem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (window.innerWidth <= 768) {
    return (
      <div className="dropdownContainer"
      style={{
        height: isLogin ? "36rem" : "28rem",
      }}
      >
        <div className="dropdownContent">
          <div className="Content"></div>
          <div
            className="dropDown"
            style={{
              height: isLogin ? "36rem" : "28rem",
            }}
          >
            <ul>
              <li onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? (
                  <p className="menu6">
                    <Link to="/login">Ronak Kumar <img src={GradientUpArrow} alt="uparrow" /></Link>
                  </p>
                ) : (
                  <p className="menu6">
                    Login/Sign-up{" "}
                    <img src={GradientDownArrow} alt="downarrow" />
                  </p>
                )}
              </li>
              {isLogin && (
                <>
                  <li className="menu10">My Profile</li>
                  <li className="menu11">
                    <Link to="/myorder" style={{textDecoration:"none", color:"#FFFFFF"}}>My Order</Link>
                  </li>
                  <li className="menu12">My Listing</li>
                  <li className="menu13">My Credit</li>
                </>
              )}

              <div
                className="dropDown-section"
                style={{
                  top: isLogin ? "14rem" : "4rem",
                }}
              >
                <li style={{ cursor: "pointer" }}>
                  <a
                    href={() => setIsOpen(!isOpen)}
                    className="menu7"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {city} <img src={DownArrow} alt="downArrow" />
                  </a>
                  {isOpen && (
                    <div className="container">
                      <div
                        className="containerContent"
                        style={{ opacity: "1" }}
                      >
                        <div
                          className="locationContainer"
                          style={{ opacity: "1" }}
                        >
                          <h1 className="selectCity">Select your City</h1>
                          <img
                            src={Cross}
                            alt="close"
                            className="close"
                            onClick={() => setIsOpen(!isOpen)}
                          />
                          <div className="cityContainer">
                            <div
                              className={toggleActiveStyles(0)}
                              onClick={function () {
                                setCity("Banglore");
                                toggleActive(0);
                              }}
                            >
                              <img src={Banglore} alt="" className="cityImg" />
                              <p className="cityName bangloreCity">Banglore</p>
                            </div>
                            <div
                              className={toggleActiveStyles(1)}
                              onClick={function () {
                                setCity("Mumbai");
                                toggleActive(1);
                              }}
                            >
                              <img src={Mumbai} alt="" className="cityImg" />
                              <p className="cityName mumbaiCity">Mumbai</p>
                            </div>
                            <div
                              className={toggleActiveStyles(2)}
                              onClick={function () {
                                setCity("Pune");
                                toggleActive(2);
                              }}
                            >
                              <img src={Pune} alt="" className="cityImg" />
                              <p className="cityName puneCity">Pune</p>
                            </div>
                            <div
                              className={toggleActiveStyles(3)}
                              onClick={function () {
                                setCity("Delhi");
                                toggleActive(3);
                              }}
                            >
                              <img src={Delhi} alt="" className="cityImg" />
                              <p className="cityName delhiCity">Delhi</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                <li>
                  <Link to="/mycart" className="menu8">
                    My Cart
                  </Link>
                </li>

                <li>
                  <a href="" className="menu9">
                    Catogeries
                  </a>
                </li>
              </div>

              <li>
                <a
                  href=""
                  className="menu1"
                  style={{
                    color: "#ffffff",
                    top: isLogin ? "23rem" : "14rem",
                  }}
                >
                  List Items
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="menu2"
                  style={{
                    top: isLogin ? "25.5rem" : "16.5rem",
                  }}
                >
                  How Renting Works
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="menu3"
                  style={{
                    top: isLogin ? "28rem" : "19rem",
                  }}
                >
                  Rentkar for Business
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="menu4"
                  style={{
                    top: isLogin ? "30.5rem" : "21.5rem",
                  }}
                >
                  Rentkar for Events
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="menu5"
                  style={{
                    top: isLogin ? "33rem" : "24rem",
                  }}
                >
                  Invest in Ecosystem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="dropdownContainer">
        <div className="dropdownContent">
          <div className="Content"></div>
          <div className="dropDown">
            <a href="" className="menu6">
              <Link to="/myorder">My Order</Link>
            </a>
            <a href="" className="menu1">
              Share Your Products
            </a>
            <a href="" className="menu2">
              How Renting Works
            </a>
            <a href="" className="menu3">
              Rentkar for Business
            </a>
            <a href="" className="menu4">
              Rentkar for Events
            </a>
            <a href="" className="menu5">
              Invest in Ecosystem
            </a>
          </div>
        </div>
      </div>
    );
  }
};

// ========================== Navbar components============================
const Navbar = () => {
  // ===================== Hooks ==========================
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobileSearch, setMobileSearch] = useState(false);
  const [city, setCity] = useState("Mumbai");
  const [cityState, changeCityState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  });

  const toggleActive = (index) => {
    changeCityState({ ...cityState, activeObject: cityState.objects[index] });
  };

  function toggleActiveStyles(index) {
    if (cityState.objects[index] === cityState.activeObject) {
      return "city active";
    } else {
      return "city ";
    }
  }

  return (
    <div className="navbarContainer">
      <div className="navbarContent">
        {/* logo */}
        <Link to="/" className="headerLogo">
          <img src={HeaderLogo} alt="" className="navbarLogo" />
        </Link>

        {/* city button */}
        <button className="cityButton" onClick={() => setIsOpen(!isOpen)}>
          <div className="buttonContent">
            <span className="locationLogo">
              <img src={Location} alt="" />
            </span>
            <span className="place" style={{ marginLeft: "0.2 rem" }}>
              {" "}
              {city}
            </span>
          </div>
        </button>
        {isOpen && (
          <div className="container">
            <div className="containerContent" style={{ opacity: "1" }}>
              <div className="locationContainer" style={{ opacity: "1" }}>
                <h1 className="selectCity">Select your City</h1>
                <img
                  src={Cross}
                  alt="close"
                  className="close"
                  onClick={() => setIsOpen(!isOpen)}
                />
                <div className="cityContainer">
                  <div
                    className={toggleActiveStyles(0)}
                    onClick={function () {
                      setCity("Banglore");
                      toggleActive(0);
                    }}
                  >
                    <img src={Banglore} alt="" className="cityImg" />
                    <p className="cityName bangloreCity">Banglore</p>
                  </div>
                  <div
                    className={toggleActiveStyles(1)}
                    onClick={function () {
                      setCity("Mumbai");
                      toggleActive(1);
                    }}
                  >
                    <img src={Mumbai} alt="" className="cityImg" />
                    <p className="cityName mumbaiCity">Mumbai</p>
                  </div>
                  <div
                    className={toggleActiveStyles(2)}
                    onClick={function () {
                      setCity("Pune");
                      toggleActive(2);
                    }}
                  >
                    <img src={Pune} alt="" className="cityImg" />
                    <p className="cityName puneCity">Pune</p>
                  </div>
                  <div
                    className={toggleActiveStyles(3)}
                    onClick={function () {
                      setCity("Delhi");
                      toggleActive(3);
                    }}
                  >
                    <img src={Delhi} alt="" className="cityImg" />
                    <p className="cityName delhiCity">Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* search bar */}

        {isClicked ? (
          <>
            <div className="afterSearch" style={{ opacity: 1 }}>
              <input
                className="afterSearchInput"
                type="search"
                name="search"
                id=""
                placeholder="Search product"
                onClick={(e) => setIsClicked(isClicked)}
              />
              <button onClick={() => setIsClicked(!isClicked)}>
                <img className="afterSearchButton" src={Cross} alt="" />
              </button>
            </div>
            <Searchsuggestion />
          </>
        ) : (
          <div className="beforeSearch">
            <input
              className="beforeSearchInput"
              type="search"
              name="search"
              id=""
              placeholder="Search product"
              onClick={(e) => setIsClicked(!isClicked)}
            />
            <button type="submit">
              <img className="beforeSearchButton" src={Search} alt="" />
            </button>
          </div>
        )}

        <button
          className="mobile-search-btn"
          onClick={(e) => setMobileSearch(!isMobileSearch)}
        >
          <img src={MobileSearch} alt="" />
        </button>
        {isMobileSearch && (
          <div className="mobileSearchContainer">
            <div className="mobileSearchContent">
              <div className="mobile-search">
                <img src={MobileSearch} alt="" />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search Product"
                  className="mobile-search-input"
                />
                <button
                  className="mobileCrossBtn"
                  onClick={(e) => setMobileSearch(!isMobileSearch)}
                >
                  <img src={Cross} alt="" className="Cross" />
                </button>
              </div>
            </div>
            <Searchsuggestion />
          </div>
        )}

        {/* cart button */}
        <button className="cartButton">
          <Link
            to="/mycart"
            className="buttonContent"
            style={{ textDecorartion: "none", textDecorationLine: "none" }}
          >
            <span className="locationLogo">
              <img src={Cart} alt="" />
            </span>
            <span className="place" style={{ marginLeft: "0.5rem" }}>
              MyCart
            </span>
          </Link>
        </button>

        {/* login button */}
        <button className="loginButton" type="submit">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="loginText">Login/Sign-up</span>
          </Link>
        </button>

        {/* dropdown button */}
        <button
          className="dropButton"
          onClick={(e) => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <img src={Cross} alt="" className="cross" />
          ) : (
            <img src={Ham} alt="" className="ham" />
          )}
        </button>
        {toggleMenu && <Dropdown />}
      </div>
    </div>
  );
};

export default Navbar;
