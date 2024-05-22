import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                          Course Content
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
 
        {/* End Modal Area  */}
        {/* Start Modal Area  */}
      
        {/* End Modal Area  */}

        <div className="rbt-separator-mid">
          <div className="container">
            <hr className="rbt-separator m-0" />
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
