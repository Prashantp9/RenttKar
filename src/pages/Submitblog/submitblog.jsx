import React from "react";
import "./submitblog.css";

import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
} from "../../components";
import { SmallCross, Uploadblogimg, UploadImg } from "../../assets";
import { useState } from "react";

const Submitblog = () => {
  const [addHeading, setAddheading] = useState(false);
  const [isGuide, setIsGuide] = useState(false);
  const [isView, setIsView] = useState(false);
  return (
    <>
      <Navbar />
      <div className="submit-blog-container">
        <div className="submit-blog-content">
          <div
            className="submit-create-blog-container"
            style={{
              height: addHeading ? "66rem" : "45.063rem",
            }}
          >
            <p id="create-blog-text">Create Blog</p>
            <p id="create-blog-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio leo
              posuere ultricies nec suspendisse praesent pulvinar diam.{" "}
            </p>
            <input
              type="text"
              name=""
              id="blog-title"
              placeholder="Blog title"
            />

            <div className="create-blog-img-desc-container">
              <div className="create-blog-img-container">
                <input type="file" name="" id="" />
                <img src={Uploadblogimg} alt="img" />
              </div>

              <div className="create-blog-desc-container">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Blog description/opening"
                ></textarea>
              </div>
            </div>

            <input
              type="text"
              name=""
              id="create-blog-catogery"
              placeholder="Add Tags eg: category1"
            />

            {addHeading ? (
              <>
                <div className="create-blog-add-content-container">
                  <div className="create-add-heading-input-container">
                    <input
                      type="text"
                      name=""
                      id="create-blog-add-heading"
                      placeholder="Heading"
                    />
                    <img
                      src={SmallCross}
                      alt="smallcross"
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        cursor: "pointer",
                      }}
                      onClick={() => setAddheading(!addHeading)}
                    />
                  </div>

                  <div className="create-blog-content-textarea-container">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="18"
                      placeholder="Content"
                    ></textarea>
                    <img
                      src={SmallCross}
                      alt="smallcross"
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        marginTop: "1rem",
                        cursor: "pointer",
                      }}
                      onClick={() => setAddheading(!addHeading)}
                    />
                  </div>

                  <div
                    className="create-blog-add-heading-content-container"
                    onClick={() => setAddheading(!addHeading)}
                  >
                    <p>Add Heading & Content +</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="create-blog-add-heading-content-container"
                  onClick={() => setAddheading(!addHeading)}
                  style={{ cursor: "pointer" }}
                >
                  <p>Add Heading & Content +</p>
                </div>
              </>
            )}

            <button type="submit">Submit Blog</button>
          </div>

          <div className="submit-blog-guide-view-container">
            <div className="submit-blog-guide-and-view-header-container">
              <div
                className="submit-blog-guide-header-content"
                style={{
                  background: isGuide ? "#191919" : "rgba(5, 5, 5, 0.5)",
                  cursor: "pointer",
                }}
                onClick={() => setIsGuide(!isGuide)}
              >
                <p style={{ color: isGuide ? "#DFDFDF" : "#9B9B9B" }}>Guide</p>
              </div>
              <div
                className="submit-blog-view-header-content"
                style={{
                  background: isView ? "#191919" : "rgba(5, 5, 5, 0.5)",
                  cursor: "pointer",
                }}
                onClick={() => setIsView(!isView)}
              >
                <p style={{ color: isView ? "#DFDFDF" : "#9B9B9B" }}>View</p>
              </div>
            </div>

            <div className="submit-guide-view-blog-desc-container">
            {isGuide && (
              <>
                <div className="submit-blog-guide-desc-container"></div>
              </>
            )}

            {isView && (
              <>
                <div className="submit-blog-view-desc-container"></div>
              </>
            )}
            </div>

            {isView && <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Submitblog;
