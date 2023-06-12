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
    //event.preventDefault();
    var currentDateAndTime = new Date().toLocaleString();
    if(email !== null) {
      window.heap.identify(email);
      heap.track('Appointment', {AppointmentName: name, AppointmentServices: services, AppointmentDoctor: doctor, AppointmentAge: age, AppointmentDate: currentDateAndTime})
    }
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
              <div id="appointmentDiv" className="appointment-item appointment-item-two">
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
                            id="patientName"
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
                            id="email"
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
                            id="phone"
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-hospital"></i>
                          <label>Services</label>
                          <select
                            className="form-control"
                            id="services"
                            value={services}
                            onChange={handleServicesSelectChange}
                          >
                            <option>Choose Your Service</option>
                            <option id="cardiologyOption">Cardiology</option>
                            <option id="familyMedicineOption">Family Medicine</option>
                            <option id="neurologyOption">Neurology</option>
                            <option id="internalMedicineOption">Internal Medicine</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <i className="icofont-doctor"></i>
                          <label>Doctor</label>
                          <select
                            className="form-control"
                            id="doctor"
                            value={doctor}
                            onChange={handleDoctorSelectChange}
                          >
                            <option>Choose Your Doctor</option>
                            <option id="sarahFieldsOption">Dr. Sarah Fields</option>
                            <option id="allenSmithOption">Dr. Allen Smith</option>
                            <option id="niceRivieraOption">Dr. Nick Riviera</option>
                            <option id="mackenzieSmithOption">Dr. Mackenzie Smith</option>
                            <option id="aprilBackerOption">Dr. April Backer</option>
                            <option id="jasonMachamOption">Dr. Jason Macham</option>
                            <option id="johnFullBrightOption">Dr. John Fullbright</option>
                            <option id="shaniaWarneOption">Dr. Shania Warne</option>
                            <option id="luisMorisOption">Dr. Luis Moris</option>
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
                            id="age"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn appointment-btn" id="submitButton">
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
