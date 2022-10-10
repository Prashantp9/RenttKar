import React from "react";
import "./blog.css";

import { Blogcard, Contactbutton, Footer, Navbar, Scrollerbutton } from "../../components";
import { Blog1, Blog2, Blog3, Blog4, Next, RightArrow, TabletBlog } from "../../assets";

import { Link } from "react-router-dom";

const Blog = () => {
    if(window.innerWidth <= 576){
        return (
            <>
              <Navbar />
              <div className="blog-header-container">
                <p id="blog-heading-text">RentKar Blog</p>
                <p id="blog-heading-desc">Learn how renting can save environment</p>
                <button>Create Blog +</button>
              </div>
        
              <div className="blog-catogery-container">
                <div className="blog-catogery-content">
                  <p>Catogery 1</p>
                  <p>Catogery 2</p>
                  <p style={{border:"none"}}>Catogery 3</p>
                </div>
              </div>
        
        
              <div className="blog-card-container">
                <div className="blog-card-content">
                  <div className="blog-cards-content-upperpart">
                    <Blogcard
                      img={Blog1}
                      heading="Resources for creating your own reading app"
                    />
        
                    <Blogcard
                      img={Blog2}
                      heading="Surround yourself with nature with Rentkar"
                    />
        
                    <Blogcard
                      img={Blog3}
                      heading="Turning suastainability into a great user experience"
                    />
        
                    <Blogcard img={Blog1} heading="The Best Reading Apps" />
                  </div>
        
                  <button>
                    Next Page <img src={Next} alt="next"  style={{width:"0.938rem", height:"0.938rem"}}/>
                  </button>
                </div>
              </div>
        
                <Scrollerbutton />
        
                <Contactbutton />
        
              <Footer />
            </>
          );
    } 
    if(window.innerWidth <= 991){
        return (
            <>
              <Navbar />
              <div className="blog-header-container">
                <p id="blog-heading-text">RentKar Blog</p>
                <p id="blog-heading-desc">Learn how renting can save environment</p>
                <button>Create Blog +</button>
              </div>
        
              <div className="blog-catogery-container">
                <div className="blog-catogery-content">
                  <p>Catogery 1</p>
                  <p>Catogery 2</p>
                  <p>Catogery 3</p>
                  <p style={{border:"none"}}>Catogery 4</p>
                </div>
              </div>
        
              <div className="blog-upper-card-container">
                <div className="blog-upper-card-content">
                  <div className="blog-upper-card-img-container">
                    <img src={TabletBlog} alt="blog" />
                  </div>
        
                  <div className="blog-upper-card-desc-container">
                    <p id="blog-uppercard-heading">
                      Resources for creating your own reading app
                    </p>
                    <div className="blog-uppercard-desc-cat-container">
                      <p>
                        <span>Catogery 1</span>
                      </p>
                      <p>
                        <span>Catogery 2</span>
                      </p>
                    </div>
        
                    <p id="blog-uppercard-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac non
                      est, euismod sed at adipiscing molestie. Nibh massa sed faucibus
                      eu, eros, integer. Tellus scelerisque quis ac mauris enim. Diam ut
                      aliquet orci turpis turpis vel sed varius pellentesque. Nunc
                      pharetra suspendisse elementum id massa id libero...
                    </p>
        
                    <div className="blog-uppercard-datetime-container">
                      <p>By Rentkar</p>
                      <p>1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
        
              <div className="blog-card-container">
                <div className="blog-card-content">
                  <div className="blog-cards-content-upperpart">
                    <Blogcard
                      img={Blog1}
                      heading="Resources for creating your own reading app"
                    />
        
                    <Blogcard
                      img={Blog2}
                      heading="Surround yourself with nature with Rentkar"
                    />
        
                    <Blogcard
                      img={Blog3}
                      heading="Turning suastainability into a great user experience"
                    />
        
                    <Blogcard img={Blog1} heading="The Best Reading Apps" />
        
                    <Blogcard
                      img={Blog1}
                      heading="Resources for creating your own reading app"
                    />
        
                    <Blogcard
                      img={Blog2}
                      heading="Surround yourself with nature with Rentkar"
                    />
        
                    <Blogcard
                      img={Blog3}
                      heading="Turning suastainability into a great user experience"
                    />
        
                    <Blogcard img={Blog1} heading="The Best Reading Apps" />
        
                  </div>
        
                  <button>
                    Next Page <img src={Next} alt="next"  style={{width:"0.938rem", height:"0.938rem"}}/>
                  </button>
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
              <div className="blog-header-container">
                <p id="blog-heading-text">RentKar Blog</p>
                <p id="blog-heading-desc">Learn how renting can save environment</p>
              </div>
        
              <div className="blog-catogery-container">
                <div className="blog-catogery-content">
                  <p>Catogery 1</p>
                  <p>Catogery 2</p>
                  <p>Catogery 3</p>
                  <p>Catogery 4</p>
                  <p style={{ border: "none" }}>Catogery 5</p>
                  <div className="blog-create-btn">
                    <p>Create Blog +</p>
                  </div>
                </div>
              </div>
        
              <Link to="/readblog" style={{textDecoration:"none"}}>
              <div className="blog-upper-card-container" >
                <div className="blog-upper-card-content">
                  <div className="blog-upper-card-img-container">
                    <img src={TabletBlog} alt="blog" />
                  </div>
        
                  <div className="blog-upper-card-desc-container">
                    <p id="blog-uppercard-heading" >
                      Resources for creating your own reading app
                    </p>
                    <div className="blog-uppercard-desc-cat-container">
                      <p>
                        <span>Catogery 1</span>
                      </p>
                      <p>
                        <span>Catogery 2</span>
                      </p>
                    </div>
        
                    <p id="blog-uppercard-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac non
                      est, euismod sed at adipiscing molestie. Nibh massa sed faucibus
                      eu, eros, integer. Tellus scelerisque quis ac mauris enim. Diam ut
                      aliquet orci turpis turpis vel sed varius pellentesque. Nunc
                      pharetra suspendisse elementum id massa id libero...
                    </p>
        
                    <div className="blog-uppercard-datetime-container">
                      <p>By Rentkar</p>
                      <p>1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
        
              <div className="blog-card-container">
                <div className="blog-card-content">
                  <div className="blog-cards-content-upperpart">
                    <Blogcard
                      img={Blog1}
                      heading="Resources for creating your own reading app"
                    />
        
                    <Blogcard
                      img={Blog2}
                      heading="Surround yourself with nature with Rentkar"
                    />
        
                    <Blogcard
                      img={Blog3}
                      heading="Turning suastainability into a great user experience"
                    />
        
                    <Blogcard img={Blog1} heading="The Best Reading Apps" />
        
                    <Blogcard
                      img={Blog1}
                      heading="Resources for creating your own reading app"
                    />
        
                    <Blogcard
                      img={Blog2}
                      heading="Surround yourself with nature with Rentkar"
                    />
        
                    <Blogcard
                      img={Blog3}
                      heading="Turning suastainability into a great user experience"
                    />
        
                    <Blogcard img={Blog1} heading="The Best Reading Apps" />
        
                    <Blogcard
                      img={Blog1}
                      heading="Resources for creating your own reading app"
                    />
                  </div>
        
                  <button>
                    Next Page <img src={Next} alt="next"  style={{width:"0.938rem", height:"0.938rem"}}/>
                  </button>
                </div>
              </div>
        
                <Scrollerbutton />
        
                <Contactbutton />
        
              <Footer />
            </>
          );
    }
};

export default Blog;
