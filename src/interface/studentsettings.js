import React from "react";
import Studentsidebar from "../components/studentsidebar.js";
import Updatepassword from "../components/updatepassword.js";
import Profile from "../components/profile.js";
import Socialshare from "../components/Socialshare.js";

const Studentsettings = () => {
  return (
    
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Reviews - Online Courses &amp;
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
                      <h5 className="title">Student name</h5>
                      <ul className="rbt-meta rbt-meta-white mt--5">
                        <li>
                          <i className="feather-book" />5 Courses Enroled
                        </li>
                        <li>
                          <i className="feather-award" />4 Certificate
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="rbt-tutor-information-right">
                    <div className="tutor-btn">
                      <a className="rbt-btn btn-md hover-icon-reverse" href="#">
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Become an Instructor</span>
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
                <Studentsidebar/>
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
                           <Profile/>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="password"
                          role="tabpanel"
                          aria-labelledby="password-tab"
                        >
                          {/* Start Profile Row  */}
                          <form
                            action="#"
                            className="rbt-profile-row rbt-default-form row row--15"
                          >
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="currentpassword">
                                  Current Password
                                </label>
                                <input
                                  id="currentpassword"
                                  type="password"
                                  placeholder="Current Password"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="newpassword">
                                  New Password
                                </label>
                                <input
                                  id="newpassword"
                                  type="password"
                                  placeholder="New Password"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="retypenewpassword">
                                  Re-type New Password
                                </label>
                                <input
                                  id="retypenewpassword"
                                  type="password"
                                  placeholder="Re-type New Password"
                                />
                              </div>
                            </div>
                            <div className="col-12 mt--10">
                              <div className="rbt-form-group">
                                <a className="rbt-btn btn-gradient" href="#">
                                  Update Password
                                </a>
                              </div>
                            </div>
                          </form>
                          {/* End Profile Row  */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="social"
                          role="tabpanel"
                          aria-labelledby="social-tab"
                        >
                          {/* Start Profile Row  */}
                          <form
                            action="#"
                            className="rbt-profile-row rbt-default-form row row--15"
                          >
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="facebook">
                                  <i className="feather-facebook" /> Facebook
                                </label>
                                <input
                                  id="facebook"
                                  type="text"
                                  placeholder="https://facebook.com/"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="twitter">
                                  <i className="feather-twitter" /> Twitter
                                </label>
                                <input
                                  id="twitter"
                                  type="text"
                                  placeholder="https://twitter.com/"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="linkedin">
                                  <i className="feather-linkedin" /> Linkedin
                                </label>
                                <input
                                  id="linkedin"
                                  type="text"
                                  placeholder="https://linkedin.com/"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="website">
                                  <i className="feather-globe" /> Website
                                </label>
                                <input
                                  id="website"
                                  type="text"
                                  placeholder="https://website.com/"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="rbt-form-group">
                                <label htmlFor="github">
                                  <i className="feather-github" /> Github
                                </label>
                                <input
                                  id="github"
                                  type="text"
                                  placeholder="https://github.com/"
                                />
                              </div>
                            </div>
                            <div className="col-12 mt--10">
                              <div className="rbt-form-group">
                                <a className="rbt-btn btn-gradient" href="#">
                                  Update Profile
                                </a>
                              </div>
                            </div>
                          </form>
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
