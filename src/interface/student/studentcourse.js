import React from "react";
import Completedcourse from "../../components/Completedcourse.js";
import { Link } from "react-router-dom";

const Studentcourse = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Enrolled Courses - Online Courses &amp; Education Bootstrap5
        Template
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

      <div className="col-lg-9">
        {/* Start Enrole Course  */}
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
          <div className="content">
            <div className="section-title">
              <h4 className="rbt-title-style-3">Enrolled Courses</h4>
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
                    id="home-tab-4"
                    data-bs-toggle="tab"
                    data-bs-target="#home-4"
                    role="tab"
                    aria-controls="home-4"
                    aria-selected="true"
                  >
                    <span className="title">Enrolled Courses</span>
                    <ecourse></ecourse>
                  </a>
                </li>

                <li role="presentation">
                  <a
                    href="#"
                    className="tab-button"
                    id="contact-tab-4"
                    data-bs-toggle="tab"
                    data-bs-target="#contact-4"
                    role="tab"
                    aria-controls="contact-4"
                    aria-selected="false"
                  >
                    <span className="title">Completed Courses</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                className="tab-pane fade active show"
                id="home-4"
                role="tabpanel"
                aria-labelledby="home-tab-4"
              >
                <div className="row g-5">
                  <Completedcourse />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-4"
                role="tabpanel"
                aria-labelledby="profile-tab-4"
              >
                <div className="row g-5"></div>
              </div>
              <div
                className="tab-pane fade"
                id="contact-4"
                role="tabpanel"
                aria-labelledby="contact-tab-4"
              >
                <div className="row g-5">
                  <Completedcourse />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Enrole Course  */}
      </div>
    </div>
  );
};

export default Studentcourse;
