import React from "react";
import { useState } from 'react';

const NewsletterForm = () => {

const [email, setEmail] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  var currentDateAndTime = new Date().toLocaleString();
  if(email !== null) {
    window.heap.identify(email);
    heap.track('Newsletter', {NewsletterSignUpDate: currentDateAndTime})
  }
};
  return (
    <>
      <div className="newsletter-area ptb-100">
        <div className="container">
          <div className="row newsletter-wrap align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-item">
                <h2>Join Our Newsletter</h2>
                <p>
                  Stay up-to-date and informed with BiosOne's newsletter!
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-item">
                <div className="newsletter-form">
                  <form className="newsletter-form" id="newsletterForm" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      name="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <button className="btn newsletter-btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
