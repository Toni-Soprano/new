import React from "react";

const Checkout = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>
        Checkout - Online Courses &amp; Education Bootstrap5 Template
      </title>
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
      <div className="checkout_area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row g-5 checkout-form">
            <div className="col-lg-7">
              <div className="checkout-content-wrapper">
                {/* Billing Address */}
                <div id="billing-form">
                  <h4 className="checkout-title">Billing Address</h4>
                  <div className="row">
                    <div className="col-md-6 col-12 mb--20">
                      <label>First Name*</label>
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-6 col-12 mb--20">
                      <label>Last Name*</label>
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6 col-12 mb--20">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-md-6 col-12 mb--20">
                      <label>Phone no*</label>
                      <input type="text" placeholder="Phone number" />
                    </div>
                    <div className="col-12 mb--20">
                      <label>Company Name</label>
                      <input type="text" placeholder="Company Name" />
                    </div>
                    <div className="col-12 mb--20">
                      <label>Address*</label>
                      <input type="text" placeholder="Address line 1" />
                      <input type="text" placeholder="Address line 2" />
                    </div>
                    <div className="col-md-6 col-12 mb--20">
                      <label>Country*</label>
                      <div className="rbt-modern-select bg-transparent height-45">
                        <select className="w-100">
                          <option>Dhaka</option>
                          <option>Barisal</option>
                          <option>Khulna</option>
                          <option>Comilla</option>
                          <option>Chittagong</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-12 mb--20">
                      <label>Town/City*</label>
                      <input type="text" placeholder="Town/City" />
                    </div>
                    <div className="col-md-6 col-12 mb--20">
                      <label>State*</label>
                      <input type="text" placeholder="State" />
                    </div>
                    <div className="col-md-6 col-12 mb--20">
                      <label>Zip Code*</label>
                      <input type="text" placeholder="Zip Code" />
                    </div>
                    <div className="col-12 mb--20">
                      <div className="check-box">
                        <input type="checkbox" id="create_account" />
                        <label htmlFor="create_account">
                          Create an Acount?
                        </label>
                      </div>
                      <div className="check-box">
                        <input
                          type="checkbox"
                          id="shiping_address"
                          data-shipping
                        />
                        <label htmlFor="shiping_address">
                          Ship to Different Address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shipping Address */}
                <div id="shipping-form" className="mt--20">
                  <h4 className="checkout-title">Shipping Address</h4>
                  <div className="row g-5">
                    <div className="col-md-6 col-12">
                      <label>First Name*</label>
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Last Name*</label>
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Phone no*</label>
                      <input type="text" placeholder="Phone number" />
                    </div>
                    <div className="col-12">
                      <label>Company Name</label>
                      <input type="text" placeholder="Company Name" />
                    </div>
                    <div className="col-12">
                      <label>Address*</label>
                      <input type="text" placeholder="Address line 1" />
                      <input type="text" placeholder="Address line 2" />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Country*</label>
                      <div className="rbt-modern-select bg-transparent height-45">
                        <select className="w-100">
                          <option>Dhaka</option>
                          <option>Barisal</option>
                          <option>Khulna</option>
                          <option>Comilla</option>
                          <option>Chittagong</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Town/City*</label>
                      <input type="text" placeholder="Town/City" />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>State*</label>
                      <input type="text" placeholder="State" />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Zip Code*</label>
                      <input type="text" placeholder="Zip Code" />
                    </div>
                  </div>
                </div>
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
                        Samsome Notebook Pro 5 X 01 <span>$295.00</span>
                      </li>
                      <li>
                        Aquet Drone D 420 X 02 <span>$550.00</span>
                      </li>
                      <li>
                        Play Station X 22 X 01 <span>$295.00</span>
                      </li>
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
                    <div className="single-method">
                      <input
                        type="radio"
                        id="payment_check"
                        name="payment-method"
                        defaultValue="check"
                      />
                      <label htmlFor="payment_check">Check Payment</label>
                      <p data-method="check">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </p>
                    </div>
                    <div className="single-method">
                      <input
                        type="radio"
                        id="payment_bank"
                        name="payment-method"
                        defaultValue="bank"
                      />
                      <label htmlFor="payment_bank">Direct Bank Transfer</label>
                      <p data-method="bank">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </p>
                    </div>
                    <div className="single-method">
                      <input
                        type="radio"
                        id="payment_cash"
                        name="payment-method"
                        defaultValue="cash"
                      />
                      <label htmlFor="payment_cash">Cash on Delivery</label>
                      <p data-method="cash">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </p>
                    </div>
                    <div className="single-method">
                      <input
                        type="radio"
                        id="payment_paypal"
                        name="payment-method"
                        defaultValue="paypal"
                      />
                      <label htmlFor="payment_paypal">Paypal</label>
                      <p data-method="paypal">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </p>
                    </div>
                    <div className="single-method">
                      <input
                        type="radio"
                        id="payment_payoneer"
                        name="payment-method"
                        defaultValue="payoneer"
                      />
                      <label htmlFor="payment_payoneer">Payoneer</label>
                      <p data-method="payoneer">
                        Please send a Check to Store name with Store Street,
                        Store Town, Store State, Store Postcode, Store Country.
                      </p>
                    </div>
                    <div className="single-method">
                      <input type="checkbox" id="accept_terms" />
                      <label htmlFor="accept_terms">
                        I’ve read and accept the terms &amp; conditions
                      </label>
                    </div>
                  </div>
                  <div className="plceholder-button mt--50">
                    <button className="rbt-btn btn-gradient hover-icon-reverse">
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
export default Checkout;