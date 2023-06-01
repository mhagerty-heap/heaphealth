import React from "react";
import Link from "next/link";

const OurExpertise = () => {
  return (
    <>
      <div className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Expertise</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">

                      <div className="expertise-inner">
                        <i className="icofont-doctor-alt"></i>
                        <h3>Cardiology</h3>
                        <p>
                          Health care for disorders of the heart and the cardiovascular system
                        </p>
                      </div>

                  </div>
                  <div className="col-sm-6 col-lg-6">

                      <div className="expertise-inner">
                        <i className="icofont-stretcher"></i>
                        <h3>Family Medicine</h3>
                        <p>
                          Provide continuing and comprehensive health care for the individual and their family
                        </p>
                      </div>

                  </div>
                  <div className="col-sm-6 col-lg-6">

                      <div className="expertise-inner">
                        <i className="icofont-network"></i>
                        <h3>Neurology</h3>
                        <p>
                          Diagnosis and treatment of all categories of conditions and disease involving the brain
                        </p>
                      </div>

                  </div>
                  <div className="col-sm-6 col-lg-6">

                      <div className="expertise-inner">
                        <i className="icofont-ambulance-cross"></i>
                        <h3>Internal Medicine</h3>
                        <p>
                          Medical specialty dealing with the prevention, diagnosis, and treatment of internal diseases.
                        </p>
                      </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <img src="/images/about4.jpg" alt="Expertise" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
