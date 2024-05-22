import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Studentannouncements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("your-api-endpoint-for-announcements");
      setAnnouncements(response.data); // Assuming the response data is an array of announcements
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Student Enrolled Courses - Online Courses & Education Bootstrap5
        Template
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
      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-page-banner-wrapper">
        {/* Start Banner BG Image */}
        <div className="rbt-banner-image" />
        {/* End Banner BG Image */}
      </div>
      {/* Start Card Style */}
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Dashboard Top */}
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
                {/* Start Tutor Information */}
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar-2.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">Emily Hannah</h5>
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
                {/* End Tutor Information */}
              </div>
              {/* End Dashboard Top */}

              <div className="col-lg-9">
                {/* Start Table */}
                <div className="rbt-dashboard-table table-responsive mt--30">
                  <table className="rbt-table table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Announcement</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {announcements.map((announcement) => (
                        <tr key={announcement.id}>
                          <th scope="row">
                            <Link
                              to={`/announcement-details/${announcement.id}`}
                              className="rbt-link-hover"
                            >
                              {announcement.title}
                            </Link>
                          </th>
                          <td>{announcement.category}</td>
                          <td>{announcement.date}</td>
                          <td
                            className={`rbt-badge-${announcement.status.toLowerCase()}`}
                          >
                            {announcement.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studentannouncements;
