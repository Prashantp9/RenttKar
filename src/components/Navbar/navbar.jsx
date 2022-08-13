import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import "./navbar.css";

// images
import {
  Logo,
  Location,
  Search,
  MobileSearch,
  Cart,
  Ham,
  Cross,
  Recent,
  DownArrow, Banglore, Mumbai, Pune, Delhi,
} from "../../assets";


// ========================== Searchsuggestion components============================
const Searchsuggestion = () => (
  <>
    <div className="searchSuggestionContainer">
      <div className="searchSuggestion">
        <li className="item1" style={{borderBottom: "1px solid #242424"}}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Playstation</span>
        </li>
        <li className="item2" style={{borderBottom: "1px solid #242424"}}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Ps4</span>
        </li>
        <li className="item3" style={{borderBottom: "1px solid #242424"}}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Havells</span>
        </li>
        <li className="item4" style={{borderBottom: "1px solid #242424"}}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Laptop</span>
        </li>
        <li className="item5" style={{borderBottom: "1px solid #242424"}}>
          {" "}
          <img src={Recent} alt="" className="recentImg" />
          <span className="itemText">Gopro9</span>
        </li>
        <li className="item6" style={{borderBottom: "1px solid #242424"}}>
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
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState("Mumbai");
  

  if(window.innerWidth <= 768){
    return (
      <div className="dropdownContainer">
      <div className="dropdownContent">
      <div className="Content"></div>
      <div className="dropDown">
        <ul>
          
          <li>
            <Link to="/login" className="menu6">
              Login/Sign-up
            </Link>
          </li>

          <div className="dropDown-section">
          <li style={{cursor: "pointer"}}>
            <a href={() => setIsOpen(!isOpen)} className="menu7" onClick={() => setIsOpen(!isOpen)}>
              {city}  <img src={DownArrow} alt="downArrow" />
            </a>
            {isOpen && 
            <div className="container">
            <div className="containerContent" style={{opacity: "1"}}>
            <div className="locationContainer" style={{opacity: "1"}}>
                <h1 className='selectCity'>Select your City</h1>
                <img src={Cross} alt="close" className='close' onClick={() => setIsOpen(!isOpen)}/>
                <div className="cityContainer">
                    <div className="city banglore" onClick={function(){setCity("Banglore"); setIsOpen(!isOpen)}}>
                        <img src={Banglore} alt="" className='cityImg'/>
                        <p className='cityName bangloreCity'>Banglore</p>
                    </div>
                    <div className="city mumbai" onClick={function(){setCity("Mumbai"); setIsOpen(!isOpen)}}>
                        <img src={Mumbai} alt="" className='cityImg'/>
                        <p className='cityName mumbaiCity'>Mumbai</p>
                    </div>
                    <div className="city pune" onClick={function(){setCity("Pune"); setIsOpen(!isOpen)}}>
                        <img src={Pune} alt="" className='cityImg'/>
                        <p className='cityName puneCity'>Pune</p>
                    </div>
                    <div className="city delhi" onClick={function(){setCity("Delhi"); setIsOpen(!isOpen)}}>
                        <img src={Delhi} alt="" className='cityImg'/>
                        <p className='cityName delhiCity'>Delhi</p>
                    </div>
                </div>
            </div>
            </div>
        </div>}
          </li>

          <li>
            <a href="" className="menu8">
              My Cart
            </a>
          </li>

          <li>
            <a href="" className="menu9">
                Catogeries
            </a>
          </li>
          </div>
        
          <li>
            <a href="" className="menu1" style={{color: "#ffffff"}}>
                List Items
            </a>
          </li>

          <li>
            <a href="" className="menu2">
              How Renting Works
            </a>
          </li>
          
          <li>
            <a href="" className="menu3">
              Rentkar for Business
            </a>
          </li>
          
          <li>
            <a href="" className="menu4">
              Rentkar for Events
            </a>
          </li>

          <li>
            <a href="" className="menu5">
              Invest in Ecosystem
            </a>
          </li>
        </ul>
      </div>
      </div>
      </div>
    )
  }else{
    return (
      <div className="dropdownContainer">
      <div className="dropdownContent">
      <div className="Content"></div>
      <div className="dropDown">
      <a href="" className="menu6">
          My Order
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
    )
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


  return (
    <div className="navbarContainer">
      <div className="navbarContent">
    
        
        {/* logo */}
        <a href="">
          <img src={Logo} alt="" className="navbarLogo" />
        </a>



        {/* city button */}
        <button
          className="cityButton"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="buttonContent">
            <span className="locationLogo">
              <img src={Location} alt="" />
            </span>
            <span className="place" style={{ marginLeft: "0.2 rem" }}> {city}</span>
          </div>
        </button>
        {isOpen && 
            <div className="container">
            <div className="containerContent" style={{opacity: "1"}}>
            <div className="locationContainer" style={{opacity: "1"}}>
                <h1 className='selectCity'>Select your City</h1>
                <img src={Cross} alt="close" className='close' onClick={() => setIsOpen(!isOpen)}/>
                <div className="cityContainer">
                    <div className="city banglore"  onClick={function(){setCity("Banglore"); setIsOpen(!isOpen);}}>
                        <img src={Banglore} alt="" className='cityImg'/>
                        <p className='cityName bangloreCity'>Banglore</p>
                    </div>
                    <div className="city mumbai" onClick={function(){setCity("Mumbai"); setIsOpen(!isOpen)}}>
                        <img src={Mumbai} alt="" className='cityImg'/>
                        <p className='cityName mumbaiCity'>Mumbai</p>
                    </div>
                    <div className="city pune" onClick={function(){setCity("Pune"); setIsOpen(!isOpen)}}>
                        <img src={Pune} alt="" className='cityImg'/>
                        <p className='cityName puneCity'>Pune</p>
                    </div>
                    <div className="city delhi" onClick={function(){setCity("Delhi"); setIsOpen(!isOpen)}}>
                        <img src={Delhi} alt="" className='cityImg'/>
                        <p className='cityName delhiCity'>Delhi</p>
                    </div>
                </div>
            </div>
            </div>
        </div>}



        {/* search bar */}

        {isClicked ? (
          <>
            <div
              className="afterSearch"
              style={{opacity: 1}}
            >
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
          
        <button className="mobile-search-btn" onClick={(e) => setMobileSearch(!isMobileSearch)}>
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
                <button className="mobileCrossBtn" onClick={(e) => setMobileSearch(!isMobileSearch)}>
                  <img src={Cross} alt="" className="Cross" />
                </button>
              </div>
            </div>
            <Searchsuggestion />
          </div>
        )}

        
        
        {/* cart button */}
        <button className="cartButton">
          <div className="buttonContent">
            <span className="locationLogo">
              <img src={Cart} alt="" />
            </span>
            <span className="place" style={{ marginLeft: "0.5rem" }}>
              MyCart
            </span>
          </div>
        </button>

        
        
        {/* login button */}
        <button className="loginButton" type="submit">
          <Link to="/login" style={{textDecoration:"none"}}><span className="loginText">Login/Sign-up</span></Link>
        </button>

        
        
        {/* dropdown button */}
        <button className="dropButton" onClick={(e) => setToggleMenu(!toggleMenu)}>
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
