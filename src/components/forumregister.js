import React from "react";
  const Forumregister = () => {
    return (
      <div className="col-lg-6" style={{ width: "50%", marginLeft: "30%", marginTop: "10%", marginBottom : "10%" }} >

         <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Register</h3>
          <form className="max-width-auto">
            <div className="form-group">
              <input name="register-email" type="text" />
              <label>Email address *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_user" type="text" />
              <label>Username *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_password" type="password" />
              <label>Password *</label>
              <span className="focus-border" />
            </div>
            <div className="form-group">
              <input name="register_conpassword" type="password" />
              <label>Confirm Password *</label>
              <span className="focus-border" />
            </div>
            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Register</span>
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
    );
  };
  export default Forumregister;