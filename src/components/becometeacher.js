import React from "react";

const Becometeacher = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Become a Teacher  &amp; 
      </title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <a className="rbt-close_side_menu" href="javascript:void(0);" />

      <div className="rbt-become-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-pink-opacity">Instructor</span>
                <h2 className="title">Apply As Instructor</h2>
                <p className="description has-medium-font-size mt--20 mb--40">
                 
                </p>
              </div>
            </div>
          </div>
          <div className="row row row--30">
            <div className="col-lg-12 mt_md--40 mt_sm--40 order-2 order-lg-1">
              <div className="advance-tab-button">
                <ul
                  className="nav nav-tabs tab-button-style-2"
                  id="myTab-4"
                  role="tablist"
                >
                  <li role="presentation">
                    <a
                      href="#"
                      className="tab-button"
                      id="home-tab-4"
                      data-bs-toggle="tab"
                      data-bs-target="#home-4"
                      role="tab"
                      aria-controls="home-4"
                      aria-selected="false"
                    >
                      <span className="title">Become an Intructor.</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#"
                      className="tab-button active"
                      id="profile-tab-4"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-4"
                      role="tab"
                      aria-controls="profile-4"
                      aria-selected="true"
                    >
                      <span className="title">Instructor Rules.</span>
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#"
                      className="tab-button"
                      id="contact-tab-4"
                      data-bs-toggle="tab"
                      data-bs-target="#contact-4"
                      role="tab"
                      aria-controls="contact-4"
                      aria-selected="false"
                    >
                      <span className="title">Start with courses.</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content advance-tab-content-style-2">
                <div
                  className="tab-pane fade"
                  id="home-4"
                  role="tabpanel"
                  aria-labelledby="home-tab-4"
                >
                  <div className="content">
                    <p>
                  
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade active show"
                  id="profile-4"
                  role="tabpanel"
                  aria-labelledby="profile-tab-4"
                >
                  <div className="content">
                    <p>
                     
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact-4"
                  role="tabpanel"
                  aria-labelledby="contact-tab-4"
                >
                  <div className="content">
                    <p>
                     
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt--60 g-5">
            <div className="col-lg-4">
              <div className="thumbnail">
                <img
                  className="radius-10 w-100"
                  src="assets/images/tab/tabs-10.jpg"
                  alt="Corporate Template"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    For Become a Instructor
                  </span>
                </div>
                <h3 className="title">Instructor Registration</h3>
                <hr className="mb--30" />
                <form action="#" className="row row--15">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea defaultValue={""} />
                      <label>Bio</label>
                      <span className="focus-border" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Upload CV</label>
                      <input
                        type="file"
                        name="cvFile"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-submit-group">
                      <button
                        type="submit"
                        className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Become a Instructor</span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                          <span className="btn-icon">
                            <i className="feather-arrow-right" />
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thumb-wrapper bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper rbt-gif-banner-area rbt-arrow-between">
                <div className="swiper-wrapper"></div>
                <div className="rbt-swiper-arrow rbt-arrow-left">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-left" />
                    <i className="rbt-icon-top feather-arrow-left" />
                  </div>
                </div>
                <div className="rbt-swiper-arrow rbt-arrow-right">
                  <div className="custom-overfolow">
                    <i className="rbt-icon feather-arrow-right" />
                    <i className="rbt-icon-top feather-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>

      <div className="rbt-progress-parent">
        <svg
          className="rbt-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default Becometeacher;
