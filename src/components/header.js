import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial login status to false

  // Function to handle user login (can be replaced with actual login logic)
  const handleLogin = () => {
    setIsLoggedIn(true); // Update login status to true
  };

  // Function to handle user logout (can be replaced with actual logout logic)
  const handleLogout = () => {
    setIsLoggedIn(false); // Update login status to false
  };
  return (
    <div className="rbt-header-elements bg-color-white rbt-section-gapBottom">
      <div className="container">
        <div className="row mb--55">
          <div className="col-lg-12">
            <div className="section-title text-center"></div>
          </div>
        </div>
      </div>
      {/* Start Header Area */}
      <header className="rbt-header rbt-header-10 rbt-transparent-header">
        <div className="rbt-sticky-placeholder" />
        <div className="rbt-header-wrapper  header-not-transparent header-sticky">
          <div className="container">
            <div className="mainbar-row rbt-navigation-center align-items-center">
              <div className="header-left rbt-header-content">
                <div className="header-info">
                  <div className="logo">
                    <a href="Landing">
                      <img
                        src="assets/images/logo/logo.png"
                        alt="Education Logo Images"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="rbt-main-navigation d-none d-xl-block">
                <nav className="mainmenu-nav">
                  <ul className="mainmenu">
                    {/* Update href attributes with Link components */}
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to="/">
                        Home <i className="feather-chevron-down" />
                      </Link>
                    </li>
                    <li className="with-megamenu has-menu-child-item">
                      <Link to="/Courses">
                        Courses <i className="feather-chevron-down" />
                      </Link>
                      {/* Start Mega Menu */}
                      {/* Your mega menu content */}
                    </li>
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to="/Events">
                        Events <i className="feather-chevron-down" />
                      </Link>
                    </li>
                    <li className="with-megamenu has-menu-child-item position-static">
                      <Link to="/Contact">
                        Contact <i className="feather-chevron-down" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                {/* Navbar Icons */}
                <ul className="quick-access">
                  <li className="access-icon rbt-mini-cart">
                    <a
                      className="rbt-cart-sidenav-activation rbt-round-btn"
                      href="Cart"
                    >
                      <i className="feather-shopping-cart" />
                      <span className="rbt-cart-count"></span>
                    </a>
                  </li>
                  <li className="account-access rbt-user-wrapper d-none d-xl-block">
                    <a href="#">
                      <i className="feather-user" />
                    </a>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img
                              src="assets/images/team/avatar.jpg"
                              alt="User Images"
                            />
                          </div>
                          <div className="admin-info">
                            <span className="name">Nipa Bali</span>
                            <a
                              className="rbt-btn-link color-primary"
                              href="profile.html"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor-dashboard.html">
                              <i className="feather-home" />
                              <span>My Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-bookmark" />
                              <span>Bookmark</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-enrolled-courses.html">
                              <i className="feather-shopping-bag" />
                              <span>Enrolled Courses</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-wishlist.html">
                              <i className="feather-heart" />
                              <span>Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-reviews.html">
                              <i className="feather-star" />
                              <span>Reviews</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-my-quiz-attempts.html">
                              <i className="feather-list" />
                              <span>My Quiz Attempts</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-order-history.html">
                              <i className="feather-clock" />
                              <span>Order History</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-quiz-attempts.html">
                              <i className="feather-message-square" />
                              <span>Question &amp; Answer</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="#">
                              <i className="feather-book-open" />
                              <span>Getting Started</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor-settings.html">
                              <i className="feather-settings" />
                              <span>Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <i className="feather-log-out" />
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                    <a className="rbt-round-btn" href="#">
                      <i className="feather-user" />
                    </a>
                    <div className="rbt-user-menu-list-wrapper">
                      <div className="inner">
                        <div className="rbt-admin-profile">
                          <div className="admin-thumbnail">
                            <img
                              src="assets/images/team/avatar.jpg"
                              alt="User Images"
                            />
                          </div>
                          <div className="admin-info">
                            <span className="name">Nipa Bali</span>
                            <a
                              className="rbt-btn-link color-primary"
                              href="profile.html"
                            >
                              View Profile
                            </a>
                          </div>
                        </div>
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor-dashboard.html">
                              <i className="feather-home" />
                              <span>My Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="feather-bookmark" />
                              <span>Bookmark</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-enrolled-courses.html">
                              <i className="feather-shopping-bag" />
                              <span>Enrolled Courses</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-wishlist.html">
                              <i className="feather-heart" />
                              <span>Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-reviews.html">
                              <i className="feather-star" />
                              <span>Reviews</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-my-quiz-attempts.html">
                              <i className="feather-list" />
                              <span>My Quiz Attempts</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-order-history.html">
                              <i className="feather-clock" />
                              <span>Order History</span>
                            </a>
                          </li>
                          <li>
                            <a href="instructor-quiz-attempts.html">
                              <i className="feather-message-square" />
                              <span>Question &amp; Answer</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="#">
                              <i className="feather-book-open" />
                              <span>Getting Started</span>
                            </a>
                          </li>
                        </ul>
                        <hr className="mt--10 mb--10" />
                        <ul className="user-list-wrapper">
                          <li>
                            <a href="instructor-settings.html">
                              <i className="feather-settings" />
                              <span>Settings</span>
                            </a>
                          </li>
                          <li>
                            <a href="index.html">
                              <i className="feather-log-out" />
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>

                {/* Start Mobile-Menu-Bar */}
                <div className="mobile-menu-bar d-block d-xl-none">
                  <div className="hamberger">
                    <button className="hamberger-button rbt-round-btn">
                      <i className="feather-menu" />
                    </button>
                  </div>
                </div>
                {/* Start Mobile-Menu-Bar */}
              </div>
            </div>
          </div>
          {/* Start Search Dropdown  */}

          {/* End Search Dropdown  */}
        </div>
      </header>
      {/* Mobile Menu Section */}

      {/* End Side Vav */}
      <a className="close_side_menu" href="javascript:void(0);" />
    </div>
  );
};
export default Header;
