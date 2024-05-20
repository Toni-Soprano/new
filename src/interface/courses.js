import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card.js";

const Courses = () => {
  return (
<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Course Filter Toggle - Online Courses &amp; Education Bootstrap5 Template</title>
  <meta name="robots" content="noindex, follow" />
  <meta name="description" content />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
 
 
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
                <li className="rbt-breadcrumb-item"><a href="index.html">Home</a></li>
                <li>
                  <div className="icon-right"><i className="feather-chevron-right" /></div>
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
              <p className="description">Courses that help beginner designers become true developpers. </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Banner Content Top  */}
      {/* Start Course Top  */}
   
      {/* End Course Top  */}
    </div>
  </div>
  <div className="rbt-section-overlayping-top rbt-section-gapBottom">
    <div className="inner">
      <div className="container">
        <div className="rbt-course-grid-column">
          <Card/>
          
          
          
          {/* End Single Card  */}
        </div>
        <div className="row">
          <div className="col-lg-12 mt--60">
            <nav>
          
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
    <svg className="rbt-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>

</div>

  );
};

export default Courses;
