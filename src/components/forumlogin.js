import React, { useState } from "react";
import axios from "axios";

const Forumlogin = () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/login",
        formData
      );
      console.log(response.data);
    } catch (error) {
      setError("Invalid username/email or password.");
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
                    name="usernameOrEmail"
                    type="text"
                    value={formData.usernameOrEmail}
                    onChange={handleInputChange}
                  />
                  <label>Username or email *</label>
                  <span className="focus-border" />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <label>Password *</label>
                  <span className="focus-border" />
                </div>
                <div className="row mb--30">
                  <div className="col-lg-6">
                    <div className="rbt-checkbox">
                      <input
                        type="checkbox"
                        id="rememberme"
                        name="rememberme"
                      />
                      <label htmlFor="rememberme">Remember me</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rbt-lost-password text-end">
                      <a className="rbt-btn-link" href="#">
                        Lost your password?
                      </a>
                    </div>
                  </div>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forumlogin;
