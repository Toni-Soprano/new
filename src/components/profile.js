import React from "react";

const Profile = () => {
  return (
    <>
      <div className="rbt-tutor-information">
        <div className="rbt-tutor-information-left">
          <div className="thumbnail rbt-avatars size-lg position-relative">
            <img
              src="assets/images/team/avatar-2.jpg"
              alt="Instructor Profile"
            />
            <div className="rbt-edit-photo-inner">
              <button className="rbt-edit-photo" title="Upload Photo">
                <i className="feather-camera" />
              </button>
            </div>
          </div>
        </div>
        <div className="rbt-tutor-information-right">
          <div className="tutor-btn">
            <a
              className="rbt-btn btn-sm btn-border color-white radius-round-10"
              href="#"
            >
              {" "}
              Edit Cover Photo
            </a>
          </div>
        </div>
      </div>
      <div>
        <form
          action="#"
          className="rbt-profile-row rbt-default-form row row--15"
        >
          <div className="rbt-tutor-information">
            <div className="rbt-tutor-information-left">
              <div className="thumbnail rbt-avatars size-lg position-relative">
                <img
                  src="assets/images/team/avatar-2.jpg"
                  alt="Instructor Profile"
                />
                <div className="rbt-edit-photo-inner">
                  <button className="rbt-edit-photo" title="Upload Photo">
                    <i className="feather-camera" />
                  </button>
                </div>
              </div>
            </div>
            <div className="rbt-tutor-information-right">
              <div className="tutor-btn">
                <a
                  className="rbt-btn btn-sm btn-border color-white radius-round-10"
                  href="#"
                >
                  {" "}
                  Edit Cover Photo
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rbt-form-group">
              <label htmlFor="firstname">First Name</label>
              <input id="firstname" type="text" defaultValue="John" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rbt-form-group">
              <label htmlFor="lastname">Last Name</label>
              <input id="lastname" type="text" defaultValue="Due" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rbt-form-group">
              <label htmlFor="username">User Name</label>
              <input id="username" type="text" defaultValue="johndue" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rbt-form-group">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                id="phonenumber"
                type="tel"
                defaultValue="+1-202-555-0174"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="rbt-form-group">
              <label htmlFor="skill">Skill/Occupation</label>
              <input
                id="skill"
                type="text"
                defaultValue="Full Stack Developer"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="rbt-form-group">
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                cols={20}
                rows={5}
                defaultValue={
                  "I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have a serious passion for UI effects, animations, and creating intuitive, dynamic user experiences."
                }
              />
            </div>
          </div>
          <div className="col-12 mt--20">
            <div className="rbt-form-group">
              <a className="rbt-btn btn-gradient" href="#">
                Update Info
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
