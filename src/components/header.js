import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial login status to false

  // Function to handle user login (can be replaced with actual login logic)
  const handleLogin = () => {
    setIsLoggedIn(true); // Update login status to true
  };

  // Function to handle user logout (can be replaced with actual logout logic)
  const handleLogout = () => {
    setIsLoggedIn(false); // Update login status to false
  };
  return (

<div className="rbt-header-elements bg-color-white rbt-section-gapBottom">
  <div className="container">
    <div className="row mb--55">
      <div className="col-lg-12">
        <div className="section-title text-center">
          <h5 className="title">Header (12).</h5>
          <p className="description mt--10">Awesome Header Style.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Start Header Area */}
  <header className="rbt-header">
    <div className="rbt-header-campaign rbt-header-campaign-1 rbt-header-top-news bg-image1">
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner justify-content-center">
                <div className="content">
                  <span className="rbt-badge variation-02 bg-color-primary color-white radius-round">Limited Time Offer</span>
                  <span className="news-text color-white-off"><img src="assets/images/icons/hand-emojji.svg" alt="Hand Emojji Images" /> Intro price. Get Pro Learnify for Big Sale -95% off.</span>
                </div>
                <div className="right-button">
                  <a className="rbt-btn-link color-white" href="https://themeforest.net/checkout/from_item/42846507?license=regular">
                    <span>Purchase Now <i className="feather-arrow-right" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-close position-right">
        <button className="rbt-round-btn btn-white-off bgsection-activation">
          <i className="feather-x" />
        </button>
      </div>
    </div>
    <div className="rbt-sticky-placeholder" />
    <div className="rbt-header-wrapper">
      <div className="container">
        <div className="mainbar-row rbt-navigation-center align-items-center">
          <div className="header-left">
            <div className="logo">
              <a href="index.html">
                <img src="assets/images/logo/logo.png" alt="Education Logo Images" />
              </a>
            </div>
          </div>
          <div className="rbt-main-navigation d-none d-xl-block">
            <nav className="mainmenu-nav onepagenav">
              <ul className="mainmenu">
                <li className="current">
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#guideline">Course Guideline</a>
                </li>
                <li>
                  <a href="#coursecontent">Course Content</a>
                </li>
                <li>
                  <a href="#career">Career</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            {/* Start OffCanvas Menu  */}
            <div className="rbt-offcanvas-trigger" id="rbt-offcanvas-activation">
              <span className="offcanvas-trigger">
                <span className="offcanvas-bars">
                  <span />
                  <span />
                  <span />
                </span>
              </span>
            </div>
            {/* End OffCanvas Menu  */}
          </div>
        </div>
      </div>
      {/* Start Search Dropdown  */}
      <div className="rbt-search-dropdown">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-12">
              <form action="#">
                <input type="text" placeholder="What are you looking for?" />
                <div className="submit-btn">
                  <a className="rbt-btn btn-gradient btn-md" href="#">Search</a>
                </div>
              </form>
            </div>
          </div>
          <div className="rbt-separator-mid">
            <hr className="rbt-separator m-0" />
          </div>
          <div className="row g-4 pt--30 pb--60">
            <div className="col-lg-12">
              <div className="section-title">
                <h5 className="rbt-title-style-2">Our Top Course</h5>
              </div>
            </div>
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="course-details.html">
                    <img src="assets/images/course/course-online-01.jpg" alt="Card image" />
                  </a>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title"><a href="course-details.html">React Js</a>
                  </h5>
                  <div className="rbt-review">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="rating-count"> (15 Reviews)</span>
                  </div>
                  <div className="rbt-card-bottom">
                    <div className="rbt-price">
                      <span className="current-price">$15</span>
                      <span className="off-price">$25</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="course-details.html">
                    <img src="assets/images/course/course-online-02.jpg" alt="Card image" />
                  </a>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title"><a href="course-details.html">Java Program</a>
                  </h5>
                  <div className="rbt-review">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="rating-count"> (15 Reviews)</span>
                  </div>
                  <div className="rbt-card-bottom">
                    <div className="rbt-price">
                      <span className="current-price">$10</span>
                      <span className="off-price">$40</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="course-details.html">
                    <img src="assets/images/course/course-online-03.jpg" alt="Card image" />
                  </a>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title"><a href="course-details.html">Web Design</a>
                  </h5>
                  <div className="rbt-review">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="rating-count"> (15 Reviews)</span>
                  </div>
                  <div className="rbt-card-bottom">
                    <div className="rbt-price">
                      <span className="current-price">$10</span>
                      <span className="off-price">$20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            {/* Start Single Card  */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="course-details.html">
                    <img src="assets/images/course/course-online-04.jpg" alt="Card image" />
                  </a>
                </div>
                <div className="rbt-card-body">
                  <h5 className="rbt-card-title"><a href="course-details.html">Web Design</a>
                  </h5>
                  <div className="rbt-review">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="rating-count"> (15 Reviews)</span>
                  </div>
                  <div className="rbt-card-bottom">
                    <div className="rbt-price">
                      <span className="current-price">$20</span>
                      <span className="off-price">$40</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
          </div>
        </div>
      </div>
      {/* End Search Dropdown  */}
    </div>
  </header>
  {/* Start Side Vav */}
  <div className="side-menu">
    <div className="inner-wrapper">
      <div className="inner-top">
        <div className="content">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo/logo.png" alt="Education Logo Images" />
            </a>
          </div>
          <div className="rbt-btn-close" id="btn_sideNavClose">
            <button className="rbt-round-btn"><i className="feather-x" /></button>
          </div>
        </div>
        <p className="description">Pro Learnify is a education website template. You can customize all.</p>
        <ul className="navbar-top-left rbt-information-list justify-content-start">
          <li>
            <a href="mailto:hello@example.com"><i className="feather-mail" />example@gmail.com</a>
          </li>
          <li>
            <a href="#"><i className="feather-phone" />(302) 555-0107</a>
          </li>
        </ul>
      </div>
      <nav className="side-nav w-100 mt--60 mb--80">
        <ul className="navbar-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#guideline">Course Guideline</a>
          </li>
          <li>
            <a href="#coursecontent">Course Content</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
        </ul>
      </nav>
      <div className="social-share-wrapper">
        <span className="rbt-short-title d-block">Find With Us</span>
        <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
          <li><a href="https://www.facebook.com/">
              <i className="feather-facebook" />
            </a>
          </li>
          <li><a href="https://www.twitter.com">
              <i className="feather-twitter" />
            </a>
          </li>
          <li><a href="https://www.instagram.com/">
              <i className="feather-instagram" />
            </a>
          </li>
          <li><a href="https://www.linkdin.com/">
              <i className="feather-linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <ul className="rbt-secondary-menu mt--50">
        <li><a href="#">My Account</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </div>
  {/* End Side Vav */}
  <a className="close_side_menu" href="javascript:void(0);" />
</div>

      
  );
};
export default Header;
