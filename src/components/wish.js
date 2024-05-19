import React from "react";

const Wish = () => {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="rbt-card variation-01 rbt-hover">
        <div className="rbt-card-img">
          <a href="course-details.html">
            <img
              src="assets/images/course/course-online-01.jpg"
              alt="Card image"
            />
          </a>
        </div>
        <div className="rbt-card-body">
          <div className="rbt-card-top">
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
            <div className="rbt-bookmark-btn">
              <a className="rbt-round-btn" title="Bookmark" href="#">
                <i className="feather-bookmark" />
              </a>
            </div>
          </div>
          <h4 className="rbt-card-title">
            <a href="course-details.html">Course Name</a>
          </h4>
       
          <div className="rbt-card-bottom">
            <div className="rbt-price">
              <span className="current-price">$</span>
              <span className="off-price">$1</span>
            </div>
            <a className="rbt-btn-link" href="course-details.html">
              Learn More
              <i className="feather-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wish;
