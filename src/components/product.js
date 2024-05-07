import React from "react";

const Product = () => {
  return (
    <div className="rbt-shop-area rbt-section-overlayping-top rbt-section-gapBottom">
      <div className="container">
        <div className="row g-5">
          {/* Start Single Product  */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="rbt-default-card style-three rbt-hover">
              <div className="inner">
                <div className="content pt--0 pb--10">
                  <h2 className="title">
                    <a href="single-product.html">Miracle Morning</a>
                  </h2>
                  <span className="team-form">
                    <span className="location">By John Due</span>
                  </span>
                </div>
                <div className="thumbnail">
                  <a href="single-product.html">
                    <img
                      src="assets/images/product/1.jpg"
                      alt="Histudy Book Image"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="rbt-review justify-content-center">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="rating-count">
                      (15) - 100% Positive Reviews
                    </span>
                  </div>
                  <div className="rbt-price justify-content-center mt--10">
                    <span className="current-price theme-gradient">$60.50</span>
                    <span className="off-price">$110.50</span>
                  </div>
                  <div className="addto-cart-btn mt--20">
                    <a
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="cart.html"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Add To Cart</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right" />
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Single Product  */}
        </div>
      </div>
    </div>
  );
};

export default Product;
