import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Coursedetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/courses/${id}`);
        setCourseData(response.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Course Details - Online Courses &amp;</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <div className="breadcrumb-inner">
          <img src="assets/images/bg/bg-image-10.jpg" alt="Education Images" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
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
                <h2 className="Course Title">{courseData.title}</h2>
                <p className="description">{courseData.description}</p>
                <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
                  <div className="feature-sin best-seller-badge">
                    <span className="rbt-badge-2">
                      <span className="image">
                        <img src="assets/images/icons/card-icon-1.png" alt="Best Seller Icon" />
                      </span>{" "}
                      Bestseller
                    </span>
                  </div>
                  <div className="feature-sin rating">
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                    <a href="#">
                      <i className="fa fa-star" />
                    </a>
                  </div>
                  <div className="feature-sin total-rating">
                    <a className="rbt-badge-4" href="#">5.0</a>
                  </div>
                  <div className="feature-sin total-student">{courseData.students} students enrolled</div>
                </div>
                <div className="rbt-author-meta mb--20">
                  <div className="rbt-avater">
                    <a href="#">
                      <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                    </a>
                  </div>
                  <div className="Instructor Username">
                    By <a href="#">{courseData.instructor}</a>
                  </div>
                </div>
                <ul className="rbt-meta">
                  <li>
                    <i className="feather-globe" />
                    English
                  </li>
                  <li>
                    <i className="feather-award" />
                    Certified Course
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-course-details-area ptb--60">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="course-details-content">
                <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
                  <img className="w-100" src={courseData.imageUrl} alt="Card image" />
                </div>
                <div className="rbt-inner-onepage-navigation sticky-top mt--30">
                  <nav className="mainmenu-nav onepagenav">
                    <ul className="mainmenu">
                      <li className="current">
                        <a href="#overview">Overview</a>
                      </li>
                      <li>
                        <a href="#coursecontent">Course Content</a>
                      </li>
                      <li>
                        <a href="#details">Details</a>
                      </li>
                      <li>
                        <a href="#instructor">Instructor</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* Add the remaining content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursedetails;
