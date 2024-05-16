import React, { useState } from "react";
import axios from "axios";

const Forumregister = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [role, setRole] = useState("student");
  const [cvFile, setCvFile] = useState(null);

  const API_URL = "http://localhost:8080/register";

  const registerUser = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setUserData(response.data);
    } catch (error) {
      setError("Error registering user. Please try again.");
    }
    setLoading(false);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleFileChange = (event) => {
    setCvFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (role === "instructor" && !cvFile) {
      setError("Please upload a CV for instructor role.");
      return;
    }

    const formData = new FormData();
    formData.append("register_email", event.target["register-email"].value);
    formData.append("register_user", event.target["register_user"].value);
    formData.append("register_password", event.target["register_password"].value);
    formData.append("register_conpassword", event.target["register_conpassword"].value);
    formData.append("role", role);
    if (role === "instructor") {
      formData.append("cvFile", cvFile);
    }

    registerUser(formData);
  };

  return (
    <div
      className="col-lg-6"
      style={{
        width: "70%",
        marginLeft: "15%",
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
            <div className="form-group">
              <div>
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value="student"
                  checked={role === "student"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="student">Student</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="instructor"
                  name="role"
                  value="instructor"
                  checked={role === "instructor"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="instructor">Instructor</label>
              </div>
            </div>
            {role === "instructor" && (
              <div className="form-group">
                <input
                  type="file"
                  name="cvFile"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <label htmlFor="cvFile">Upload CV *</label>
              </div>
            )}
            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-gradient btn-lg"
                name="submit"
              >
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
          </form>
        )}
        {userData && (
          <div className="alert alert-success">
            User registered successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Forumregister;
