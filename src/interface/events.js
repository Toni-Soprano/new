import React from "react";
import Event from "../components/event.js";

const Events = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Event With Sidebar - Online Courses &amp; Education Bootstrap5 Template
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
                    <li className="rbt-breadcrumb-item active">All Event</li>
                  </ul>
                  {/* End Breadcrumb Area  */}
                  <div className=" title-wrapper">
                    <h1 className="title mb--0">All Event</h1>
                    <a href="#" className="rbt-badge-2">
                      <div className="image">🎉</div> 99 Events
                    </a>
                  </div>
                  <p className="description">
                    Event that help beginner designers become true unicorns.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Banner Content Top  */}
        </div>
      </div>
      <div className="rbt-counterup-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row row--30 gy-5">
            <div className="col-lg-4 col-xl-3 order-2 order-lg-1">
              <aside className="rbt-sidebar-widget-wrapper rbt-gradient-border">
                {/* Start Widget Area  */}
                <div className="rbt-single-widget rbt-widget-categories has-show-more">
                  <div className="inner">
                    <h4 className="rbt-widget-title">Categories</h4>
                    <ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">
                      {/* Categories list items */}
                    </ul>
                  </div>
                  <div className="rbt-show-more-btn">Show More</div>
                </div>
                {/* End Widget Area  */}
                {/* Start Widget Area  */}
                <div className="rbt-single-widget rbt-widget-recent">
                  <div className="inner">
                    <h4 className="rbt-widget-title">Recent Events</h4>
                    <ul className="rbt-sidebar-list-wrapper recent-post-list">
                      {/* Recent events list items */}
                    </ul>
                  </div>
                </div>
                {/* End Widget Area  */}
                {/* Start Widget Area  */}
                <div className="rbt-single-widget rbt-widget-tag">
                  <div className="inner">
                    <h4 className="rbt-widget-title">Event Tags</h4>
                    <div className="rbt-sidebar-list-wrapper rbt-tag-list">
                      {/* Event tags list */}
                    </div>
                  </div>
                </div>
                {/* End Widget Area  */}
              </aside>
            </div>
          </div>
          {/* Render the Event component */}
          <Event />
        </div>
      </div>
    </div>
  );
};

export default Events;
