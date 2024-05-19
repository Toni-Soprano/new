import React from "react";
import Updatepassword from "../components/updatepassword.js";
import Profile from "../components/profile.js";
import Socialshare from "../components/Socialshare.js";
import { Link } from "react-router-dom";

const Studentsettings = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Student Reviews - Online Courses &amp;</title>
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
                      <h5 className="title">Student name</h5>
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
                          <div className="section-title mt--40 mb--20">
                            <h6 className="rbt-title-style-2">User</h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/studentsettings">
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
                  {/* Start Instructor Profile  */}
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Settings</h4>
                      </div>
                      <div className="advance-tab-button mb--30">
                        <ul
                          className="nav nav-tabs tab-button-style-2 justify-content-start"
                          id="settinsTab-4"
                          role="tablist"
                        >
                          <li role="presentation">
                            <a
                              href="#"
                              className="tab-button active"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="true"
                            >
                              <span className="title">Profile</span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#"
                              className="tab-button"
                              id="password-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#password"
                              role="tab"
                              aria-controls="password"
                              aria-selected="false"
                            >
                              <span className="title">Password</span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#"
                              className="tab-button"
                              id="social-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#social"
                              role="tab"
                              aria-controls="social"
                              aria-selected="false"
                            >
                              <span className="title">Social Share</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <div className="rbt-dashboard-content-wrapper">
                            <div className="tutor-bg-photo bg_image bg_image--23 height-245" />
                            <Profile />
                          </div>
                          <div
                            className="tab-pane fade"
                            id="password"
                            role="tabpanel"
                            aria-labelledby="password-tab"
                          >
                            {/* Start Profile Row  */}
                            <div className="rbt-dashboard-content-wrapper">
                              <div className="tutor-bg-photo bg_image bg_image--23 height-245" />
                              <Updatepassword />
                            </div>
                            {/* End Profile Row  */}
                          </div>
                          <div
                            className="tab-pane fade"
                            id="social"
                            role="tabpanel"
                            aria-labelledby="social-tab"
                          >
                            {/* Start Profile Row  */}
                            <div className="rbt-dashboard-content-wrapper">
                              <div className="tutor-bg-photo bg_image bg_image--23 height-245" />
                              <Socialshare/>
                            </div>
                            {/* End Profile Row  */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Instructor Profile  */}
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
      </div>
    </>
  );
};

export default Studentsettings;
