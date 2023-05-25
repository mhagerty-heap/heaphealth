import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.963877264169!2d-122.40412692366242!3d37.79088631123108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806f937e666d%3A0xdba83743068dd900!2s225%20Bush%20Street%2C%20San%20Francisco%2C%20CA%2094104!5e0!3m2!1sen!2sus!4v1685024063691!5m2!1sen!2sus"
          height="550"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
