import React, { useState, useEffect } from "react";
import Studentprofile from "./studentprofile";
import Studentannouncements from "./studentannouncements";
import Studentcourse from "./studentcourse";
import Studentquiz from "./studentquiz";
import Studentorderhistory from "./studentorderhistory";
import { Link } from "react-router-dom";
import Header from "../../components/cmmons/header";
import Footer from "../../components/cmmons/footer";
import { Button } from "react-bootstrap";
const Studentdash = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("user");
    setUsername(userName);
  }, []);
  const [currentSection, setCurrentSection] = useState("dashboard");

  const renderSection = () => {
    switch (currentSection) {
      case "profile":
        return <Studentprofile />;
      case "announcements":
        return <Studentannouncements />;
      case "course":
        return <Studentcourse />;
      case "quiz":
        return <Studentquiz />;
      case "orderhistory":
        return <Studentorderhistory />;
      default:
        return (
          
          <div>
            
            <div className="section-title">
              <h4 className="rbt-title-style-3">Dashboard</h4>
            </div>
            <div className="row g-5">
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
                        Enrolled Courses
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
                        ACTIVE COURSES
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="rbt-counterup variation-01 rbt-hover-03 rbt-border-dashed bg-violet-opacity">
                  <div className="inner">
                    <div className="rbt-round-icon bg-violet-opacity">
                      <i className="feather-award" />
                    </div>
                    <div className="content">
                      <h3 className="counter without-icon color-violet">
                        <span className="odometer" data-count={7}>
                          00
                        </span>
                      </h3>
                      <span className="rbt-title-style-2 d-block">
                        Completed Courses
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <Header/>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Dashboard - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
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
                      className="rounded"
                        src="assets/images/team/pp.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">{username}</h5>
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
              </div>
              <div className="row g-5">
                <div className="col-lg-3">
                  <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                    <div className="inner">
                      <div className="content-item-content">
                        <div className="rbt-default-sidebar-wrapper">
                          <div className="section-title mb--20">
                            <h6 className="rbt-title-style-2">
                              Welcome, {username}
                            </h6>
                          </div>
                          <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                              <li>
                                <Button
                                variant="dark"
                                  onClick={() => setCurrentSection("dashboard")}
                                >
                                  <i className="feather-home" />
                                  <span>Dashboard</span>
                                </Button>
                              </li>
                              <li>
                                <Button
                                variant="dark"
                                  onClick={() => setCurrentSection("profile")}
                                >
                                  <i className="feather-user" />
                                  <span>My Profile</span>
                                </Button>
                              </li>
                              <li>
                                <Button
                                variant="dark"
                                  onClick={() => setCurrentSection("course")}
                                >
                                  <i className="feather-book-open" />
                                  <span>Enrolled Courses</span>
                                </Button>
                              </li>
                              <li>
                                <Button
                                variant="dark"
                                  onClick={() => setCurrentSection("quiz")}
                                >
                                  <i className="feather-help-circle" />
                                  <span>My Quiz Attempts</span>
                                </Button>
                              </li>
                              <li>
                                <Button
                                variant="dark"
                                  onClick={() =>
                                    setCurrentSection("announcements")
                                  }
                                >
                                  <i className="feather-help-circle" />
                                  <span>Announcements</span>
                                </Button>
                              </li>
                              <li>
                                <Button
                                variant="dark"
                                  onClick={() =>
                                    setCurrentSection("orderhistory")
                                  }
                                >
                                  <i className="feather-shopping-bag" />
                                  <span>Order History</span>
                                </Button>
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
                                <i className="feather-log-out" />
                                  <span>Logout</span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/">
                                 
                                  <span></span>
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
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                    <div className="content">{renderSection()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    <Footer/>
    </div>
  );
};

export default Studentdash;
