import React from "react";
import Studentsidebar from "../components/studentsidebar";

const Studentreviews = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Reviews - Online Courses &amp; Education Bootstrap5 Template
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
                  {/* Start Enrole Course  */}
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Reviews</h4>
                      </div>
                      <div className="rbt-dashboard-table table-responsive mobile-table-750">
                        <table className="rbt-table table table-borderless">
                          <thead>
                            <tr>
                              <th>Course</th>
                              <th>Feedback</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>
                                <span className="b3">
                                  <a href="#">Speaking Korean for Beginners</a>
                                </span>
                              </th>
                              <td>
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
                                    (9 Reviews)
                                  </span>
                                </div>
                                <p className="b2">Good</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" />
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="b3">
                                  <a href="#">Introduction to Calculus</a>
                                </span>
                              </th>
                              <td>
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
                                    (9 Reviews)
                                  </span>
                                </div>
                                <p className="b2">Good</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" />
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="b3">
                                  <a href="#">How to Write Your First Novel</a>
                                </span>
                              </th>
                              <td>
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
                                    (9 Reviews)
                                  </span>
                                </div>
                                <p className="b2">Good</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" />
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="b3">
                                  <a href="#">Speaking Korean for Beginners</a>
                                </span>
                              </th>
                              <td>
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
                                    (9 Reviews)
                                  </span>
                                </div>
                                <p className="b2">Good</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" />
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="b3">
                                  <a href="#">How to Write Your First Novel</a>
                                </span>
                              </th>
                              <td>
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
                                    (9 Reviews)
                                  </span>
                                </div>
                                <p className="b2">Good</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" />
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="b3">
                                  <a href="#">Speaking Korean for Beginners</a>
                                </span>
                              </th>
                              <td>
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
                                    (9 Reviews)
                                  </span>
                                </div>
                                <p className="b2">Good</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" />
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <span className="b3">
                                  <a href="#">Speaking Korean for Beginners</a>
                                </span>
                              </th>
                              <td>
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
                                    (9 Reviews)
                                  </span>
                                </div>
                                <p className="b2">Good</p>
                              </td>
                              <td>
                                <div className="rbt-button-group justify-content-end">
                                  <a
                                    className="rbt-btn btn-xs bg-primary-opacity radius-round"
                                    href="#"
                                    title="Edit"
                                  >
                                    <i className="feather-edit pl--0" />
                                  </a>
                                  <a
                                    className="rbt-btn btn-xs bg-color-danger-opacity radius-round color-danger"
                                    href="#"
                                    title="Delete"
                                  >
                                    <i className="feather-trash-2 pl--0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
    </div>
  );
};

export default Studentreviews;
