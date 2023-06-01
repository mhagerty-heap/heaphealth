import React from "react";
import { useState } from 'react';

const AppointmentForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState("");
  const [doctor, setDoctor] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(services);
    console.log(doctor);
    console.log(age);
  };

  const handleDoctorSelectChange = (event) => {
    setDoctor(event.target.value)
  }

  const handleServicesSelectChange = (event) => {
    setServices(event.target.value)
  }

  return (
    <>
      <div className="appointment-area-two ptb-100">
        <div className="container">
          <div className="row align-items-center appointment-wrap-two">
            <div className="col-lg-7">
              <div className="appointment-item appointment-item-two">
                <div className="appointment-shape">
                  <img src="/images/hart-img1.png" alt="Shape" />
                </div>

                <h2>Book your appointment</h2>
                <span>We will confirm your appointment within 2 hours</span>

                <div className="appointment-form">
                  <form id="appointmentForm" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-business-man-alt-1"></i>
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-message"></i>
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-ui-call"></i>
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>Services</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            value={services}
                            onChange={handleServicesSelectChange}
                          >
                            <option>Choose Your Service</option>
                            <option>Cardiology</option>
                            <option>Family Medicine</option>
                            <option>Neurology</option>
                            <option>Internal Medicine</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-doctor"></i>
                          <label>Doctor</label>
                          <select
                            className="form-control"
                            id="exampleFormControlSelect2"
                            value={doctor}
                            onChange={handleDoctorSelectChange}
                          >
                            <option>Choose Your Doctor</option>
                            <option>Dr. Sarah Fields</option>
                            <option>Dr. Allen Smith</option>
                            <option>Dr. Nick Riviera</option>
                            <option>Dr. Mackenzie Smith</option>
                            <option>Dr. April Backer</option>
                            <option>Dr. Jason Macham</option>
                            <option>Dr. John Fullbright</option>
                            <option>Dr. Shania Warne</option>
                            <option>Dr. Luis Moris</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-business-man"></i>
                          <label>Age</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn appointment-btn">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="appointment-item-two-right">
                <div className="appointment-item-content">
                  <h2>Working Hours</h2>
                  <ul>
                    <li>
                      Monday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Tuesday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Wednesday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Thursday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Friday <span>9:00 AM - 8:00 PM</span>
                    </li>
                    <li>
                      Saturday <span>9:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
