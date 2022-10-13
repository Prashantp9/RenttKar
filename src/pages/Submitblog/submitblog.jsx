import React from "react";
import "./submitblog.css";

import {
  Contactbutton,
  Footer,
  Navbar,
  Scrollerbutton,
} from "../../components";
import {
  Refresh,
  Share,
  SmallCross,
  TabletBlog,
  Uploadblogimg,
  UploadImg,
} from "../../assets";
import { useState, useReducer } from "react";

const Submitblog = () => {
  const [addHeading, setAddheading] = useState(false);
  const [isGuide, setIsGuide] = useState(true);
  const [isView, setIsView] = useState(false);

  const handleGuide = () => {
    setIsView(false);
    setIsGuide(true);
  };

  const handleView = () => {
    setIsGuide(false);
    setIsView(true);
  };

  return (
    <>
      <Navbar />
      <div className="submit-blog-container">
        <div className="submit-blog-content">
          <div
            className="submit-create-blog-container"
            style={{
              height: addHeading ? "66rem" : "50.063rem",
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
                onClick={handleGuide}
              >
                <p style={{ color: isGuide ? "#DFDFDF" : "#9B9B9B" }}>Guide</p>
              </div>
              <div
                className="submit-blog-view-header-content"
                style={{
                  background: isView ? "#191919" : "rgba(5, 5, 5, 0.5)",
                  cursor: "pointer",
                }}
                onClick={handleView}
              >
                <p style={{ color: isView ? "#DFDFDF" : "#9B9B9B" }}>View</p>
              </div>
            </div>

            <div className="submit-guide-view-blog-desc-container">
              {isGuide && (
                <>
                  <div className="submit-blog-guide-desc-container">
                    <p>
                      <span>.</span>{" "}
                      <span>
                        Praesent ac ut tristique enim, lobortis consectetur
                        faucibus sagittis nisl.
                      </span>
                    </p>

                    <p>
                      <span>.</span>{" "}
                      <span>Nulla phasellus quis a cursus pulvinar.</span>
                    </p>

                    <p>
                      <span>.</span>{" "}
                      <span>Pharetra ac enim ut erat a at etiam.</span>
                    </p>

                    <p>
                      <span>.</span>{" "}
                      <span>
                        Non proin condimentum pharetra erat pulvinar facilisis
                        nunc integer.
                      </span>
                    </p>

                    <p>
                      <span>.</span>{" "}
                      <span>Fermentum, imperdiet bibendum eget feugiat.</span>
                    </p>

                    <p>
                      <span>.</span>{" "}
                      <span>
                        A posuere magnis ullamcorper purus pharetra Ante a eu
                        donec et, fringilla.
                      </span>
                    </p>

                    <p>
                      <span>.</span>{" "}
                      <span>
                        Ante a eu donec et, fringilla. Porta dolor a eu a
                        faucibus duis integer. Viverra aliquet id feugiat
                        aliquam molestie non amet, tristique dui. Eget nam
                        pulvinar sed elementum.
                      </span>
                    </p>

                    <p>
                      <span>.</span>{" "}
                      <span>Pharetra ac enim ut erat a at etiam.</span>
                    </p>
                  </div>
                </>
              )}

              {isView && (
                <>
                  <div className="submit-blog-view-desc-container">
                    <div className="submit-blog-view-desc-refresh-container">
                      <img src={Refresh} alt="referesh" />
                      <p>Refresh</p>
                    </div>

                    <div className="submit-view-blog-content-container">
                      <div className="submit-view-blog-img-container">
                        <img src={TabletBlog} alt="tabletblog" />
                      </div>
                      <div className="submit-view-blog-heading-container">
                        <p>Resources for creating your own reading app</p>
                      </div>
                      <div className="submit-view-blog-info-container">
                        <p>
                          <span>
                            By <span>Rentkar</span>
                          </span>
                        </p>
                        <p>
                          <span>February 16, 2022</span>
                        </p>
                        <p id="gradient-share">
                          <span>Share</span>{" "}
                          <img
                            src={Share}
                            alt="share"
                            style={{ width: "1rem", height: ".5rem" }}
                          />
                        </p>
                      </div>

                      <div className="submit-view-blog-first-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Tempor dignissim diam metus aliquam maecenas in.
                          Rutrum magna sapien, ac eu aliquam scelerisque sed. Ut
                          nec ac nunc, sit velit vulputate nulla. Convallis
                          imperdiet aliquam aliquam in. Viverra ullamcorper
                          ultricies massa arcu.
                        </p>

                        <p>
                          Auctor congue volutpat id nulla nunc tristique
                          ullamcorper interdum. Bibendum pulvinar laoreet nibh
                          ultricies quisque ut neque augue consectetur.
                          Scelerisque sapien, velit egestas libero pulvinar nunc
                          tempor facilisis nullam. Iaculis sit quis eget arcu
                          nisi morbi ultrices ut elit. Pharetra gravida quis
                          adipiscing gravida tincidunt eu aliquam enim, gravida.
                        </p>
                      </div>

                      <div className="submit-view-blog-second-content">
                        <p id="view-blog-second-heading">
                          Resources for creating your own reading app
                        </p>
                        <p id="view-blog-second-desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nascetur potenti vulputate lacus, duis tristique
                          et ut suscipit. Lorem quam tristique vestibulum,
                          mattis etiam quam lectus. Aliquet aliquam egestas
                          mauris rhoncus. Faucibus adipiscing arcu sit
                          ullamcorper duis libero, orci. Sodales pellentesque
                          amet non, nulla id gravida
                        </p>

                        <p id="view-blog-second-desc">
                          Luctus cursus viverra tortor sagittis nisi. Metus,
                          lorem nulla neque netus commodo.
                        </p>
                      </div>

                      <div className="submit-view-blog-second-content">
                        <p id="view-blog-second-heading">
                          Resources for creating your own reading app
                        </p>
                        <p id="view-blog-second-desc">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Massa pulvinar ut feugiat lobortis sagittis
                          eget. Ac vitae gravida placerat sapien. Faucibus fusce
                          tincidunt magna justo ut duis. Blandit mollis nisi,
                          justo, cras neque.
                        </p>

                        <p id="view-blog-second-desc">
                          Iaculis nunc consequat, dolor vitae, magna accumsan,
                          nulla praesent fames. Lacus massa id enim, nulla
                          elementum. Elementum, nisi odio natoque mauris
                          consectetur magna amet et morbi. Luctus turpis arcu
                          egestas duis.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submitblog;
