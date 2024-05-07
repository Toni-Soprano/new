import React from "react";

const Card = () => {
  return (
    <div className="rbt-section-overlayping-top rbt-section-gapBottom">
      <div className="inner">
        <div className="container">
          <div className="rbt-course-grid-column">
            {/* Start Single Card  */}
            <div className="course-grid-3">
              <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                  <a href="course-details.html">
                    <img
                      src="assets/images/course/course-online-01.jpg"
                      alt="Card image"
                    />
                    <div className="rbt-badge-3 bg-white">
                      <span>-40%</span>
                      <span>Off</span>
                    </div>
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
                    <a href="course-details.html">React Front To Back</a>
                  </h4>
                  <ul className="rbt-meta">
                    <li>
                      <i className="feather-book" />
                      12 Lessons
                    </li>
                    <li>
                      <i className="feather-users" />
                      50 Students
                    </li>
                  </ul>
                  <p className="rbt-card-text">
                    It is a long established fact that a reader will be
                    distracted.
                  </p>
                  <div className="rbt-author-meta mb--10">
                    <div className="rbt-avater">
                      <a href="#">
                        <img
                          src="assets/images/client/avatar-02.png"
                          alt="Sophia Jaymes"
                        />
                      </a>
                    </div>
                    <div className="rbt-author-info">
                      by <a href="profile.html">Angela</a> In{" "}
                      <a href="#">Development</a>
                    </div>
                  </div>
                  <div className="rbt-card-bottom">
                    <div className="rbt-price">
                      <span className="current-price">$60</span>
                      <span className="off-price">$120</span>
                    </div>
                    <a className="rbt-btn-link" href="course-details.html">
                      Learn More
                      <i className="feather-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Card  */}
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
