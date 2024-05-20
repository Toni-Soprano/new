import React, { useState } from "react";
import { Link } from "react-router-dom";

const Createevent = () => {

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Create Event</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

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
                          Event Info
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
                            <div className="Event Content mb--15">
                              <label htmlFor="Event Title">Event Title</label>
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

                            <div className="Event Content mb--15">
                              <label htmlFor="Event content">Event content</label>
                              <textarea
                                id="aboutCourse"
                                rows={10}
                                defaultValue={""}
                              />
                              <small className="d-block mt_dec--5">
                                <i className="feather-info" /> Only plain text
                                allowed, no emoji This field is used for search,
                                so please be descriptive!
                              </small>
                            </div>
                            <div className="course-field mb--15 edu-bg-gray">
                              <h6>Event Settings</h6>
                              <div className="rbt-course-settings-content">
                                <div className="row g-5">
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
                                        <div className="Difficulty">
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
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="course-field mb--20">
                              <h6>Course Thumbnail</h6>
                              <div className="Course Thumbnail">
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
                          <div className="course-field mb--15">
                            <label htmlFor="startTime">Start Time</label>
                            <input
                              type="time"
                              id="startTime"
                              name="startTime"
                            />
                          </div>

                          <div className="col-lg-6"></div>
                          <div className="col-lg-6">
                            <div className="course-field mb--15">
                              <label htmlFor="Requirements">Requirements</label>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt--10 row g-5">
                  <div className="col-lg-8">
                    <a
                      className="rbt-btn btn-gradient hover-icon-reverse w-100 text-center"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Create Event</span>
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
        </div>
      </main>
    </div>
  );
};

export default Createevent;
