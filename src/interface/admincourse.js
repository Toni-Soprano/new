import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { Link } from "react-router-dom";

const AdminCourse = () => {
  const [courses, setCourses] = useState([]); // State for storing courses

  useEffect(() => {
    // Function to fetch courses from the API
    const fetchCourses = async () => {
      try {
        // Make API call to fetch courses
        const response = await axios.get("https://api.example.com/courses");
        // Update courses state with fetched data
        setCourses(response.data); // Assuming API response returns an array of courses
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    // Call fetchCourses function when component mounts
    fetchCourses();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleApproveCourse = (courseId) => {
    // Logic to update course status to 'approved' in the backend
    // Example: Make a PATCH request to update course status
    // Replace "https://api.example.com/courses/${courseId}" with your API endpoint
    axios
      .patch(`https://api.example.com/courses/${courseId}`, {
        status: "approved",
      })
      .then((response) => {
        // Handle success (if needed)
        console.log(`Course ${courseId} approved successfully`);
      })
      .catch((error) => {
        // Handle error (if needed)
        console.error(`Error approving course ${courseId}:`, error);
      });
  };

  const handleRejectCourse = (courseId) => {
    // Logic to delete course or update status to 'rejected' in the backend
    // Example: Make a DELETE request to remove the course
    // Replace "https://api.example.com/courses/${courseId}" with your API endpoint
    axios
      .delete(`https://api.example.com/courses/${courseId}`)
      .then((response) => {
        // Handle success (if needed)
        console.log(`Course ${courseId} rejected or deleted successfully`);
        // Update courses state by filtering out the rejected course
        setCourses((prevCourses) =>
          prevCourses.filter((course) => course.id !== courseId)
        );
      })
      .catch((error) => {
        // Handle error (if needed)
        console.error(`Error rejecting course ${courseId}:`, error);
      });
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Admin Dashboard - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
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
      <a className="close_side_menu" href="javascript:void(0);"></a>
      <div className="rbt-page-banner-wrapper">
        {/* Start Banner BG Image */}
        <div className="rbt-banner-image"></div>
        {/* End Banner BG Image */}
      </div>
      {/* Start Card Style */}
      <div className="rbt-dashboard-area rbt-section-overlay ping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Dashboard Top */}
              <div className="rbt-dashboard-content-wrapper">
                {/* Start Tutor Information */}
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">ADMIN</h5>
                    </div>
                  </div>
                </div>
                {/* End Tutor Information */}
              </div>
              {/* End Dashboard Top */}
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
                            <Link to="/Adminsettings">
                              <i className="feather-settings" />
                              <span>Settings</span>
                            </Link>
                          </li>
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
              {/* Render course validation table */}
              <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                <div className="content">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Course Validation</h4>
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
                              <th>Title</th>{" "}
                              {/* Updated from "Enrolled" to "Title" */}
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Loop through courses array and render each course */}
                            {courses.map((course) => (
                              <tr key={course.id}>
                                <td>{course.name}</td>
                                <td>{course.title}</td>{" "}
                                {/* Render title instead of enrolled */}
                                <td>{course.status}</td>
                                <td>
                                  {/* Render approve/reject buttons based on course status */}
                                  {course.status === "pending" && (
                                    <>
                                      <button
                                        className="btn btn-success"
                                        onClick={() =>
                                          handleApproveCourse(course.id)
                                        }
                                      >
                                        Approve
                                      </button>{" "}
                                    </>
                                  )}
                                  <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                      handleRejectCourse(course.id)
                                    }
                                  >
                                    Reject
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
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
    </div>
  );
};

export default AdminCourse;
