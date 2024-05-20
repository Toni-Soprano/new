import React, { useState } from "react";
import { Link } from "react-router-dom";

const Adminannouncement = () => {
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");
  const [sendTo, setSendTo] = useState("All");

  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      title: announcementTitle,
      content: announcementContent,
      sendTo: sendTo,
    });
    // Clear the form
    setAnnouncementTitle("");
    setAnnouncementContent("");
    setSendTo("All");
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-page-banner-wrapper">
        <div className="rbt-banner-image" />
      </div>
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar-2.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">ADMIN</h5>
                      <ul className="rbt-meta rbt-meta-white mt--5">
                        {/* Meta information */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-5">
                <div className="col-lg-3">
                  <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                    <div className="inner">
                      <div className="content-item-content">
                        <div className="rbt-default-sidebar-wrapper">
                          <div className="section-title mb--20">
                            <h6 className="rbt-title-style-2">Welcome</h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/Admindash">
                                  <i className="feather-home" />
                                  <span>Dashboard</span>
                                </Link>
                              </li>
                            </ul>
                          </nav>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Link to="/Admincourse">
                                  <i className="feather-monitor" />
                                  <span>Courses Validation</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Adminevents">
                                  <i className="feather-volume-2" />
                                  <span>Events Validation</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Admininstructors">
                                  <i className="feather-volume-2" />
                                  <span>Instructor Validation</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Aminannouncement">
                                  <i className="feather-message-square" />
                                  <span>Announcements</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/Adminorderhistory">
                                  <i className="feather-list" />
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
                </div>
                <div className="col-lg-9">
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">
                          Create Announcement
                        </h4>
                      </div>
                      <form onSubmit={handleAnnouncementSubmit}>
                        <div className="mb-3">
                          <label
                            htmlFor="announcementTitle"
                            className="form-label"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="announcementTitle"
                            value={announcementTitle}
                            onChange={(e) =>
                              setAnnouncementTitle(e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="announcementContent"
                            className="form-label"
                          >
                            Content
                          </label>
                          <textarea
                            className="form-control"
                            id="announcementContent"
                            rows="5"
                            value={announcementContent}
                            onChange={(e) =>
                              setAnnouncementContent(e.target.value)
                            }
                            required
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="sendTo" className="form-label">
                            Send To
                          </label>
                          <select
                            className="form-select"
                            id="sendTo"
                            value={sendTo}
                            onChange={(e) => setSendTo(e.target.value)}
                            required
                          >
                            <option value="All">All</option>
                            <option value="Students">Students</option>
                            <option value="Instructors">Instructors</option>
                          </select>
                        </div>
                        <div className="tutor-btn">
                          <button
                            type="submit"
                            className="rbt-btn btn-md hover-icon-reverse"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">
                                Create Announcement
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="feather-arrow-right" />
                              </span>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Content goes here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminannouncement;
