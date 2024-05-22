import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginAdmin = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/admins/login",
        {
          username,
          password,
        }
      );
      console.log("Admin login successful:", response.data);

      // Save admin information to localStorage or session storage
      // For example:
      sessionStorage.setItem("admin", JSON.stringify(response.data.admin));

      Swal.fire({
        title: "Welcome, Admin!",
        text: "Admin logged in.",
        icon: "success",
      });

      // Redirect to admin dashboard or admin-specific page
      navigate("/admindash");
    } catch (error) {
      console.error("There was an error logging in as admin:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to connect to the server. Please try again later.",
      });
      setError("Invalid username or password.");
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginAdmin();
  };

  return (
    <div className="rbt-elements-area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row gy-5 row--30">
          <div className="col-lg-6" style={{ width: "50%", marginLeft: "30%" }}>
            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
              <h3 className="title">Admin Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form className="max-width-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    name="username"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Username"
                  />
                  <span className="focus-border" />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                  />
                  <span className="focus-border" />
                </div>
                <div className="form-submit-group">
                  <button
                    type="submit"
                    className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                    disabled={loading}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">
                        {loading ? "Logging In..." : "Log In"}
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right" />
                      </span>
                    </span>
                  </button>
                </div>
                <div className="text-center mt-3">
                  <Link to="/admin/forgot-password">Forgot Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
