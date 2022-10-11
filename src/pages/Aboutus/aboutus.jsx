import React from "react";
import "./aboutus.css";

import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
} from "../../components";
import {
  Ceo,
  GradientLeftArrow,
  GradientRightArrow,
  Linkedin,
  Mission,
  RightArrow,
  Story,
  Tree,
} from "../../assets";
import { useState } from "react";

const Aboutus = () => {
  const [isCeo, setIsceo] = useState(false);
  const [isCto, setIscto] = useState(false);
  const [isCfo, setIscfo] = useState(false);

  if (window.innerWidth <= 576) {
    return (
      <>
        <Navbar />
        <div className="aboutus-company-desc-container">
          <div className="aboutus-company-desc-content">
            <p>
              Rentkar is a leading rental tech platform based in Mumbai, Pune,
              Bengaluru and Delhi.
            </p>
          </div>
        </div>

        <div className="aboutus-story-img-container">
          <div className="aboutus-story-img-content">
            <img src={Story} alt="story" />
          </div>
        </div>

        <div className="aboutus-our-story-container">
          <div className="aboutus-our-story-content">
            <div className="aboutus-our-story-heading-container">
              <p>Our Story</p>
            </div>

            <div className="aboutus-our-story-desc-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dignissim diam metus aliquam maecenas in. Rutrum magna sapien,
                ac eu aliquam scelerisque sed. Ut nec ac nunc, sit velit
                vulputate nulla. Convallis imperdiet aliquam aliquam in. Viverra
                ullamcorper ultricies massa arcu.
              </p>
              <img
                src={Tree}
                alt="tree"
                style={{ width: "13.492rem", height: "14.313rem" }}
              />
            </div>
          </div>
        </div>

        <div className="aboutus-mission-vision-container">
          <div className="aboutus-mission-vision-content">
            <div className="aboutus-mission-vision-heading-container">
              <p>Mission & Vision</p>
            </div>

            <div className="aboutus-mission-vision-desc-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dignissim diam metus aliquam maecenas in. Rutrum magna sapien,
                ac eu aliquam scelerisque sed. Ut nec ac nunc, sit velit
                vulputate nulla. Convallis imperdiet aliquam aliquam in. Viverra
                ullamcorper ultricies massa arcu.
              </p>
              <img
                src={Mission}
                alt="mission"
                style={{ width: "15.375rem", height: "4.82rem" }}
              />
            </div>
          </div>
        </div>

        <div className="aboutus-our-team-container">
          <div className="aboutus-our-team-content">
            <div className="aboutus-our-team-heading-container">
              <p>Our Team</p>
            </div>

            <div className="aboutus-ceo-desc-container">
              {isCeo ? (
                <>
                  <div className="aboutus-ceo-desc-content-container">
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/aditya-kudale-bb12b0158/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIsceo(!isCeo)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="aboutus-ceo-desc-card">
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>
                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CEO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIsceo(!isCeo)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}

              {isCto ? (
                <>
                  <div className="aboutus-ceo-desc-content-container">
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/tanuj-agarwal-5ba17820/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscto(!isCto)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="aboutus-ceo-desc-card">
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CTO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscto(!isCto)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}

              {isCfo ? (
                <>
                  <div className="aboutus-ceo-desc-content-container">
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/mudit-golecha-a2967518b/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscfo(!isCfo)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="aboutus-ceo-desc-card">
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CFO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscfo(!isCfo)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <Scrollerbutton />

        <Contactbutton />

        <Footer />
      </>
    );
  }


  if (window.innerWidth <= 767) {
    return (
      <>
        <Navbar />
        <div className="aboutus-company-desc-container">
          <div className="aboutus-company-desc-content">
            <p>
              Rentkar is a leading rental tech platform based in Mumbai, Pune,
              Bengaluru and Delhi.
            </p>
          </div>
        </div>

        <div className="aboutus-story-img-container">
          <div className="aboutus-story-img-content">
            <img src={Story} alt="story" />
          </div>
        </div>

        <div className="aboutus-our-story-container">
          <div className="aboutus-our-story-content">
            <div className="aboutus-our-story-heading-container">
              <p>Our Story</p>
            </div>

            <div className="aboutus-our-story-desc-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dignissim diam metus aliquam maecenas in. Rutrum magna sapien,
                ac eu aliquam scelerisque sed. Ut nec ac nunc, sit velit
                vulputate nulla. Convallis imperdiet aliquam aliquam in. Viverra
                ullamcorper ultricies massa arcu.
              </p>
              <img
                src={Tree}
                alt="tree"
                style={{ width: "13.492rem", height: "14.313rem" }}
              />
            </div>
          </div>
        </div>

        <div className="aboutus-mission-vision-container">
          <div className="aboutus-mission-vision-content">
            <div className="aboutus-mission-vision-heading-container">
              <p>Mission & Vision</p>
            </div>

            <div className="aboutus-mission-vision-desc-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dignissim diam metus aliquam maecenas in. Rutrum magna sapien,
                ac eu aliquam scelerisque sed. Ut nec ac nunc, sit velit
                vulputate nulla. Convallis imperdiet aliquam aliquam in. Viverra
                ullamcorper ultricies massa arcu.
              </p>
              <img
                src={Mission}
                alt="mission"
                style={{ width: "15.375rem", height: "4.82rem" }}
              />
            </div>
          </div>
        </div>

        <div className="aboutus-our-team-container">
          <div className="aboutus-our-team-content">
            <div className="aboutus-our-team-heading-container">
              <p>Our Team</p>
            </div>

            <div className="aboutus-ceo-desc-container">
              {isCeo ? (
                <>
                  <div className="aboutus-ceo-desc-content-container">
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/aditya-kudale-bb12b0158/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIsceo(!isCeo)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="aboutus-ceo-desc-card">
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>
                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CEO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIsceo(!isCeo)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}

              {isCto ? (
                <>
                  <div className="aboutus-ceo-desc-content-container">
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/tanuj-agarwal-5ba17820/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscto(!isCto)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="aboutus-ceo-desc-card">
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CTO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscto(!isCto)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}

              {isCfo ? (
                <>
                  <div className="aboutus-ceo-desc-content-container">
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/mudit-golecha-a2967518b/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscfo(!isCfo)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="aboutus-ceo-desc-card">
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CFO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscfo(!isCfo)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}
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
        <div className="aboutus-company-desc-container">
          <div className="aboutus-company-desc-content">
            <p>
              Rentkar is a leading rental tech platform based in Mumbai, Pune,
              Bengaluru and Delhi.
            </p>
          </div>
        </div>

        <div className="aboutus-story-img-container">
          <div className="aboutus-story-img-content">
            <img src={Story} alt="story" />
          </div>
        </div>

        <div className="aboutus-our-story-container">
          <div className="aboutus-our-story-content">
            <div className="aboutus-our-story-heading-container">
              <p>Our Story</p>
            </div>

            <div className="aboutus-our-story-desc-container">
            <img
                src={Tree}
                alt="tree"
                style={{ width: "24rem", height: "16rem" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dignissim diam metus aliquam maecenas in. Rutrum magna sapien,
                ac eu aliquam scelerisque sed. Ut nec ac nunc, sit velit
                vulputate nulla. Convallis imperdiet aliquam aliquam in. Viverra
                ullamcorper ultricies massa arcu.
              </p>
            </div>
          </div>
        </div>

        <div className="aboutus-mission-vision-container">
          <div className="aboutus-mission-vision-content">
            <div className="aboutus-mission-vision-heading-container">
              <p>Mission & Vision</p>
            </div>

            <div className="aboutus-mission-vision-desc-container">
              <img
                src={Mission}
                alt="mission"
                style={{ width: "15.75rem", height: "4.699rem" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dignissim diam metus aliquam maecenas in. Rutrum magna sapien,
                ac eu aliquam scelerisque sed. Ut nec ac nunc, sit velit
                vulputate nulla. Convallis imperdiet aliquam aliquam in. Viverra
                ullamcorper ultricies massa arcu.
              </p>
            </div>
          </div>
        </div>

        <div className="aboutus-our-team-container">
          <div className="aboutus-our-team-content">
            <div className="aboutus-our-team-heading-container">
              <p>Our Team</p>
            </div>

            <div className="aboutus-ceo-desc-container">
              {isCeo ? (
                <>
                  <div
                    className="aboutus-ceo-desc-content-container"
                  >
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/aditya-kudale-bb12b0158/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIsceo(!isCeo)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="aboutus-ceo-desc-card"
                  >
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CEO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIsceo(!isCeo)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}

              {isCto ? (
                <>
                  <div
                    className="aboutus-ceo-desc-content-container"
                  >
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/tanuj-agarwal-5ba17820/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscto(!isCto)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="aboutus-ceo-desc-card"
                  >
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CTO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscto(!isCto)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}

              {isCfo ? (
                <>
                  <div
                    className="aboutus-ceo-desc-content-container"
                  >
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/mudit-golecha-a2967518b/">
                      <img
                        src={Linkedin}
                        alt="linkedin"
                        style={{ width: "2rem", height: "2rem" }}
                      />
                    </a>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscfo(!isCfo)}
                    >
                      <p>
                        <img
                          src={GradientLeftArrow}
                          alt="leftarrow"
                          style={{ marginRight: ".5rem" }}
                        />
                        Less Info
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="aboutus-ceo-desc-card"
                  >
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CFO</p>
                    <div
                      className="aboutus-more-info-button"
                      onClick={() => setIscfo(!isCfo)}
                    >
                      <p>
                        More Info
                        <img
                          src={GradientRightArrow}
                          alt="rightarrow"
                          style={{ marginLeft: ".5rem" }}
                        />
                      </p>
                    </div>
                  </div>
                </>
              )}
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
        <div className="aboutus-company-desc-container">
          <div className="aboutus-company-desc-content">
            <p>
              Rentkar is a leading rental tech platform based in Mumbai, Pune,
              Bengaluru and Delhi.
            </p>
          </div>
        </div>

        <div className="aboutus-story-img-container">
          <div className="aboutus-story-img-content">
            <img src={Story} alt="story" />
          </div>
        </div>

        <div className="aboutus-our-story-container">
          <div className="aboutus-our-story-content">
            <div className="aboutus-our-story-heading-container">
              <p>Our Story</p>
            </div>

            <div className="aboutus-our-story-desc-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dignissim diam metus aliquam maecenas in. Rutrum magna sapien,
                ac eu aliquam scelerisque sed. Ut nec ac nunc, sit velit
                vulputate nulla. Convallis imperdiet aliquam aliquam in. Viverra
                ullamcorper ultricies massa arcu.
              </p>
              <img src={Tree} alt="tree" />
            </div>
          </div>
        </div>

        <div className="aboutus-mission-vision-container">
          <div className="aboutus-mission-vision-content">
            <div className="aboutus-mission-vision-heading-container">
              <p>Mission & Vision</p>
            </div>

            <div className="aboutus-mission-vision-desc-container">
              <img
                src={Mission}
                alt="mission"
                style={{ width: "27.75rem", height: "8.699rem" }}
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                dignissim diam metus aliquam maecenas in. Rutrum magna sapien,
                ac eu aliquam scelerisque sed. Ut nec ac nunc, sit velit
                vulputate nulla. Convallis imperdiet aliquam aliquam in. Viverra
                ullamcorper ultricies massa arcu.
              </p>
            </div>
          </div>
        </div>

        <div className="aboutus-our-team-container">
          <div className="aboutus-our-team-content">
            <div className="aboutus-our-team-heading-container">
              <p>Our Team</p>
            </div>

            <div className="aboutus-ceo-desc-container">
              {isCeo ? (
                <>
                  <div
                    className="aboutus-ceo-desc-content-container"
                    onMouseOut={() => setIsceo(!isCeo)}
                  >
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/aditya-kudale-bb12b0158/">
                      <img src={Linkedin} alt="linkedin" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="aboutus-ceo-desc-card"
                    onMouseOver={() => setIsceo(!isCeo)}
                  >
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CEO</p>
                  </div>
                </>
              )}

              {isCto ? (
                <>
                  <div
                    className="aboutus-ceo-desc-content-container"
                    onMouseOut={() => setIscto(!isCto)}
                  >
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/tanuj-agarwal-5ba17820/">
                      <img src={Linkedin} alt="linkedin" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="aboutus-ceo-desc-card"
                    onMouseOver={() => setIscto(!isCto)}
                  >
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CTO</p>
                  </div>
                </>
              )}

              {isCfo ? (
                <>
                  <div
                    className="aboutus-ceo-desc-content-container"
                    onMouseOut={() => setIscfo(!isCfo)}
                  >
                    <p>
                      Mauris placerat sapien nisi, hendrerit placerat porttitor.
                      Egestas augue sagittis ut lectus facilisis diam faucibus
                      sed odio. Aliquet scelerisque dui, imperdiet augue. Nunc
                      sed risus lectus hendrerit.
                    </p>

                    <a href="https://www.linkedin.com/in/mudit-golecha-a2967518b/">
                      <img src={Linkedin} alt="linkedin" />
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="aboutus-ceo-desc-card"
                    onMouseOver={() => setIscfo(!isCfo)}
                  >
                    <div className="aboutus-ceo-desc-img-container">
                      <img src={Ceo} alt="ceo" />
                    </div>

                    <p id="ceo-name-text">Rajendra Prasad</p>
                    <p id="ceo-text">CFO</p>
                  </div>
                </>
              )}
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

export default Aboutus;
