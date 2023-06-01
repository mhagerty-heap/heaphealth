import React from "react";
import Link from "next/link";
import { useState } from 'react';

const Footer = () => {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const currentYear = new Date().getFullYear();

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var currentDateAndTime = new Date().toLocaleString();
    heap.track('Feedback', {FeedbackMessage: message, FeedbackDate: currentDateAndTime})
  };



  return (
    <>
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:info@biosone.com">info@biosone.com</a>
                      <a href="mailto:hello@biosone.com">hello@biosone.com</a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+07554332322">Call: (888) 123-1234</a>
                      <a href="tel:+236256256365">Call: (888) 123-1234</a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      225 Bush Street, San Francisco, CA 94104 USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link href="/doctors">Doctors</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-feedback">
                  <h3>Feedback</h3>
                  <form id="feedbackForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="your_message"
                        value={message}
                        onChange={handleMessageChange}
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="text-left">
                      <button type="submit" className="btn feedback-btn">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Design & Developed by{" "} Heap
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
