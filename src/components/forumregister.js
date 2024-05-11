import React, { useState } from "react";
import axios from "axios";

const Forumregister = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registerUser = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:8080/register",
        formData
      );
      setUserData(response.data);
    } catch (error) {
      setError("Error registering user. Please try again.");
    }
    setLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      email: formData.get("register-email"),
      username: formData.get("register_user"),
      password: formData.get("register_password"),
      confirmPassword: formData.get("register_conpassword"),
    };
    registerUser(userData);
  };

  return (
    <div
      className="col-lg-6"
      style={{
        width: "50%",
        marginLeft: "30%",
        marginTop: "10%",
        marginBottom: "10%",
      }}
    >
      <div className="rbt-contact-form contact-form-style-1 max-width-auto">
        <h3 className="title">Register</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        {!userData && (
          <form className="max-width-auto" onSubmit={handleSubmit}>
            <div className="form-group">
              <input name="register-email" type="text" required />
              <label>Email address *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_user" type="text" required />
              <label>Username *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_password" type="password" required />
              <label>Password *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_conpassword" type="password" required />
              <label>Confirm Password *</label>
              <span className="focus-border" />
            </div>
            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        )}
        {userData && (
          <div>
            <h4>Registered User Data:</h4>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forumregister;
