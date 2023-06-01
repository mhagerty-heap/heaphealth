import React from "react";

const AboutContent = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about1.jpg" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>About Our Hospital</h2>
                <p>
                  BiosOne operates a state-of-the-art hospital that integrates cutting-edge technology and compassionate care to deliver exceptional medical services to patients.{" "}
                </p>
                <ul>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Browse our Website to learn more
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Find Doctors that meet your requirements
                  </li>
                  <li>
                    <i className="icofont-check-circled"></i>
                    Create Appointments
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

export default AboutContent;
