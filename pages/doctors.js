import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";

const Doctors = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Meet Our Qualified Doctors"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Doctors"
        bgImage="page-title-five"
      />

      <div className="doctor-search-area">
        <div className="container">
          <form>
            <div className="row doctor-search-wrap">
              <div className="col-sm-6 col-lg-6">
                <div className="doctor-search-item">
                  <div className="form-group">
                    <i className="icofont-doctor-alt"></i>
                    <label>Search</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Doctor Name"
                    />
                  </div>
                  <button type="submit" className="btn doctor-search-btn">
                    <i className="icofont-search-1"></i>
                  </button>
                </div>
              </div>

              <div className="col-sm-6 col-lg-6">
                <div className="doctor-search-item">
                  <div className="form-group">
                    <i className="icofont-hospital"></i>
                    <label>Category</label>
                    <select className="form-control">
                      <option>Neurology</option>
                      <option>Cardiology</option>
                      <option>Internal Medicine</option>
                      <option>Family Medicine</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="doctors-area doctors-area-two pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor1.jpg" alt="Doctor" />

                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Sarah Fields</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor2.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Allen Smith</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor3.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Nick Riviera</Link>
                  </h3>
                  <span>Neurosurgeon</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor4.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Mackenzie Smith</Link>
                  </h3>
                  <span>Cardiology</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor5.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. April Backer</Link>
                  </h3>
                  <span>Cardiology</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor6.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Jason Macham</Link>
                  </h3>
                  <span>Cardiology</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor7.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. John Fullbright</Link>
                  </h3>
                  <span>Internal Medicine</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor8.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Shania Warne</Link>
                  </h3>
                  <span>Family Medicine</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor9.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/doctor-details">Dr. Luis Moris</Link>
                  </h3>
                  <span>Family Medicine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Doctors;
