import React from "react";
  const Forumlogin = () => {
    return (
      <div className="rbt-elements-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row gy-5 row--30">
            <div
              className="col-lg-6"
              style={{ width: "50%", marginLeft: "30%" }}
            >
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <h3 className="title">Login</h3>
                <form className="max-width-auto">
                  <div className="form-group">
                    <input name="con_name" type="text" />
                    <label>Username or email *</label>
                    <span className="focus-border" />
                  </div>
                  <div className="form-group">
                    <input name="con_email" type="email" />
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
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Log In</span>
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