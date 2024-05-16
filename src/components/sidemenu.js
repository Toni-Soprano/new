import React, { useState } from "react";

const SideMenu = () => {
  // Step 1: Define state for menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Step 2: Function to toggle menu visibility
  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      <div className="inner-wrapper">
        <div className="inner-top">
          <div className="content">
            <div className="logo">
              <a href="index.html">
                <img
                  src="assets/images/logo/logo.png"
                  alt="Education Logo Images"
                />
              </a>
            </div>
            <div className="rbt-btn-close" id="btn_sideNavClose">
              <button className="rbt-round-btn" onClick={toggleSideNav}>
                <i className="feather-x" />
              </button>
            </div>
          </div>
          <p className="description">
            Pro Learnify is an education website template. You can customize
            all.
          </p>
          <ul className="navbar-top-left rbt-information-list justify-content-start">
            <li>
              <a href="mailto:hello@example.com">
                <i className="feather-mail" />
                example@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <i className="feather-phone" />
                (302) 555-0107
              </a>
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
            <li>
              <a href="https://www.facebook.com/">
                <i className="feather-facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="feather-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="feather-instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkdin.com/">
                <i className="feather-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="rbt-secondary-menu mt--50">
          <li>
            <a href="#">My Account</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
