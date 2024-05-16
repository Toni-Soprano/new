import React from "react";
import Product from "../components/product.js";

const Products = () => {
  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Shop - Online Courses &amp; </title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/images/favicon.png"
        />
        {/* Start Header Area */}

        {/* Start Side Vav */}

        {/* End Side Vav */}
        <a className="close_side_menu" href="javascript:void(0);" />
        <div className="rbt-page-banner-wrapper">
          {/* Start Banner BG Image  */}
          <div className="rbt-banner-image" />
          {/* End Banner BG Image  */}
          <div className="rbt-banner-content">
            {/* Start Banner Content Top  */}
            <div className="rbt-banner-content-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* Start Breadcrumb Area  */}
                    <ul className="page-list">
                      <li className="rbt-breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <div className="icon-right">
                          <i className="feather-chevron-right" />
                        </div>
                      </li>
                      <li className="rbt-breadcrumb-item active">
                        All Products
                      </li>
                    </ul>
                    {/* End Breadcrumb Area  */}
                    <div className=" title-wrapper">
                      <h1 className="title mb--0">All Products</h1>
                      <a href="#" className="rbt-badge-2">
                        <div className="image">🎉</div> 50 Products
                      </a>
                    </div>
                    <p className="description">
                      Products that help beginner designers become true
                      unicorns.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Banner Content Top  */}
            <div className="rbt-course-top-wrapper mt--40">
              <div className="container">
                <div className="row g-5 align-items-center">
                  <div className="col-lg-5 col-md-12">
                    <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                      <div className="rbt-short-item">
                        <span className="course-index">
                          Showing 1-9 of 19 results
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-12">
                    <div className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                      <div className="rbt-short-item">
                        <div className="filter-select">
                          <span className="select-label d-block">Short By</span>
                          <div className="filter-select rbt-modern-select search-by-category">
                            <select>
                              <option>Default</option>
                              <option>Latest</option>
                              <option>Popularity</option>
                              <option>Trending</option>
                              <option>Price: low to high</option>
                              <option>Price: high to low</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rbt-shop-area rbt-section-overlayping-top rbt-section-gapBottom">
          <div className="container">
            <div className="row g-5">
              {/* Here you can render the Product component */}
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
