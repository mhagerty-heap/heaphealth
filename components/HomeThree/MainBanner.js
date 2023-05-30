import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div className="banner-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="banner-item">
                <h1>Your Healthy Life is Our First Priority</h1>
                <p>
                  With its advanced technology, BiosOne aims to revolutionize the healthcare industry by empowering individuals to take control of their well-being and make informed decisions for a healthier life.{" "}
                </p>

                <div className="common-btn-two">
                  <Link id="homepageGetAppointmentLink" href="/appointment">Book Appointment</Link>
                  <Link href="/about" className="cmn-btn-right-two">
                    Learn More
                  </Link>
                </div>

                <div className="banner-right">
                  <img
                    src="/images/home-three/home-three-banner1.png"
                    alt="Banner"
                  />
                  <img
                    src="/images/home-three/home-three-banner-shape2.png"
                    alt="Banner"
                  />
                  <img
                    src="/images/home-three/home-three-banner-shape2.png"
                    alt="Banner"
                  />
                  <img src="/images/about-shape1.png" alt="Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="heart-shape">
          <img src="/images/heart-graph.png" alt="Banner" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
