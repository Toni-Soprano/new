import React from "react";
const Updatepassword = () => {
  return (
    <div>
      <div
      >
        <form
          action="#"
          className="rbt-profile-row rbt-default-form row row--15"
        >
          <div className="col-12">
            <div className="rbt-form-group">
              <label htmlFor="currentpassword">Current Password</label>
              <input
                id="currentpassword"
                type="password"
                placeholder="Current Password"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="rbt-form-group">
              <label htmlFor="newpassword">New Password</label>
              <input
                id="newpassword"
                type="password"
                placeholder="New Password"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="rbt-form-group">
              <label htmlFor="retypenewpassword">Re-type New Password</label>
              <input
                id="retypenewpassword"
                type="password"
                placeholder="Re-type New Password"
              />
            </div>
          </div>
          <div className="col-12 mt--10">
            <div className="rbt-form-group">
              <a className="rbt-btn btn-gradient" href="#">
                Update Password
              </a>
            </div>
          </div>
        </form>
      </div>
      <div
      />
    </div>
  );
};

export default Updatepassword;
