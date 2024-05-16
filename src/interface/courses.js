import React from "react";

const Courses = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Course Filter Open - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Favicon */}

      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-page-banner-wrapper">
        {/* Start Banner BG Image  */}
        <div className="rbt-banner-image" />
        {/* End Banner BG Image  */}
        <div className="rbt-banner-content">
          {/* Start Banner Content Top  */}
          <div className="rbt-banner-content-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Start Breadcrumb Area  */}
                  <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <div className="icon-right">
                        <i className="feather-chevron-right" />
                      </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">All Courses</li>
                  </ul>
                  {/* End Breadcrumb Area  */}
                  <div className=" title-wrapper">
                    <h1 className="title mb--0">All Courses</h1>
                    <a href="#" className="rbt-badge-2">
                      <div className="image">🎉</div> 50 Courses
                    </a>
                  </div>
                  <p className="description">
                    Courses that help beginner designers become true unicorns.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Banner Content Top  */}
          {/* Start Course Top  */}
          <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                    <div className="rbt-short-item switch-layout-container">
                      <ul className="course-switch-layout">
                        <li className="course-switch-item">
                          <button
                            className="rbt-grid-view active"
                            title="Grid Layout"
                          >
                            <i className="feather-grid" />{" "}
                            <span className="text">Grid</span>
                          </button>
                        </li>
                        <li className="course-switch-item">
                          <button className="rbt-list-view" title="List Layout">
                            <i className="feather-list" />{" "}
                            <span className="text">List</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-short-item">
                      <span className="course-index">
                        Showing 1-9 of 19 results
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                    <div className="rbt-short-item">
                      <form action="#" className="rbt-search-style me-0">
                        <input type="text" placeholder="Search Your Course.." />
                        <button
                          type="submit"
                          className="rbt-search-btn rbt-round-btn"
                        >
                          <i className="feather-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Filter Toggle  */}
              <div className="default-exp-wrapper">
                <div className="filter-inner">
                  <div className="filter-select-option">
                    <div className="filter-select rbt-modern-select">
                      <span className="select-label d-block">Short By</span>
                      <select>
                        <option>Default</option>
                        <option>Latest</option>
                        <option>Popularity</option>
                        <option>Trending</option>
                        <option>Price: low to high</option>
                        <option>Price: high to low</option>
                      </select>
                    </div>
                  </div>
              
                  <div className="filter-select-option">
                    <div className="filter-select rbt-modern-select">
                      <span className="select-label d-block">
                        Short By Offer
                      </span>
                      <select>
                        <option>Free</option>
                        <option>Paid</option>
                        <option>Premium</option>
                      </select>
                    </div>
                  </div>
                  <div className="filter-select-option">
                    <div className="filter-select rbt-modern-select">
                      <span className="select-label d-block">
                        Short By Category
                      </span>
                      <select data-live-search="true">
                        <option>Web Design</option>
                        <option>Graphic</option>
                        <option>App Development</option>
                        <option>Figma Design</option>
                      </select>
                    </div>
                  </div>
                
                </div>
              </div>
              {/* End Filter Toggle  */}
            </div>
          </div>
          {/* End Course Top  */}
        </div>
      </div>
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
                        By <a href="profile.html">Angela</a> In{" "}
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
              {/* Start Single Card  */}
              <div className="course-grid-3">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="course-details.html">
                      <img
                        src="assets/images/course/course-online-02.jpg"
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
                      <a href="course-details.html">PHP Beginner Advanced</a>
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
                        By <a href="profile.html">Angela</a> In{" "}
                        <a href="#">Development</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$60</span>
                        <span className="off-price">$120</span>
                      </div>
                      <a
                        className="rbt-btn-link left-icon"
                        href="course-details.html"
                      >
                        <i className="feather-shopping-cart" /> Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="course-grid-3">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="course-details.html">
                      <img
                        src="assets/images/course/course-online-03.jpg"
                        alt="Card image"
                      />
                      <div className="rbt-badge-3 bg-white">
                        <span>-10%</span>
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
                        <span className="rating-count"> (5 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="#">
                          <i className="feather-bookmark" />
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="course-details.html">Angular Zero to Mastery</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book" />8 Lessons
                      </li>
                      <li>
                        <i className="feather-users" />
                        30 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      Angular Js long fact that a reader will be distracted by
                      the readable.
                    </p>
                    <div className="rbt-author-meta mb--20">
                      <div className="rbt-avater">
                        <a href="#">
                          <img
                            src="assets/images/client/avatar-03.png"
                            alt="Sophia Jaymes"
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="profile.html">Slaughter</a> In{" "}
                        <a href="#">Languages</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$80</span>
                        <span className="off-price">$100</span>
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
              {/* Start Single Card  */}
              <div className="course-grid-3">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="course-details.html">
                      <img
                        src="assets/images/course/course-online-04.jpg"
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
                      <a href="course-details.html">Web Front To Back</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book" />
                        20 Lessons
                      </li>
                      <li>
                        <i className="feather-users" />
                        40 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      Web Js long fact that a reader will be distracted by the
                      readable.
                    </p>
                    <div className="rbt-author-meta mb--20">
                      <div className="rbt-avater">
                        <a href="#">
                          <img
                            src="assets/images/client/avater-01.png"
                            alt="Sophia Jaymes"
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="profile.html">Patrick</a> In{" "}
                        <a href="#">Languages</a>
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
              {/* Start Single Card  */}
              <div className="course-grid-3">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="course-details.html">
                      <img
                        src="assets/images/course/course-online-05.jpg"
                        alt="Card image"
                      />
                      <div className="rbt-badge-3 bg-white">
                        <span>-20%</span>
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
                      <a href="course-details.html">SQL Beginner Advanced</a>
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
                      distracted by the readable.
                    </p>
                    <div className="rbt-author-meta mb--20">
                      <div className="rbt-avater">
                        <a href="#">
                          <img
                            src="assets/images/client/avatar-02.png"
                            alt="Sophia Jaymes"
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="profile.html">Angela</a> In{" "}
                        <a href="#">Development</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$60</span>
                        <span className="off-price">$120</span>
                      </div>
                      <a
                        className="rbt-btn-link left-icon"
                        href="course-details.html"
                      >
                        <i className="feather-shopping-cart" /> Add To Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Card  */}
              {/* Start Single Card  */}
              <div className="course-grid-3">
                <div className="rbt-card variation-01 rbt-hover">
                  <div className="rbt-card-img">
                    <a href="course-details.html">
                      <img
                        src="assets/images/course/course-online-06.jpg"
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
                        <span className="rating-count"> (5 Reviews)</span>
                      </div>
                      <div className="rbt-bookmark-btn">
                        <a className="rbt-round-btn" title="Bookmark" href="#">
                          <i className="feather-bookmark" />
                        </a>
                      </div>
                    </div>
                    <h4 className="rbt-card-title">
                      <a href="course-details.html">JS Zero to Mastery</a>
                    </h4>
                    <ul className="rbt-meta">
                      <li>
                        <i className="feather-book" />8 Lessons
                      </li>
                      <li>
                        <i className="feather-users" />
                        30 Students
                      </li>
                    </ul>
                    <p className="rbt-card-text">
                      Angular Js long fact that a reader will be distracted by
                      the readable.
                    </p>
                    <div className="rbt-author-meta mb--20">
                      <div className="rbt-avater">
                        <a href="#">
                          <img
                            src="assets/images/client/avatar-03.png"
                            alt="Sophia Jaymes"
                          />
                        </a>
                      </div>
                      <div className="rbt-author-info">
                        By <a href="profile.html">Slaughter</a> In{" "}
                        <a href="#">Languages</a>
                      </div>
                    </div>
                    <div className="rbt-card-bottom">
                      <div className="rbt-price">
                        <span className="current-price">$80</span>
                        <span className="off-price">$100</span>
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
            <div className="row">
              <div className="col-lg-12 mt--60">
                <nav>
                  <ul className="rbt-pagination">
                    <li>
                      <a href="#" aria-label="Previous">
                        <i className="feather-chevron-left" />
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#" aria-label="Next">
                        <i className="feather-chevron-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
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
      {/* JS
============================================ */}
      {/* Modernizer JS */}
      {/* jQuery JS */}
      {/* Bootstrap JS */}
      {/* sal.js */}
      {/* Main JS */}
    </div>
  );
};

export default Courses;
