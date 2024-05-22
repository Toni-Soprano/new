import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Forumregister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // Default role is student
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:8080/api/register";

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { username, email, password, confirmPassword, role } = formData;
      // Validation for password match
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        Swal.fire({
          icon: "error",
          title: "Error...",
          text: "Passwords do not match!",
        });
        setLoading(false);
        return;
      }

      const response = await axios.post(API_URL, {
        username,
        email,
        password,
        role,
      });
      console.log(response.data);
      navigate("/");
      Swal.fire({
        title: "Good job!",
        text: "User registered",
        icon: "success",
      });
    } catch (error) {
      setError("Error registering user. Email or username already in use.");
    }

    setLoading(false);
  };

  return (
    <div className="text-center">
      <div className="col-lg-6 mx-auto">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Register</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <form className="max-width-auto" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <label>Username *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email address *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <label>Confirm Password *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
              <label>Role *</label>
            </div>
            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-gradient btn-lg"
                disabled={loading}
              >
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forumregister;
