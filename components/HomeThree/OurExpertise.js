import React from "react";

const OurExpertise = () => {
  return (
    <>
      <div className="speciality-area pb-100">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-7">
              <div className="speciality-left">
                <div className="section-title-two">
                  <span>Speciality</span>
                  <h2>Our Expertise</h2>
                </div>

                <div className="speciality-item">
                  <div className="row m-0">
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Cardiology</h3>
                        <p>
                           Health care for disorders of the heart and the cardiovascular system
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Family Medicine</h3>
                        <p>
                           Provide continuing and comprehensive health care for the individual and their family
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Neurology</h3>
                        <p>
                          Diagnosis and treatment of all categories of conditions and disease involving the brain, spinal cord, and peripheral nerves
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                      <div className="speciality-inner">
                        <i className="icofont-check-circled"></i>
                        <h3>Internal Medicine</h3>
                        <p>
                          Medical specialty dealing with the prevention, diagnosis, and treatment of internal diseases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 pr-0">
              <div className="speciality-item speciality-right">
                <img src="/images/about4.jpg" alt="Speciality" />

                <div className="speciality-emergency">
                  <div className="speciality-icon">
                    <i className="icofont-ui-call"></i>
                  </div>
                  <h3>Emergency Call</h3>
                  <p>(888) 123-1234</p>
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
