import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="welcome-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 pl-0">
              <div className="welcome-item welcome-left welcome-left-two">
                <img src="/images/about3.jpg" alt="Welcome" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="welcome-item welcome-right">
                <div className="section-title-two">
                  <span>About Us</span>
                  <h2>Why you choose our hospital</h2>
                </div>
                <ul>
                  <li>
                    <i className="icofont-doctor-alt"></i>
                    <div className="welcome-inner">
                      <h3>Certified Doctors</h3>
                      <p>
                        Certified Doctors with years of practice will professionally handle your care.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-stretcher"></i>
                    <div className="welcome-inner">
                      <h3>Emergency 24 hours</h3>
                      <p>
                        Emergencies happen, and we're here 24 hours a day to assit you during your critical stay.
                      </p>
                    </div>
                  </li>
                  <li>
                    <i className="icofont-network"></i>
                    <div className="welcome-inner">
                      <h3>Modern Technology</h3>
                      <p>
                        BiosOne prides itself on using only the most effective and modern technology for its patients.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
