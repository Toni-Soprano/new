import React from "react";
import { Link } from "react-router-dom";

const Studentdash = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Dashboard - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-page-banner-wrapper">
        {/* Start Banner BG Image  */}
        <div className="rbt-banner-image" />
        {/* End Banner BG Image  */}
      </div>
      {/* Start Card Style */}
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Dashboard Top  */}
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
                {/* Start Tutor Information  */}
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar-2.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">Student</h5>
                      <ul className="rbt-meta rbt-meta-white mt--5">
                        <li>
                          <i className="feather-book" />
                        </li>
                        <li>
                          <i className="feather-award" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Tutor Information  */}
              </div>
              {/* End Dashboard Top  */}
              <div className="row g-5">
                <div className="col-lg-3">
                  {/* Start Dashboard Sidebar  */}
                  <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                    <div className="inner">
                      <div className="content-item-content">
                        <div className="rbt-default-sidebar-wrapper">
                          <div className="section-title mb--20">
                            <h6 className="rbt-title-style-2">
                              Welcome, Student
                            </h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/studentdash">
                                  <i className="feather-home" />
                                  <span>Dashboard</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/studentprofile">
                                  <i className="feather-user" />
                                  <span>My Profile</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/studentcourse">
                                  <i className="feather-book-open" />
                                  <span>Enrolled Courses</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/studentwishlist">
                                  <i className="feather-bookmark" />
                                  <span>Wishlist</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/studentquiz">
                                  <i className="feather-help-circle" />
                                  <span>My Quiz Attempts</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/studentorderhistory">
                                  <i className="feather-shopping-bag" />
                                  <span>Order History</span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Dashboard Sidebar  */}
                </div>
                <div className="col-lg-9">
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Dashboard</h4>
                      </div>
                      <div className="row g-5">
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-primary-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-primary-opacity">
                                <i className="feather-book-open" />
                              </div>
                              <div className="content">
                                <h3 className="counter without-icon color-primary">
                                  <span className="odometer" data-count={30}>
                                    00
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Enrolled Courses
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-secondary-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-secondary-opacity">
                                <i className="feather-monitor" />
                              </div>
                              <div className="content">
                                <h3 className="counter without-icon color-secondary">
                                  <span className="odometer" data-count={10}>
                                    00
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  ACTIVE COURSES
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-violet-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-violet-opacity">
                                <i className="feather-award" />
                              </div>
                              <div className="content">
                                <h3 className="counter without-icon color-violet">
                                  <span className="odometer" data-count={7}>
                                    00
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Completed Courses
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Card Style */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* Start Footer aera */}
      <footer className="rbt-footer footer-style-1 bg-color-white overflow-hidden">
        <div className="footer-top">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo/logo.png" alt="Edu-cause" />
                    </a>
                  </div>
                  <p className="description mt--20">
                    We’re always in search for talented and motivated people.
                    Don’t be shy introduce yourself!
                  </p>
                  <ul className="social-icon social-default justify-content-start">
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
                  <div className="contact-btn mt--30">
                    <a
                      className="rbt-btn hover-icon-reverse btn-border-gradient radius-round"
                      href="#"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">Contact With Us</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget">
                  <h5 className="ft-title">Useful Links</h5>
                  <ul className="ft-link">
                    <li>
                      <a href="12-marketplace.html">Marketplace</a>
                    </li>
                    <li>
                      <a href="04-kindergarten.html">kindergarten</a>
                    </li>
                    <li>
                      <a href="13-university-classic.html">University</a>
                    </li>
                    <li>
                      <a href="09-gym-coaching.html">GYM Coaching</a>
                    </li>
                    <li>
                      <a href="faqs.html">FAQ</a>
                    </li>
                    <li>
                      <a href="about-us-01.html">About Us</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget">
                  <h5 className="ft-title">Our Company</h5>
                  <ul className="ft-link">
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="become-a-teacher.html">Become Teacher</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="instructor.html">Instructor</a>
                    </li>
                    <li>
                      <a href="event-list.html">Events</a>
                    </li>
                    <li>
                      <a href="course-filter-one-toggle.html">Course</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="footer-widget">
                  <h5 className="ft-title">Get Contact</h5>
                  <ul className="ft-link">
                    <li>
                      <span>Phone:</span> <a href="#">(406) 555-0120</a>
                    </li>
                    <li>
                      <span>E-mail:</span>{" "}
                      <a href="mailto:hr@example.com">admin@example.com</a>
                    </li>
                  </ul>
                  <form className="newsletter-form mt--20" action="#">
                    <h6 className="w-600">Newsletter</h6>
                    <p className="description">
                      2000+ Our students are subscribe Around the World.
                      <br /> Don’t be shy introduce yourself!
                    </p>
                    <div className="form-group right-icon icon-email mb--20">
                      <label htmlFor="email">Enter Your Email Here</label>
                      <input id="email" type="email" />
                    </div>
                    <div className="form-group mb--0">
                      <button
                        className="rbt-btn rbt-switch-btn btn-gradient radius-round btn-sm"
                        type="submit"
                      >
                        <span data-text="Submit Now">Submit Now</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        {/* Start Copyright Area  */}
        <div className="copyright-area copyright-style-1 ptb--20">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <p className="rbt-link-hover text-center text-lg-start">
                  Copyright © 2023{" "}
                  <a href="https://themeforest.net/user/rbt-themes">
                    Rainbow-Themes.
                  </a>{" "}
                  All Rights Reserved
                </p>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                  <li>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy policy</a>
                  </li>
                  <li>
                    <a href="subscription.html">Subscription</a>
                  </li>
                  <li>
                    <a href="login.html">Login &amp; Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Copyright Area  */}
      </footer>
      {/* End Footer aera */}
      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      {/* JS
============================================ */}
      {/* Modernizer JS */}
      {/* jQuery JS */}
      {/* Bootstrap JS */}
      {/* sal.js */}
      {/* Main JS */}
    </div>
  );
};

export default Studentdash;
