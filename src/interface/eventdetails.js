import React from "react";
import { Link } from "react-router-dom";

const Eventdetails = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Event Details - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <a className="close_side_menu" href="javascript:void(0);" />
      {/* Start breadcrumb Area */}
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div className="breadcrumb-inner">
          <img src="assets/images/bg/bg-image-10.jpg" alt="Education Images" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content">
                <div className="content text-start">
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <a href="Landing">Home</a>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right" />
                      </div>
                    </li>
                  </ul>
                  <h2 className="Event name">Event name </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb Area */}
      <div className="rbt-course-details-area rbt-section-gap">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="rbt-feature-box rbt-shadow-box thuumbnail">
                </div>
                {/* Start Course Feature Box  */}
                <div className="rbt-feature-box rbt-shadow-box mt--60">
                  <div className="row g-5">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="title mb--0">Event Content</h4>
                      </div>
                    </div>
                    {/* Start Feture Box  */}
                    <div className="col-lg-6">
                      <ul className="rbt-list-style-1">
                        <li>
                          <i className="Event content" />
                        </li>
                      </ul>
                    </div>

                    {/* End Feture Box  */}
                  </div>
                </div>
                {/* End Course Feature Box  */}
                {/* Start Course Feature Box  */}
                <div className="rbt-feature-box rbt-shadow-box mt--60">
                  <div className="row g-5">
                    {/* Start Feture Box  */}
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="title mb--20">Event Description</h4>
                      </div>
                      <p className="Event Description"></p>
                    </div>
                  </div>
                </div>

                {/* End Course Content  */}
                {/* Start Intructor Area  */}
                <div className="rbt-participants-area mt--60">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title text-start mb--20">
                        <span className="subtitle bg-secondary-opacity">
                          Event Participants
                        </span>
                        <h2 className="title">Event Participants</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row g-5">
                    {/* Start Single Team  */}
                    <div className="col-lg-6 col-md-6 col-12">
                      <div className="rbt-team team-style-default style-two rbt-hover">
                        <div className="inner">
                          <div className="content">
                            <h2 className="Insturctor name">Name</h2>
                            <h6 className="Occupation">Math Teacher</h6>
                            <span className="team-form">
                              <i className="feather-map-pin" />
                              <span className="location">USA</span>
                            </span>
                            <p className="Instructor description"></p>
                           
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Team  */}
                    {/* Start Single Team  */}

                    {/* End Single Team  */}
                  </div>
                </div>
                {/* End Intructor Area  */}
              </div>
            </div>
            <div className="col-lg-4 mt_md--60 mt_sm--60">
              <div className="course-sidebar rbt-gradient-border sticky-top rbt-shadow-box course-sidebar-top">
                <div className="inner">
                  {/* Start Viedo Wrapper  */}
                  <a
                    className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15"
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  >
                    <div className="video-content">
                      <img
                        className="w-100 rbt-radius"
                        src="assets/images/others/video-01.jpg"
                        alt="Video Images"
                      />
                      <div className="position-to-top">
                        <span className="rbt-btn rounded-player-2 with-animation">
                          <span className="play-icon" />
                        </span>
                      </div>
                      <span className="play-view-text d-block color-white">
                        <i className="feather-eye" /> Preview this course
                      </span>
                    </div>
                  </a>
                  {/* End Viedo Wrapper  */}
                  <div className="content pt--30">
                    <div className="buy-now-btn">
                      <a
                        className="rbt-btn btn-border icon-hover w-100 d-block text-center"
                        href="https://zoom.us/fr"
                      >
                        <span className="btn-text">Join Now</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </a>
                    </div>
                    <div className="rbt-widget-details has-show-more">
                      <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                        <li>
                          <span className="Start Date">Start Date</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            25 Jan, 2023
                          </span>
                        </li>
                        <li>
                          <span className="Start time">Start Time</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            7.00Pm
                          </span>
                        </li>
                        <li>
                          <span className="Code">Zoom code</span>
                          <span className="rbt-feature-value rbt-badge-5"></span>
                        </li>
                        <li>
                          <span class Name="Skill Level">Skill Level</span>
                          <span className="rbt--value rbt-badge-5">
                            
                          </span>
                        </li>

                        <li>
                          <span>Certificate</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            Yes
                          </span>
                        </li>
                        <li>
                          <span className="Language">Language</span>
                          <span className="rbt-feature-value rbt-badge-5">
                            English
                          </span>
                        </li>
                      </ul>
                      <div className="rbt-show-more-btn">Show More</div>
                    </div>
                    <div className="social-share-wrapper mt--30 text-center">
                      <div className="rbt-post-share d-flex align-items-center justify-content-center">
                        <ul className="social-icon social-default transparent-with-border justify-content-center">
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
                      <hr className="mt--20" />
                      <div className="contact-with-us text-center">
                        <p>For details about the course</p>
                        <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                          <i className="Phone " /> Call Us:{" "}
                          <a href="#">
                            <strong></strong>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Call To Action  */}
      
      {/* End Call To Action  */}

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

export default Eventdetails;
