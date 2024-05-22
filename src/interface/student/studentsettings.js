import React from "react";
import Instructorsidebar from "../../components/instructorsidebar.js";
import Updatepassword from "../../components/updatepassword.js";
import Profile from "../../components/profile.js";
import Socialshare from "../../components/Socialshare.js";
import { Link } from "react-router-dom";

const Instructorsettings = () => {
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
                      <h5 className="title">Instructor</h5>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <a
                        className="rbt-btn btn-md hover-icon-reverse"
                        href="create-course.html"
                      >
                        <span className="icon-reverse-wrapper">
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
                        {/* Start Tutor Information  */}
                        <div className="rbt-tutor-information">
                          <div className="rbt-tutor-information-left">
                            <div className="thumbnail rbt-avatars size-lg position-relative">
                              <img
                                src="assets/images/team/avatar-2.jpg"
                                alt="Instructor"
                              />
                              <div className="rbt-edit-photo-inner">
                                <button
                                  className="rbt-edit-photo"
                                  title="Upload Photo"
                                >
                                  <i className="feather-camera" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="rbt-tutor-information-right">
                            <div className="tutor-btn">
                              <a
                                className="rbt-btn btn-sm btn-border color-white radius-round-10"
                                href="#"
                              >
                                Edit Cover Photo
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* End Tutor Information  */}
                      </div>
                      {/* Start Profile Row  */}
                      <Profile />
                      {/* End Profile Row  */}
                    </div>
                    <div
                      className="tab-pane fade"
                      id="password"
                      role="tabpanel"
                      aria-labelledby="password-tab"
                    >
                      {/* Start Profile Row  */}
                      <Updatepassword />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="social"
                      role="tabpanel"
                      aria-labelledby="social-tab"
                    >
                      <Socialshare />
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
  );
};

export default Instructorsettings;
