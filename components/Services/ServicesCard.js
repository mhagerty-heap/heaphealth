import React from "react";
import Link from "next/link";

const ServicesCard = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-doctor"></i>
                  <Link href="/service-details">
                    <h3>Expert Doctors</h3>
                  </Link>
                  <p>
                    BiosOne employs Speciality-focused professionals to handle care.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-prescription"></i>
                  <Link href="/service-details">
                    <h3>1:1 Treatment</h3>
                  </Link>
                  <p>
                    BiosOne focused on the patient first, with one main point of contact
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-patient-file"></i>
                  <Link href="/service-details">
                    <h3>Family Medicine</h3>
                  </Link>
                  <p>
                    BiosOne provide comprehensive health care for you and your family
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-tooth"></i>
                  <Link href="/service-details">
                    <h3>Emergency Dental Care</h3>
                  </Link>
                  <p>
                    BiosOne is recognized as a world leader in emergency dental care.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-heart-beat-alt"></i>
                  <Link href="/service-details">
                    <h3>Cardiology</h3>
                  </Link>
                  <p>
                    BiosOne is renonwned for their care for disorders of the heart and the cardiovascular system
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-drug"></i>
                  <Link href="/service-details">
                    <h3>On-Site Prescriptions</h3>
                  </Link>
                  <p>
                    BiosOne manages an in-house pharmarcy fulfillment service with fast turnaround times.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-dna-alt-1"></i>
                  <Link href="/service-details">
                    <h3>Neurology</h3>
                  </Link>
                  <p>
                    BiosOne handles all conditions and disease involving the brain and spinal cord
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="service-item">
                <div className="service-front">
                  <i className="icofont-ambulance-cross"></i>
                  <Link href="/service-details">
                    <h3>Ambulance</h3>
                  </Link>
                  <p>
                    BiosOne can dispatch on-call ambulances 24x7, 365 days a year with a 100 mile radius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
