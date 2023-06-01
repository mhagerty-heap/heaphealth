import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="review-area ptb-100">
        <div className="container">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="feedback-slider"
          >
            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <img src="/images/clients/client1.png" alt="Feedback" />
                  <h3>Adision Smith</h3>
                </div>
                <p>
                  Choosing BiosOne Hospital for my medical needs was the best decision I ever made. The level of care and attention I received from the doctors and staff surpassed all my expectations.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <img src="/images/clients/client2.png" alt="Feedback" />
                  <h3>John Cena</h3>
                </div>
                <p>
                  BiosOne treated me with the utmost professionalism, kindness, and expertise, ensuring that every aspect of my health was addressed. Thanks to BiosOne, I feel confident, supported, and on the path to a healthier future.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <img src="/images/clients/client3.png" alt="Feedback" />
                  <h3>Mac Smith</h3>
                </div>
                <p>
                  I am eternally grateful for the exceptional care I received at BiosOne Hospital. From the moment I stepped through their doors, I was greeted with warmth, professionalism, and a level of compassion that went above and beyond my expectations.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <div className="client-img">
                  <img src="/images/clients/client4.png" alt="Feedback" />
                  <h3>Shane Watson</h3>
                </div>
                <p>
                  The expertise and dedication of the doctors and nurses who attended to me were truly remarkable. They not only treated my medical condition with precision and expertise but also took the time to listen, understand, and address my concerns.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
