import React from "react";
import {
  Email,
  GradientEmail,
  GradientLocation,
  GradientMobile,
} from "../../assets";
import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
} from "../../components";
import "./contactus.css";

const Contactus = () => {
  if (window.innerWidth <= 576) {
    return (
      <>
        <Navbar />
        <div className="contact-conversation-container">
          <div className="contact-conversation-content">
            <div className="contact-desc-container">
              <p id="contact-lets-text">Lets start a Conversation!</p>
              <p id="contact-phone-text">
                <img
                  src={GradientMobile}
                  alt="gradientmobile"
                  style={{
                    width: "1.5rem",
                    height: "2.3rem",
                    marginRight: "1rem",
                  }}
                />
                <span>Phone +91 9916632521</span>
              </p>
              <p id="contact-address">
                <img
                  src={GradientLocation}
                  alt="location"
                  style={{
                    width: "1.5rem",
                    height: "2.5rem",
                    marginRight: "1rem",
                  }}
                />
                <span>
                  303, 304 Royal Enclave Parsi Panchayat Road, Old Nagardas Rd,
                  Mumbai 400069
                </span>
              </p>
              <p id="contact-email">
                <img
                  src={GradientEmail}
                  alt="email"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "1rem",
                  }}
                />{" "}
                <span>rentkar.operations@gmail.com</span>
              </p>
            </div>

            <div className="contact-input-container">
              <input type="text" name="" id="" placeholder="Your name" />
              <input type="email" name="" id="" placeholder="Your email" />
              <input
                type="tel"
                name=""
                id=""
                placeholder="Your mobile-number"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
              <button type="submit">Send Message</button>
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  }
  if (window.innerWidth <= 991) {
    return (
      <>
        <Navbar />
        <div className="contact-conversation-container">
          <div className="contact-conversation-content">
            <div className="contact-desc-container">
              <p id="contact-us-text">Contact Us</p>
              <p id="contact-lets-text">Get in touch with us !</p>
              <p id="contact-phone-text">
                <img
                  src={GradientMobile}
                  alt="gradientmobile"
                  style={{
                    width: "1.5rem",
                    height: "2.3rem",
                    marginRight: "1rem",
                  }}
                />
                <span>Phone +91 9916632521</span>
              </p>
              <p id="contact-address">
                <img
                  src={GradientLocation}
                  alt="location"
                  style={{
                    width: "1.5rem",
                    height: "2.5rem",
                    marginRight: "1rem",
                  }}
                />
                <span>
                  303, 304 Royal Enclave Parsi Panchayat Road, Old Nagardas Rd,
                  Mumbai 400069
                </span>
              </p>
              <p id="contact-email">
                <img
                  src={GradientEmail}
                  alt="email"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "1rem",
                  }}
                />{" "}
                <span>rentkar.operations@gmail.com</span>
              </p>
            </div>

            <div className="contact-input-container">
              <input type="text" name="" id="" placeholder="Your name" />
              <input type="email" name="" id="" placeholder="Your email" />
              <input
                type="tel"
                name=""
                id=""
                placeholder="Your mobile-number"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
              <button type="submit">Send Message</button>
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
        <div className="contact-conversation-container">
          <div className="contact-conversation-content">
            <div className="contact-desc-container">
              <p id="contact-lets-text">Lets start a Conversation!</p>
              <p id="contact-phone-text">
                <img
                  src={GradientMobile}
                  alt="gradientmobile"
                  style={{
                    width: "1.5rem",
                    height: "2.3rem",
                    marginRight: "1rem",
                  }}
                />
                <span>Phone +91 9916632521</span>
              </p>
              <p id="contact-address">
                <img
                  src={GradientLocation}
                  alt="location"
                  style={{
                    width: "1.5rem",
                    height: "2.5rem",
                    marginRight: "1rem",
                  }}
                />
                <span>
                  303, 304 Royal Enclave Parsi Panchayat Road, Old Nagardas Rd,
                  Mumbai 400069
                </span>
              </p>
              <p id="contact-email">
                <img
                  src={GradientEmail}
                  alt="email"
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "1rem",
                  }}
                />{" "}
                <span>rentkar.operations@gmail.com</span>
              </p>
            </div>

            <div className="contact-input-container">
              <input type="text" name="" id="" placeholder="Your name" />
              <input type="email" name="" id="" placeholder="Your email" />
              <input
                type="tel"
                name=""
                id=""
                placeholder="Your mobile-number"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message"
              ></textarea>
              <button type="submit">Send Message</button>
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

export default Contactus;
