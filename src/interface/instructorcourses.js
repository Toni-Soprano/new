
import React from "react";
import Instructorsidebar from "./components/instructorsidebar";

const Instructorcourses = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Instructor Courses - Online Courses &amp; Education Bootstrap5 Template
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content />
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
      <div className="popup-mobile-menu">
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="assets/images/logo/logo.png"
                    alt="Education Logo Images"
                  />
                </a>
              </div>
              <div className="rbt-btn-close">
                <button className="close-button rbt-round-btn">
                  <i className="feather-x" />
                </button>
              </div>
            </div>
            <p className="description">
              Histudy is a education website template. You can customize all.
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <a href="mailto:hello@example.com">
                  <i className="feather-mail" />
                  example@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="feather-phone" />
                  (302) 555-0107
                </a>
              </li>
            </ul>
          </div>
          <nav className="mainmenu-nav">
            <ul className="mainmenu">
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Home <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu menu-skin-dark">
                  <div className="wrapper">
                    <div className="load-demo-btn text-center">
                      <a className="rbt-btn-link color-white" href="#">
                        Scroll to view more{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-arrow-down-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-megamenu has-menu-child-item">
                <a href="#">
                  Courses <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                {/* End Mega Menu  */}
              </li>
              <li className="has-dropdown has-menu-child-item">
                <a href="#">
                  Dashboard
                  <i className="feather-chevron-down" />
                </a>
                <ul className="submenu">
                  <li className="has-dropdown">
                    <a href="#">Instructor Dashboard</a>
                    <ul className="submenu">
                      <li>
                        <a href="instructor-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="instructor-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="instructor-enrolled-courses.html">
                          Enrolled Courses
                        </a>
                      </li>
                      <li>
                        <a href="instructor-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="instructor-reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a href="instructor-my-quiz-attempts.html">
                          My Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="instructor-order-history.html">
                          Order History
                        </a>
                      </li>
                      <li>
                        <a href="instructor-course.html">My Course</a>
                      </li>
                      <li>
                        <a href="instructor-announcements.html">
                          Announcements
                        </a>
                      </li>
                      <li>
                        <a href="instructor-quiz-attempts.html">
                          Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="instructor-assignments.html">Assignments</a>
                      </li>
                      <li>
                        <a href="instructor-settings.html">Settings</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Student Dashboard</a>
                    <ul className="submenu">
                      <li>
                        <a href="student-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="student-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="student-enrolled-courses.html">
                          Enrolled Courses
                        </a>
                      </li>
                      <li>
                        <a href="student-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="student-reviews.html">Reviews</a>
                      </li>
                      <li>
                        <a href="student-my-quiz-attempts.html">
                          My Quiz Attempts
                        </a>
                      </li>
                      <li>
                        <a href="student-order-history.html">Order History</a>
                      </li>
                      <li>
                        <a href="student-settings.html">Settings</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Pages <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-4">
                  <div className="wrapper">
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="about-us-01.html">About Us</a>
                          </li>
                          <li>
                            <a href="about-us-02.html">About Us 02</a>
                          </li>
                          <li>
                            <a href="event-grid.html">Event Grid</a>
                          </li>
                          <li>
                            <a href="event-list.html">Event List</a>
                          </li>
                          <li>
                            <a href="event-sidebar.html">Event Sidebar</a>
                          </li>
                          <li>
                            <a href="event-details.html">Event Details</a>
                          </li>
                          <li>
                            <a href="academy-gallery.html">Academy Gallery</a>
                          </li>
                          <li>
                            <a href="admission-guide.html">Admission Guide</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="profile.html">Profile</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="become-a-teacher.html">Become a Teacher</a>
                          </li>
                          <li>
                            <a href="instructor.html">Instructor</a>
                          </li>
                          <li>
                            <a href="faqs.html">FAQS</a>
                          </li>
                          <li>
                            <a href="privacy-policy.html">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                          <li>
                            <a href="maintenance.html">Maintenance</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <h3 className="rbt-short-title">Shop Pages</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="shop.html">
                              Shop{" "}
                              <span className="rbt-badge-card">
                                Sale Anything
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="single-product.html">Single Product</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart Page</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist Page</a>
                          </li>
                          <li>
                            <a href="my-account.html">My Acount</a>
                          </li>
                          <li>
                            <a href="login.html">Login &amp; Register</a>
                          </li>
                          <li>
                            <a href="subscription.html">Subscription</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                        <div className="mega-category-item">
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-2.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Online Education</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-1.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Language Club</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-4.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>University Status</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <a href="course-filter-one-toggle.html">
                                <span>Course School</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                          {/* Start Single Category  */}
                          <div className="nav-category-item">
                            <div className="thumbnail">
                              <div className="image">
                                <img
                                  src="assets/images/course/category-9.png"
                                  alt="Course images"
                                />
                              </div>
                              <a href="course-filter-one-toggle.html">
                                <span>Academy</span>
                                <i className="feather-chevron-right" />
                              </a>
                            </div>
                          </div>
                          {/* End Single Category  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Elements <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-3">
                  <div className="wrapper">
                    <div className="row row--15 single-dropdown-menu-presentation">
                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="style-guide.html">
                              Style Guide{" "}
                              <span className="rbt-badge-card">Hot</span>
                            </a>
                          </li>
                          <li>
                            <a href="accordion.html">Accordion</a>
                          </li>
                          <li>
                            <a href="advancetab.html">Advance Tab</a>
                          </li>
                          <li>
                            <a href="brand.html">Brand</a>
                          </li>
                          <li>
                            <a href="button.html">Button</a>
                          </li>
                          <li>
                            <a href="badge.html">Badge</a>
                          </li>
                          <li>
                            <a href="card.html">Card</a>
                          </li>
                          <li>
                            <a href="call-to-action.html">Call To Action</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="counterup.html">Counter</a>
                          </li>
                          <li>
                            <a href="category.html">Categories</a>
                          </li>
                          <li>
                            <a href="header.html">Header Style</a>
                          </li>
                          <li>
                            <a href="newsletter.html">Newsletter</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="social.html">Social</a>
                          </li>
                          <li>
                            <a href="list-style.html">List Style</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-xxl-4 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                            <a href="pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="progressbar.html">Progressbar</a>
                          </li>
                          <li>
                            <a href="testimonial.html">Testimonial</a>
                          </li>
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="split.html">Split Area</a>
                          </li>
                          <li>
                            <a href="search.html">Search Style</a>
                          </li>
                          <li>
                            <a href="instagram.html">Instagram Style</a>
                          </li>
                          <li>
                            <a href="#">&amp; More Coming</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="btn-wrapper">
                          <a
                            className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none"
                            href="#"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">
                                Visit Histudy Template
                              </span>
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
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
              <li className="with-megamenu has-menu-child-item position-static">
                <a href="#">
                  Blog <i className="feather-chevron-down" />
                </a>
                {/* Start Mega Menu  */}
                <div className="rbt-megamenu grid-item-3">
                  <div className="wrapper">
                    <div className="row row--15">
                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <h3 className="rbt-short-title">Blog Styles</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="blog-list.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-grid-minimal.html">
                              Blog Grid Minimal
                            </a>
                          </li>
                          <li>
                            <a href="blog-with-sidebar.html">
                              Blog With Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="post-format-standard.html">
                              Post Format Standard
                            </a>
                          </li>
                          <li>
                            <a href="post-format-gallery.html">
                              Post Format Gallery
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <h3 className="rbt-short-title">Get Started</h3>
                        <ul className="mega-menu-item">
                          <li>
                            <a href="post-format-quote.html">
                              Post Format Quote
                            </a>
                          </li>
                          <li>
                            <a href="post-format-audio.html">
                              Post Format Audio
                            </a>
                          </li>
                          <li>
                            <a href="post-format-video.html">
                              Post Format Video
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Media Under Title{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Sticky Sidebar{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Auto Masonry{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Meta Overlaid{" "}
                              <span className="rbt-badge-card">Coming</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                        <div className="rbt-ads-wrapper">
                          <a className="d-block" href="#">
                            <img
                              src="assets/images/service/mobile-cat.jpg"
                              alt="Education Images"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Mega Menu  */}
              </li>
            </ul>
          </nav>
          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <a
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                href="#"
              >
                <span>Enroll Now</span>
              </a>
            </div>
            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <a href="https://www.facebook.com/">
                    <i className="feather-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i className="feather-twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <i className="feather-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkdin.com/">
                    <i className="feather-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Start Side Vav */}
      <div className="rbt-cart-side-menu">
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="title">
                <h4 className="title mb--0">Your shopping cart</h4>
              </div>
              <div className="rbt-btn-close" id="btn_sideNavClose">
                <button className="minicart-close-button rbt-round-btn">
                  <i className="feather-x" />
                </button>
              </div>
            </div>
          </div>
          <nav className="side-nav w-100">
            <ul className="rbt-minicart-wrapper">
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/1.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Miracle Morning</a>
                  </h6>
                  <span className="quantity">
                    1 * <span className="price">$22</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x" />
                  </button>
                </div>
              </li>
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/7.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Happy Strong</a>
                  </h6>
                  <span className="quantity">
                    1 * <span className="price">$30</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x" />
                  </button>
                </div>
              </li>
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/3.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Rich Dad Poor Dad</a>
                  </h6>
                  <span className="quantity">
                    1 * <span className="price">$50</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x" />
                  </button>
                </div>
              </li>
              <li className="minicart-item">
                <div className="thumbnail">
                  <a href="#">
                    <img
                      src="assets/images/product/4.jpg"
                      alt="Product Images"
                    />
                  </a>
                </div>
                <div className="product-content">
                  <h6 className="title">
                    <a href="single-product.html">Momentum Theorem</a>
                  </h6>
                  <span className="quantity">
                    1 * <span className="price">$50</span>
                  </span>
                </div>
                <div className="close-btn">
                  <button className="rbt-round-btn">
                    <i className="feather-x" />
                  </button>
                </div>
              </li>
            </ul>
          </nav>
          <div className="rbt-minicart-footer">
            <hr className="mb--0" />
            <div className="rbt-cart-subttotal">
              <p className="subtotal">
                <strong>Subtotal:</strong>
              </p>
              <p className="price">$121</p>
            </div>
            <hr className="mb--0" />
            <div className="rbt-minicart-bottom mt--20">
              <div className="view-cart-btn">
                <a
                  className="rbt-btn btn-border icon-hover w-100 text-center"
                  href="#"
                >
                  <span className="btn-text">View Cart</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </a>
              </div>
              <div className="checkout-btn mt--20">
                <a
                  className="rbt-btn btn-gradient icon-hover w-100 text-center"
                  href="#"
                >
                  <span className="btn-text">Checkout</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Side Vav */}
      <a className="close_side_menu" href="javascript:void(0);" />
      <div className="rbt-page-banner-wrapper">
        {/* Start Banner BG Image  */}
        <div className="rbt-banner-image" />
        {/* End Banner BG Image  */}
      </div>
      {/* Start Card Style */}
      <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Start Dashboard Top  */}
              <div className="rbt-dashboard-content-wrapper">
                <div className="tutor-bg-photo bg_image bg_image--22 height-350" />
                {/* Start Tutor Information  */}
                <div className="rbt-tutor-information">
                  <div className="rbt-tutor-information-left">
                    <div className="thumbnail rbt-avatars size-lg">
                      <img
                        src="assets/images/team/avatar.jpg"
                        alt="Instructor"
                      />
                    </div>
                    <div className="tutor-content">
                      <h5 className="title">John Due</h5>
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
                          <span className="btn-text">Create a New Course</span>
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
                {/* End Tutor Information  */}
              </div>
              {/* End Dashboard Top  */}
              <div className="row g-5">
                <div className="col-lg-3">
                 <Instructorsidebar/>
                </div>
                <div className="col-lg-9">
                  {/* Start Enrole Course  */}
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">My Courses</h4>
                      </div>
                      <div className="advance-tab-button mb--30">
                        <ul
                          className="nav nav-tabs tab-button-style-2 justify-content-start"
                          id="myTab-4"
                          role="tablist"
                        >
                          <li role="presentation">
                            <a
                              href="#"
                              className="tab-button active"
                              id="publish-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#publish-4"
                              role="tab"
                              aria-controls="publish-4"
                              aria-selected="true"
                            >
                              <span className="title">Publish</span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#"
                              className="tab-button"
                              id="pending-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#pending-4"
                              role="tab"
                              aria-controls="pending-4"
                              aria-selected="false"
                            >
                              <span className="title">Pending</span>
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#"
                              className="tab-button"
                              id="draft-tab-4"
                              data-bs-toggle="tab"
                              data-bs-target="#draft-4"
                              role="tab"
                              aria-controls="draft-4"
                              aria-selected="false"
                            >
                              <span className="title">Draft</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content">
                        <div
                          className="tab-pane fade active show"
                          id="publish-4"
                          role="tabpanel"
                          aria-labelledby="publish-tab-4"
                        >
                          <div className="row g-5">
                            {/* Start Single Course  */}
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
                                      <span className="rating-count">
                                        {" "}
                                        (15 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      React Front To Back
                                    </a>
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
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$60</span>
                                      <span className="off-price">$120</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
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
                                      <span className="rating-count">
                                        {" "}
                                        (15 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      PHP Beginner + Advanced
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      10 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      30 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$20</span>
                                      <span className="off-price">$43</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-03.jpg"
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
                                      <span className="rating-count">
                                        {" "}
                                        (4 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      Angular Zero to Mastery
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      14 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      26 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$23</span>
                                      <span className="off-price">$45</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pending-4"
                          role="tabpanel"
                          aria-labelledby="pending-tab-4"
                        >
                          <div className="row g-5">
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-04.jpg"
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
                                      <span className="rating-count">
                                        {" "}
                                        (3 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      English Langiage Club
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      20 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      30 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$40</span>
                                      <span className="off-price">$86</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
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
                                      <span className="rating-count">
                                        {" "}
                                        (3 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      Graphic Courses Club
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      50 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      10 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$40</span>
                                      <span className="off-price">$86</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-05.jpg"
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
                                      <span className="rating-count">
                                        {" "}
                                        (3 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      Wed Design Club
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      20 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      30 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$40</span>
                                      <span className="off-price">$86</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="draft-4"
                          role="tabpanel"
                          aria-labelledby="draft-tab-4"
                        >
                          <div className="row g-5">
                            {/* Start Single Course  */}
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
                                      <span className="rating-count">
                                        {" "}
                                        (15 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      React Front To Back
                                    </a>
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
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$60</span>
                                      <span className="off-price">$120</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
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
                                      <span className="rating-count">
                                        {" "}
                                        (15 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      PHP Beginner + Advanced
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      10 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      30 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$20</span>
                                      <span className="off-price">$43</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                            {/* Start Single Course  */}
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                  <a href="course-details.html">
                                    <img
                                      src="assets/images/course/course-online-03.jpg"
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
                                      <span className="rating-count">
                                        {" "}
                                        (4 Reviews)
                                      </span>
                                    </div>
                                    <div className="rbt-bookmark-btn">
                                      <a
                                        className="rbt-round-btn"
                                        title="Bookmark"
                                        href="#"
                                      >
                                        <i className="feather-bookmark" />
                                      </a>
                                    </div>
                                  </div>
                                  <h4 className="rbt-card-title">
                                    <a href="course-details.html">
                                      Angular Zero to Mastery
                                    </a>
                                  </h4>
                                  <ul className="rbt-meta">
                                    <li>
                                      <i className="feather-book" />
                                      14 Lessons
                                    </li>
                                    <li>
                                      <i className="feather-users" />
                                      26 Students
                                    </li>
                                  </ul>
                                  <div className="rbt-card-bottom">
                                    <div className="rbt-price">
                                      <span className="current-price">$23</span>
                                      <span className="off-price">$45</span>
                                    </div>
                                    <a
                                      className="rbt-btn-link left-icon"
                                      href="#"
                                    >
                                      <i className="feather-edit" /> Edit
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* End Single Course  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Enrole Course  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Card Style */}
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

    </div>
  );
};

export default Instructorcourses;