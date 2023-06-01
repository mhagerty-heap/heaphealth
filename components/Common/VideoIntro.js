import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const VideoIntro = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="video-wrap">
        <Tabs>
          <TabPanel>
            <div className="video-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">

                      <div className="video-content">
                        <h3>Hospital Introduction</h3>
                        <p>
                          At BiosOne Hospital, we take great pride in providing exceptional healthcare services that go beyond the ordinary. Our commitment to excellence, combined with a deep sense of compassion, sets us apart as a leading healthcare institution.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="video-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">

                      <div className="video-content">
                        <h3>About Our Pharmacy</h3>
                        <p>
                          BiosOne Hospital's in-house pharmacy stands as a testament to our commitment to comprehensive and convenient healthcare, providing an exceptional level of service, expertise, and personalized care to our patients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="video-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">

                      <div className="video-content">
                        <h3>Our reasearch center and lab</h3>
                        <p>
                          BiosOne Hospital's state-of-the-art research center and laboratory are at the forefront of medical innovation, fostering groundbreaking discoveries and advancements in healthcare that have the potential to revolutionize patient care and improve lives worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="video-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">

                      <div className="video-content">
                        <h3>CCU & ICU</h3>
                        <p>
                          At BiosOne Hospital, our CCU (Critical Care Unit) and ICU (Intensive Care Unit) represent the pinnacle of advanced medical care, where every aspect of patient well-being is meticulously prioritized.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="video-area">
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="video-item">

                      <div className="video-content">
                        <h3>Our Doctors</h3>
                        <p>
                          BiosOne Hospital boasts a team of doctors who are the epitome of expertise and compassion. Each physician at BiosOne is not only highly skilled and extensively trained in their respective fields but also driven by a genuine passion for improving the lives of their patients.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabList>
            <Tab>Hospital Introduction</Tab>
            <Tab>Pharmacy</Tab>
            <Tab>Reasearch & Lab</Tab>
            <Tab>CCU & ICU</Tab>
            <Tab>Doctors</Tab>
          </TabList>
        </Tabs>
      </div>

      {/* If you want to change the video need to update videoID */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="A_ACKp_OvFk"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default VideoIntro;
