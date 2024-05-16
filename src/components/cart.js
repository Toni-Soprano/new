import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [coursePrice, setCoursePrice] = useState(100); // Default price, will be updated by API
  const [course, setCourse] = useState(null);

  useEffect(() => {
    // Fetch course details from the API
    const fetchCourse = async () => {
      try {
        const response = await axios.get("YOUR_API_ENDPOINT/course/1"); // Replace with your actual API endpoint
        const courseData = response.data;
        setCourse(courseData);
        setCoursePrice(courseData.price);
      } catch (error) {
        console.error("Error fetching course details", error);
      }
    };

    fetchCourse();
  }, []);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 1 : newQuantity); // Ensure quantity is a valid number
  };

  const calculateTotal = () => {
    return coursePrice * quantity;
  };

  const handleUpdateCart = async () => {
    try {
      const response = await axios.put("YOUR_API_ENDPOINT/cart", {
        courseId: course.id,
        quantity,
      });
      console.log("Cart updated successfully", response.data);
    } catch (error) {
      console.error("Error updating cart", error);
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Cart - Online Courses &amp; Education Bootstrap5 Template</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="assets/images/favicon.png"
      />
      <div className="rbt-cart-area bg-color-white rbt-section-gap">
        <div className="cart_area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  {/* Cart Table */}
                  <div className="cart-table table-responsive mb--60">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Image</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                          <th className="pro-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {course && (
                          <tr>
                            <td className="pro-thumbnail">
                              <a href="#">
                                <img
                                  src={course.image} // Replace with actual image URL from the API
                                  alt="Product"
                                />
                              </a>
                            </td>
                            <td className="pro-title">
                              <a href="#">{course.name}</a>{" "}
                              {/* Replace with actual course name from the API */}
                            </td>
                            <td className="pro-price">
                              <span>${coursePrice.toFixed(2)}</span>
                            </td>
                            <td className="pro-quantity">
                              <div className="pro-qty">
                                <input
                                  type="number"
                                  value={quantity}
                                  min={1}
                                  onChange={handleQuantityChange}
                                />
                              </div>
                            </td>
                            <td className="pro-subtotal">
                              <span>${calculateTotal().toFixed(2)}</span>
                            </td>
                            <td className="pro-remove">
                              <a href="#">
                                <i className="feather-x" />
                              </a>
                            </td>
                          </tr>
                        )}
                        {/* Add more items as needed */}
                      </tbody>
                    </table>
                  </div>
                </form>
                <div className="row g-5">
                  <div className="col-lg-6 col-12"></div>
                  {/* Cart Summary */}
                  <div className="col-lg-5 offset-lg-1 col-12">
                    <div className="cart-summary">
                      <div className="cart-summary-wrap">
                        <div className="section-title text-start">
                          <h4 className="title mb--30">Cart Summary</h4>
                        </div>
                        <h2>
                          Grand Total{" "}
                          <span>${calculateTotal().toFixed(2)}</span>
                        </h2>
                      </div>
                      <div className="cart-submit-btn-group">
                        <div className="single-button w-50">
                          <a
                            href="/checkout"
                            className="rbt-btn btn-gradient rbt-switch-btn rbt-switch-y w-100"
                          >
                            <span data-text="Checkout">Checkout</span>
                          </a>
                        </div>
                        <div className="single-button w-50">
                          <button
                            className="rbt-btn rbt-switch-btn rbt-switch-y w-100 btn-border"
                            onClick={handleUpdateCart}
                          >
                            <span data-text="Update Cart">Update Cart</span>
                          </button>
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

export default Cart;
