import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Forumlogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful:", response.data);

      // Save user information to localStorage
      localStorage.setItem("user", response.data.username);
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("token", response.data.token);

      Swal.fire({
        title: "Welcome !",
        text: "User logged in ",
        icon: "success",
      });
      navigate("/courses");
    } catch (error) {
      console.error("There was an error logging in:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Unable to connect to the server. Please try again later.",
      });
      setError("Invalid email or password.");
    }
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser();
  };

  return (
    <div className="rbt-elements-area bg-color-white rbt-section-gap">
      <div className="container">
        <div className="row gy-5 row--30">
          <div className="col-lg-6" style={{ width: "50%", marginLeft: "30%" }}>
            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
              <h3 className="title">Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form className="max-width-auto" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Email"
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
                  <Link to="/forumregister">Sign Up</Link> |{" "}
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forumlogin;
