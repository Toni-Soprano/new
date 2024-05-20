import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminInstructors = () => {
  const [instructors, setInstructors] = useState([]); // State for storing instructors

  useEffect(() => {
    // Function to fetch instructors from the API
    const fetchInstructors = async () => {
      try {
        // Make API call to fetch instructors
        const response = await axios.get("https://api.example.com/instructors");
        // Update instructors state with fetched data
        setInstructors(response.data); // Assuming API response returns an array of instructors
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    // Call fetchInstructors function when component mounts
    fetchInstructors();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleApproveInstructor = (instructorId) => {
    // Logic to update instructor status to 'approved' in the backend
    axios
      .patch(`https://api.example.com/instructors/${instructorId}`, {
        status: "approved",
      })
      .then((response) => {
        console.log(`Instructor ${instructorId} approved successfully`);
        // Update the instructors state
        setInstructors((prevInstructors) =>
          prevInstructors.map((instructor) =>
            instructor.id === instructorId
              ? { ...instructor, status: "approved" }
              : instructor
          )
        );
      })
      .catch((error) => {
        console.error(`Error approving instructor ${instructorId}:`, error);
      });
  };

  const handleRejectInstructor = (instructorId) => {
    // Logic to delete instructor or update status to 'rejected' in the backend
    axios
      .delete(`https://api.example.com/instructors/${instructorId}`)
      .then((response) => {
        console.log(
          `Instructor ${instructorId} rejected or deleted successfully`
        );
        // Update instructors state by filtering out the rejected instructor
        setInstructors((prevInstructors) =>
          prevInstructors.filter((instructor) => instructor.id !== instructorId)
        );
      })
      .catch((error) => {
        console.error(`Error rejecting instructor ${instructorId}:`, error);
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
                      <h5 className="title">Admin</h5>
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
              {/* Render instructor validation table */}
              <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                <div className="content">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">
                          Instructor Validation
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row gy-5">
                    <div className="col-lg-12">
                      <div className="rbt-dashboard-table table-responsive">
                        <table className="rbt-table table table-borderless">
                          <thead>
                            <tr>
                              <th>Instructor Name</th>
                              <th>CV</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Loop through instructors array and render each instructor */}
                            {instructors.map((instructor) => (
                              <tr key={instructor.id}>
                                <td>{instructor.name}</td>
                                <td>
                                  <a
                                    href={instructor.cvUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    View CV
                                  </a>
                                </td>
                                <td>{instructor.status}</td>
                                <td>
                                  {/* Render approve/reject buttons based on instructor status */}
                                  {instructor.status === "pending" && (
                                    <>
                                      <button
                                        className="btn btn-success"
                                        onClick={() =>
                                          handleApproveInstructor(instructor.id)
                                        }
                                      >
                                        Approve
                                      </button>{" "}
                                    </>
                                  )}
                                  <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                      handleRejectInstructor(instructor.id)
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
              {/* End instructor validation table */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card Style */}
    </div>
  );
};

export default AdminInstructors;
