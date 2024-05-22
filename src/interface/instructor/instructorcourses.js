
import React from "react";
import { Link } from "react-router-dom";

const Instructorcourses = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Admin Dashboard - Online Courses &amp; Education Bootstrap5 Template
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
                <div className="tutor-bg-photo bg_image bg_image--22 height-350" />
                {/* Start Tutor Information  */}
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="Instructor username">Instructor</h5>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <a
                        className="rbt-btn btn-md hover-icon-reverse"
                        href="/createcourse"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Create a New Course</span>
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
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <a
                        className="rbt-btn btn-md hover-icon-reverse"
                        href="/createevent"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Create a New Event</span>
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
                              Welcome, Instructor
                            </h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/instructordash">
                                  <i className="feather-home" />
                                  <span>Dashboard</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/instructorprofile">
                                  <i className="feather-user" />
                                  <span>My Profile</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Instructorcourses">
                                  <i className="feather-book-open" />
                                  <span>My Courses</span>
                                </Link>
                              </li>

                              <li>
                                <Link to="/instructor-my-quiz-attempts">
                                  <i className="feather-help-circle" />
                                  <span> Assignments </span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">Instructor</h6>
                          </div>

                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">User</h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/instructorsettings">
                                  <i className="feather-settings" />
                                  <span>Settings</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                  <i className="feather-log-out" />
                                  <span>Logout</span>
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
                  {/* Start Enrole Course  */}
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">My Courses</h4>
                      </div>
                      <div className="advance-tab-button mb--30">
                        <ul
                          className="nav nav-tabs tab-button-style-2 justify-content-start"
                          id="myTab-4"
                          role="tablist"
                        >
                          <li role="presentation">
                            <a
                              href="#"
                              className="tab-button active"
                              id="publish-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#publish-4"
                              role="tab"
                              aria-controls="publish-4"
                              aria-selected="true"
                            >
                              <span className="title">Publish</span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#"
                              className="tab-button"
                              id="pending-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#pending-4"
                              role="tab"
                              aria-controls="pending-4"
                              aria-selected="false"
                            >
                              <span className="title">Pending</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="publish-4"
                          role="tabpanel"
                          aria-labelledby="publish-tab-4"
                        >
                          <div className="row g-5">
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-01.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (15 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      React Front To Back
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      20 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      40 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$60</span>
                                      <span className="off-price">$120</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-02.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (15 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      PHP Beginner + Advanced
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      10 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      30 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$20</span>
                                      <span className="off-price">$43</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-03.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (4 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      Angular Zero to Mastery
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      14 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      26 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$23</span>
                                      <span className="off-price">$45</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pending-4"
                          role="tabpanel"
                          aria-labelledby="pending-tab-4"
                        >
                          <div className="row g-5">
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-04.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (3 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      English Langiage Club
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      20 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      30 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$40</span>
                                      <span className="off-price">$86</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-06.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (3 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      Graphic Courses Club
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      50 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      10 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$40</span>
                                      <span className="off-price">$86</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-05.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (3 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      Wed Design Club
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      20 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      30 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$40</span>
                                      <span className="off-price">$86</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="draft-4"
                          role="tabpanel"
                          aria-labelledby="draft-tab-4"
                        >
                          <div className="row g-5">
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-01.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (15 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      React Front To Back
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      20 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      40 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$60</span>
                                      <span className="off-price">$120</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-02.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (15 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      PHP Beginner + Advanced
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      10 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      30 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$20</span>
                                      <span className="off-price">$43</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-03.jpg"
                                      alt="Card image"
                                    />
                                  </a>
                                </div>
                                <div className="rbt-card-body">
                                  <div className="rbt-card-top">
                                    <div className="rbt-review">
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <span className="rating-count">
                                        {" "}
                                        (4 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      Angular Zero to Mastery
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      14 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      26 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$23</span>
                                      <span className="off-price">$45</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Enrole Course  */}
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

export default Instructorcourses;