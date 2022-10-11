import React from "react";
import "./creditreferal.css";

import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
} from "../../components";
import {
  Facebooklogo,
  Instagramlogo,
  Leftbutton,
  Linklogo,
  Listingproduct,
  Loyal,
  Referingfriend,
  Rentingproducts,
  Rightbutton,
  Twitterlogo,
} from "../../assets";

const Creditreferal = () => {
  if (window.innerWidth <= 767) {
    return (
      <>
        <Navbar />
        <div className="mobile-credit-heading-container">
          <div className="mobile-credit-heading-content">
            <p>Credits Details</p>
          </div>
        </div>

        <div className="mobile-credit-loyality-container">
          <div className="mobile-credit-loyality-content">
            <p id="mobile-loyality-text">Loyality Points</p>
            <img
              src={Loyal}
              alt="loyal"
              style={{ width: "9rem", height: "9rem" }}
            />
            <p id="mobile-loyality-price">₹7500.00</p>
          </div>
        </div>

        <div className="mobile-credit-share-container">
          <div className="mobile-credit-share-content">
            <p id="mobile-share-text">Share and get 200 points</p>
            <div className="mobile-share-credit-code-container">
              <div className="mobile-credit-code">
                <p>RT428500</p>
              </div>
              <div className="mobile-share-copy-text">
                <p>COPY</p>
              </div>
            </div>
            <p id="mobile-sharevia-text">
              <span>Share via: </span>
              <img src={Instagramlogo} alt="insta" />{" "}
              <img src={Facebooklogo} alt="facebook" />{" "}
              <img src={Twitterlogo} alt="twitterlogo" />
            </p>
          </div>
        </div>

        <div className="mobile-get-points-container">
          <div className="mobile-get-points-content">
            <p>Get Points By</p>
            <div className="mobile-refer-friend-container">
              <div className="mobile-refer-friend-img-container">
                <img src={Referingfriend} alt="referingfriend" />
              </div>
              <div className="mobile-refer-friend-desc-container">
                <p id="mobile-refering-text">Refering a friend</p>
                <p id="mobile-refering-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <span id="refer-id-text">
                    Refer Id: <span id="refer-id-code">RT428500</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="mobile-refer-friend-container">
              <div className="mobile-refer-friend-img-container">
                <img src={Listingproduct} alt="referingfriend" />
              </div>
              <div className="mobile-refer-friend-desc-container">
                <p id="mobile-refering-text">Lending products</p>
                <p id="mobile-refering-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="mobile-refer-friend-container">
              <div className="mobile-refer-friend-img-container">
                <img src={Rentingproducts} alt="referingfriend" />
              </div>
              <div className="mobile-refer-friend-desc-container">
                <p id="mobile-refering-text">Renting products</p>
                <p id="mobile-refering-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-transaction-history-text-container">
          <div className="mobile-transaction-history-text-content">
            <p>Transaction History</p>
          </div>
        </div>

        <div className="mobile-transaction-history-container">
          <div className="mobile-transaction-history-content">
            <div className="mobile-transaction-history-table-header-container">
              <div className="transaction-his-loyal-header">
                <p>Loyalty Points</p>
              </div>

              <div className="transaction-his-details-header">
                <p>Details</p>
              </div>
            </div>

            <div className="mobile-transaction-list-details">
              <div className="mobile-transaction-loyality-point">
                <p id="green">+₹200</p>
              </div>

              <div className="mobile-transaction-details-date">
                <p id="mobile-details-desc">Iruka Kimora joind using your referal code.</p>
                <p id="mobile-details-date">21/02/2022 | 02:16 PM</p>
              </div>
            </div>


            <div className="mobile-transaction-list-details">
              <div className="mobile-transaction-loyality-point">
                <p id="red">-₹850</p>
              </div>

              <div className="mobile-transaction-details-date">
                <p id="mobile-details-desc">PS4 Order placed. Order ID: 2345751.</p>
                <p id="mobile-details-date">21/02/2022 | 02:16 PM</p>
              </div>
            </div>


            <div className="mobile-transaction-list-details">
              <div className="mobile-transaction-loyality-point">
                <p id="green">+₹200</p>
              </div>

              <div className="mobile-transaction-details-date">
                <p id="mobile-details-desc">Iruka Kimora joind using your referal code.</p>
                <p id="mobile-details-date">21/02/2022 | 02:16 PM</p>
              </div>
            </div>


            <div className="mobile-transaction-list-details">
              <div className="mobile-transaction-loyality-point">
                <p id="red">-₹850</p>
              </div>

              <div className="mobile-transaction-details-date">
                <p id="mobile-details-desc">PS4 Order placed. Order ID: 2345751.</p>
                <p id="mobile-details-date">21/02/2022 | 02:16 PM</p>
              </div>
            </div>


            <div className="mobile-transaction-list-details">
              <div className="mobile-transaction-loyality-point">
                <p id="green">+₹200</p>
              </div>

              <div className="mobile-transaction-details-date">
                <p id="mobile-details-desc">Iruka Kimora joind using your referal code.</p>
                <p id="mobile-details-date">21/02/2022 | 02:16 PM</p>
              </div>
            </div>


            <div className="mobile-transaction-list-details">
              <div className="mobile-transaction-loyality-point">
                <p id="red">-₹850</p>
              </div>

              <div className="mobile-transaction-details-date">
                <p id="mobile-details-desc">PS4 Order placed. Order ID: 2345751.</p>
                <p id="mobile-details-date">21/02/2022 | 02:16 PM</p>
              </div>
            </div>


            <p id="mobile-navigation-btn"><img src={Leftbutton} alt="leftbutton"  style={{width:"2.25rem", height:"2.25rem", marginRight:"1rem"}}/> 0 - 7 <img src={Rightbutton} alt="rightbutton" style={{width:"2.25rem", height:"2.25rem",marginLeft:"1rem"}}/></p>


            
          </div>
        </div>

        <Scrollerbutton />
        <Footer />
      </>
    );
  }
  if (window.innerWidth <= 991) {
    return (
      <>
        <Navbar />
        <div className="credit-heading-container">
          <div className="credit-heading-content">
            <p>Credit Points</p>
          </div>
        </div>

        <div className="credit-loyal-points-container">
          <div className="credit-loyal-points-content">
            <div className="credit-loyal-points">
              <p>Loyal Points</p>
              <img
                src={Loyal}
                alt="loyal"
                style={{ width: "10rem", height: "10rem" }}
              />
              <p>₹7500.00</p>
            </div>

            <div className="credit-share-container">
              <p id="share-heading">Share and get 200 points</p>
              <p id="share-credit">1 Share Credit = 1₹</p>
              <div className="credit-referal-code">
                <div className="referal-code-container">
                  <p id="referal-code">RT428500</p>
                </div>
                <div className="referal-copy-container">
                  <p id="referal-copy">COPY</p>
                </div>
              </div>

              <p id="share-via">
                <span>Share via:</span>{" "}
                <img
                  src={Instagramlogo}
                  alt="instagram"
                  style={{ width: "2rem", height: "2rem" }}
                />{" "}
                <img
                  src={Facebooklogo}
                  alt="facebook"
                  style={{ width: "2rem", height: "2rem" }}
                />{" "}
                <img
                  src={Twitterlogo}
                  alt="twitterlogo"
                  style={{ width: "2rem", height: "2rem" }}
                />{" "}
                <img
                  src={Linklogo}
                  alt="link"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="credit-get-points-container">
          <div className="credit-get-points-content">
            <p id="get-point-text">Get Points By</p>
            <div className="credit-types-container">
              <div className="credit-refering-friend-container">
                <img src={Referingfriend} alt="referingproducts" />
                <p id="credit-point-heading">Refering a friend</p>
                <p id="credit-point-desc">
                  Eu ornare at non est praesent proin aliquet ut. Feugiat enim
                  quisque ipsum.
                </p>
                <p id="credit-refer-id">
                  Refer Id: <span>RT428500</span>
                </p>
              </div>

              <div className="credit-listing-product-container">
                <img src={Listingproduct} alt="listingproduct" />
                <p id="credit-point-heading">Listing products</p>
                <p id="credit-point-desc">
                  Eu ornare at non est praesent proin aliquet ut. Feugiat enim
                  quisque ipsum vitae sed aliquam consectetur.
                </p>
              </div>

              <div className="credit-renting-products-container">
                <img src={Rentingproducts} alt="rentingproducts" />
                <p id="credit-point-heading">Renting products</p>
                <p id="credit-point-desc">
                  Eu ornare at non est praesent proin aliquet ut. Feugiat enim
                  quisque ipsum vitae sed aliquam consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="credit-transaction-heading-container">
          <div className="credit-transaction-heading-content">
            <p>Transaction History</p>
          </div>
        </div>

        <div className="credit-transaction-container">
          <div className="credit-transaction-content">
            <div className="credit-transaction-header-container">
              <div className="credit-loyality-header">
                <p>Loyalty Points</p>
              </div>

              <div className="credit-details-header">
                <p>Details</p>
              </div>

              <div className="credit-datetime-header">
                <p>Date & Time</p>
              </div>
            </div>

            <div className="credit-transaction-content-container">
              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="green-point">+₹200</p>
                </div>

                <div className="credit-details">
                  <p>Iruka Kimora joind using your referal code.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="red-point">+₹850</p>
                </div>

                <div className="credit-details">
                  <p>PS4 Order placed. Order ID: 2345751.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="green-point">+₹200</p>
                </div>

                <div className="credit-details">
                  <p>Iruka Kimora joind using your referal code.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="red-point">+₹850</p>
                </div>

                <div className="credit-details">
                  <p>PS4 Order placed. Order ID: 2345751.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="green-point">+₹200</p>
                </div>

                <div className="credit-details">
                  <p>Iruka Kimora joind using your referal code.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="red-point">+₹850</p>
                </div>

                <div className="credit-details">
                  <p>PS4 Order placed. Order ID: 2345751.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="green-point">+₹200</p>
                </div>

                <div className="credit-details">
                  <p>Iruka Kimora joind using your referal code.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="red-point">+₹850</p>
                </div>

                <div className="credit-details">
                  <p>PS4 Order placed. Order ID: 2345751.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="credit-navigation-button">
              <img
                src={Leftbutton}
                alt="leftbutton"
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
              <p style={{ marginRight: "2rem", marginLeft: "2rem" }}>0 - 7</p>
              <img
                src={Rightbutton}
                alt="rightbutton"
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="credit-heading-container">
          <div className="credit-heading-content">
            <p>Credit Points</p>
          </div>
        </div>

        <div className="credit-loyal-points-container">
          <div className="credit-loyal-points-content">
            <div className="credit-loyal-points">
              <p>Loyal Points</p>
              <img
                src={Loyal}
                alt="loyal"
                style={{ width: "8rem", height: "8rem" }}
              />
              <p>₹7500.00</p>
            </div>

            <div className="credit-share-container">
              <p id="share-heading">Share and get 200 points</p>
              <p id="share-credit">1 Share Credit = 1₹</p>
              <div className="credit-referal-code">
                <div className="referal-code-container">
                  <p id="referal-code">RT428500</p>
                </div>
                <div className="referal-copy-container">
                  <p id="referal-copy">COPY</p>
                </div>
              </div>

              <p id="share-via">
                <span>Share via:</span>{" "}
                <img
                  src={Instagramlogo}
                  alt="instagram"
                  style={{ width: "2rem", height: "2rem" }}
                />{" "}
                <img
                  src={Facebooklogo}
                  alt="facebook"
                  style={{ width: "2rem", height: "2rem" }}
                />{" "}
                <img
                  src={Twitterlogo}
                  alt="twitterlogo"
                  style={{ width: "2rem", height: "2rem" }}
                />{" "}
                <img
                  src={Linklogo}
                  alt="link"
                  style={{ width: "2rem", height: "2rem" }}
                />
              </p>
            </div>

            <div className="credit-gold-container">
              <p id="gold-text">Gold Membership</p>
              <p id="coming-text">Coming Soon!</p>
              <p id="gold-content">
                Eget euismod vel lectus tincidunt. Sed non enim amet, dolor
                vitae id.
              </p>
            </div>
          </div>
        </div>

        <div className="credit-get-points-container">
          <div className="credit-get-points-content">
            <p id="get-point-text">Get Points By</p>
            <div className="credit-types-container">
              <div className="credit-refering-friend-container">
                <img src={Referingfriend} alt="referingproducts" />
                <p id="credit-point-heading">Refering a friend</p>
                <p id="credit-point-desc">
                  Eu ornare at non est praesent proin aliquet ut. Feugiat enim
                  quisque ipsum.
                </p>
                <p id="credit-refer-id">
                  Refer Id: <span>RT428500</span>
                </p>
              </div>

              <div className="credit-listing-product-container">
                <img src={Listingproduct} alt="listingproduct" />
                <p id="credit-point-heading">Listing products</p>
                <p id="credit-point-desc">
                  Eu ornare at non est praesent proin aliquet ut. Feugiat enim
                  quisque ipsum vitae sed aliquam consectetur.
                </p>
              </div>

              <div className="credit-renting-products-container">
                <img src={Rentingproducts} alt="rentingproducts" />
                <p id="credit-point-heading">Renting products</p>
                <p id="credit-point-desc">
                  Eu ornare at non est praesent proin aliquet ut. Feugiat enim
                  quisque ipsum vitae sed aliquam consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="credit-transaction-heading-container">
          <div className="credit-transaction-heading-content">
            <p>Transaction History</p>
          </div>
        </div>

        <div className="credit-transaction-container">
          <div className="credit-transaction-content">
            <div className="credit-transaction-header-container">
              <div className="credit-loyality-header">
                <p>Loyalty Points</p>
              </div>

              <div className="credit-details-header">
                <p>Details</p>
              </div>

              <div className="credit-datetime-header">
                <p>Date & Time</p>
              </div>
            </div>

            <div className="credit-transaction-content-container">
              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="green-point">+₹200</p>
                </div>

                <div className="credit-details">
                  <p>Iruka Kimora joind using your referal code.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="red-point">+₹850</p>
                </div>

                <div className="credit-details">
                  <p>PS4 Order placed. Order ID: 2345751.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="green-point">+₹200</p>
                </div>

                <div className="credit-details">
                  <p>Iruka Kimora joind using your referal code.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="red-point">+₹850</p>
                </div>

                <div className="credit-details">
                  <p>PS4 Order placed. Order ID: 2345751.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="green-point">+₹200</p>
                </div>

                <div className="credit-details">
                  <p>Iruka Kimora joind using your referal code.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="red-point">+₹850</p>
                </div>

                <div className="credit-details">
                  <p>PS4 Order placed. Order ID: 2345751.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="green-point">+₹200</p>
                </div>

                <div className="credit-details">
                  <p>Iruka Kimora joind using your referal code.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>

              <div className="credit-transaction-list-content">
                <div className="credit-loyality-points">
                  <p id="red-point">+₹850</p>
                </div>

                <div className="credit-details">
                  <p>PS4 Order placed. Order ID: 2345751.</p>
                </div>

                <div className="credit-time">
                  <p>
                    <span>21/02/2022</span> | <span>02:16 PM</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="credit-navigation-button">
              <img
                src={Leftbutton}
                alt="leftbutton"
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
              <p style={{ marginRight: "2rem", marginLeft: "2rem" }}>0 - 7</p>
              <img
                src={Rightbutton}
                alt="rightbutton"
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  }
};

export default Creditreferal;
