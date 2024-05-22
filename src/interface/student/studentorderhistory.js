import React from "react";
import { Link } from "react-router-dom";

const Studentorderhistory = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Student Reviews - Online Courses &amp;</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      
                <div className="col-lg-9">
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Order History</h4>
                      </div>
                      <div className="rbt-dashboard-table table-responsive mobile-table-750">
                        <table className="rbt-table table table-borderless">
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Course Name</th>
                              <th>Date</th>
                              <th>Price</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>{/* Table rows */}</tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
      
  );
};

export default Studentorderhistory;
