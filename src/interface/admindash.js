import React from "react";
import Completedcourse from "../components/Completedcourse";

const Admindash = () => {
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
                      <h5 className="title">Admin</h5>
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
              <div className="row g-5">
                <Adminsidebar/>
                <div className="col-lg-9">
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                    <div className="content">
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
                                  Total Courses   
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
                               Total Instuctors
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                                                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-pink-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-pink-opacity">
                                <i className="feather-users" />
                              </div>
                              <div className="content">
                                <h3 className="counter without-icon color-pink">
                                  <span className="odometer" data-count={160}>
                                    00
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Total Students
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                        {/* Start Single Card  */}
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-warning-opacity">
                            <div className="inner">
                              <div className="rbt-round-icon bg-warning-opacity">
                                <i className="feather-dollar-sign" />
                              </div>
                              <div className="content">
                                <h3 className="counter color-warning">
                                  <span className="odometer" data-count={25000}>
                                    00
                                  </span>
                                </h3>
                                <span className="rbt-title-style-2 d-block">
                                  Total Earnings
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Card  */}
                      </div>
                    </div>
                  </div>
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                    <div className="content">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-title">
                            <h4 className="rbt-title-style-3">My Courses</h4>
                          </div>
                        </div>
                      </div>
                      <div className="row gy-5">
                        <div className="col-lg-12">
                          <div className="rbt-dashboard-table table-responsive">
                            <table className="rbt-table table table-borderless">
                              <thead>
                                <tr>
                                  <th>Course Name</th>
                                  <th>Enrolled</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th>
                                    <a href="#">Course Name</a>
                                  </th>
                                  <td>Number</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="load-more-btn text-center">
                            <a className="rbt-btn-link" href="#">
                              Browse All Course
                              <i className="feather-arrow-right" />
                            </a>
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
  );
};

export default Admindash;
