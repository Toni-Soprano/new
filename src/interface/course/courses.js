import React, { useState, useEffect } from "react";
import CourseCard from "../../components/ss"; // Import the new CourseCard component
import Header from "../../components/cmmons/header";
import Footer from "../../components/cmmons/footer";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="rbt-page-banner-wrapper">
        {/* Banner content */}
      </div>
      <div className="rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="inner">
          <div className="container">
            <div className="rbt-course-grid-column">
              {courses.map(course => (
                <CourseCard
                  key={course.id}
                  id={course.id}  // Pass the course ID to CourseCard
                  title={course.title}
                  price={`${course.price}`}
                  description={course.description}
                  imageUrl={course.imageUrl} // Assuming imageUrl is the field in your API response
                />
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12 mt--60">
                <nav />
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
        <svg className="rbt-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
