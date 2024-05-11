import React from "react";

const Tutorinfo = () => {
  return (
  <div className="rbt-tutor-information">
  <div className="rbt-tutor-information-left">
    <div className="thumbnail rbt-avatars size-lg">
      <img src="assets/images/team/avatar.jpg" alt="Instructor" />
    </div>
    <div className="tutor-content">
      <h5 className="title">Admin</h5>
      <div className="rbt-review">
        <div className="rating">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </div>
        <span className="rating-count"> (15 Reviews)</span>
      </div>
    </div>
  </div>
  <div className="rbt-tutor-information-right">
    <div className="tutor-btn">
      <a
        className="rbt-btn btn-md hover-icon-reverse"
        href="create-course.html"
      >
        <span className="icon-reverse-wrapper">
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
  );
};

export default Tutorinfo;