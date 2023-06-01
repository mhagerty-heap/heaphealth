import React from "react";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <div className="container">
          <div className="services-details-img">
            <img src="/images/service-details-bg.jpg" alt="Service Details" />

            <h2>Our Hospital Always Provide Good Services</h2>
            <p>
Our team of renowned doctors and specialists is dedicated to providing exceptional care, ensuring that every patient receives the highest standard of medical attention tailored to their specific needs. From routine check-ups to complex procedures, we prioritize the individual, fostering a trusted doctor-patient relationship built on open communication, empathy, and mutual respect. Our on-site pharmacy ensures convenient access to medications, while our emergency dental care services provide immediate relief for oral health emergencies. With specialties in cardiology and neurology, we offer advanced diagnostics, treatments, and ongoing management for cardiovascular and neurological conditions. Additionally, our ambulance care services ensure swift and efficient transportation during medical emergencies. At BiosOne Hospital, your health and well-being are our top priorities, and we are committed to delivering exceptional healthcare services with utmost compassion and expertise.
            </p>

            <blockquote>
              <i className="icofont-quote-left"></i>
BiosOne Hospital has exceeded all my expectations in providing exceptional healthcare services. From the moment I walked in, I felt genuinely cared for and understood. The expertise and compassion of their doctors and staff are unmatched, ensuring that I received the best possible treatment tailored to my unique needs. Whether it was their attentive 1:1 care, prompt emergency response, or their comprehensive range of medical specialties, BiosOne Hospital has truly been a beacon of hope and healing for me. I am forever grateful for their unwavering dedication to my well-being and the positive impact they have made in my life.
            </blockquote>

          </div>

          <div className="row">
            <div className="col-lg-5">
              <div className="service-details-inner-left">
                <img src="/images/signup-bg.jpg" alt="Service" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="service-details-inner">
                <h2>We Always Take Care Our Patients</h2>
                <p>
                  At BiosOne Hospital, patient care is our unwavering priority. We believe that each individual who walks through our doors deserves the highest standard of care, compassion, and respect. From the moment you enter our facility, you will experience a patient-centered approach that places your well-being at the forefront of everything we do.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
