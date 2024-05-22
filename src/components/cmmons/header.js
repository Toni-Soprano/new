import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial login status to false

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Check if user is logged in
  }, []);

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <header className="custom-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 col-6">
            <Link className="logo" to="/">
              <img
                src="assets/images/logo/logo.png"
                alt="Education Logo Images"
                className="img-fluid logo-img"
              />
            </Link>
          </div>
          <div className="col-lg-9 col-md-8 col-6">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/courses">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/events">
                      Events
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  {isLoggedIn ? (
                    <li className="nav-item">
                      <Dropdown>
                        <Dropdown.Toggle variant="primary" id="dropdown-basic">
                          <img
                            src="assets/images/hacker.png"
                            alt="Avatar"
                            className="avatar-img rounded-circle"
                            style={{ width: "30px", height: "30px" }}
                          />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-right rounded">
                          <Dropdown.Item className="dropdown-item" style={{ fontSize: "16px" }}>Profile</Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" style={{ fontSize: "16px" }}>Settings</Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" style={{ fontSize: "16px" }} onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  ) : (
                    <React.Fragment>
                      <li className="nav-item">
                        <Link className="nav-link" to="/forumlogin">
                          <Button variant="primary">Login</Button>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/forumregister">
                          <Button variant="outline-primary">Register</Button>
                        </Link>
                      </li>
                    </React.Fragment>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
