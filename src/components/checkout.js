import React, { useState, useEffect } from "react";

import axios from "axios";
const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    createAccount: false,
    shipToDifferentAddress: false,
    paymentMethod: "check",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("YOUR_API_ENDPOINT", formData);
      console.log("Order placed successfully", response.data);
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Checkout - Online Courses &amp;</title>
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="" />
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
      <div className="checkout_area bg-color-white rbt-section-gap">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row g-5 checkout-form">
              <div className="col-lg-7">
                <div className="checkout-content-wrapper">
                  {/* Billing Address */}
                  <div id="billing-form">
                    <h4 className="checkout-title">Billing Address</h4>
                    <div className="row">
                      {[
                        {
                          label: "First Name",
                          name: "firstName",
                          type: "text",
                        },
                        { label: "Last Name", name: "lastName", type: "text" },
                        {
                          label: "Email Address",
                          name: "email",
                          type: "email",
                        },
                        { label: "Phone no", name: "phone", type: "text" },
                        {
                          label: "Company Name",
                          name: "companyName",
                          type: "text",
                        },
                        {
                          label: "Address line 1",
                          name: "address1",
                          type: "text",
                        },
                        {
                          label: "Address line 2",
                          name: "address2",
                          type: "text",
                        },
                        { label: "Country", name: "country", type: "text" },
                        { label: "Town/City", name: "city", type: "text" },
                        { label: "State", name: "state", type: "text" },
                        { label: "Zip Code", name: "zip", type: "text" },
                      ].map((field) => (
                        <div
                          className="col-md-6 col-12 mb--20"
                          key={field.name}
                        >
                          <label>{field.label}*</label>
                          <input
                            type={field.type}
                            name={field.name}
                            placeholder={field.label}
                            value={formData[field.name]}
                            onChange={handleChange}
                          />
                        </div>
                      ))}
                      <div className="col-12 mb--20">
                        <div className="check-box">
                          <input
                            type="checkbox"
                            id="create_account"
                            name="createAccount"
                            checked={formData.createAccount}
                            onChange={handleChange}
                          />
                          <label htmlFor="create_account">
                            Create an Account?
                          </label>
                        </div>
                        <div className="check-box">
                          <input
                            type="checkbox"
                            id="shiping_address"
                            name="shipToDifferentAddress"
                            checked={formData.shipToDifferentAddress}
                            onChange={handleChange}
                          />
                          <label htmlFor="shiping_address">
                            Ship to Different Address
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Shipping Address */}
                  {formData.shipToDifferentAddress && (
                    <div id="shipping-form" className="mt--20">
                      <h4 className="checkout-title">Shipping Address</h4>
                      <div className="row g-5">
                        {[
                          {
                            label: "First Name",
                            name: "firstName",
                            type: "text",
                          },
                          {
                            label: "Last Name",
                            name: "lastName",
                            type: "text",
                          },
                          {
                            label: "Email Address",
                            name: "email",
                            type: "email",
                          },
                          { label: "Phone no", name: "phone", type: "text" },
                          {
                            label: "Company Name",
                            name: "companyName",
                            type: "text",
                          },
                          {
                            label: "Address line 1",
                            name: "address1",
                            type: "text",
                          },
                          {
                            label: "Address line 2",
                            name: "address2",
                            type: "text",
                          },
                          { label: "Town/City", name: "city", type: "text" },
                          { label: "State", name: "state", type: "text" },
                        ].map((field) => (
                          <div
                            className="col-md-6 col-12 mb--20"
                            key={field.name}
                          >
                            <label>{field.label}*</label>
                            <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.label}
                              value={formData[field.name]}
                              onChange={handleChange}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row pl--50 pl_md--0 pl_sm--0">
                  {/* Cart Total */}
                  <div className="col-12 mb--60">
                    <h4 className="checkout-title">Cart Total</h4>
                    <div className="checkout-cart-total">
                      <h4>
                        Product <span>Total</span>
                      </h4>
                      <ul>
                        <li>
                          Roxxe Headphone Z 75 X 01 <span>$110.00</span>
                        </li>
                      </ul>
                      <p>
                        Sub Total <span>$1250.00</span>
                      </p>
                      <p>
                        Shipping Fee <span>$00.00</span>
                      </p>
                      <h4 className="mt--30">
                        Grand Total <span>$1250.00</span>
                      </h4>
                    </div>
                  </div>
                  {/* Payment Method */}
                  <div className="col-12 mb--60">
                    <h4 className="checkout-title">Payment Method</h4>
                    <div className="checkout-payment-method">
                      {[
                        { label: "Check Payment", value: "check" },
                        { label: "Direct Bank Transfer", value: "bank" },
                        { label: "Cash on Delivery", value: "cash" },
                        { label: "Paypal", value: "paypal" },
                        { label: "Payoneer", value: "payoneer" },
                      ].map((method) => (
                        <div className="single-method" key={method.value}>
                          <input
                            type="radio"
                            id={`payment_${method.value}`}
                            name="paymentMethod"
                            value={method.value}
                            checked={formData.paymentMethod === method.value}
                            onChange={handleChange}
                          />
                          <label htmlFor={`payment_${method.value}`}>
                            {method.label}
                          </label>
                          <p data-method={method.value}>
                            Please send a Check to Store name with Store Street,
                            Store Town, Store State, Store Postcode, Store
                            Country.
                          </p>
                        </div>
                      ))}
                      <div className="single-method">
                        <input
                          type="checkbox"
                          id="accept_terms"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleChange}
                        />
                        <label htmlFor="accept_terms">
                          I’ve read and accept the terms &amp; conditions
                        </label>
                      </div>
                    </div>
                    <div className="plceholder-button mt--50">
                      <button
                        className="rbt-btn btn-gradient hover-icon-reverse"
                        type="submit"
                      >
                        <span className="icon-reverse-wrapper">
                          <span className="btn-text">Place order</span>
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
                  <div className="col-12 mb--30">
                    <a
                      href="cart.html"
                      className="rbt-btn link-btn bg-primary-opacity"
                    >
                      Return to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
