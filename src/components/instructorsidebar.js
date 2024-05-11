import React from "react";

const Instructorsidebar = () => {
  return (
    <div className="col-lg-3">
      <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
        <div className="inner">
          <div className="content-item-content">
            <div className="rbt-default-sidebar-wrapper">
              <div className="section-title mb--20">
                <h6 className="rbt-title-style-2">Welcome, Instructor</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="instructor-dashboard.html">
                      <i className="feather-home" />
                      <span>Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a href="instructor-profile.html">
                      <i className="feather-user" />
                      <span>My Profile</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2"></h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="instructor-course.html">
                      <i className="feather-monitor" />
                      <span>My Courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="instructor-announcements.html">
                      <i className="feather-volume-2" />
                      <span>Announcements</span>
                    </a>
                  </li>
                  <li>
                    <a href="instructor-quiz-attempts.html">
                      <i className="feather-message-square" />
                      <span>Quiz Attempts</span>
                    </a>
                  </li>
                  <li>
                    <a href="instructor-assignments.html">
                      <i className="feather-list" />
                      <span>Assignments</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="section-title mt--40 mb--20">
                <h6 className="rbt-title-style-2">User</h6>
              </div>
              <nav className="mainmenu-nav">
                <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                  <li>
                    <a href="instructor-settings.html">
                      <i className="feather-settings" />
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i className="feather-log-out" />
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructorsidebar;
