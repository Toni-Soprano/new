import React, { useState } from "react";

const Createcourse = () => {
  const [videoSource, setVideoSource] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [youtubeVideoId, setYoutubeVideoId] = useState("");

  const handleVideoSourceChange = (e) => {
    const selectedSource = e.target.value;
    setVideoSource(selectedSource);
    setVideoUrl("");
    setYoutubeVideoId(""); // Reset YouTube Video ID when changing source
  };

  const handleYoutubeVideoIdChange = (e) => {
    setYoutubeVideoId(e.target.value);
    setVideoUrl(""); // Reset video URL when changing YouTube Video ID
  };

  const handleEditClick = () => {
    // Your logic for editing here
  };

  const handleApproveClick = () => {
    // Your logic for approving here
  };
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Create Course - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Favicon */}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/images/favicon.png"
      />
      {/* Start Header Area */}

      {/* Mobile Menu Section */}
      <div className="popup-mobile-menu">
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
              <div className="rbt-btn-close">
                <button className="close-button rbt-round-btn">
                  <i className="feather-x" />
                </button>
              </div>
            </div>
            <p className="description">
              Histudy is a education website template. You can customize all.
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
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Home <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu menu-skin-dark">
                  <div className="wrapper">
                    <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="01-main-demo.html">
                                <img
                                  src="assets/images/splash/demo/h1.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="01-main-demo.html">
                                  Home Demo{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="12-marketplace.html">
                                <img
                                  src="assets/images/splash/demo/h12.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="12-marketplace.html">
                                  Marketplace{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="04-kindergarten.html">
                                <img
                                  src="assets/images/splash/demo/h4.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="04-kindergarten.html">
                                  kindergarten{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="13-university-classic.html">
                                <img
                                  src="assets/images/splash/demo/h13.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="13-university-classic.html">
                                  University Classic{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="14-home-elegant.html">
                                <img
                                  src="assets/images/splash/demo/h14.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="14-home-elegant.html">
                                  Home Elegant{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="09-gym-coaching.html">
                                <img
                                  src="assets/images/splash/demo/h9.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="09-gym-coaching.html">
                                  Gym Coaching{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="03-online-school.html">
                                <img
                                  src="assets/images/splash/demo/h3.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="03-online-school.html">
                                  Online School{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="06-university-status.html">
                                <img
                                  src="assets/images/splash/demo/h6.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="06-university-status.html">
                                  University Status{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="15-home-technology.html">
                                <img
                                  src="assets/images/splash/demo/h15.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="15-home-technology.html">
                                  Home Technology{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="07-instructor-portfolio.html">
                                <img
                                  src="assets/images/splash/demo/h7.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="07-instructor-portfolio.html">
                                  Instructor Portfolio{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="08-language-academy.html">
                                <img
                                  src="assets/images/splash/demo/h8.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="08-language-academy.html">
                                  Language Academy{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="11-single-course.html">
                                <img
                                  src="assets/images/splash/demo/h11.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="11-single-course.html">
                                  Single Course{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="10-online-course.html">
                                <img
                                  src="assets/images/splash/demo/h10.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="10-online-course.html">
                                  Online Course{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="05-classic-lms.html">
                                <img
                                  src="assets/images/splash/demo/h5.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="05-classic-lms.html">
                                  Classic Lms{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="02-course-school.html">
                                <img
                                  src="assets/images/splash/demo/h2.jpg"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="02-course-school.html">
                                  Course School{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/splash/demo/coming-soon-1.png"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">
                                  Coming Soon{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/splash/demo/coming-soon-2.png"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">
                                  Coming Soon 2{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                      {/* Start Single Demo  */}
                      <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                        <div className="demo-single">
                          <div className="inner">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src="assets/images/splash/demo/coming-soon-3.png"
                                  alt="Demo Images"
                                />
                              </a>
                            </div>
                            <div className="content">
                              <h4 className="title">
                                <a href="#">
                                  Coming Soon 3{" "}
                                  <span className="btn-icon">
                                    <i className="feather-arrow-right" />
                                  </span>
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Demo  */}
                    </div>
                    <div className="load-demo-btn text-center">
                      <a className="rbt-btn-link color-white" href="#">
                        Scroll to view more{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-arrow-down-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-megamenu has-menu-child-item">
                <a href="#">
                  Courses <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-2">
                  <div className="wrapper">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mega-top-banner">
                          <div className="content">
                            <h4 className="title">Developer hub</h4>
                            <p className="description">
                              Start building fast, with code samples, key
                              resources and more.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                        <h3 className="rbt-short-title">Course Layout</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="course-filter-one-toggle.html">
                              Filter One Toggle
                            </a>
                          </li>
                          <li>
                            <a href="course-filter-one-open.html">
                              Filter One Open
                            </a>
                          </li>
                          <li>
                            <a href="course-filter-two-toggle.html">
                              Filter Two Toggle
                            </a>
                          </li>
                          <li>
                            <a href="course-filter-two-open.html">
                              Filter Two Open
                            </a>
                          </li>
                          <li>
                            <a href="course-with-tab.html">Course With Tab</a>
                          </li>
                          <li>
                            <a href="course-with-tab-two.html">
                              Course With Tab Two
                            </a>
                          </li>
                          <li>
                            <a href="course-card-2.html">Course Card Two</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                        <h3 className="rbt-short-title">Course Layout</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="course-card-3.html">Course Card Three</a>
                          </li>
                          <li>
                            <a href="course-masonry.html">Course Masonry</a>
                          </li>
                          <li>
                            <a href="course-with-sidebar.html">
                              Course With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="course-details.html">Course Details</a>
                          </li>
                          <li>
                            <a href="course-details-2.html">
                              Course Details Two
                            </a>
                          </li>
                          <li>
                            <a href="lesson.html">
                              Course Lesson{" "}
                              <span className="rbt-badge-card">New</span>
                            </a>
                          </li>
                          <li>
                            <a href="create-course.html">
                              Create Course{" "}
                              <span className="rbt-badge-card">New</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="nav-quick-access">
                          <li>
                            <a href="#">
                              <i className="feather-folder-minus" /> Quick Start
                              Guide
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-folder-minus" /> For Open
                              Source
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-folder-minus" /> API Status
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-folder-minus" /> Support
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="has-dropdown has-menu-child-item">
                <a href="#">
                  Dashboard
                  <i className="feather-chevron-down" />
                </a>
                <ul className="submenu">
                  <li className="has-dropdown">
                    <a href="#">Instructor Dashboard</a>
                    <ul className="submenu">
                      <li>
                        <a href="instructor-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="instructor-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="instructor-enrolled-courses.html">
                          Enrolled Courses
                        </a>
                      </li>
                      <li>
                        <a href="instructor-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="instructor-reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a href="instructor-my-quiz-attempts.html">
                          My Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="instructor-order-history.html">
                          Order History
                        </a>
                      </li>
                      <li>
                        <a href="instructor-course.html">My Course</a>
                      </li>
                      <li>
                        <a href="instructor-announcements.html">
                          Announcements
                        </a>
                      </li>
                      <li>
                        <a href="instructor-quiz-attempts.html">
                          Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="instructor-assignments.html">Assignments</a>
                      </li>
                      <li>
                        <a href="instructor-settings.html">Settings</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Student Dashboard</a>
                    <ul className="submenu">
                      <li>
                        <a href="student-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="student-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="student-enrolled-courses.html">
                          Enrolled Courses
                        </a>
                      </li>
                      <li>
                        <a href="student-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="student-reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a href="student-my-quiz-attempts.html">
                          My Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="student-order-history.html">Order History</a>
                      </li>
                      <li>
                        <a href="student-settings.html">Settings</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Pages <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-4">
                  <div className="wrapper">
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="about-us-01.html">About Us</a>
                          </li>
                          <li>
                            <a href="about-us-02.html">About Us 02</a>
                          </li>
                          <li>
                            <a href="event-grid.html">Event Grid</a>
                          </li>
                          <li>
                            <a href="event-list.html">Event List</a>
                          </li>
                          <li>
                            <a href="event-sidebar.html">Event Sidebar</a>
                          </li>
                          <li>
                            <a href="event-details.html">Event Details</a>
                          </li>
                          <li>
                            <a href="academy-gallery.html">Academy Gallery</a>
                          </li>
                          <li>
                            <a href="admission-guide.html">Admission Guide</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="profile.html">Profile</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="become-a-teacher.html">Become a Teacher</a>
                          </li>
                          <li>
                            <a href="instructor.html">Instructor</a>
                          </li>
                          <li>
                            <a href="faqs.html">FAQS</a>
                          </li>
                          <li>
                            <a href="privacy-policy.html">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                          <li>
                            <a href="maintenance.html">Maintenance</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Shop Pages</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="shop.html">
                              Shop{" "}
                              <span className="rbt-badge-card">
                                Sale Anything
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">Single Product</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist Page</a>
                          </li>
                          <li>
                            <a href="my-account.html">My Acount</a>
                          </li>
                          <li>
                            <a href="login.html">Login &amp; Register</a>
                          </li>
                          <li>
                            <a href="subscription.html">Subscription</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <div className="mega-category-item">
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-2.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Online Education</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-1.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Language Club</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-4.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>University Status</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <a href="course-filter-one-toggle.html">
                                <span>Course School</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-9.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Academy</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Elements <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-3">
                  <div className="wrapper">
                    <div className="row row--15 single-dropdown-menu-presentation">
                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="style-guide.html">
                              Style Guide{" "}
                              <span className="rbt-badge-card">Hot</span>
                            </a>
                          </li>
                          <li>
                            <a href="accordion.html">Accordion</a>
                          </li>
                          <li>
                            <a href="advancetab.html">Advance Tab</a>
                          </li>
                          <li>
                            <a href="brand.html">Brand</a>
                          </li>
                          <li>
                            <a href="button.html">Button</a>
                          </li>
                          <li>
                            <a href="badge.html">Badge</a>
                          </li>
                          <li>
                            <a href="card.html">Card</a>
                          </li>
                          <li>
                            <a href="call-to-action.html">Call To Action</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="counterup.html">Counter</a>
                          </li>
                          <li>
                            <a href="category.html">Categories</a>
                          </li>
                          <li>
                            <a href="header.html">Header Style</a>
                          </li>
                          <li>
                            <a href="newsletter.html">Newsletter</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="social.html">Social</a>
                          </li>
                          <li>
                            <a href="list-style.html">List Style</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="progressbar.html">Progressbar</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonial</a>
                          </li>
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="split.html">Split Area</a>
                          </li>
                          <li>
                            <a href="search.html">Search Style</a>
                          </li>
                          <li>
                            <a href="instagram.html">Instagram Style</a>
                          </li>
                          <li>
                            <a href="#">&amp; More Coming</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="btn-wrapper">
                          <a
                            className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">
                                Visit Histudy Template
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Blog <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-3">
                  <div className="wrapper">
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <h3 className="rbt-short-title">Blog Styles</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="blog-list.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-grid-minimal.html">
                              Blog Grid Minimal
                            </a>
                          </li>
                          <li>
                            <a href="blog-with-sidebar.html">
                              Blog With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="post-format-standard.html">
                              Post Format Standard
                            </a>
                          </li>
                          <li>
                            <a href="post-format-gallery.html">
                              Post Format Gallery
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="post-format-quote.html">
                              Post Format Quote
                            </a>
                          </li>
                          <li>
                            <a href="post-format-audio.html">
                              Post Format Audio
                            </a>
                          </li>
                          <li>
                            <a href="post-format-video.html">
                              Post Format Video
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Media Under Title{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Sticky Sidebar{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Auto Masonry{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Meta Overlaid{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <div className="rbt-ads-wrapper">
                          <a className="d-block" href="#">
                            <img
                              src="assets/images/service/mobile-cat.jpg"
                              alt="Education Images"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
            </ul>
          </nav>
          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <a
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="#"
              >
                <span>Enroll Now</span>
              </a>
            </div>
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
          </div>
        </div>
      </div>
      {/* Start Side Vav */}
      <div className="rbt-cart-side-menu">
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="title">
                <h4 className="title mb--0">Your shopping cart</h4>
              </div>
              <div className="rbt-btn-close" id="btn_sideNavClose">
                <button className="minicart-close-button rbt-round-btn">
                  <i className="feather-x" />
                </button>
              </div>
            </div>
          </div>
          <nav className="side-nav w-100">
            <ul className="rbt-minicart-wrapper">
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/1.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Miracle Morning</a>
                  </h6>
                  <span className="quantity">
                    1 * <span className="price">$22</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x" />
                  </button>
                </div>
              </li>
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/7.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Happy Strong</a>
                  </h6>
                  <span className="quantity">
                    1 * <span className="price">$30</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x" />
                  </button>
                </div>
              </li>
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/3.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Rich Dad Poor Dad</a>
                  </h6>
                  <span className="quantity">
                    1 * <span className="price">$50</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x" />
                  </button>
                </div>
              </li>
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/4.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Momentum Theorem</a>
                  </h6>
                  <span className="quantity">
                    1 * <span className="price">$50</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x" />
                  </button>
                </div>
              </li>
            </ul>
          </nav>
          <div className="rbt-minicart-footer">
            <hr className="mb--0" />
            <div className="rbt-cart-subttotal">
              <p className="subtotal">
                <strong>Subtotal:</strong>
              </p>
              <p className="price">$121</p>
            </div>
            <hr className="mb--0" />
            <div className="rbt-minicart-bottom mt--20">
              <div className="view-cart-btn">
                <a
                  className="rbt-btn btn-border icon-hover w-100 text-center"
                  href="#"
                >
                  <span className="btn-text">View Cart</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </a>
              </div>
              <div className="checkout-btn mt--20">
                <a
                  className="rbt-btn btn-gradient icon-hover w-100 text-center"
                  href="#"
                >
                  <span className="btn-text">Checkout</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Side Vav */}
      <a className="close_side_menu" href="javascript:void(0);" />
      <main className="rbt-main-wrapper">
        <div className="rbt-create-course-area bg-color-white rbt-section-gap">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="rbt-accordion-style rbt-accordion-01 rbt-accordion-06 accordion">
                  <div className="accordion" id="tutionaccordionExamplea1">
                    <div className="accordion-item card">
                      <h2 className="accordion-header card-header" id="accOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accCollapseOne"
                          aria-expanded="true"
                          aria-controls="accCollapseOne"
                        >
                          Course Info
                        </button>
                      </h2>
                      <div
                        id="accCollapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="accOne"
                        data-bs-parent="#tutionaccordionExamplea1"
                      >
                        <div className="accordion-body card-body">
                          {/* Start Course Field Wrapper  */}
                          <div className="rbt-course-field-wrapper rbt-default-form">
                            <div className="course-field mb--15">
                              <label htmlFor="field-1">Course Title</label>
                              <input
                                id="field-1"
                                type="text"
                                placeholder="New Course"
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Title should be
                                30 charecter.
                              </small>
                            </div>
                            <div className="course-field mb--15">
                              <label htmlFor="field-2">Course Slug</label>
                              <input
                                id="field-2"
                                type="text"
                                placeholder="new-course"
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Permalink:{" "}
                                <a href="https://yourdomain.com/new-course">
                                  https://yourdomain.com/new-course
                                </a>
                              </small>
                            </div>
                            <div className="course-field mb--15">
                              <label htmlFor="aboutCourse">About Course</label>
                              <textarea
                                id="aboutCourse"
                                rows={10}
                                defaultValue={""}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> HTML or plain
                                text allowed, no emoji This field is used for
                                search, so please be descriptive!
                              </small>
                            </div>
                            <div className="course-field mb--15 edu-bg-gray">
                              <h6>Course Settings</h6>
                              <div className="rbt-course-settings-content">
                                <div className="row g-5">
                                  <div className="col-lg-4">
                                    <div className="advance-tab-button advance-tab-button-1">
                                      <ul
                                        className="rbt-default-tab-button nav nav-tabs"
                                        id="courseSetting"
                                        role="tablist"
                                      >
                                        <li
                                          className="nav-item"
                                          role="presentation"
                                        >
                                          <a
                                            href="#"
                                            className="active"
                                            id="general-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#general"
                                            role="tab"
                                            aria-controls="general"
                                            aria-selected="true"
                                          >
                                            <span>General</span>
                                          </a>
                                        </li>
                                        <li
                                          className="nav-item"
                                          role="presentation"
                                        >
                                          <a
                                            href="#"
                                            id="content-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#content"
                                            role="tab"
                                            aria-controls="content"
                                            aria-selected="false"
                                          >
                                            <span>Content Drip</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="tab-content">
                                      <div
                                        className="tab-pane fade advance-tab-content-1 active show"
                                        id="general"
                                        role="tabpanel"
                                        aria-labelledby="general-tab"
                                      >
                                        <div className="course-field mb--20">
                                          <label htmlFor="field-3">
                                            Maximum Students
                                          </label>
                                          <div className="pro-quantity">
                                            <div className="pro-qty m-0">
                                              <input
                                                id="field-3"
                                                type="text"
                                                defaultValue={100}
                                              />
                                            </div>
                                          </div>
                                          <small>
                                            <i className="feather-info" />{" "}
                                            Number of students that can enrol in
                                            this course. Set 0 for no limits.
                                          </small>
                                        </div>
                                        <div className="course-field mb--20">
                                          <label htmlFor="field-4">
                                            Difficulty Level
                                          </label>
                                          <div className="rbt-modern-select bg-transparent height-45 mb--10">
                                            <select
                                              className="w-100"
                                              id="field-4"
                                            >
                                              <option>All Levels</option>
                                              <option>Intermediate</option>
                                              <option>Beginner</option>
                                              <option>Advance</option>
                                              <option>Expert</option>
                                            </select>
                                          </div>
                                          <small>
                                            <i className="feather-info" />{" "}
                                            Course difficulty level
                                          </small>
                                        </div>
                                        <div className="course-field mb--20">
                                          <label
                                            className="form-check-label d-inline-block"
                                            htmlFor="flexSwitchCheckDefault"
                                          >
                                            Public Course
                                          </label>
                                          <div className="form-check form-switch mb--10">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              role="switch"
                                              id="flexSwitchCheckDefault"
                                            />
                                          </div>
                                          <small>
                                            <i className="feather-info" /> Make
                                            This Course Public. No enrollment
                                            required.
                                          </small>
                                        </div>
                                        <div className="course-field mb--20">
                                          <label
                                            className="form-check-label d-inline-block"
                                            htmlFor="flexSwitchCheckDefault2"
                                          >
                                            Q&amp;A
                                          </label>
                                          <div className="form-check form-switch mb--10">
                                            <input
                                              className="form-check-input"
                                              type="checkbox"
                                              role="switch"
                                              id="flexSwitchCheckDefault2"
                                            />
                                          </div>
                                          <small>
                                            <i className="feather-info" />{" "}
                                            Enable Q&amp;A section for your
                                            course
                                          </small>
                                        </div>
                                      </div>
                                      <div
                                        className="tab-pane fade advance-tab-content-1"
                                        id="content"
                                        role="tabpanel"
                                        aria-labelledby="content-tab"
                                      >
                                        <div className="rbt-content-drip-content">
                                          <div className="course-field pb--20">
                                            <p className="rbt-checkbox-wrapper mb--5">
                                              <input
                                                id="rbt-checkbox-1"
                                                name="rbt-checkbox-1"
                                                type="checkbox"
                                                defaultValue="yes"
                                              />
                                              <label htmlFor="rbt-checkbox-1">
                                                Enable
                                              </label>
                                            </p>
                                            <small>
                                              <i className="feather-info" />
                                              Enable / Disable content drip
                                            </small>
                                          </div>
                                          <hr className="rbt-separator m-0" />
                                          <div className="rbt-course-drip-option pt--20">
                                            <h6 className="mb--10">
                                              Content Drip Type
                                            </h6>
                                            <p className="mb--10 b3">
                                              You can schedule your course
                                              content using the above content
                                              drip options.
                                            </p>
                                            <div className="course-drop-option">
                                              <div className="rbt-form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="radio"
                                                  name="rbt-radio"
                                                  id="rbt-radio-1"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="rbt-radio-1"
                                                >
                                                  {" "}
                                                  Schedule course contents by
                                                  date
                                                </label>
                                              </div>
                                              <div className="rbt-form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="radio"
                                                  name="rbt-radio"
                                                  id="rbt-radio-2"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="rbt-radio-2"
                                                >
                                                  {" "}
                                                  Content available after X days
                                                  from enrollment
                                                </label>
                                              </div>
                                              <div className="rbt-form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="radio"
                                                  name="rbt-radio"
                                                  id="rbt-radio-3"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="rbt-radio-3"
                                                >
                                                  {" "}
                                                  Course content available
                                                  sequentially
                                                </label>
                                              </div>
                                              <div className="rbt-form-check">
                                                <input
                                                  className="form-check-input"
                                                  type="radio"
                                                  name="rbt-radio"
                                                  id="rbt-radio-4"
                                                />
                                                <label
                                                  className="form-check-label"
                                                  htmlFor="rbt-radio-4"
                                                >
                                                  {" "}
                                                  Course content unlocked after
                                                  finishing prerequisites
                                                </label>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="course-field mb--15 edu-bg-gray">
                              <h6>Course Price</h6>
                              <div className="rbt-course-settings-content">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className="advance-tab-button advance-tab-button-1">
                                      <ul
                                        className="rbt-default-tab-button nav nav-tabs"
                                        id="coursePrice"
                                        role="tablist"
                                      >
                                        <li
                                          className="nav-item w-100"
                                          role="presentation"
                                        >
                                          <a
                                            href="#"
                                            className="active"
                                            id="paid-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#paid"
                                            role="tab"
                                            aria-controls="paid"
                                            aria-selected="true"
                                          >
                                            <span>Paid</span>
                                          </a>
                                        </li>
                                        <li
                                          className="nav-item w-100"
                                          role="presentation"
                                        >
                                          <a
                                            href="#"
                                            id="free-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#free"
                                            role="tab"
                                            aria-controls="free"
                                            aria-selected="false"
                                          >
                                            <span>Free</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="tab-content">
                                      <div
                                        className="tab-pane fade advance-tab-content-1 active show"
                                        id="paid"
                                        role="tabpanel"
                                        aria-labelledby="paid-tab"
                                      >
                                        <div className="course-field mb--15">
                                          <label htmlFor="regularPrice-1">
                                            Regular Price ($)
                                          </label>
                                          <input
                                            id="regularPrice-1"
                                            type="number"
                                            placeholder="$ Regular Price"
                                          />
                                          <small className="d-block mt_dec--5">
                                            <i className="feather-info" /> The
                                            Course Price Includes Your Author
                                            Fee.
                                          </small>
                                        </div>
                                        <div className="course-field mb--15">
                                          <label htmlFor="discountedPrice-1">
                                            Discounted Price ($)
                                          </label>
                                          <input
                                            id="discountedPrice-1"
                                            type="number"
                                            placeholder="$ Discounted Price"
                                          />
                                          <small className="d-block mt_dec--5">
                                            <i className="feather-info" /> The
                                            Course Price Includes Your Author
                                            Fee.
                                          </small>
                                        </div>
                                      </div>
                                      <div
                                        className="tab-pane fade advance-tab-content-1"
                                        id="free"
                                        role="tabpanel"
                                        aria-labelledby="free-tab"
                                      >
                                        <div className="course-field">
                                          <p className="b3">
                                            This Course is free for everyone.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="course-field mb--20">
                              <h6>Choose Categories</h6>
                              <div className="rbt-modern-select bg-transparent height-45 w-100 mb--10">
                                <select
                                  className="w-100"
                                  data-live-search="true"
                                  title="Search Course Category. ex. Design, Development, Business"
                                  multiple
                                  data-size={7}
                                  data-actions-box="true"
                                  data-selected-text-format="count > 2"
                                >
                                  <option>Web Developer</option>
                                  <option>App Developer</option>
                                  <option>Javascript</option>
                                  <option>React</option>
                                  <option>WordPress</option>
                                  <option>jQuery</option>
                                  <option>Vue Js</option>
                                  <option>Angular</option>
                                </select>
                              </div>
                            </div>
                            <div className="course-field mb--20">
                              <h6>Course Thumbnail</h6>
                              <div className="rbt-create-course-thumbnail upload-area">
                                <div className="upload-area">
                                  <div
                                    className="brows-file-wrapper"
                                    data-black-overlay={9}
                                  >
                                    {/* actual upload which is hidden */}
                                    <input
                                      name="createinputfile"
                                      id="createinputfile"
                                      type="file"
                                      className="inputfile"
                                    />
                                    <img
                                      id="createfileImage"
                                      src="assets/images/others/thumbnail-placeholder.svg"
                                      alt="file image"
                                    />
                                    {/* our custom upload button */}
                                    <label
                                      className="d-flex"
                                      htmlFor="createinputfile"
                                      title="No File Choosen"
                                    >
                                      <i className="feather-upload" />
                                      <span className="text-center">
                                        Choose a File
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <small>
                                <i className="feather-info" /> <b>Size:</b>{" "}
                                700x430 pixels, <b>File Support:</b> JPG, JPEG,
                                PNG, GIF, WEBP
                              </small>
                            </div>
                          </div>
                          {/* End Course Field Wrapper  */}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item card">
                      <h2 className="accordion-header card-header" id="accTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accCollapseTwo"
                          aria-expanded="false"
                          aria-controls="accCollapseTwo"
                        >
                          Course Intro Video
                        </button>
                      </h2>
                      <div
                        id="accCollapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="accTwo"
                        data-bs-parent="#tutionaccordionExamplea1"
                      >
                        <div className="accordion-body card-body rbt-course-field-wrapper rbt-default-form">
                          <div className="course-field mb--20">
                            <div className="rbt-modern-select bg-transparent height-45 mb--10">
                              <select
                                className="w-100"
                                id="field-5"
                                onChange={handleVideoSourceChange}
                                value={videoSource}
                              >
                                <option value="" disabled>
                                  Select Video Source
                                </option>
                                <option value="youtube">YouTube</option>
                                <option value="local">Local</option>
                              </select>
                            </div>
                          </div>
                          {videoSource === "youtube" && (
                            <div className="course-field mb--15">
                              <label htmlFor="youtubeVideoId">
                                Add Your YouTube Video ID
                              </label>
                              <input
                                id="youtubeVideoId"
                                type="text"
                                placeholder="Add Your YouTube Video ID here."
                                value={youtubeVideoId}
                                onChange={handleYoutubeVideoIdChange}
                              />
                              {youtubeVideoId && (
                                <iframe
                                  title="YouTube Video"
                                  width="560"
                                  height="315"
                                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                                  frameBorder="0"
                                  allowFullScreen
                                />
                              )}
                            </div>
                          )}
                          {videoSource === "local" && (
                            <div className="course-field mb--15">
                              <label htmlFor="localVideo">
                                Upload Video from Your Device
                              </label>
                              <input
                                id="localVideo"
                                type="file"
                                accept="video/*"
                              />
                            </div>
                          )}
                          <div className="course-field mb--15">
                            <button
                              className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                              type="button"
                              onClick={handleEditClick}
                            >
                              Edit
                            </button>
                            {/* Add some space between the buttons */}
                            <span style={{ margin: "0 5px" }}></span>
                            <button
                              className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                              type="button"
                              onClick={handleApproveClick}
                            >
                              Approve
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="accThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accCollapseThree"
                          aria-expanded="false"
                          aria-controls="accCollapseThree"
                        >
                          Course Builder
                        </button>
                      </h2>
                      <div
                        id="accCollapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="accThree"
                        data-bs-parent="#tutionaccordionExamplea1"
                      >
                        <div className="accordion-body card-body">
                          <button
                            className="rbt-btn btn-md btn-gradient hover-icon-reverse"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Add New Topic</span>
                              <span className="btn-icon">
                                <i className="feather-plus-circle" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-plus-circle" />
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item card rbt-course-field-wrapper">
                      <h2 className="accordion-header card-header" id="accSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accCollapseSix"
                          aria-expanded="false"
                          aria-controls="accCollapseSix"
                        >
                          Additional Information
                        </button>
                      </h2>
                      <div
                        id="accCollapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="accSix"
                        data-bs-parent="#tutionaccordionExamplea1"
                      >
                        <div className="accordion-body card-body rbt-course-field-wrapper rbt-default-form row row-15">
                          <div className="col-lg-6">
                            <div className="course-field mb--15">
                              <label htmlFor="startDate">Start Date</label>
                              <input
                                type="date"
                                id="startDate"
                                name="startDate"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="course-field mb--15">
                              <label htmlFor="language">Language</label>
                              <div className="rbt-modern-select bg-transparent height-50 mb--10">
                                <select
                                  className="w-100"
                                  data-live-search="true"
                                  title="English"
                                  multiple
                                  data-size={7}
                                  data-actions-box="true"
                                  data-selected-text-format="count > 2"
                                  id="language"
                                >
                                  <option>English</option>
                                  <option>Bangla</option>
                                  <option>Japan</option>
                                  <option>Hindi</option>
                                  <option>Frence</option>
                                  <option>Garmani</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="course-field mb--15">
                              <label htmlFor="whatLearn">Requirements</label>
                              <textarea
                                id="whatLearn"
                                rows={5}
                                placeholder="Add your course benefits here."
                                defaultValue={""}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Enter for per
                                line.
                              </small>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="course-field mb--15">
                              <label htmlFor="description">Description</label>
                              <textarea
                                id="description"
                                rows={5}
                                placeholder="Add your course benefits here."
                                defaultValue={""}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Enter for per
                                line.
                              </small>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <hr className="mt--10 mb--20" />
                          </div>
                          <div className="col-lg-12">
                            <div className="course-field mb--15">
                              <label>Total Course Duration</label>
                              <div className="row row--15">
                                <div className="col-lg-6">
                                  <input type="number" placeholder="00" />
                                  <small className="d-block mt_dec--5">
                                    <i className="feather-info" /> Hour.
                                  </small>
                                </div>
                                <div className="col-lg-6">
                                  <input type="number" placeholder="00" />
                                  <small className="d-block mt_dec--5">
                                    <i className="feather-info" /> Minute.
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <hr className="mt--10 mb--20" />
                          </div>
                          <div className="col-lg-12">
                            <div className="course-field mb--15">
                              <label htmlFor="courseTag">Course Tags</label>
                              <textarea
                                id="courseTag"
                                rows={5}
                                placeholder="Add your course tag here."
                                defaultValue={""}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Maximum of 15
                                keywords covering features, usage, and styling.
                                Keywords should all be in lowercase and
                                separated by commas. e.g. photography, gallery,
                                modern, jquery, wordpress theme.
                              </small>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <hr className="mt--10 mb--20" />
                          </div>
                          <div className="col-lg-12">
                            <div className="course-field mb--15">
                              <label htmlFor="targeted">
                                Targeted Audience
                              </label>
                              <textarea
                                id="targeted"
                                rows={5}
                                placeholder="Add your course tag here."
                                defaultValue={""}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Specify the
                                target audience that will benefit the most from
                                the course.
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item card">
                      <h2
                        className="accordion-header card-header"
                        id="accSeven"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accCollapseEight"
                          aria-expanded="false"
                          aria-controls="accCollapseEight"
                        >
                          Certificate Template
                        </button>
                      </h2>
                      <div
                        id="accCollapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="accSeven"
                        data-bs-parent="#tutionaccordionExamplea1"
                      >
                        <div className="accordion-body card-body">
                          <div className="advance-tab-button advance-tab-button-1">
                            <ul
                              className="rbt-default-tab-button nav nav-tabs"
                              id="myTab"
                              role="tablist"
                            >
                              <li className="nav-item" role="presentation">
                                <a
                                  href="#"
                                  className="active"
                                  id="landscape-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#landscape"
                                  role="tab"
                                  aria-controls="landscape"
                                  aria-selected="true"
                                >
                                  <span>Landscape</span>
                                </a>
                              </li>
                              <li className="nav-item" role="presentation">
                                <a
                                  href="#"
                                  id="portrait-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#portrait"
                                  role="tab"
                                  aria-controls="portrait"
                                  aria-selected="false"
                                >
                                  <span>Portrait</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="tab-content">
                                <div
                                  className="tab-pane fade advance-tab-content-1 active show"
                                  id="landscape"
                                  role="tabpanel"
                                  aria-labelledby="landscape-tab"
                                >
                                  <div className="row g-5 mt--10">
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option1"
                                          name="radio-group"
                                          defaultValue="option1"
                                        />
                                        <label htmlFor="option1">
                                          <img
                                            src="assets/images/icons/certificate-none.svg"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option2"
                                          name="radio-group"
                                          defaultValue="option2"
                                        />
                                        <label htmlFor="option2">
                                          <img
                                            src="assets/images/others/preview-01.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option3"
                                          name="radio-group"
                                          defaultValue="option3"
                                        />
                                        <label htmlFor="option3">
                                          <img
                                            src="assets/images/others/preview-02.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option4"
                                          name="radio-group"
                                          defaultValue="option4"
                                        />
                                        <label htmlFor="option4">
                                          <img
                                            src="assets/images/others/preview-03.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option5"
                                          name="radio-group"
                                          defaultValue="option5"
                                        />
                                        <label htmlFor="option5">
                                          <img
                                            src="assets/images/others/preview-04.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="option6"
                                          name="radio-group"
                                          defaultValue="option6"
                                        />
                                        <label htmlFor="option6">
                                          <img
                                            src="assets/images/others/preview-05.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade advance-tab-content-1"
                                  id="portrait"
                                  role="tabpanel"
                                  aria-labelledby="portrait-tab"
                                >
                                  <div className="row g-5 mt--10">
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport1"
                                          name="radio-group"
                                          defaultValue="optionport1"
                                        />
                                        <label htmlFor="optionport1">
                                          <img
                                            src="assets/images/icons/certificate-none-portrait.svg"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport2"
                                          name="radio-group"
                                          defaultValue="optionport2"
                                        />
                                        <label htmlFor="optionport2">
                                          <img
                                            src="assets/images/others/preview-port-01.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport3"
                                          name="radio-group"
                                          defaultValue="optionport3"
                                        />
                                        <label htmlFor="optionport3">
                                          <img
                                            src="assets/images/others/preview-port-02.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport4"
                                          name="radio-group"
                                          defaultValue="optionport4"
                                        />
                                        <label htmlFor="optionport4">
                                          <img
                                            src="assets/images/others/preview-port-03.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport5"
                                          name="radio-group"
                                          defaultValue="optionport5"
                                        />
                                        <label htmlFor="optionport5">
                                          <img
                                            src="assets/images/others/preview-port-05.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                    {/* Start Single Certificate  */}
                                    <div className="col-lg-4">
                                      <div className="certificate-inner rbt-image-checkbox">
                                        <input
                                          type="radio"
                                          id="optionport6"
                                          name="radio-group"
                                          defaultValue="optionport6"
                                        />
                                        <label htmlFor="optionport6">
                                          <img
                                            src="assets/images/others/preview-port-06.png"
                                            alt="Certificate Image"
                                          />
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Single Certificate  */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt--10 row g-5">
                  <div className="col-lg-4">
                    <a
                      className="rbt-btn hover-icon-reverse bg-primary-opacity w-100 text-center"
                      href="course-details.html"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Preview</span>
                        <span className="btn-icon">
                          <i className="feather-eye" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-eye" />
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="col-lg-8">
                    <a
                      className="rbt-btn btn-gradient hover-icon-reverse w-100 text-center"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Create Course</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="rbt-create-course-sidebar course-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                  <div className="inner">
                    <div className="section-title mb--30">
                      <h4 className="title">Course Upload Tips</h4>
                    </div>
                    <div className="rbt-course-upload-tips">
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="feather-check" /> Set the Course Price
                          option or make it free.
                        </li>
                        <li>
                          <i className="feather-check" /> Standard size for the
                          course thumbnail is 700x430.
                        </li>
                        <li>
                          <i className="feather-check" /> Video section controls
                          the course overview video.
                        </li>
                        <li>
                          <i className="feather-check" /> Course Builder is
                          where you create &amp; organize a course.
                        </li>
                        <li>
                          <i className="feather-check" /> Add Topics in the
                          Course Builder section to create lessons, quizzes, and
                          assignments.
                        </li>
                        <li>
                          <i className="feather-check" /> Prerequisites refers
                          to the fundamental courses to complete before taking
                          this particular course.
                        </li>
                        <li>
                          <i className="feather-check" /> Information from the
                          Additional Data section shows up on the course single
                          page.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Modal Area  */}
        <div
          className="rbt-default-modal modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="rbt-round-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="feather-x" />
                </button>
              </div>
              <div className="modal-body">
                <div className="inner rbt-default-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <h5 className="modal-title mb--20" id="exampleModalLabel">
                        Add Topic
                      </h5>
                      <div className="course-field mb--20">
                        <label htmlFor="modal-field-1">Topic Name</label>
                        <input id="modal-field-1" type="text" />
                        <small>
                          <i className="feather-info" /> Topic titles are
                          displayed publicly wherever required. Each topic may
                          contain one or more lessons, quizzes, and assignments.
                        </small>
                      </div>
                      <div className="course-field mb--20">
                        <label htmlFor="modal-field-2">Topic Summary</label>
                        <textarea id="modal-field-2" defaultValue={""} />
                        <small>
                          <i className="feather-info" /> Add a summary of short
                          text to prepare students for the activities for the
                          topic. The text is shown on the course page beside the
                          tooltip beside the topic name.
                        </small>
                      </div>

                      {/* Add Lessons */}
                      <div className="course-field mb--20">
                        <button className="btn btn-primary">Add Lessons</button>
                      </div>

                      {/* Add Quiz */}
                      <div className="course-field mb--20">
                        <button className="btn btn-primary">Add Quiz</button>
                      </div>

                      {/* Add Assignments */}
                      <div className="course-field mb--20">
                        <button className="btn btn-primary">
                          Add Assignments
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="top-circle-shape" />
              <div className="modal-footer pt--30">
                <button
                  type="button"
                  className="rbt-btn btn-border btn-md radius-round-10"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal Area  */}
        {/* Start Modal Area  */}
        <div
          className="rbt-default-modal modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="rbt-round-btn"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="feather-x" />
                </button>
              </div>
              <div className="modal-body">
                <div className="inner rbt-default-form">
                  <div className="row">
                    <div className="col-lg-12">
                      <h5 className="modal-title mb--20" id="exampleModalLabel">
                        Add Topic
                      </h5>
                      <div className="course-field mb--20">
                        <label htmlFor="modal-field-1">Topic Name</label>
                        <input id="modal-field-1" type="text" />
                        <small>
                          <i className="feather-info" /> Topic titles are
                          displayed publicly wherever required. Each topic may
                          contain one or more lessons, quiz and assignments.
                        </small>
                      </div>
                      <div className="course-field mb--20">
                        <label htmlFor="modal-field-2">Topic Summary</label>
                        <textarea id="modal-field-2" defaultValue={""} />
                        <small>
                          <i className="feather-info" /> Add a summary of short
                          text to prepare students for the activities for the
                          topic. The text is shown on the course page beside the
                          tooltip beside the topic name.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-circle-shape" />
              <div className="modal-footer pt--30">
                <button
                  type="button"
                  className="rbt-btn btn-border btn-md radius-round-10"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal Area  */}

        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
          </div>
        </div>
        <div className="footer-style-2 ptb--60 bg-color-white">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="assets/images/logo/logo.png"
                        alt="Logo images"
                      />
                    </a>
                  </div>
                  {/* Social icone Area */}
                  <ul className="social-icon social-default">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                  {/* End */}
                  <div className="text mt--20">
                    <p>
                      © 2023{" "}
                      <a
                        target="_blank"
                        href="https://themeforest.net/user/rbt-themes/portfolio"
                      >
                        Rainbow-Themes
                      </a>
                      . All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
    </div>
  );
};

export default Createcourse;
